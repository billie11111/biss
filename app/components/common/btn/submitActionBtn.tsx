'use client'
import { styled } from "styled-components";

const Wrapper = styled.button`
  width: 30rem;
  display: inline-block;
  aspect-ratio: 200/101;
  margin: auto;
  font-size: 5rem;
  font-weight: 800;
  color: var(--color-skyblue);
  background-image: url('/btn/btn_background.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export default function SubmitActionBtn({
  title,
}:{
  title:string;
}){
  return (
    <Wrapper type="submit">
        <span>{title}</span>
    </Wrapper>
  )
}