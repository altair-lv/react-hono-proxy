import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';

const app = new Hono();

interface User {
  id: number;
  username: string;
  bio?: string;
}

const users: User[] = [
  { id: 1, username: 'wise_rose1', bio: 'Explorer of caves and collector of rare ores.' },
  { id: 2, username: 'luna_builds', bio: 'Passionate builder, loves designing cozy homes.' },
  { id: 3, username: 'RedstoneGenius' },
  { id: 4, username: 'pixeladventure', bio: 'Always on the hunt for new biomes and secrets.' },
  { id: 5, username: 'craftyfox99' },
  { id: 6, username: 'ender_walker', bio: 'Master of the End dimension and dragon battles.' },
  { id: 7, username: 'Stonecarver' },
  { id: 8, username: 'BiomeExplorer', bio: 'Documenting every biome, one adventure at a time.' },
  { id: 9, username: 'skyblock_queen', bio: 'Skyblock expert, loves challenges and survival mode.' },
  { id: 10, username: 'nether_nomad2', bio: 'Ventures into the Nether daily to gather rare materials.' },
];

app.get('/', (c) => {
  return c.json(users);
});

app.get('/:username', (c) => {
  const username = c.req.param('username');
  const user = users.find((user) => user.username.toLowerCase() === username.toLowerCase());
  if (!user) {
    throw new HTTPException(404, { message: 'User not found' });
  }
  return c.json(user);
});

export default app;
