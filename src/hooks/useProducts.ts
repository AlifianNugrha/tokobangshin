import { useQuery } from '@tanstack/react-query';
import { allSwords, allMelee, allItems } from '@/data/products';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Simulate slight delay for consistency if needed, 
      // but returning local data directly is fine.
      return {
        allSwords,
        allMelee,
        allItems,
      };
    },
    staleTime: Infinity, // Local data doesn't change
  });
}
