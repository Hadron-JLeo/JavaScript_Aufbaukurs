class Frucht {
    static menge = 0;

    #sauer = 0;
    #suess = 0;
    #preis = 0;
    #gewicht = 0; // Gewicht in Gramm

    constructor({ sauer = 0, suess = 0, preis = 0, gewicht = 0 } = {}) {
        this.#sauer = sauer;
        this.#suess = suess;
        this.#preis = preis;
        this.#gewicht = gewicht;
        Frucht.menge += 1;
    }

    get preis() {
        return this.#preis;
    }

    status() {
        console.log(`${this.constructor.name} ist Sauer um ${this.#sauer} Prozent und kostet ${this.#preis} EUR. ${this.#gewicht}g schwer!`);
    }
}

const f = new Frucht();
f.status();

class Banane extends Frucht {
    constructor() {
        super({ sauer = 0.1, preis: 1, gewicht: 20 });
    }

    peel() {
        console.log(`${this.constructor.name} hat ihre Schale verloren!`);
    }
}

const b = new Banane();
b.status(); // Banane ist Sauer um 0.1 Prozent und kostet 1 EUR. 20g schwer!
b.peel();   // Banane hat ihre Schale verloren!
