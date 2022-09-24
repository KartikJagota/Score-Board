let num1 = 0
let num2 = 0
let countEl1 = document.getElementById("count-el-1")
let countEl2 = document.getElementById("count-el-2")

function add1() {
  num1 += 1
  countEl1.textContent = num1

}
function adding1() {
  num2 += 1
  countEl2.textContent = num2
}

function add2() {
  num1 += 2
  countEl1.textContent = num1
}
function adding2() {
  num2 += 2
  countEl2.textContent = num2
}

function add3() {
  num1 += 3
  countEl1.textContent = num1
}
function adding3() {
  num2 += 3
  countEl2.textContent = num2
}

function newGame() {
  countEl1.textContent = 0
  num1 = 0
  countEl2.textContent = 0
  num2 = 0
}
