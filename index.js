import rs from "readline-sync";

const brands = {
    ford: {
        keilriemen: 3,
        bremsklötze: 4
    },
    vw: {
        keilriemen: 5,
        bremsklötze: 8
    },
    porsche: {
        keilriemen: 1,
        bremsklötze: 0
    }
};

let hersteller = "";
let ersatzteil = "";
let isBestellt = false;
let anzahl = 0;


while (isBestellt === false) {

    hersteller = rs.question("Welchen Hersteller suchen Sie? ").toLowerCase();

    if (brands[hersteller]) {
        console.log(`

            Aktueller Warenbestand für den Hersteller "${hersteller}"
            Keilriemen: ${brands[hersteller].keilriemen} Stück
            Bremsklötze: ${brands[hersteller].bremsklötze} Stück

            Welches Ersatzteil möchten Sie bestellen?
            `)
        ersatzteil = rs.keyInSelect(["Keilriemen", "Bremskloetze"])
        if (ersatzteil === 0) {
            anzahl = parseInt(rs.question("Wie viele Keilriemen moechten Sie bestellen? "), 10)
            if (anzahl <= brands[hersteller].keilriemen) {
                brands[hersteller].keilriemen -= anzahl;
                console.log(`${anzahl} Keilriemen wurden erfolgreich bestellt! Verbleibender Bestand: ${brands[hersteller].keilriemen}`)
                isBestellt = true;
            } else {
                console.log("Nicht genügend Keilriemen auf Lager.")
            }
        } else if (ersatzteil === 1) {
            anzahl = parseInt(rs.question("Wie viele Bremskloetze moechten Sie bestellen? "), 10)
            if (anzahl <= brands[hersteller].bremsklötze) {
                brands[hersteller].bremsklötze -= anzahl;
                console.log(`${anzahl} Bremsklötze wurden erfolgreich bestellt! Verbleibender Bestand: ${brands[hersteller].bremsklötze}`)
                isBestellt = true;
            } else {
                console.log("Nicht genügend Keilriemen auf Lager.")
            }
        } else {
            console.log("Keine Bestellung vorgenommen.")
        }
    } else {
        console.log("Der Hersteller wurde nicht gefunden.")
    }
};



