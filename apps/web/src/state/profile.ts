import { useQuery } from '@tanstack/react-query';
import type { User } from './users';

async function getProfile(username: string): Promise<User> {
  const response = await fetch(`http://localhost:8787/users/${username}`);

  if (response.status === 404) {
    throw new Error('User not found');
  }
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as User;
}

export function useProfileQuery(username: string) {
  return useQuery({
    queryKey: ['profile', username],
    queryFn: async () => {
      return getProfile(username);
    },
    retry: 1,
  });
}
