// agi (annual gross income), ni (net income),
//  ft (federal tax)
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

if (agi <= 0 || isNaN(agi)) 
    {document.getElementById("result").innerHTML = 
    "Income must be greater than 0"
    return;}

let cppAmount = agi * cpp;
let eiAmount = agi * ei;
let federal = agi * ft;
provTax = 0;

if (prov === "Ontario") {provTax = agi * 0.0505;}
if (prov === "Alberta") { provTax = agi * 0.10; }
if (prov === "British Columbia") 
    { provTax = agi * 0.0506; }
if (prov === "Saskatchewan") { provTax = agi * 0.105; }
if (prov === "Manitoba") { provTax = agi * 0.108; }
if (prov === "Quebec") { provTax = agi * 0.15; }
if (prov === "New Brunswick") { provTax = agi * 0.094; }
if (prov === "Newfoundland and Labrador") 
    { provTax = agi * 0.087; }
if (prov === "Nova Scotia") { provTax = agi * 0.0879; }
if (prov === "Prince Edward Island") 
    { provTax = agi * 0.098; }
    
deductions = cppAmount + eiAmount + federal + provTax;
ni = agi - deductions;

document.getElementById("result").innerHTML =
"Net Income: $" + ni.toFixed(2); }