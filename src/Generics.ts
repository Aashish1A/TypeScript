// Generics -> allows us to create reusable components that can work with different types of data. It provides a way to define a function, class, or interface that can operate on various types while still maintaining type safety.

function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray("Masala Chai"); // returns ["Masala Chai"]
wrapInArray(42); // returns [42]
wrapInArray({ flavor: "Green", price: 2.5 }); // returns [{ flavor: "Green", price: 2.5 }]

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

pair("Masala", 10); // returns ["Masala", 10]
pair("Masala", { price: 10 }); // returns ["Masala", { price: 10 }]
pair({ flavor: "Green" }, { price: 2.5 }); // returns [{ flavor: "Green" }, { price: 2.5 }]


interface Box<T> {
    content: T;
}
const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "Hello" };
const chaiBox: Box<{ flavor: string; price: number }> = {
    content: { flavor: "Masala", price: 10 },
};