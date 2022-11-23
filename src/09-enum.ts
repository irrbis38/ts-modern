enum Grades {
  Junior = "junior",
  Middle = "middle",
  Senior = "senior",
}

interface Dev {
  login: string;
  skills: string[];
  level: Grades;
}

const newDeveloper: Dev = {
  login: "bestDev",
  skills: ["html", "css", "js"],
  level: Grades.Junior,
};
