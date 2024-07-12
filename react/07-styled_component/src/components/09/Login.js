import React from "react";
import Input from "./Input";
import styled from "styled-components";
import Icon from "./kakao.svg";
import { Link } from "react-router-dom";
import Button from "./Button";

const Iconimg = styled.img`
  width: 20px;
  height: 20px;
`;

const Serve = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const Text = styled.h1`
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
`;

const Label = styled.label`
  color: #e1c6f7;
`;

function Login(props) {
  return (
    <Container>
      <Serve>
        <Text>DW 온라인스쿨</Text>
        <span>회원이 아니신가요??</span>
        <Link>회원가입 하기</Link>
      </Serve>
      <form>
        <Label htmlFor="email">이메일</Label>
        <Input placeholder="sradw@DW.kr" id="email" />
        <Label htmlFor="password">비밀번호</Label>
        <Input placeholder="비밀번호" id="password" />
      </form>
      <Button $colorname $back $hoverColor>
        로그인 하기
      </Button>
      <Button>
        <Iconimg src={Icon} />
        카카오 로그인
      </Button>
    </Container>
  );
}

export default Login;
