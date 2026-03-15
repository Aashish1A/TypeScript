// class Chai {
//     flavor: string;
//     price: number;

//     constructor(flavor: string, price: number) {
//         this.flavor = flavor;
//         this.price = price;
//     }

// }

// const masalaChai = new Chai("Masala", 10);

// Access modifiers: public, private, protected
class Chai {
    public flavor: string = "masala"

    private secretIngredient: string = "cardamom"

    revealSecret() {
        console.log(this.secretIngredient);
    }
}

const c = new Chai();
c.revealSecret(); // cardamom

class shop {
    protected shopName = "Chai corner"
}

class Branch extends shop {
    displayShopName() {
        console.log(this.shopName);
    }
}

const b = new Branch();
b.displayShopName(); // Chai corner


// Getters and Setters
class Tea {
    private _flavor: string = "green";

    get flavor() {
        return this._flavor;
    }

    set flavor(newFlavor: string) {
        this._flavor = newFlavor;
    }

}

const t = new Tea();
console.log(t.flavor); // green
t.flavor = "black";
console.log(t.flavor); // black