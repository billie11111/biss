'use client'

import {styled} from "styled-components"
import SubmitActionBtn from "../components/common/btn/submitActionBtn";
import Statement from "../components/test/statement";
import EmotionGroup from "../components/test/emotionGroup";
import {getQuestionsAction, postResult} from "@/app/actions";
import {FieldValues, useForm} from "react-hook-form";
import {GENDER, IAnswer} from "@/lib/types/TestTypes";
import {useEffect, useState} from "react";
import ActionGroup from "../components/test/actionGroup";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { IResultSate, resultSate } from "../states";

const Wrapper = styled.main`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;
`;

const QuestionItem = styled.fieldset`
  margin: 10rem 10rem 10rem 5rem;
  border: none;
`;

export default function Test() {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FieldValues>({
    defaultValues: {},
  })

  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
      const someData = async () => {
          const result = await getQuestionsAction()
          setData(result as any)
          console.log(result)
      }
      someData()
  }, [])
  const [genderBirth, setGenderBirth] = useRecoilState<IResultSate>(resultSate);

  const onClickSubmit = async (data: any) => {
    const getData = data as JSON
    const {gender, birth_year} = genderBirth;

    postResult(data as JSON, gender === "F" ? GENDER.F : GENDER.M , birth_year).then((res) => {
        router.push(`/result/${res.type}/${res.intensity}`)
    })
  }

  return (
    <Wrapper>
      <h1 className="sr-only">테스트 문항 목록 페이지</h1>
      <form onSubmit={handleSubmit(onClickSubmit)}>

        {data.map((item, index) => (
          <QuestionItem key={index} id="question">
            <Statement 
              index={item.id} 
              description={item.question}
            />
            <EmotionGroup 
              register={register}
              errors={errors} 
              index={item.id}
            />
            <ActionGroup 
              register={register} 
              errors={errors} 
              index={item.id}
              answer1={item.biss_answer.answer1}
              answer2={item.biss_answer.answer2} 
              answer3={item.biss_answer.answer3} 
              answer4={item.biss_answer.answer4} 
            />
          </QuestionItem>
        ))}

        <SubmitActionBtn title="결과보기"/>
      </form>
    </Wrapper>
  )
}