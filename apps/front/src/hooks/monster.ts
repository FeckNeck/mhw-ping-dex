import { useQuery } from '@tanstack/vue-query';
import { getMonsters } from '../services/monster';

export default function useMonsters() {
  const { data: monsters, isLoading } = useQuery({
    queryKey: ['monsters'],
    queryFn: () => getMonsters(),
  });

  return {
    monsters,
    isLoading,
  };
}
