import { styled } from "styled-components";

const Wrapper = styled.div`
    width: 18rem;
    height: 18rem;
    background-image: url("/contents/content_bell.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: auto auto 5vh auto;
  `;

export default function BellImage(){
    return (
        <Wrapper>
            <span className="sr-only">종 이미지</span>
        </Wrapper>
    )
}