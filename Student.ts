export enum ClassName{
    C0223G1='C0223G1',
    G0223G2='G0223G2',
    H0323G4='H0323G4',
    I0223G5='I0223G5'
}

export class Student {
    private _code: string;
    private _nameStudent: string;
    private _className: ClassName;
    private _homeTown: string;
    private _score: number;
    private _hobby: string;
    constructor(code: string, nameStudent: string, className: ClassName, homeTown: string, score: number, hobby: string) {
        this._code = code;
        this._nameStudent = nameStudent;
        this._className = className;
        this._homeTown = homeTown;
        this._score = score;
        this._hobby = hobby;
    }


    getCode(): string {
        return this._code;
    }

    setCode(value: string) {
        this._code = value;
    }

    getNameStudent(): string {
        return this._nameStudent;
    }

    setNameStudent(value: string) {
        this._nameStudent = value;
    }

    getClassName(): ClassName {
        return this._className;
    }

    setClassName(value: ClassName) {
        this._className = value;
    }

    getHomeTown(): string {
        return this._homeTown;
    }

    setHomeTown(value: string) {
        this._homeTown = value;
    }

    getScore(): number {
        return this._score;
    }

    setScore(value: number) {
        this._score = value;
    }

    getHobby(): string {
        return this._hobby;
    }

    setHobby(value: string) {
        this._hobby = value;
    }
}