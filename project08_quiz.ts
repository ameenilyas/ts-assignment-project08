import inquirer from "inquirer";

interface OptionInterface {
  question: string;
  answer: string;
  options: [string, string, string, string];
}

const quiz_options: OptionInterface[] = [
  {
    question:
      "1. A …………………. array is one in which the elements not have contiguous indexes starting at 0.",
    answer: "sparse",
    options: ["special", "sparse", "heterogeneous", "dense"],
  },
  {
    question:
      "2. If the array is ………………, the value of the length property is greater than  the number of elements.",
    answer: "sparse",
    options: ["special", "sparse", "heterogeneous", "dense"],
  },
  {
    question:
      "3. The length property specifies the number of elements in the …………….. array in JavaScript.",
    answer: "dense",
    options: ["special", "sparse", "heterogeneous", "dense"],
  },
  {
    question:
      "4. If an array with five elements a=[1,2,3,4,5]; what will do the expression a.length=0 ",
    answer: "deletes all elements",
    options: [
      "checks length of array is 0 or not",
      "deletes all elements",
      "replaces all elements with 0",
      "adds 0 at the beginning",
    ],
  },
  {
    question:
      "5. In ECMAScript 5, allows you to make the length property of an array read only with ………….",
    answer: "Object.defineProperty()",
    options: [
      "Object.defineProperty()",
      "Object.readonlyProperty()",
      "JavaScript.defineProperty()",
      "JavaScript.readonlyProperty()",
    ],
  },
  {
    question:
      "6. Which of the following is the correct expression to make length property of an array read only.",
    answer: "Object.defineProperty(a, “length”, {writable:false});",
    options: [
      "Object.defineProperty(a, “length”, {readonly:true});",
      "Object.defineProperty(a, “length”, {writable:false});",
      "Object.defineProperty(a, {length:writable});",
      "Object.defineProperty(a, “length”, {readwrite:false});",
    ],
  },
  {
    question:
      "7. Which of the following method can’t be used to add array elements in JavaScript.",
    answer: "shift( )",
    options: ["push( )", "shift( )", "splice( )", "All are can be used"],
  },
  {
    question: `8. Which of he following methods can be used to delete array elements in JavaScript array.
    i) delete   ii) shift( )   iii) splice( )  iv) pop( )`,
    answer: "All i, ii, iii and iv only",
    options: [
      "i, ii and iii only",
      "ii, iii and iv only",
      "i, iii and iv only",
      "All i, ii, iii and iv only",
    ],
  },
  {
    question: `9. While iterating elements of an array a, …………………. will  test the array elements in order to skip null, undefined and non existent elements.`,
    answer: "!a[i]",
    options: [
      "!a[i]",
      "a[i]= = = undefined",
      "!(i in a)",
      "!a.hasOwnProperty(i)",
    ],
  },
  {
    question: `10. The ……………….. method in JavaScript returns sub-array of the specified array.`,
    answer: "Array.slice( )",
    options: [
      "Array.join( )",
      "Array.concat( )",
      "Array.slice( )",
      "Array.splice( )",
    ],
  },
];

async function quizOptionPrompt(
  message: string,
  options: string[]
): Promise<string> {
  const answers = await inquirer.prompt({
    name: "selected_option",
    type: "list",
    message: message,
    choices: options,
    //   default() {
    //     return "view students";
    //   },
  });
  return answers.selected_option;
}

let score: number = 0;

// welcome message
console.log("\n\t***************************************");
console.log("\tSelect correct answer to score a point.");
console.log("\t***************************************\n");

for (const quiz of quiz_options) {
  const { question, answer, options } = quiz;
  const selected_options = await quizOptionPrompt(question, options);
  if (selected_options === answer) score++;
}

console.log(`You Score ${score} ${score > 1 ? "points" : "point"}.`);
