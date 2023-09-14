import {styled} from "styled-components"
import {FieldValues, FieldError, UseFormRegister} from "react-hook-form";
import ErrorText from "./errorText";

const Wrapper = styled.div`
  width: 60rem;
  margin: auto 0 5rem auto;

  .title {
    font-family: "Hancom Malang";
    font-weight: 400;
    font-size: 2.6rem;
    text-align: left;
    margin-bottom: 3vh;
  }

  .group-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;

    .radios {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }
  }
`;

const RadioOption = styled.span<{$optionName: number;}>`
    display: inline-flex;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    overflow: hidden;
    background-image: ${props => `url('/contents/content_feel_0${props.$optionName}.png')`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;

    &:has(:checked){
      background-image: ${props => `url('/contents/content_feel_0${props.$optionName}_check.png')`};
    }

    label {
      display: block;
      width: 100%;
      height: 100%;
    }
`;

export default function EmotionGroup({index, register, errors}: {
    // code: string;
    register: UseFormRegister<FieldValues>
    index: number;
    errors: any;
}) {
    //code == f숫자 형식으로 넣어야함 (feeling)
    //index == 질문 번호
    return (
      <Wrapper>
        {errors && <ErrorText comment={errors[`f${index}`]?.message} />}

        <div className="title">Q1. 느끼는 감정의 강도를 표시해주세요.</div>
          <div className="group-options">
            <div className="radios">
              <RadioOption $optionName={1}>
                <label htmlFor={`f${index}-1`} >
                  <input 
                    {...register(`f${index}`, { required: "감정 강도 옵션을 모두 선택해주세요." })}
                    value={-5} 
                    id={`f${index}-1`} 
                    className="sr-only" 
                    type="radio"
                    aria-label="매우 화가 난다" 
                  />
                </label>
              </RadioOption>
              <RadioOption $optionName={2}>
                <label htmlFor={`f${index}-2`}>
                  <input 
                    {...register(`f${index}`, { required: "감정 강도 옵션을 모두 선택해주세요." })}
                    value={-3} 
                    id={`f${index}-2`} 
                    className="sr-only" 
                    type="radio"
                    aria-label="화가 난다" 
                  />
                </label>
              </RadioOption>
              <RadioOption $optionName={3}>
                <label htmlFor={`f${index}-3`} >
                  <input
                    {...register(`f${index}`, { required: "감정 강도 옵션을 모두 선택해주세요." })} 
                    value={0} 
                    id={`f${index}-3`} 
                    className="sr-only" 
                    type="radio"
                    aria-label="그저 그렇다" 
                  />
                </label>
              </RadioOption>
              <RadioOption $optionName={4}>
                <label htmlFor={`f${index}-4`}>
                  <input
                    {...register(`f${index}`, { required: "감정 강도 옵션을 모두 선택해주세요." })} 
                    value={3} 
                    id={`f${index}-4`} 
                    className="sr-only" 
                    type="radio"
                    aria-label="우울하다" 
                  />
                </label>
              </RadioOption>
              <RadioOption $optionName={5}>
                <label htmlFor={`f${index}-5`}>
                  <input 
                    {...register(`f${index}`, { required: "감정 옵션을 모두 선택해주세요." })} 
                    value={5} 
                    id={`f${index}-5`} 
                    className="sr-only" 
                    type="radio"
                    aria-label="매우 우울하다" 
                  />
                </label>
              </RadioOption>

            </div>
          </div>
        </Wrapper>
    )
}