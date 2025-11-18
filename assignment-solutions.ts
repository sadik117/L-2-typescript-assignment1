type Values = number | string | boolean;

function formatValue (value: Values) : Values  {

    if( typeof value === "string"){
        return value.toUpperCase();
    }
    else if(typeof value === "number"){
        return value*10;
    }
    else if(typeof value === "boolean"){
        return !value;
    }

    return value;
}




function getLength(value: string | any[]): number {
  
  if (typeof value === "string") {
    return value.length;
  }

  if (Array.isArray(value)) {
    return value.length;
  }

  return 0; 
}




class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}




type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const isAvailable = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${isAvailable}`
  );
}




type ArrayType = number | string;

function getUniqueValues(arr1: (ArrayType)[], arr2: (ArrayType)[]): (ArrayType)[] {

  const result: (ArrayType)[] = [];

  function isInArray(value: number | string, array: (number | string)[]): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!isInArray(arr1[i], result)) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!isInArray(arr2[i], result)) {
      result.push(arr2[i]);
    }
  }

  return result;
}




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products.map( product => {

      const total = product.price * product.quantity;
      const discount = product.discount ? (total * product.discount) / 100 : 0;
      return total - discount;

    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}











