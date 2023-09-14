'use client'

import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import { useRouter } from 'next/navigation'
import { styled } from "styled-components";
import SubmitActionBtn from "../common/btn/submitActionBtn";
import { getBirthYearRange } from "@/lib/libs";
import { useRecoilState } from 'recoil';
import { IResultSate, resultSate } from "@/app/states";
import ErrorText from "../test/errorText";

const Wrapper = styled.form`
  background-color: #ffffff;
  padding: 5rem 5rem 3rem;
  border-radius: 3rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const GenderGroup = styled.div`
  margin-bottom: 3vh;
`;

const AgeGroup = styled.div`
  margin-bottom: 5vh;
`;

const Radios = styled.div`
  position: relative;

  label {
    display: inline-flex;
    width: 10rem;
    height: 10rem;
    border: 5px solid #cccccc;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    line-height: 85px;

    span {
      font-size: 3rem;
      display: block;
      width: 100%;
      height: 100%;
      color: #cccccc;
    }

    input:checked+span {
      color:red;
      background-color: beige;
      border:none;
    }

    input:checked:has(label) {
      border: 5px solid red;
    }

    &:first-child {
      margin-right:3rem;
    }

    &:hover {
      background-color: beige;
    }
  }
`;

const BirthYearSelectBox = styled.select`
  width: 85%;
  padding: 1.5rem 3rem;
  font-size: 2.8rem;
  color: rgba(90, 87, 87, 1);
  font-family: "Hancom Malang";
  font-weight: 700;
  border: 5px solid rgba(90, 87, 87, 1);
  background-image: url('/icons/icon_arrow_dwn.png');
  background-size: contain;
  background-position: right bottom;
  background-repeat: no-repeat;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
  font-family: var(--Hancom-malang-B);
`;

const GenderField = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 5rem;
`;

export default function Form(){
  const router = useRouter();
  const birthYearRange = getBirthYearRange();
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<FieldValues>();

  const [genderBirth, setGenderBirth] = useRecoilState<IResultSate>(resultSate);

  const onSubmit = async (data:any) => {
    const {gender, birth_year} = data;
    setGenderBirth({ gender, birth_year });

    router.push("/test");
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <GenderGroup>
        <Title>1. 당신의 성별을 선택해주세요.</Title>
        {errors && <ErrorText comment={errors.gender?.message as any} />}

        <GenderField>
          <legend className="sr-only">성별 선택</legend>
          <Radios>
            <label htmlFor="gender-man">
              <input 
                {...register("gender", { 
                  required: "성별을 선택해주세요." 
                })} 
                id="gender-man" 
                className="sr-only" 
                value="M" 
                type="radio"
              />
              <span>남</span>
            </label>
            <label htmlFor="gender-woman">
              <input 
                {...register("gender", { 
                  required: "성별을 선택해주세요." 
                })} 
                id="gender-woman" 
                className="sr-only" 
                value="F" 
                type="radio" 
              />
              <span>여</span>
            </label>
          </Radios>
        </GenderField>        
      </GenderGroup>

      <AgeGroup>
        <Title>2. 당신이 태어난 연도를 알려주세요.</Title>
        {errors && <ErrorText comment={errors.birth_year?.message as any} />}

        <BirthYearSelectBox {...register("birth_year", {
          required: "출생연도를 선택해주세요.",
          valueAsNumber: true,
        })}>
          <option value="">출생연도를 선택하세요</option>

          {birthYearRange.map((year, idx) => (
            <option key={idx} value={year}>{year}</option>
          ))}
        </BirthYearSelectBox>
      </AgeGroup>

      <SubmitActionBtn title="시작하기" />
    </Wrapper>
  )
}