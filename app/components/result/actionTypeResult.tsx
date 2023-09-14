import { styled } from "styled-components";

const Wrapper = styled.section`
  width: 600px;
  margin: auto;
  background-color: #f7dfe4;
  margin-bottom: 2rem;
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;

  .title {
    color: #333333;
    margin-bottom: 3rem;

    strong {
      font-size: 2.4rem;
      text-align: center;
      display: block;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 4rem;
      text-align: center;
    }
  }

  p {
      background-color: var(--color-white);
      border-radius: 1rem;
      width: 100%;
      padding: 3rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      font-size: 2rem;
      line-height: 1.5;
    }
`;

export default function ActionTypeResult({type}:{
  type: string;
}){
  return (
    <Wrapper>
      <div className="title">
        <strong>당신의 행동타입</strong>
        <h2>{type}</h2>
      </div>
      <p>배려하는 타입 설명 내용 배려하는 타입 설명 내용 배려하는 타입 설명 내용 타입 설명 내용 타입 설명 내용 배려하는 타입 설명 내용 타입 설명 내용</p>
    </Wrapper>
  )
}