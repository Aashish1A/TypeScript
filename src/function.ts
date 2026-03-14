function makeChai(type: string, cups: number){
    return `Making ${cups} cups of ${type} chai.`;
}
makeChai("Masala", 2);

function getChaiPrice(): number {
    return 42;
}

function mainOrder(order: string){
    if(!order) return null;
    return order;
}

function logChai(): void {
    console.log("Chai is being made...");
}

function orderChai(type?: string){
    return `Ordering ${type || "default"} chai.`;
}

// Function types
type ChaiMaker = (type: string, cups: number) => string;
const makeChai2: ChaiMaker = (type, cups) => {
    return `Making ${cups} cups of ${type} chai.`;
}