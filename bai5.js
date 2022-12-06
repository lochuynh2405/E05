const readline = require('readline-sync')

function xinChao(person) { 
    console.log(`Xin chào, mình tên là ${person.name}.`)
    console.log(`Mình sinh năm ${person.dateOfBirth} nha.`)
    console.log('Rất vui được gặp bạn.')
    console.log(`Nơi ở ${person.choo}`)
    const tuoi = 2022 - person.yearOfBirth

    return tuoi
}

function nhapTen() {
    let ten
    do {
        ten = readline.question('Nhap ten: ')
        if (ten.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (ten.length == 0)

    return ten
}

function nhapNamSinh() {
    let namSinh
    do {
        namSinh = Number(readline.question('Nhap nam sinh: '))
        if (namSinh < 1900 || namSinh > 2022) {
            console.log('Vui long nhap nam sinh hop le')
        }
    } while (namSinh < 1900 || namSinh > 2022)

    return namSinh
}
function Where(){
    let sonha
    do {
        sonha = readline.question('Nhap sonha: ')
        if (sonha.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (sonha.length == 0)

    return sonha
    
}
function nhapThongTin() {
    
    const person = {
        name: '',
        dateOfBirth: 0,
        choo:'',
    }

    
    person.name = nhapTen()

    
    person.dateOfBirth = nhapNamSinh()
    person.choo = Where() 

    return person

}


function cnXinChao() {
    const p = nhapThongTin();
    
    xinChao(p)
    
}

cnXinChao()