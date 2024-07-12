let balance = 0;

function bankApp() {
    let action;

    while (action !== 'Q') {
        action = prompt("Enter Q to quit\nEnter W to withdraw\nEnter D to deposit\nEnter B to view balance").toUpperCase();

        switch (action) {
            case 'W':
                let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
                if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    if (withdrawAmount <= balance) {
                        balance -= withdrawAmount;
                        alert(`You withdrew $${withdrawAmount}. Your new balance is $${balance}.`);
                    } else {
                        alert("Insufficient funds.");
                    }
                } else {
                    alert("Invalid amount.");
                }
                break;

            case 'D':
                let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    balance += depositAmount;
                    alert(`You deposited $${depositAmount}. Your new balance is $${balance}.`);
                } else {
                    alert("Invalid amount.");
                }
                break;

            case 'B':
                alert(`Your current balance is $${balance}.`);
                break;

            case 'Q':
                alert("Thank you for using the bank application. Goodbye!");
                break;

            default:
                alert("Invalid option. Please enter W, D, B, or Q.");
                break;
        }
    }
}

// Run the bank application when the script is loaded
bankApp();
