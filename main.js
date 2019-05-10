const todos = [
  {
    id: 1,
    text: "TAsk 1",
    isCorrect: true
  },
  {
    id: 2,
    text: "Task 2",
    isCorrect: true
  },
  {
    id: 3,
    text: "Task 3",
    isCorrect: false
  }
];

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    console.log("*");
  }
  console.log("<br>");
}
