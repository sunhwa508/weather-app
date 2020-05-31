

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

### ✔apiurl/ apikey 관리 컴포넌트
<div>
![image]<img src="https://user-images.githubusercontent.com/61695175/83343730-15a7c000-a339-11ea-84bc-a157adf8775d.png" width="200" height="400">
![image]<img src="https://user-images.githubusercontent.com/61695175/83343752-51428a00-a339-11ea-9c0f-4d1c9022af0f.png" width="200" height="400">
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

</pre></code>

이렇게 api들을 한군데 모아두니 상대적으로 무겁게 돌아갈수 있는 axios들을 이곳저곳에서 import할 필요도 없고, 
유지보수하기도 간편하며, 코드가 더욱깔끔하고 알아보기 쉬워졌다.

🔐
<div>
 <img src="https://user-images.githubusercontent.com/61695175/83343934-b1d2c680-a33b-11ea-8b49-c0241a190ca9.png" width=auto height="200">
<img src="https://user-images.githubusercontent.com/61695175/83343940-c6af5a00-a33b-11ea-9c71-90349ae1ad6d.png" width=auto height="200">
</div>

## ✔Acknowledgments



