import { FieldValues, UseFormRegister } from "react-hook-form";
import { styled } from "styled-components";
import ErrorText from "./errorText";
import { useRef } from "react";

const Wrapper = styled.div`
  width: 600px;
  margin: auto 0 0 auto;
  text-align: left;

  .title {
    font-family: "Hancom Malang";
    font-weight: 400;
    font-size: 2.6rem;
    text-align: left;
    margin-bottom: 3vh;
  }

  .group-options {
    .radios {
      background-color: var(--color-darkgreen);
      color: var(--color-white);
      overflow: hidden;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;

const RadioOption = styled.span`
  display: block;
  border-bottom: 0.1rem solid var(--color-green);
  &:hover {
    background-color: var(--color-pink);
  }

  label {
    display: block;
    width: 100%;
    font-size: 2rem;
    font-family: "Hancom Malang";
    font-weight: 400;
    padding: 2rem 3rem;
    cursor: pointer;

    &:has(:checked){
      background-color: var(--color-pink);
    }
  }
`;

export default function ActionGroup({
  register, 
  index, 
  errors,
  answer1,
  answer2,
  answer3,
  answer4,
}:{
  // code: string;
  register: UseFormRegister<FieldValues>
  index: number;
  errors: any;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}){
  // scroll interaction
  const ref = useRef<HTMLDivElement>(null);
  const onClickScroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <Wrapper ref={ref}>
      {errors && <ErrorText comment={errors[`a${index}`]?.message} />}

      <div className="title">Q2. 주어진 상황에서 느끼는 감정은 무엇인가요?</div>
      <div className="group-options">
        <div className="radios" onClick={onClickScroll}>

          <RadioOption>
            <label htmlFor={`a${index}-1`}>
              <input 
                {...register(`a${index}`, { required: "상황 감정 옵션을 모두 선택해주세요." })} 
                value={1} 
                id={`a${index}-1`} 
                className="sr-only" 
                type="radio"
                aria-label={answer1}
              />
              <span className="sr-only">{answer1}</span>
              {answer1}
            </label>
          </RadioOption>
          <RadioOption>
            <label htmlFor={`a${index}-2`}>
              <input 
                {...register(`a${index}`, { required: "상황 감정 옵션을 모두 선택해주세요." })} 
                value={2} 
                id={`a${index}-2`} 
                className="sr-only" 
                type="radio"
                aria-label="label" 
              />
              <span className="sr-only">{answer2}</span>
              {answer2}
            </label>
          </RadioOption>
          <RadioOption>
            <label htmlFor={`a${index}-3`}>
              <input 
                {...register(`a${index}`, { required: "상황 감정 옵션을 모두 선택해주세요." })} 
                value={3} 
                id={`a${index}-3`}
                className="sr-only" 
                type="radio"
                aria-label="label" 
              />
              <span className="sr-only">{answer3}</span>
              {answer3}
            </label>
          </RadioOption>
          <RadioOption>
            <label htmlFor={`a${index}-4`}>
              <input 
                {...register(`a${index}`, { required: "상황 감정 옵션을 모두 선택해주세요." })} 
                value={4} 
                id={`a${index}-4`} 
                className="sr-only" 
                type="radio"
                aria-label="label" 
              />
              <span className="sr-only">{answer4}</span>
              {answer4}
            </label>
          </RadioOption>

        </div>
      </div>
    </Wrapper>
  )
}