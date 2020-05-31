

<h1>코드 리팩토링</h1>
<h2>DEMO : https://sunhwa508.github.io/weather-app </h2>
<div><center>
<img src="https://user-images.githubusercontent.com/61695175/83249227-3b21b600-a1e1-11ea-8ede-745554b26b07.png" width="200" height="400">
<img src="https://user-images.githubusercontent.com/61695175/83249327-61475600-a1e1-11ea-954c-743b3f1a77dd.png" width="200" height="auto">
<img src="https://user-images.githubusercontent.com/61695175/83249374-6efcdb80-a1e1-11ea-9293-798ea2bd2587.png" width="200" height="auto">
</div></center>

## ✔Branch 추가하기
코드를 리팩토링 하기 전, repository관리를 어떻하면 좋을까 생각중 git에 이러한 경우를 대비해 아주아주 요긴한 기능이 있다는것을 알았다, 같은 프로젝트에 Branch를 여러개 만들어 조금씩 차이가 있는 코드를 하나의 프로젝트(레파토리)안에 보관할수 있는 것이다

방법은 매우 간단했다.
![image](https://user-images.githubusercontent.com/61695175/83343798-0e34e680-a33a-11ea-8f8d-7c97ba4085df.png)<br/>
코드부분에 보면 Branch라는 탭이 보일것이다 이곳에 추가만하면, 끝 <br/>
다음은 VSC에서 브랜치만 전환하여 push해주면 이 둘은 같은 프로젝트 안에서 수정되고 있지만 따로 저장할 수 있어, 언제는<br/>
기존 코드를 다시 보며 새로 리팩토링랑 코드와 비교할 수 있다.<br/>
$ git checkout nameofbranch<br/>
주의해야 할 점은 push해줄때 기존에 쓰던 master이 아닌 꼭! 자신이 지정해준 branch 이름으로 push할 것!<br/>
만약 다시 master로 돌아가고싶으면 같은 방법으로 $git checkout master만 해주면 된다.<br/>



## ✔문제점 파악
<ol>
<li> apiurl/ apikey등은 main page, app.js가 아닌 다른 페이지에서 따로 관리한다.</li>
<li>중복 요소들 제거하기</li>
<li>노출이 우려되는 요소들은 상수화 처리하기.</li>
</ol>

## Getting Started

### ⛅1.apiurl/ apikey 관리 컴포넌트⛅

코드리뷰를 받은 후,, 내 코드는 내가 봐도 참 답이 없는 코드였다<br/>
쓸대없이 axios통신하는 컴포넌트가 3개, url과 내apiId다 이곳저곳에서 남발되고 있었던 것,<br/>
기업에서 우대하는 코드리뷰 경험이 뭘 뜻하듯이 새삼 깨달았다.<br/>
기능은 누구나 구현할 수 있다. <br/>
하지만 기업은 알 고 있엇다, 성능좋은, 유지보수가 편한 코드를 더 필요할것이란 것을..<br/>
<div>
]<img src="https://user-images.githubusercontent.com/61695175/83343730-15a7c000-a339-11ea-84bc-a157adf8775d.png" width="200" height="400">
<img src="https://user-images.githubusercontent.com/61695175/83343752-51428a00-a339-11ea-9c0f-4d1c9022af0f.png" width="200" height="400">
<img src="https://user-images.githubusercontent.com/61695175/83345005-1cd6ca00-a349-11ea-8669-f8e179c29b9c.png" width="200" height="400">

<div/>
기존 메인화면과 Search페이지에 따로따로 관리되던 axios와 중복되어 있던 url,
코드리뷰를 받던 중 이런식으로 코드를 짜면 노출에 굉장히 위헙하며 유지보수에도 아주 취약하다는 리뷰를 들었기에,
이부분으 따로 분리하여 하나의 컴포넌트에 담기로 하였다.

api.js 라는 명시적인..이름을 가진 js파일을 생성하였다
 이게 main.js와 add.js에 분리되어 있던 axios 통신 코드들을 한군데에 모을것이다 이렇게 🔥🔥
<code><pre>
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather/",
  params: {
    appid: "c4-----e53200",
    units: "metric",
  },
});

export const locationApi = {
  yourLocation: (longitude, latitude) =>
    api.get("/", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    }),
};

export const searchApi = {
  searchedApi: (input) =>
    api.get("/", {
      params: {
        q: input,
      },
    }),
};

export const detailApi = {
  detailApi: (cityId) =>
    api.get("/", {
      params: {
        id: cityId,
      },
    }),
};


</pre></code>

이렇게 api들을 한군데 모아두니 상대적으로 무겁게 돌아갈수 있는 axios들을 이곳저곳에서 import할 필요도 없고, 
유지보수하기도 간편하며, 코드가 더욱깔끔하고 알아보기 쉬워졌다.

🔐
<div>
 <img src="https://user-images.githubusercontent.com/61695175/83343934-b1d2c680-a33b-11ea-8b49-c0241a190ca9.png" width=auto height="200">
<img src="https://user-images.githubusercontent.com/61695175/83343940-c6af5a00-a33b-11ea-9c71-90349ae1ad6d.png" width=auto height="200">
<img src="https://user-images.githubusercontent.com/61695175/83345054-9a023f00-a349-11ea-8036-42c6d1cfce8f.png" width=auto height="200">

</div>

## ⛅2. 불필요한 중복요소 상수로 묶어 한꺼번에 처리하기⛅
**문제의 코드 발견
그때는 보이지 않았던, 이 코드의 문제점. 지금과 같이 간단히 10개 이하의 코드라면 ,, 몇초차이나지 않을것이다.<br/>
이러한 코드가 10,000있다고 상상해보자. 아이콘변경 문의가 온다면 아마 그날은 ctrl+c, ctrl+v를 하며 하루를 지샐것이다...😂<br/>

그래서 미리미리연습해두자, 불필요한 요소들 상수로 묶어 관리하기 theme같은 방법으로 말이다.

<code>

      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL">
          {theme === "light" ? "✿" : "🌚 "}
        </span>
        DETAIL
      </Link>

      {currentUser ? (
        <Link
          as="div"
          onClick={() => auth.signOut()}
          style={{ fontSize: "2rem" }}
          to="/"
        >
          <span role="img" aria-label="LOGIN">
            {theme === "light" ? "✿" : "🌚 "}
          </span>
          LOGOUT
        </Link>
      ) : (
        <Link to="/signin" style={{ fontSize: "2rem" }}>
          <span role="img" aria-label="LOGIN">
            {theme === "light" ? "✿" : "🌚 "}
          </span>
          LOGIN
        </Link>
      )}
    </StyledMenu>
</code>

간단히 기존에 darkmode를 구현하기 위해 생성해두었던 theme.js 에 icon을 하나 추가한다. 

<code><pre>

export const lightTheme = {
  body: "#ffc8c8",
  text: "#162447",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  mobile: "576px",
  Hover: "#d63447",
  icon: "🌤 ",
};

export const darkTheme = {
  body: "#444f5a",
  text: "#f4eeff",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  mobile: "576px",
  Hover: "#d63547",
  icon: "☁ ",
};
</pre></code>

이렇게 정의함으로써, 갯수와 제한없이 2초이내로 icon자리에 들어가는 모든 가능성들은 한번의 수정으로 전체를 다 바꿀 수 있게 되었다 ^^ <br />

<code><pre>

 const icon = theme === "light" ? lightTheme.icon : darkTheme.icon;
  return (
    <StyledMenu toggle={toggle}>
      <Link to="/" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="HOME">
          {icon}
        </span>
        HOME
      </Link>
      <Link to="/add" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="SEARCH">
          {icon}
        </span>
        SEARCH
      </Link>
      <Link to="/detail" style={{ fontSize: "2rem" }}>
        <span role="img" aria-label="DETAIL">
          {icon}
        </span>
        DETAIL
      </Link>
      {currentUser ? (
        <Link
          as="div"
          onClick={() => auth.signOut()}
          style={{ fontSize: "2rem" }}
          to="/"
        >
          <span role="img" aria-label="LOGIN">
            {icon}
          </span>
          LOGOUT
        </Link>
      ) : (
        <Link to="/signin" style={{ fontSize: "2rem" }}>
          <span role="img" aria-label="LOGIN">
            {icon}
          </span>
          LOGIN
        </Link>
      )}
    </StyledMenu>
</pre></code>
## ✔Acknowledgments
