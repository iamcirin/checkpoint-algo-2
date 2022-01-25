const arry = [1, 2, 5, 1, 3, 4, 3, 5];
let sum1 = 0;
let sum2 = 0;

const toFindDuplicates = (array) =>
  arry.filter((item, index) => array.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(arry);

for (let i = 0; i < duplicateElements.length; i++) {
  for (let j = 0; j < arry.length; j++) {
    if (duplicateElements[i] === arry[j]) {
      sum1 += arry[j];
    }
  }
}

for (let i = 0; i < arry.length; i++) {
  if (duplicateElements.indexOf(arry[i]) === -1) {
    sum2 += arry[i];
  }
}

console.log(duplicateElements);
console.log(sum1);
console.log(sum2);

let container = document.createElement("div");
container.innerHTML = `<h1>First sum: ${sum1}</h1>
<h1>Second sum: ${sum2}</h1>`;
container.style.textAlign = "center";
document.body.append(container);
