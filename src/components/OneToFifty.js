import Board from "./Board.js";
import React, { useState } from "react";
import styled from '@emotion/styled';
import Timer from './Timer';

let array = []; // 변수 array는 배열이다.
for (let i = 1; i <= 25; i++) { // i를 1~25 배열로 만든다.
  array.push(i);
}

export default function OneToFifty() { // onetofifty 함수를 만든다
  const [numbers, setNumbers] = useState(array); // numbers의 상태값 (기본:배열)
  const [gameOn, setGameOn] = useState(false); // gameOn의 상태값 (기본:f)
  const [current, setCurrent] = useState(1); // current의 상태값 (기본:1)

  const handleClick = num => { //handleClick 변수는 num을 인자로 넘긴다.
    if(num == current && gameOn) { // num이 현재 누른 횟수와 같고, 게임이 진행중인 상태일 때 
      if(num === 50) { // num이 50과 같으면
        alert("Success!"); // 성공 창을 띄운다
        endGame(); // 게임을 끝낸다
      }
      const index = numbers.indexOf(num); // 인덱스는 클릭수의 인덱스를 num으로 잡는다.
      setNumbers(numbers => [ //기본 배열의 상태값에 클릭횟수를 넣어 보낸다
        ...numbers.slice(0, index), // 0이란 배열에 인덱스를 다 넣는다
        num < 26 ? num + 25 : 0, // num이 26보다 작으면 숫자에 25를 추가한다. 아니면 0
        ...numbers.slice(index + 1) // index 배열에 처음보다 1 많게 배열을 추가한다.
      ]);
      setCurrent(current => current + 1); // setCurrent를 실행시킨다 => current가 1씩 늘어난다. onetofifty()를 실행시킬 때마다. 
    }
  }

  const startGame = () => { //startGame을 실행시킨다
    setNumbers(shuffleArray(array)); // 배열을 shuffleArray 해서 랜덤 배열로 만든다.
    setCurrent(1); // 최초 클릭수는 1이다.
    setGameOn(true); // 시작하면 gameOn의 상태는 true가 된다.
  }

  const endGame = () => { // endGame을 실행시킨다.
    setGameOn(false); // endGame()을 실행시키면 gameOn의 상태는 false가 된다.
  }

  return (
    <Container>
      <Board numbers={numbers} handleClick={handleClick} /> 
      {/* Board.js에 numbers 의 상태를 넘기고 handleClick 함수를 넘긴다. */}
      {gameOn ? (
        // 게임 중 이라는 상태값을 가져와 삼항연산자 사용 
        <Timer /> // 게임 중이면 Timer 컴포넌트 불러오기
      ) : (
        <StartButton onClick={startGame}>start</StartButton> // 게임 중이 아니면 클릭시 startGame을 실행시킬 버튼 생성
      )}
    </Container>
  );
};

const shuffleArray = array => { // array를 인자로 넘기는 변수
  for (let i = array.length - 1; i > 0; i--) { // i는 배열의 길이 - 1 (즉 배열과 같은 숫자)이고, 배열은 1~25까지 있고 후처리로 50을 만들어주는듯!! 
    let j = Math.floor(Math.random() * (i + 1)); // 아무튼 1~25까지 인덱스에 랜덤한 1~25 사이의 수를 부여해주는 식
    [array[i], array[j]] = [array[j], array[i]]; // 이하생략
  }
  return array; // 배열 반환
}


const Container = styled.div`
  width: 600px;
  height: 800px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  margin-bottom: 30px;
  width: 100px;
  height: 50px;
`;

