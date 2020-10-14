function obj(nis, nama, nilai){
    //Atribut
    this.nis = nis;
    this.nama = nama;
    this.nilai = nilai;

    //Method
    this.namaObjek = function(){
        return this.nis+this.nama+this.nilai;
    };
}

const obj1 = new obj(11301, "Angga", 90)
const obj2 = new obj(11302, "Cita", 80)
const obj3 = new obj(11303, "Reni", 100)

