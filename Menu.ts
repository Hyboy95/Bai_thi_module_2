import {classSelect, dataDisplay, inputData, readlineSync, studentManager} from "./Main";
import {ClassName, Student} from "./Student";


export class Menu {
    static creatRandomCode(): string {
        let randomCode: string = 'code';
        do {
            for (let i: number = 0; i < 5; i++) {
                randomCode += Math.floor(Math.random() * 10).toString();
            }
        } while (studentManager.findIndexStudentByCode(randomCode) !== -1)
        return randomCode;
    }
    static selectClassName() {
        let index = readlineSync.keyInSelect(classSelect,'Chon chuc nang:', {cancel: 'I0223G5'})
        switch (index) {
            case 0:
                return ClassName.C0223G1;
            case 1:
                return ClassName.G0223G2;
            case 2:
                return ClassName.H0323G4;
            default:
                return ClassName.I0223G5;
        }
    }
    static InputStudentInfo(): Student | undefined {
        let code: string = this.creatRandomCode();
        let nameStudent: string = inputData('Ten hoc sinh: ');
        if (!nameStudent) {
            console.log('Ten hoc sinh khong hop le!');
            return;
        }
        let classname: ClassName = this.selectClassName();
        let homeTown: string = inputData('Que quan: ');
        if (!homeTown) {
            console.log('Que quan khong hop le.');
            return;
        }
        let scoreStr: string = inputData('Diem: ');
        if (!scoreStr || isNaN(+scoreStr) || parseInt(scoreStr) < 0 || parseInt(scoreStr) > 10) {
            console.log('Diem khong hop le.');
            return;
        }
        let hobby: string = inputData('So thich: ');
        if (!hobby) {
            console.log('So thich khong hop le');
            return;
        }
        return new Student(code, nameStudent, classname, homeTown, parseInt(scoreStr), hobby);
    }

    static showStudents() {
        if (studentManager.isEmpty()) {
            console.log('Danh sach sinh vien rong!');
            return;
        }
        console.table(studentManager.showList());
    }

    static findStudentByName() {
        if (studentManager.isEmpty()) {
            console.log('Danh sach sinh vien rong!');
            return;
        }
        let nameStudent = inputData('Nhap ten sinh vien muon tim: ');
        let studentSearch = studentManager.searchStudentByName(nameStudent);
        if (studentSearch.length === 0) {
            console.log('Khong co du lieu phu hop!');
            return;
        }
        console.table(studentSearch, dataDisplay);
    }

    static addInfoStudent() {
        let student: Student | undefined = this.InputStudentInfo();
        if (student) {
            studentManager.addStudent(student);
            console.log('Them thanh cong!');
        }
    }

    static updateInfoStudent() {
        if (studentManager.isEmpty()) {
            console.log('Danh sach sinh vien rong!');
            return;
        }
        console.table(studentManager.showList());
        let code: string = inputData('Nhap code sinh vien muon chinh sua: ');
        let index: number = studentManager.findIndexStudentByCode(code);
        if (index === -1) {
            console.log('Khong ton tai sin vien can chinh sua!');
            return;
        }
        let newStudent: Student | undefined = this.InputStudentInfo();
        if (newStudent) {
            studentManager.updateStudent(code, newStudent);
        }
    }

    static deleteStudent() {
        if (studentManager.isEmpty()) {
            console.log('Danh sach sinh vien rong!')
            return;
        }
        console.table(studentManager.showList());
        let code: string = inputData('Nhap code sinh vien muon xoa: ');
        studentManager.deleteStudent(code);
    }
}