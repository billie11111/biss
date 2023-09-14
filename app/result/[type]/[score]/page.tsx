'use client'

import LinkActionBtn from "@/app/components/common/btn/linkActionBtn";
import ActionTypeResult from "@/app/components/result/actionTypeResult";
import EmotionScoreResult from "@/app/components/result/emotionScoreResult";
import { styled } from "styled-components";

const Wrapper = styled.main`
  max-width: 800px;
  margin: auto;
  padding: 10rem 3rem;
  text-align: center;
`;

const Title = styled.div`
  font-family: var(--Hancom-malang-B);
  color: var(--color-darkgreen);
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 5vh;
`;

export default function Result({params}:{
    params : {
        type: string;
        score: number
    }
}){
  return (
    <Wrapper>
      <Title>
        <h1>당신의 테스트 결과는?</h1>
      </Title>
      <EmotionScoreResult score={params.score} />
      <ActionTypeResult type={decodeURI(params.type)} />
      <LinkActionBtn title="다시하기" linkTo="/" />
    </Wrapper>
  )
}