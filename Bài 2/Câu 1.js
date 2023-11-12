//------------ Bai 1 ---------------
// Hãy tạo một prompt với câu hỏi :"Độ tuổi cần tìm?".
// Khi nhập vào một số, hiển thị ra màn hình tên của những người có
// độ tuổi tuong wungws nhập vào. Nếu không có thì hiển thị: "Không tìm thấy!"

let students = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"],
    },
    {
        name: "NVB",
        age: 14,
        course: ["mindX 01", "mindX 02", "mindX 04"],
    },
    {
        name: "NVC",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 03"],
    },
    {
        name: "NVD",
        age: 19,
        course: ["mindX 01", "mindX 02", "mindX 04"],
    },
    {
        name: "NVE",
        age: 20,
        course: ["mindX 01", "mindX 02", "mindX 03"],
    },
]

//user input 
const input = prompt("Do tuoi cua ban:");

// check information
// -------- Array.map ----------

rs = students.map((item) => {
    if(item.age == input) {
        //truong hop dung
        return item.name;
    }
});

if(rs) {
    console.log(rs);
} else {
    console.log("Khong tim thay");
}

let count = 0;
rs.forEach((i) => {
    if(i == undefined){
        count ++;
    } 
});

if(count <4) {
    console.log(rs);
} else if (count==4) {
    console.log("Khong tim thay");
}

// --------- Array.filter ----------
let rs1 = students.filter((item) => item.age ==input)
.map(item => item.name);
//check data
if (rs1.length == 0) {
    console.log("Khong tim thay");
} else {
    console.log(rs1);
}

// Hãy tạo một prompt với câu hỏi: "Khóa học cần tìm?".
// Khia nhập vào mã khoác học (VD: mindX 02) sẽ hiển thị ra màn hình
//tên tất cả những người học khóa đó. Nếu khóa học có,
// hiển thị: "Chưa có lớp học này"

const input1 = prompt("Khoa hoc can tim");
let rsCourse = students.filter(item => item.course.filter(c=>c==input1).length != 0)
.map((item)=> item.name);
if (rsCourse.length==0){
    console.log("Khong tim thay khoa hoc"); 
} else {
    console.log(rsCourse);
}



