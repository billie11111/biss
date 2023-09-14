import { styled } from "styled-components"

const Wrapper = styled.div`
  font-family: "Hancom Malang";
  font-weight: 700;
  font-size: 2.5rem;
  color: red;
  margin-bottom: 2rem;
  text-align: center;
`;

export default function ErrorText({comment}:{
  comment: string;
}){
  return (
    <Wrapper>
      {comment}
    </Wrapper>
  )
}