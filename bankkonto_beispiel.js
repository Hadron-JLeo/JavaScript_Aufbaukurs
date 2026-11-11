// Bankkonto Beispiel zu Objekten und Error-Handling, Tag 1

const Bankkonto = {
    kontoNummer: 1,
    besitzer: "Leo",
    kontoStand: 0,
    Geldeingang: function (wert) {
        if (isNaN(wert)) {
            throw "Kontostand is keine gültige Nummer";
        }
        this.kontoStand = this.kontoStand + wert;
        
        try {
            if (this.kontoStand < 0) {
                throw "Achtung, Kontostand darf nicht unter 0 Euro rutschen!";
            }
        } 
        catch (fehler) {
            console.log("Achtung Fehler!:", fehler);
            Bankkonto.kontoStand = 0;
            }
        }
    }

Bankkonto.Geldeingang(-100);

console.log("Neuer Kontostand:", Bankkonto.kontoStand);
