import React from "react";
import styled from "@emotion/styled";

export default function Cell({ num, handleClick }) { // board 에게서 받은 두 인자를 넣는다
  return(
    <Container onClick={() => handleClick(num)}>  
    {/* 컨테이너(셀)을 클릭하면 handleClick(num)이 실행된다. */}
      {num !== 0 ? num : null} 
      {/* num이 0이 아니면 num, 0이면 Null로 아무것도 나오지 않게 한다. */}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid gray;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;