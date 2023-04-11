import React from "react";
import styled from "@emotion/styled";
import Cell from "./Cell";

export default function Board({ numbers, handleClick }) { // numbers와 handleClick을 부모인 oneto...에서 얻어 인자로 넣는다.
  return (
    <Container>
      {numbers.map((num, index) => ( // 숫자들을 맵을 돌린다 반복해~
        <Cell num={num} key={index} handleClick={handleClick} /> // Cell에 받은 num, index, handleClick을 넘겨준다.
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;