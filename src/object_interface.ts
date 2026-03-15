const user = {
    name: "Aashish",
    age: 20
}

// In typeScript we define like this
const user1: { name: string, age: number } = {
    name: "Aashish",
    age: 20
}

// We can also define like this
type User = {
    name: string,
    age: number
}

const user2: User = {
    name: "Aashish",
    age: 20
}

let tea: {
    flavor: string,
    price: number,
    isHot: boolean
}
tea = {
    flavor: "Green",
    price: 2.5,
    isHot: true
}

// Interface -> It is a way to define the structure of an object. It is similar to type alias but it can also be used to define the structure of a class. It can also be extended to create new interfaces.
interface user {
    name: string,
    age: number,
    isDisabled: boolean
}

const user3: user = {
    name: "Aashish",
    age: 20,
    isDisabled: false
}

// Optional properties
interface users {
    name: string;
    age: number;
    isDisabled?: boolean;
}

const user4: users = {
    name: "Aashish",
    age: 20
}

// Readonly properties
interface userReadonly {
    readonly name: string;
    age: number;
}
const user5: userReadonly = {
    name: "Aashish",
    age: 20
}
// user5.name = "John"; // Error: Cannot assign to 'name' because it is a read-only property.
user.age = 21; // This is allowed since age is not readonly

// Partial and required utility types
interface UserProfile {
    name: string;
    age: number;
    email: string;
}

type PartialUserProfile = Partial<UserProfile>;
type RequiredUserProfile = Required<UserProfile>;

const partialUser: PartialUserProfile = {
    name: "Aashish"
}
const requiredUser: RequiredUserProfile = {
    name: "Aashish",
    age: 20,
    email: "aashish@example.com"
}

interface TeacMachine {
    start(): void;
    stop(): void;
}

const machine: TeacMachine = {
    start() {
        console.log("Tea machine started");
    },
    stop() {
        console.log("Tea machine stopped");
    }  
}
