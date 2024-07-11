import React from "react";
import Button from "./Button";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import Wrapper from "./Wrapper";
import Box from "./Box";
import Circle from "./Circle";
import Input from "./Input";

function HelloStyled(props) {
  return (
    <div>
      {/* <Button>Hello Styled!!</Button> */}
      <Wrapper>
        <Box bgColor="#cf6a87">
          <span>😁</span>
        </Box>
        <Box as="button" bgColor="#574b90" />
        <Circle bgColor="blue" />
      </Wrapper>
      <form>
        <Wrapper>
          <Input />
          <Input />
          <Input />
          <input type="text" required />
          <Button>제출</Button>
        </Wrapper>
      </form>
      <Wrapper>
        <Circle bgColor="yellow" />
      </Wrapper>
    </div>
  );
}

export default HelloStyled;
