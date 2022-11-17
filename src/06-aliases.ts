type MyBoolean = true | false;

const diffPairs: [string, string][] = [];
// Вместо того, что указано в строке выше, мы можем создать тип:
type Pair = [string, string];
type Pairs = Pair[];

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;

  [key: string]: unknown;
};
