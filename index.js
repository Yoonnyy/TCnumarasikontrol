require("dotenv").config();
const express = require("express");
const app = express();


// app.use(require("morgan")("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/", require("./routes"))

app.use((req, res) => {
	res.status(404).render("404.ejs")
})

app.listen(process.env.PORT || 80, () => {
	console.log(`Listening on port ${process.env.PORT || 80}`);
});