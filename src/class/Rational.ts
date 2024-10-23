/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator() {
        return this.numerator;
    }

    getDenominator() {
        return this.denominator;
    }

    GCD() {
        let a = this.numerator;
        let b = this.denominator;
        while (b) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    normalize() {
        let gcd = this.GCD();
        let NUM = this.numerator /= gcd;
        let DEN = this.denominator /= gcd;
        return new Rational(NUM, DEN);
    }

    isWhole(){
        return this.numerator % this.denominator === 0;
    }

    isDecimal(){
        return !this.isWhole();
    }

    equals(value: number | Rational, denominator?: number): boolean {
        const r1 = this.normalize(); 
        let r2: Rational;
        if (typeof value === "number" && typeof denominator === "number") {
            r2 = new Rational(value, denominator).normalize();
        } else if (value instanceof Rational) {
            r2 = value.normalize();
        } else {
            return false;
        }
        return r1.getNumerator() === r2.getNumerator() && r1.getDenominator() === r2.getDenominator();
    }
    static _parseRational(numeratorChars: string[], denominatorChars: string[]){
        const numeratorStr = numeratorChars.join('');
        const denominatorStr = denominatorChars.join('');
        const numerator = parseInt(numeratorStr,10);
        const denominator = parseInt(denominatorStr,10);
        return new Rational(numerator, denominator);
    }

    static parseRational(str: string){
        let sp: string[] = str.split('/');
        let n: number = parseInt(sp[0],10);
        let d: number = parseInt(sp[1],10);
        return new Rational(n, d);
    }
    toString(){
        return `${this.numerator}/${this.denominator}`;
    }
}
