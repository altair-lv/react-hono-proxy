import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import { timing } from 'hono/timing';
import { prettyJSON } from 'hono/pretty-json';
import users from './routes/users.route';

const app = new Hono();

app.use(logger(), timing(), prettyJSON());

// Routes
app.route('/users', users);

// Health check
app.get('/', (c) => {
  return c.text('OK', 200);
});

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json(
      {
        error: err.message,
        status: err.status,
      },
      err.status
    );
  }

  return c.json(
    {
      error: 'Internal server error',
      status: 500,
    },
    500
  );
});

export default app;
