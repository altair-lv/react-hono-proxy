import { useQuery } from '@tanstack/react-query';

export interface User {
  id: string;
  username: string;
  bio?: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:8787/users');
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as User[];
}

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users-list'],
    queryFn: getUsers,
    retry: 1,
  });
}
