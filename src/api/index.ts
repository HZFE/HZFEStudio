import UParams from 'uparams';
import $fetch from '../utils/fetch';
import config from '../config';

function fakeRequest<T> (data: any, delay = 2000): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delay));
}

const uparams = UParams();
const mockFlag = !!uparams.mock;
const { api } = config;

export const getCard = () => !mockFlag
  ? $fetch.post<any>(`${api}/xxx`)
  : fakeRequest<any>({});
