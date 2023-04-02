const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// 取得cookie
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
const port = 3000;

const User = require("./models/user");

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error");
});
db.once("open", () => {
  console.log("mongodb connected");
});

app.engine("hbs", exphbs({ defaultLayout: "main", extname: "hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  // 設定是否登入
  const isLogin = 0;
  res.render("index", isLogin);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // 設定cookie參數
  res.cookie("email", req.body.email, { path: "/login", maxAge: 600000 });
  res.cookie("password", req.body.password, { path: "/login", maxAge: 600000 });
  // 用於判斷是否正確
  let index = 0;
  User.findOne({ email, password })
    .then((user) => {
      if (user !== null) {
        res.redirect(`/login/${user._id}`);
      } else {
        index = 1;
        res.render("login", { email, password, index });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/login/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .lean()
    .then((user) => {
      // 取得@的位置
      const atIndex = user.email.indexOf("@");
      // 取得@前面的名字
      let name = user.email.slice(0, atIndex);
      // 將第一個小寫變為大寫
      name = name.charAt(0).toUpperCase() + name.slice(1);
      res.render("welcome", { name });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`This is running on http://localhost:${port}`);
});
