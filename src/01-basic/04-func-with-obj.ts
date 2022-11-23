function printPoint(point: { x: string; y: string }): void {
  console.log(`Coordinate of the point is x: ${point.x} and y: ${point.y}`);
}

const obj1 = {
  x: "1",
  y: "2",
};
printPoint(obj1);

const obj2 = {
  x: "1",
  y: "2",
  z: 4,
};
printPoint(obj2);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log("Hello", user.firstName.toUpperCase());

  if (user.lastName) {
    console.log("Nice to meet you Mr.", user.lastName.toUpperCase());
  }
}

interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin extends User {
  role: string;
}

function login(userData: { login: string; password: string }): void {
  if (userData.login.length === 0 || userData.password.length === 0) {
    console.log("Login and password must not empty");
  } else {
    console.log("You are login");
  }
}
