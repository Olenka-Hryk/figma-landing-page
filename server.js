const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/contact-us", (req, res) => {
  const data = fs.readFileSync("./users-data.txt", {
    encoding: "utf8",
    flag: "r",
  });
  res.send({ data });
});

app.post("/api/contact-us", (req, res) => {
  console.warn(req.body);
  fs.appendFile(
    "./users-data.txt",
    JSON.stringify(req.body) + "\n",
    function (err) {
      if (err) {
        res.status(500).send("Server Error");
        return;
      }
      //   const data = fs.readFileSync("./users-data.txt", {
      //     encoding: "utf8",
      //     flag: "r",
      //   });
      //   res.send({ data });
      res.send("<html><body style='background-color:#252B42; display: flex; justify-content: center; align-items: center;'><h1 style='color:#FFFFFF; font-family:Graphik; font-size:74px; font-weight: 700; text-align: center; '>Thanks! We will contact you in the near future!</h1></body></html>");
    }
  );
});

app.use(express.static(path.resolve(__dirname, "./")));
app.listen(process.env.PORT || 3030, process.env.IP || "0.0.0.0");