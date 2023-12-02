var ownerDB: { name: string, amount: number, interestRate: number, annualInterest: number }[] = [];


/* tsc app.ts --watch --> Auto compile ( ts --> js) */

let owner_name_input_element = document.getElementById('ownerName') as HTMLInputElement;
let owner_fixed_amount_input_element = document.getElementById('fixedAmount') as HTMLInputElement;
let add_fix_btn_element = document.getElementById('addFixBtn');

add_fix_btn_element.addEventListener("click", () => {
    let name = owner_name_input_element.value;
    let amount: any = owner_fixed_amount_input_element.value;

    console.log("Owner name :", name);
    console.log("fixed amount :", amount);

    console.log(`Owner : ${name}, fixed amount : ${amount}`);


    var ownerObject = {
        name: name,
        amount: amount,
        interestRate: 0,
        annualInterest: 0
    }

    ownerDB.push(ownerObject);
    loadOwner();


    /* update Interest */
    document.getElementById('updateInterestBtn').addEventListener("click", () => {
        console.log("clicked..")
        let new_interest_rate = document.getElementById('newInterestRate') as HTMLInputElement;

        let newRate: any = new_interest_rate.value;


        ownerDB.forEach(owner => {
            owner.interestRate = newRate;
            owner.annualInterest = ((owner.amount / 100) * newRate) * 12;
        })

        loadOwner()
    })

})


function loadOwner() {
    let table = document.getElementById('fixedDepositTableBody');
    let rows = "";
    for (let i = 0; i < ownerDB.length; i++) {
        /*create HTML row*/

        rows += `<tr><td>${ownerDB[i].name}</td><td>${ownerDB[i].amount}</td><td>${ownerDB[i].interestRate}</td><td>${ownerDB[i].annualInterest}</td></tr>`;
    }
    table.innerHTML = rows;
}




