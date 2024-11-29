export type Point = {
  x: number;
  y: number;
};

export type ReadonlyPoint = {
  readonly x: number;
  readonly y: number;
};

export const origin: ReadonlyPoint = {
  x: 0,
  y: 0,
};

origin.x = 100; // Should error
/*

export type Point = {
  x: number,
  y: number,
};

export type ReadonlyPoint = {
  readonly [Key in 'x' | 'y']: number
};

export const origin: ReadonlyPoint = {
  x: 0,
  y: 0,
};

origin.x = 100; // Should error
*/
/*
export type Point = {
  x: number,
  y: number,
};

export type Readonly<T> = {
  readonly [Key in keyof T]: T[Key]
};

export const origin: Readonly<Point> = {
  x: 0,
  y: 0,
};

origin.x = 100; // Should error*/

const demo = {
  name: 'sai',
  age: 23,
};

demo.age = 24;

type Demo = {
  readonly name: string;
  readonly age: number;
};

type Toto = keyof Demo;

type ReadOnlyHelper<T> = {
  -readonly [key in keyof T]: T[key];
};

let test: ReadOnlyHelper<Demo> = {
  name: 'sai',
  age: 23,
};

test.age = 22;

const routes = {
  hello: () => '<p></p>',
  hello1: () => '<p></p>',
  hello2: () => '<p></p>',
} as const;

type Demo1 = typeof routes;

type FormatRoutes = {
  [key in keyof Demo1 as `/${key}`]: Demo1[key];
};

const navigate = (route: keyof FormatRoutes) => {
  return route;
};

navigate('/hello1');

const router = (): FormatRoutes => {
  return {
    '/hello': () => '<p></p>',
    '/hello1': () => '<p></p>',
    '/hello2': () => '<p></p>',
  };
};

type Omettre<T, U extends keyof T> = {
  [key in keyof T as key extends U ? never : key]: T[key];
};

type Movie = {
  _id: string;
  title: string;
};

const formMovie: Omettre<Movie, '_id'> = {
  title: 'title',
};

console.log(formMovie);
