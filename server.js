const http = require("http");
const app = require("./app");
const { connection } = require("./models");

const PORT = 3000;
connection
  .sync()
  .then(() => {
    console.log("Connection to database successful and models synchronized.");
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error synchronizing with database:", error);
  });
