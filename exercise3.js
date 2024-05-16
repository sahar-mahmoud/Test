//1

let checkAge=(age)=> (age>18)?"Hello":confirm("Do you have your parents permission to access this page?");

//2
function pow(x, y) {
    if (y < 1) {
      return "The number should be natural";
    }
    let res = 1;
    for (let i = 0; i < y; i++) {
      res *= x;
    }
    return res;
  }
  console.log(pow(3,5));

  //3

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

//4

let calculator = {
    read() {
      this.a = Number(prompt("Enter the First value"));
      this.b = Number(prompt("Enter the Second value"));
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
  
  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());

  //5

let min = (a, b) => (a < b ? a : b);
console.log(min(4,6));
  