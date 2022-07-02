alert("مرحباً بك في موقعي! انا نوره الزهمول، وسوف احسب درجتك");

let grade = prompt("الرجاء ادخال الدرجة");
console.log("%c درجتك هي " + grade, "color:blue");

if (grade >= 90 && grade <= 100) {
  console.log("%c لقد حصلت على امتياز  🥳", "color:green");
} else if (grade >= 80 && grade <= 89) {
  console.log("%c لقد حصلت على جيد جداً 🤩", "color:green");
} else if (grade >= 70 && grade <= 79) {
  console.log("%c لقد حصلت على جيد 🙂", "color:green");
} else if (grade >= 60 && grade <= 69) {
  console.log("%c لقد حصلت على مقبول 😕", "color:green");
} else if (grade >= 50 && grade <= 59) {
  console.log("%c لقد حصلت على ضعيف ☹️", "color:green");
} else {
  console.log("%c راسب 💔", "color:green");
}

//  جافاسكربت ليست جافا
