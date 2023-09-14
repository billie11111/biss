import { styled } from "styled-components"

const QuestionStatement = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 4vh;

  .statement {
    display: block;
    font-family: "Hancom Malang";
    font-weight: 400;
    font-size: 2.6rem;
    width: calc(100% - 4.5rem);
    margin-left: auto;
    background-color: var(--color-white);
    padding: 5rem 7rem;
    border-radius: 1rem;
    line-height: 1.6;
    text-align: left;
    background-repeat: no-repeat;
    background-size: 15rem;
    background-position: right bottom;
    background-image: url(/contents/content_question_bg.png);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .deco-flag {
    display: block;
    width: 15rem;
    aspect-ratio: 120/67;
    background-image: url(/flag/flag_01.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const DecoNumberFlag = styled.span<{$flagNumber:number}>`
  display: block;
  width: 15rem;
  aspect-ratio: 120/67;
  background-image: ${props => `url(/flag/flag_0${props.$flagNumber}.png)`};
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Statement({index , description}:{
  index: number; 
  description: string;
}) {
  return (
   <>
    <legend className="sr-only">
      <span>Question {index} of 8</span>
        {description}
    </legend>
     <QuestionStatement>
      <span className="statement">{description}</span>

      <DecoNumberFlag $flagNumber={index}>
        <span className="sr-only">플래그 이미지 아이콘</span>
      </DecoNumberFlag>
    </QuestionStatement>
   </>
  )
}