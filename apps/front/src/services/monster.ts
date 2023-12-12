import { Monster } from '../types/monster';

const API_URL = import.meta.env.VITE_API_URL + '/monsters';

export const getMonsters = async (): Promise<Monster[]> => {
  return await fetch(API_URL).then((response) => response.json());
};
