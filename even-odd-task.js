function checkNumber() {
    let message;
    let input = prompt("Please enter a number:");

    if (input === null || input === "") {
        message = "User cancelled the prompt.";
    } else {
        let number = Number(input);
        if (isNaN(number)) {
            message = "Please enter a valid number!";
        } else if (number % 2 === 0) {
            message = "The number " + number + " is Even.";
        } else {
            message = "The number " + number + " is Odd.";
        }
    }

    document.getElementById("result").innerHTML = message;
}
