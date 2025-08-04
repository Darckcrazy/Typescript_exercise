declare const nome: string;
declare const eta: number;
declare const studiaTypeScript: boolean;
declare const greet: (name: string) => string;
declare const sum: (a: number, b: number) => number;
declare const calcolaPrezzoConIva: (prezzo: number) => number;
declare const concatenaEConteggia: (str1: string, str2: string) => number;
declare let numeroOpzionale: number | null | undefined;
type GiornoSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
declare const oggi: GiornoSettimana;
declare const numbers: number[];
declare const numbers2: Array<number>;
declare const tupla: [string, string, string, number, number];
interface Persona {
    firstname: string;
    lastname: string;
    age: number;
}
declare const persona: Persona;
interface Utente {
    email: string;
    telefono?: string;
}
declare const utente1: Utente;
declare const utente2: Utente;
//# sourceMappingURL=index.d.ts.map