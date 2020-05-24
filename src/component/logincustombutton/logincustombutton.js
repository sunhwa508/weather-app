import React from "react";

import { CustomButtonContainer } from "./logincustombutton.styled";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
