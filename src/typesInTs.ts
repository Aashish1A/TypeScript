// Learning TypeScript: Basic Types

// Boolean -> It can be either true or false
let isDone: boolean = false;

// Number -> TypeScript, like JavaScript, uses the number type to represent both integers and floating-point numbers. It also supports hexadecimal, octal, and binary literals.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

// String -> It can be any sequence of characters enclosed in single or double quotes.
let name: string = "Alice";

// Array -> It can be a list of values of the same type.
let list: number[] = [1, 2, 3];
let list2: number[] = [4, 5, 6];

// Tuple -> It can be a list of values of different types.
let x: [string, number] = ["hello", 10];

// Enum -> It can be a set of named constants.
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Union -> It can be a value of one of several types.
let unionType: string | number;
unionType = "Hello";
unionType = 42;

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";

// Any -> It can be any type of value. It is useful when you don't know the type of a value at compile time.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// Unknown -> It is similar to any, but it is safer because it requires you to perform type checks before using the value.
let maybe: unknown = 4;
maybe = "a string instead";
maybe = false;
if(maybe === "string"){
    maybe.toUpperCase();
}

// Void -> It represents the absence of a value. It is often used as the return type of functions that do not return a value.
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined -> They are subtypes of all other types. That means you can assign null and undefined to any other type.
let u: undefined = undefined;
let n: null = null;