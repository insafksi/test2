class Mother {
    name: string;
    eyes: number;

    constructor(n: string, e: number) {
        this.name =  n;
        this.eyes = e;
    }
    speak() {
        console.log("Je me présente, je m'appelle " + this.name);
    }

}
let henri = new Mother("Henri", 2);
console.log(henri);

interface Person {
    name: string;
    eyes: number;
    speak(a: string): string; //type:string + return de type string
}
let helene: Person; 
helene = {
    name: "Hélène",
    eyes: 2
    speak(a: string): string {
        return a + ' ' + this.name;
    }
}; 
console.log(helene)