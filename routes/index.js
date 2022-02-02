var express = require("express");
var router = express.Router();

const title = "Tech Level";

let developers = [
  {
    lastname: "Leane",
    firstname: "Graham",
    skills: ["HTML", "CSS"],
    notation: 75,
    gender: "female",
  },
  {
    lastname: "Erwin",
    firstname: "Howell",
    skills: ["HTML", "nodeJS", "Express"],
    notation: 30,
    gender: "male",
  },
  {
    lastname: "Clementine",
    firstname: "Bauch",
    skills: ["HTML", "CSS"],
    notation: 49,
    gender: "female",
  },
  {
    lastname: "Kurtis",
    firstname: "Weissnat",
    skills: ["JavaScrip", "jQuery", "nodeJS", "Express"],
    notation: 67,
    gender: "male",
  },
  {
    lastname: "Chelsey",
    firstname: "Dietrich",
    skills: ["HTML", "CSS", "JavaScrip", "nodeJS", "Express"],
    notation: 96,
    gender: "female",
  },
  {
    lastname: "Dennis",
    firstname: "Schulist",
    skills: ["HTML", "CSS"],
    notation: 54,
    gender: "male",
  },
  {
    lastname: "Patricia",
    firstname: "Lebsack",
    skills: ["HTML", "CSS", "jQuery", "JavaScrip", "nodeJS", "Express"],
    notation: 54,
    gender: "female",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title, developers });
});

module.exports = router;
