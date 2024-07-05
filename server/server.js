// server/server.js
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db_videos.json'));
console.log("directory name: ", __dirname)
console.log("db path: ", router)
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 9000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
