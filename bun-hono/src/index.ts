const { Hono } = require('hono');

const app = new Hono();
app.get('/', (c) => c.text('Hello bun@Hono! 🔥...\n'))

export default {
  port: (process.env.port || 8080),
  fetch: app.fetch,
};
