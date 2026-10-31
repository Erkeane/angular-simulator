export class Collection<T> {
  private items: T[] = []
  getAll(): T[] {
    return this.items
  }

  getElement(index: number): T | undefined {
    return this.items[index];
  }

  clearAll(): void {
    this.items = []
  }

  deleteElement(index: number): void {
    this.items.splice(index, 1);
  }
  
  replaceElement(index: number, newItem: T): void {
    this.items[index] = newItem;
  }

  constructor(startItems:T[]) {
    this.items = startItems;
  }
}

const numbers = new Collection < number >([1, 3, 5]) ;
console.log(numbers.getAll())

const clubs = new Collection<string> (['MUFC', 'PSG', 'R.Madrid']);
console.log(clubs.getAll())

console.log(clubs.getElement(1))

clubs.replaceElement(1,'Arsenal')
console.log(clubs.getAll())

clubs.deleteElement(0)
console.log(clubs.getAll())

clubs.clearAll()
console.log(clubs.getAll())