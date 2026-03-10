// agi (annual gross income), ft (federal tax), ni (net income)
let agi;
let prov;
let provTax;
let deductions;
let ni;
const cpp = 0.0595;
const ei = 0.0163;
const ft = 0.15;

function calculate() {
agi = Number(document.getElementById("income").value);
prov = document.getElementById("prov").value;

let cppAmount = agi * cpp;
let eiAmount = agi * ei;
let federal = agi * ft;

if (prov === "Ontario") {provTax = agi * 0.0505;}
    deductions = cppAmount + eiAmount + federal + provTax;
    ni = agi - deductions;

if (agi > 0) {document.getElementById("result").innerHTML = 
    "Income must be greater than 0"
    return;}

document.getElementById("result").innerHTML =
"Net Income: $" + ni;
}