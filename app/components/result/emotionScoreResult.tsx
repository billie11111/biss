'use client'

import { determineState } from "@/lib/libs";
import { styled } from "styled-components"

const Wrapper = styled.section`
  width: 600px;
  margin: auto;
  background-color: #bdf6f2;
  margin-bottom: 5rem;
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;


  .title {
    color: #333333;
    margin-bottom: 3rem;

    strong {
      font-size: 2.4rem;
      text-align: center;
      display: block;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 5.5rem;
      text-align: center;
    }
  }

  p {
      background-color: var(--color-white);
      border-radius: 1rem;
      width: 100%;
      padding: 3rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      font-size: 2rem;
      line-height: 1.5;
    }
`;

export default function EmotionScoreResult({score}:{
  score: number;
}){
  return (
    <Wrapper>
      <div className="title">
        <strong>당신의 감정점수</strong>
        <h2>{`${score}점`}</h2>
      </div>
      <p>{`${determineState(score)} : 감정 점수 타입에 대한 설명`}</p>
    </Wrapper>
  )
}