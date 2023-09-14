import {prisma} from "@/prisma/prisma";
import {GENDER} from "@/lib/types/TestTypes";

export async function RawDataSave(data: string , gender: GENDER, birth_year: number) {
    try {
        await prisma.bissRawData.create({
                data: {
                    RawData: data,
                    gender: gender,
                    birth_year: birth_year
                }
            }
        )
    } catch (err: any) {
        console.error(err)
        return null
    }
}

export async function getQuestions() {
    try {
        const result = await prisma.bissQuestions.findMany(
            {
                include: {
                    biss_answer: true
                },
                orderBy: {
                    id: 'asc' // 'asc'는 오름차순을 의미합니다.
                }
            }
        )
        console.log(result)
        return result
    } catch (err: any) {
        console.error("getQuestions err "+err)
        return null
    }
}
