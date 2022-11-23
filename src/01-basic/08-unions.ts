type Level = "junior" | "middle" | "senior";

interface Developer {
  login: string;
  skills: string[];
  level: Level;
}

// create a function that change level of incoming developer
function gradeDeveloper(newLevel: Level, person: Developer): Developer {
  person.level = newLevel;
  return person;
}
