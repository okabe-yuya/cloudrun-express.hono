const { serve } = require('@hono/node-server');
const { Hono } = require('hono');

const app = new Hono();
app.get('/', (c) => c.text('Hello Hono! 🔥...\n'))

serve({
  fetch: app.fetch,
  port: (process.env.port || 8080)
});
