import {StudentManager} from "./StudentManager";
import {Menu} from "./Menu";

export const readlineSync = require("readline-sync")
export  const studentManager = new StudentManager();
const mainMenu: string[] = [
    'Hien thi danh sach sinh vien',
    'Tim kiem sinh vien theo ten',
    'Nhap thong tin sinh vien moi',
    'Chinh sua thong tin nhan vien',
    'Xoa nhan vien khoi ung dung'
];

export const dataDisplay: string[] = ['_code', '_nameStudent', '_className', '_homeTown', '_score'];

export const classSelect: string[] = [
    'C0223G1',
    'G0223G2',
    'H0323G4',
]

export function inputData(data: string) {
    return readlineSync.question(data);
}

export function pressEnterToBack() {
    return readlineSync.question('Nhan phim "Enter" de quay lai!');
}

function init() {
    let loop: boolean = true;
    while (loop) {
        let index = readlineSync.keyInSelect(mainMenu,'Chon chuc nang:', {cancel: 'EXIT'})
        switch (index) {
            case 0:
                Menu.showStudents();
                pressEnterToBack();
                break;
            case 1:
                Menu.findStudentByName();
                pressEnterToBack();
                break
            case 2:
                Menu.addInfoStudent();
                pressEnterToBack();
                break;
            case 3:
                Menu.updateInfoStudent();
                pressEnterToBack();
                break;
            case 4:
                Menu.deleteStudent();
                pressEnterToBack();
                break;
            default:
                if (readlineSync.keyInYN('Ban co chac chan muon thoat?')) {
                    loop = false;
                }
                break;
        }
    }
}

init();
