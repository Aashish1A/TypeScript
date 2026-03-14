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

// Interface
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