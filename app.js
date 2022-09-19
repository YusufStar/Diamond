const input = document.getElementById("diamond_number")
console.log(input)
const draw = document.getElementById("diamond_draw")
console.log(draw)
const result = document.getElementById("result")
console.log(result)

let string = "";
  
draw.addEventListener("click", () => {

for (let i = 1; i <= input.value; i++) {

    for (let j = input.value; j > i; j--) {
      string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      if (k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
    string += "\n";
}


  for (let i = 1; i <= input.value - 1; i++) {

      for (let j = 0; j < i; j++) {
        string += " ";
      }
      for (let k = (input.value - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (input.value - i) * 2 - 1) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
      string += "\n";
    }
    
    document.getElementById("result").innerHTML = string;

    string = ""
  });
  