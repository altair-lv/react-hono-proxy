import { useQuery } from '@tanstack/react-query';

async function getApiHealth() {
  const response = await fetch('http://localhost:8787');
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return await response.text();
}

export function useHealthQuery() {
  return useQuery({
    queryKey: ['api-health'],
    queryFn: getApiHealth,
    retry: 1,
  });
}
