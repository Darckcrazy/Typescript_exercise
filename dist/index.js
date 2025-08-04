"use strict";
// ========================================
// ESERCIZI TYPESCRIPT - RISPOSTE COMPLETE
// ========================================
console.log("=== ESERCIZI TYPESCRIPT ===\n");
// 1) Tipi primitivi principali in TypeScript
console.log("1) TIPI PRIMITIVI PRINCIPALI:");
console.log("- string: per testo");
console.log("- number: per numeri (interi e decimali)");
console.log("- boolean: per valori true/false");
console.log("- null: valore nullo");
console.log("- undefined: valore non definito");
console.log("- symbol: simboli unici");
console.log("- bigint: numeri interi grandi\n");
// 2) Variabili tipizzate
const nome = "Mario";
const eta = 25;
const studiaTypeScript = true;
console.log("2) VARIABILI TIPIZZATE:");
console.log(`Nome: ${nome} (tipo: ${typeof nome})`);
console.log(`Età: ${eta} (tipo: ${typeof eta})`);
console.log(`Studia TypeScript: ${studiaTypeScript} (tipo: ${typeof studiaTypeScript})\n`);
// 3) Tipizzazione parametro funzione
const greet = (name) => {
    return "Ciao " + name;
};
console.log("3) FUNZIONE GREET TIPIZZATA:");
console.log(greet("Mario"));
console.log(greet("Anna"));
console.log();
// 4) Specifica tipo di ritorno
const sum = (a, b) => {
    return a + b;
};
console.log("4) FUNZIONE SUM CON TIPO DI RITORNO:");
console.log(`5 + 3 = ${sum(5, 3)}`);
console.log(`10 + 20 = ${sum(10, 20)}`);
console.log();
// 5) Funzione prezzo con IVA
const calcolaPrezzoConIva = (prezzo) => {
    const iva = 0.22; // 22%
    return prezzo * (1 + iva);
};
console.log("5) CALCOLO PREZZO CON IVA (22%):");
console.log(`Prezzo €100 + IVA = €${calcolaPrezzoConIva(100).toFixed(2)}`);
console.log(`Prezzo €50 + IVA = €${calcolaPrezzoConIva(50).toFixed(2)}`);
console.log();
// 6) Funzione concatenazione stringhe e lunghezza
const concatenaEConteggia = (str1, str2) => {
    const concatenata = str1 + str2;
    return concatenata.length;
};
console.log("6) CONCATENAZIONE E CONTEGGIO LUNGHEZZA:");
console.log(`"Ciao" + "Mondo" = ${concatenaEConteggia("Ciao", "Mondo")} caratteri`);
console.log(`"Hello" + "World" = ${concatenaEConteggia("Hello", "World")} caratteri`);
console.log();
// 7) Type Union
console.log("7) TYPE UNION:");
console.log("Un Type Union permette di specificare che una variabile può avere uno di diversi tipi.");
console.log("Sintassi: type NomeTipo = Tipo1 | Tipo2 | Tipo3");
console.log("Esempio: type StringOrNumber = string | number");
console.log();
// 8) Variabile con numero, null o undefined
let numeroOpzionale = 42;
console.log("8) VARIABILE CON UNION TYPE:");
console.log(`Valore iniziale: ${numeroOpzionale}`);
numeroOpzionale = null;
console.log(`Dopo assegnazione null: ${numeroOpzionale}`);
numeroOpzionale = undefined;
console.log(`Dopo assegnazione undefined: ${numeroOpzionale}`);
console.log();
const oggi = "Lunedì";
console.log("9) TIPO PER GIORNI SETTIMANA:");
console.log(`Oggi è: ${oggi}`);
console.log();
// 10) Array di numeri tipizzato
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];
console.log("10) ARRAY TIPIZZATO (due modi):");
console.log(`Primo modo (number[]): ${numbers}`);
console.log(`Secondo modo (Array<number>): ${numbers2}`);
console.log();
// 11) Tupla
const tupla = ["primo", "secondo", "terzo", 10, 20];
console.log("11) TUPLA (5 elementi - 3 stringhe, 2 numeri):");
console.log(`Tupla: ${tupla}`);
console.log(`Primo elemento (stringa): ${tupla[0]}`);
console.log(`Quarto elemento (numero): ${tupla[3]}`);
console.log();
// 12) Differenza tra type e interface
console.log("12) DIFFERENZA TYPE vs INTERFACE:");
console.log("TYPE:");
console.log("- Può rappresentare union types, primitive types, mapped types");
console.log("- Non può essere estesa dopo la dichiarazione");
console.log("- Sintassi: type Nome = ...");
console.log();
console.log("INTERFACE:");
console.log("- Può essere estesa e implementata");
console.log("- Può essere dichiarata più volte (declaration merging)");
console.log("- Sintassi: interface Nome { ... }");
console.log();
const persona = {
    firstname: "Mario",
    lastname: "Rossi",
    age: 30
};
console.log("13) INTERFACCIA PERSONA:");
console.log(`Persona: ${persona.firstname} ${persona.lastname}, ${persona.age} anni`);
console.log();
const utente1 = {
    email: "mario@example.com",
    telefono: "123456789"
};
const utente2 = {
    email: "anna@example.com"
    // telefono non specificato (opzionale)
};
console.log("14) INTERFACCIA UTENTE (email obbligatoria, telefono opzionale):");
console.log(`Utente 1: ${utente1.email}, tel: ${utente1.telefono || 'non specificato'}`);
console.log(`Utente 2: ${utente2.email}, tel: ${utente2.telefono || 'non specificato'}`);
console.log();
console.log("=== ESERCIZI COMPLETATI (1-14) ===");
//# sourceMappingURL=index.js.map