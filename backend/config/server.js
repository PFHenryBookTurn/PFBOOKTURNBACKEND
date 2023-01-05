module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env('PORT', 1337),
  url: env("PUBLIC_URL", "https://test-back-i12m.onrender.com"),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
