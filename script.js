// agi (annual gross income), ni (net income), ft (federal tax)
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

if (agi <= 0) {document.getElementById("result").innerHTML = 
    "Income must be greater than 0"
    return;}

provTax = 0;
let cppAmount = agi * cpp;
let eiAmount = agi * ei;
let federal = agi * ft;

if (prov === "Ontario") {provTax = agi * 0.0505;}
    deductions = cppAmount + eiAmount + federal + provTax;
    ni = agi - deductions;

document.getElementById("result").innerHTML =
"Net Income: $" + ni.toFixed(2); }