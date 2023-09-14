'use server'

import {GENDER, IAnswer, IResult} from "@/lib/types/TestTypes";
import {getQuestions, RawDataSave} from "@/lib/serverside-logic/biss_data_save";
import {classifyType, determineState} from "@/lib/libs";

export async function postResult(raw_data: JSON, gender: GENDER, birth_year: number) :Promise<IResult> {
    const keyArray = Object.keys(raw_data)
    const valueArray = Object.values(raw_data)
    // 배열을 만들어서 보내주고 난 후 createMany로 한 번에 입력 해주자.
    const itemArray: IAnswer[] = []
    for (let i = 0; i < keyArray.length; i++) {
        itemArray.push({questionId: keyArray[i], answer: Number(valueArray[i])})
    }
    let f_data: number[] = []
    let a_data = []
    for (let i = 0; i < itemArray.length; i++) {
        const questionType = itemArray[i].questionId.charAt(0)
        switch (questionType) {
            case 'f':
                console.log(`feeling`)
                f_data.push(itemArray[i].answer)
                break;
            case 'a':
                console.log(`action`)
                a_data.push(itemArray[i].answer)
                break;
        }
    }
    console.log(`f_data : ${JSON.stringify(f_data)}`)
    console.log(`a_data : ${JSON.stringify(a_data)}`)
    //f_data 는 -5,-3,0,3,5 이런식으로 들어가있음
    //상황별 느끼는 강도이니 전부 더한 값으로 계산
    let f_sum = 0
    for (let i = 0; i < f_data.length; i++) {
        f_sum += f_data[i]
    }
    console.log(`f_sum : ${JSON.stringify(f_sum)}`)

    //a_data 는 1,2,3,4 이런식으로 들어가있음
    //상황별 선택지이니 어떤 상황을 제일 많이 선택했는지 계산함 (1,2,3,4 중에)
    let a_sum = [0, 0, 0, 0]
    for (let i = 0; i < a_data.length; i++) {
        a_sum[a_data[i] - 1] += 1
    }
    console.log(`a_sum : ${JSON.stringify(a_sum)}`)
    //이사람의 유형은?
    let a_max = 0
    let a_max_index = 0
    for (let i = 0; i < a_sum.length; i++) {
        if (a_max < a_sum[i]) {
            a_max = a_sum[i]
            a_max_index = i + 1
        }
    }

    const type = a_max_index
    console.log(`a_max : ${JSON.stringify(a_max)}`)
    console.log(`a_max_index : ${a_max_index}`)
    console.log(`유형  : ${classifyType(type)}유형입니다.`)
    console.log(`감정  : ${determineState(f_sum)}입니다.`)
    //raw data 저장
    RawDataSave(JSON.stringify(raw_data), gender, birth_year)
    //결과페이지로 리디렉션 , 결과값을 path로 넘겨줌
    //console.log(JSON.stringify(raw_data) , gender , birth_year)
    return {
        type: classifyType(type),
        intensity: f_sum
    }
}

export async function getQuestionsAction() {
    return await getQuestions()
}




