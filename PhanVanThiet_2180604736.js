class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }

    getAverageScore() {
        return (this.score1 + this.score2) / 2;
    }

    getRank() {
        const avg = this.getAverageScore();
        if (avg >= 8) return "Giỏi";
        if (avg >= 6.5) return "Khá";
        if (avg >= 5) return "Trung Bình";
        return "Yếu";
    }
}

const students = [
    new Student("Nam", 19, 7, 8),
    new Student("Lan", 18, 9, 8.5),
    new Student("Hùng", 17, 6, 7),
    new Student("Mai", 20, 8, 9)
];

// 1. In ra xếp loại của từng sinh viên
students.forEach(student => {
    console.log(`${student.name} có xếp loại: ${student.getRank()}`);
});

// 2. Tính điểm trung bình của cả lớp
const classAvgScore = students.reduce((sum, student) => sum + student.getAverageScore(), 0) / students.length;
console.log(`Điểm trung bình của cả lớp: ${classAvgScore.toFixed(2)}`);

// 3. Kiểm tra có sinh viên nào dưới 18 tuổi không?
const hasUnderageStudent = students.some(student => student.age < 18);
console.log(`Có sinh viên nào dưới 18 tuổi không? ${hasUnderageStudent ? "Có" : "Không"}`);

// 4. Kiểm tra cả lớp có đầy đủ tên không?
const allHaveNames = students.every(student => student.name.trim() !== "");
console.log(`Cả lớp có đầy đủ tên không? ${allHaveNames ? "Có" : "Không"}`);

// Chạy chương trình bằng Node.js
if (require.main === module) {
    console.log("");
}