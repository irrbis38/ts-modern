export type Union1 = "a" | "b" | "c" | "d";
type Union2 = "a" | "e" | "c" | "i";
type Union3 = Union1 | Union2; // все варианты
// т.е. type Union3 = "a" | "b" | "c" | "d" | "e" | "i"
type Union4 = Union1 & Union2; // только то, что есть в обоих объединениях
// т.е. type Union4 = "a" | "c"

type Union5 = { a: string; b: number; c: string } & {
  a: string;
  l: boolean;
  n: null;
};
// type Union5 = { a: string; b: number; c: string; l: boolean; n: null;}

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Person;

type Developer = {
  skills: string[];
  phone: string;
  level?: "junior" | "middle" | "senior";
  say(): void;
  code?: (arg: string) => void;
} & Employee;

/////////////////////////////////////

type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;

interface IProduct {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface IVehicle {
  wheels: number;
  year: number;
  brand: string;
}

interface ICar extends IProduct, IVehicle {
  type: string;
  model: string;
}
