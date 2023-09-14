import { styled } from "styled-components"

const Wrapper = styled.div`
    text-align: center;
    font-family: "Hancom Malang";
    font-weight: 700;
    color: var(--color-darkgreen);

    strong {
      display: block;
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      margin-top: 10vh;
    }

    h1 {
      font-size: 5.5rem;
    }
`;

export default function IntroTitle(){
    return (
      <Wrapper>
        <strong>계룡군문화 축제와 함께하는</strong>
        <h1>나만을 챙기는 방법 알아보기</h1>
      </Wrapper>
    )
}