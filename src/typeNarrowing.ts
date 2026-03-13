function getChai(kind: string | number){
    if(typeof kind === "string"){
        console.log(`The kind of chai is ${kind}`);
    } else {
        console.log(`Chai order: ${kind}`);
    }

}
getChai("Masala");
getChai(42);

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg} chai.`;
    }
    return "Serving default masala chai.";
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return "Small cutting chai..."
    }
    if(size === "medium" || size === "large"){
        return "make extra chai..."
    }
    return `Chai order: ${size}`;
}

class KulhadChai{
    serve(){
        return "Serving kulhad chai.";
    }
}
class CuttingChai{
    serve(){
        return "Serving cutting chai.";
    }
}

function serve(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    return chai.serve();
}


// type
type ChaiOrder = {
    type: string
    sugar: boolean
}
function isChaiOrder(obj: any): obj is ChaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "boolean"
    )
}