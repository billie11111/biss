import { styled } from "styled-components"

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  background-image: url("/logo/gyeryong-logo.png");
  background-position: center center;
  background-size: contain;
  margin-left: auto;
`;

export default function GyeryongLogo(){
  return (
    <Wrapper>
        <span className="sr-only">계룡시 로고</span>
    </Wrapper>
  )
}