'use client'

import { styled } from "styled-components"
import BellImage from "../components/common/contents/bellImage";
import TestGuideText from "../components/guide/testGuideText";
import Form from "../components/guide/form";

const Wrapper = styled.main`
  font-family: "Hancom Malang";
  font-weight: 700;
  max-width: 800px;
  margin: auto;
  padding: 6rem 6rem;
  display: grid;
  text-align: center;
`;

export default function Guide() {
  console.log(process.env.NEXT_PUBLIC_DATABASE_URL)
  return (
    <Wrapper>
      <h1 className="sr-only">테스트 안내사항과 테스트 문항 리스트 화면</h1>
      <BellImage />
      <TestGuideText />
      <Form />
    </Wrapper>
  )
}