import { styled } from "styled-components"

const Wrapper = styled.div`
  width: 80%;
  aspect-ratio: 300/77;
  margin: auto;
  background-image: url('/contents/content_intro.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;

export default function EmotionRange(){
  return (
      <Wrapper>
        <span className="sr-only">감정 범위 이미지</span>
      </Wrapper>
  )
}