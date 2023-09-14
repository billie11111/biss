'use client'

import { styled } from "styled-components"
import IntroTitle from '../components/intro/introTitle';
import GyeryongLogo from '../components/common/contents/gyeryongLogo';
import EmotionRange from "../components/common/contents/emotionRange";
import LinkActionBtn from "../components/common/btn/linkActionBtn";

const Wrapper = styled.main`
  max-width: 800px;
  height: 100vh;
  margin: auto;
  padding: 3rem;
  display: grid;
  grid-template-rows: 10rem 30rem 40% auto;
`;

export default function Home() {
  return (  
   <Wrapper>
      <GyeryongLogo/>
      <IntroTitle/>
      <EmotionRange/>
      <LinkActionBtn title="CLICK" linkTo="/guide"/>
   </Wrapper>
  )
}
