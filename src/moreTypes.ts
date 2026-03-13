let response: any = "42";

let numericLength: number = (response as string).length;

type Book = {
    name: string;
}

let bookString = '{"name": "The Great Gatsby"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name); // Output: The Great Gatsby

const input = document.getElementById("userInput") as HTMLInputElement;
input.value = "Hello, TypeScript!";

try {
    
} catch (error) {
    if(error instanceof Error){
        console.error(`Error: ${error.message}`);
    }
    console.log("Error", error);
}