
function main() {
    const billInput = document.getElementById("bill");
    const tipInput = document.getElementById("tip");
    const totalBill = document.getElementById("total");
    const calBtn = document.getElementById("calculate");
    calBtn.addEventListener("click", () => {
        let billVal = parseFloat(billInput.value);
        let tipVal = parseFloat(tipInput.value);
        
        if (isNaN(billVal) || isNaN(tipVal)){
            alert("Bill Amount, Tip Percentage should be numeric");
        }

        const totalVal = billVal + (billVal * tipVal / 100);
        totalBill.innerText = totalVal.toFixed(2);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    main();
})
