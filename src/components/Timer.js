import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";

export default function Timer() { // Timer라는 함수 생성
  const [timeElapsed, setTimeElapsed] = useState(0);  //0을 기본값으로하는 상태 timeElapsed 생성
  const record = useRef(); // 기록?참조?하는건가본데...

  record.current = timeElapsed; // record의 현재는 이 상태값 0 

  useEffect(() => { // useEffect 사용(timer가 눌렸을때부터 렌더)
    const timer = setInterval(() => { // timer는 
      setTimeElapsed(timeElapsed => timeElapsed + 30); // setTimeElapsed를 실행하면 timeElapsed가 0에서 30이 더해져 30이 된다?
    }, 30);
    return () => {
      alert("Your Record :" + record.current / 1000); // record.current = 초:밀리초 
      clearInterval(timer);
    };
  }, []);
  return (
    <Container>
      <Front>{Math.floor(timeElapsed / 1000)}:</Front> 
      {/* 초 : */}
      <Back>{(timeElapsed % 1000) / 10}</Back>
      {/* 밀리초 */}
    </Container>
  );
}

const Container = styled.div` 
  margin-bottom: 34px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 4px;
  font-size: 24px;
  text-shadow: 0 0 10px #555;
`;

const Front = styled.div` 
  text-align: right;
`;

const Back = styled.div` 
  width: 1em;
`;