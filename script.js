document.getElementById("submit").addEventListener("click",calculate)
document.getElementById("7c").addEventListener("click", (a) => (scyk("7")))
document.getElementById("8c").addEventListener("click", (a) => (scyk("8")))
document.getElementById("9c").addEventListener("click", (a) => (scyk("9")))
document.getElementById("4c").addEventListener("click", (a) => (scyk("4")))
document.getElementById("5c").addEventListener("click", (a) => (scyk("5")))
document.getElementById("6c").addEventListener("click", (a) => (scyk("6")))
document.getElementById("1c").addEventListener("click", (a) => (scyk("1")))
document.getElementById("2c").addEventListener("click", (a) => (scyk("2")))
document.getElementById("3c").addEventListener("click", (a) => (scyk("3")))
document.getElementById("+c").addEventListener("click", (a) => (scyk("+")))
document.getElementById("-c").addEventListener("click", (a) => (scyk("-")))
document.getElementById("/c").addEventListener("click", (a) => (scyk("/")))
document.getElementById("0c").addEventListener("click", (a) => (scyk("0")))
document.getElementById("*c").addEventListener("click", (a) => (scyk("*")))
document.getElementById("clear").addEventListener("click", (a) => clearit())

function calculate(a){
    var input = document.getElementById("text_field").value
    const ans = eval(input)
    document.getElementById("text_field").value =  ans
} 

function scyk(val) {
    document.getElementById("text_field").value += val
}

function clearit(){
    document.getElementById("text_field").value = ''
}
