//Задание 4 и 5

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

//Задание 6 и 7

interface IUser {
  name: string;
  age?: number;
  nickname: string | number;
}

interface ICharacter extends IUser {
  class?: string;
  level: number;
}

//Задание 3

function calc(a: number, b: number): number {
  return a + b;
}
calc(5, 6);

//Задание 8
function greet(text: string, format: 'uppercase' | 'lowercase' | 'capitalize'): string {
  if (format === 'uppercase') return text.toUpperCase();
  if (format === 'lowercase') return text.toLowerCase();
  else {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
console.log(greet('hello iam erkin', 'capitalize'));

//Задание 9
function getString(text: string, symbol: string): string {
  return text.replaceAll(symbol, '');
}
console.log(getString('Audi', 'd'));

//Задание 10
const users: IUser[] = [
  { name: 'Erkeane', age: 32, nickname: 'Er_keane' },
  { name: 'Kairat', nickname: 'kairat_asylbekov' },
  { name: 'Wayne', age: 41, nickname: 'Wazza' },
];
const getUsers = users.filter((user) => user.age !== undefined && user.age > 30);
