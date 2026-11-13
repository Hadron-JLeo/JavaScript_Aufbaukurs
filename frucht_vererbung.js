

const f = new Frucht();
f.status();

class Banane extends Frucht {
    constructor() {
        super({ sauer: 0.1, preis: 1, gewicht: 20 });
    }

    peel() {
        console.log(`${this.constructor.name} hat ihre Schale verloren!`);
    }
}

const b = new Banane();
b.status(); // Banane ist Sauer um 0.1 Prozent und kostet 1 EUR. 20g schwer!
b.peel();   // Banane hat ihre Schale verloren!
