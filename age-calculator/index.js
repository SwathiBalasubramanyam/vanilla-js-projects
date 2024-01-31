
function main(){
    const btn = document.getElementById("calc-age");
    btn.addEventListener("click", calculateAge)
}

function calculateAge() {
    const enteredDate = new Date(document.getElementById("birthday").value);
    const today = new Date();

    if (enteredDate > today){
        alert("You cannot enter a future date");
    }

    let age_df = new Date(today - enteredDate)

    let year = age_df.getUTCFullYear();

    let age  = Math.abs(year - 1970);

    const ageText = document.getElementById("calc-age");

    ageText.innerHTML = `Your age is ${age}`

}

document.addEventListener("DOMContentLoaded", () => {
    main()
})