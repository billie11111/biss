import { atom } from 'recoil';

export interface IResultSate {
  gender: string;
  birth_year: number;
}

export const resultSate = atom<IResultSate>({
  key: 'result',
  default: {
    gender: '',
    birth_year: 0
  }
})