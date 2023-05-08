import {Student} from "./Student";

export class StudentManager {
    private _studentsList: Student[] = [];
    constructor() {
    }
    isEmpty(): boolean {
        return this._studentsList.length === 0;
    }

    showList() {
        return this._studentsList;
    }

    searchStudentByName(name: string): Student[] {
        let result: Student[] = [];
        this._studentsList.forEach(student => {
            if (name && student.getNameStudent().toLowerCase().includes(name.toLowerCase())) {
                result.push(student);
            }
        })
        return result;
    }

    addStudent(student: Student) {
        this._studentsList.push(student);
    }

    findIndexStudentByCode(code: string) {
        return this._studentsList.findIndex(item => item.getCode() === code);
    }

    updateStudent(code: string, data: Student) {
        let index = this.findIndexStudentByCode(code);
        if (index !== -1) {
            this._studentsList[index].setNameStudent(data.getNameStudent());
            this._studentsList[index].setClassName(data.getClassName());
            this._studentsList[index].setHomeTown(data.getHomeTown());
            this._studentsList[index].setScore(data.getScore());
            this._studentsList[index].setHobby(data.getHobby());
            console.log('Chinh sua thong tin sinh vien thanh cong!');
        }
    }

    deleteStudent(code: string) {
        let index: number = this.findIndexStudentByCode(code);
        if (index === -1) {
            console.log('Khong ton tai sinh vien can xoa!');
            return;
        }
        this._studentsList.splice(index, 1);
        console.log('Xoa thanh cong!');
    }
}