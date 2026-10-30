const Koa = require('koa');

const app = new Koa();

try {
    const port = process.env.PORT || 3001;
    const host = process.env.IP || '0.0.0.0';

    app.listen(port, host, () => {
        console.log(`Server running at http://${host}:${port}`);
    });
    console.log(`Server running on port:${port}`);
} catch (err) {
  console.error(err);
}