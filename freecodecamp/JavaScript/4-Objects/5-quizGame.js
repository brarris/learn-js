const questions = [
  {
    category: "Sejarah",
    question: "Siapa presiden pertama?",
    choices: ["Ir.Soekarno", "Bj.Habibie", "Megawati"],
    answer: "Ir.Soekarno",
  },
  {
    category: "Sejarah",
    question: "Siapa presiden ke-enam?",
    choices: ["Soeharto", "SBY", "Jokowi"],
    answer: "SBY",
  },
  {
    category: "Sejarah",
    question: "Siapa presiden ke-dua?",
    choices: ["Gusdur", "Prabowo", "Soeharto"],
    answer: "Soeharto",
  },
  {
    category: "Sejarah",
    question: "Siapa presiden ke-delapan?",
    choices: ["Jokowi", "Megawati", "Prabowo"],
    answer: "Prabowo",
  },
  {
    category: "Sejarah",
    question: "Siapa presiden ke-empat?",
    choices: ["Gusdur", "SBY", "Soeharto"],
    answer: "Gusdur",
  },
];

/**
 * contoh untuk mendapatkan angka acak 1 hingga 4
 * const angkaAcak = Math.floor(Math.random() * 4) + 1;
 * console.log(angkaAcak); // Akan menghasilkan 1, 2, 3, atau 4
 */

const getRandomQuestion = (arrQuestion) => {
  const randomIndex = Math.floor(Math.random() * arrQuestion.length);
  return arrQuestion[randomIndex];
};

// const randomQuestion = getRandomQuestion(questions);
// console.log(randomQuestion)

const getRandomComputerChoice = (availableChoices) => {
  const randomIndex = Math.floor(Math.random() * availableChoices.length);
  return availableChoices[randomIndex];
};

// const computerChoice = getRandomComputerChoice(randomQuestion.choices)
// console.log(computerChoice)

const getResults = (questionObject, computerChoice) => {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
};
// const result = getResults(randomQuestion, computerChoice);
// console.log(result)

// -----------------------------------------
// ----- Cara Mengakses Fungsi di atas -----
// -----------------------------------------

// 1. Ambil satu pertanyaan acak dari array 'questions'
const randomQuestion = getRandomQuestion(questions);
console.log("Pertanyaan yang terpilih:", randomQuestion.question);

// 2. Minta komputer memilih jawaban acak DARI pilihan pertanyaan di atas
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Komputer menebak:", computerChoice);

// 3. Dapatkan hasilnya
const result = getResults(randomQuestion, computerChoice);
console.log("Hasil:", result);
