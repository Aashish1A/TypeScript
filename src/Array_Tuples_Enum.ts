// Array
const chaiFlavours: string[] = ['Masala', 'Ginger', 'Lemon'];
const chaiPrices: number[] = [2.5, 3.0, 3.5];

const rating: Array<number> = [4.5, 4.0, 5.0];

// Array of objects
type chai = {
    name: string,
    price: number
}
const chaiMenu: chai[] = [
    { name: 'Masala', price: 2.5 },
    { name: 'Ginger', price: 3.0 },
    { name: 'Lemon', price: 3.5 }
];

// Readonly array
const readonlyChaiFlavours: readonly string[] = ['Masala', 'Ginger', 'Lemon'];
// readonlyChaiFlavours.push('Cardamom'); // Error: Property 'push' does not exist on type 'readonly string[]'.

// Multidimensional array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Tuple
let chaiOrder: [string, number] = ['Masala', 2.5];
chaiOrder = ['Ginger', 3.0]; // Valid
// chaiOrder = [2.5, 'Masala']; // Error: Type 'number' is not assignable to type 'string'.

let userInfo: [string, number, boolean?] = ['Aashish', 20, false];
userInfo = ['Aashish', 20]; // Valid, isDisabled is optional
// userInfo = [20, 'Aashish']; // Error: Type 'number' is not assignable to type 'string'.

// Readonly tuple
const readonlyChaiOrder: readonly [string, number] = ['Masala', 2.5];
// readonlyChaiOrder[0] = 'Ginger'; // Error: Cannot assign to '0' because it is a read-only property.

// Named tuple
type ChaiOrder = [flavour: string, price: number];
const namedChaiOrder: ChaiOrder = ['Masala', 2.5];

// Enum -> A way to define a set of named constants
enum cupSize{
    SMALL,
    MEDIUM,
    LARGE
}

const size = cupSize.LARGE;

enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}
const orderStatus = Status.SERVED;

enum chaiType {
    MASALA = "Masala",
    GINGER = "Ginger",
    LEMON = "Lemon"
}
function makeChai(type: chaiType){
    return `Making ${type} chai.`;
}

makeChai(chaiType.GINGER)

let t: [string, number] = ["Hello", 42];
t.push("World"); // Allowed, but t[2] will be of type string | number
console.log(t); // Output: ["Hello", 42, "World"]