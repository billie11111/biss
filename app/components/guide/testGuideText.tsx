import { styled } from "styled-components"

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  p {
    color: var(--color-darkgreen);
    font-family: "Hancom Malang";
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1.5;
    margin-bottom: 4rem;
  }
`;

export default function TestGuideText(){
  return (
      <Wrapper>
          <p>본 설문지는 진스토리 코리아 주식회사에서 계룡 군문화 축제를 위해 제작된 설문지 입니다.</p>
          <p>해당 설문지는 내가 가지고 있는 스트레스를 파악하고 나의 마음을 챙기는 방법을 알아보기 위해 제작되었습니다.</p>
          <p>각 문항은 상황이 있고 그 상황을 잘 읽고 내가 느낄 것 같은 감정을 선택할 수 있습니다.</p>
          <p>또 선택한 감정의 강도를 1~10으로 선택할 수 있습니다.</p>
          <p>문항은 총 16개 입니다.</p>
      </Wrapper>
  )
}