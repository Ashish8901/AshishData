const express = require("express");
const app = express();


require("./db/conn")

app.use(express.json());

app.use(require("./route/User"))
 
app.use(require("./route/Admin"))




app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});
