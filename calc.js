var string = "";

for (var i = 0; i < 16; i++) {

    document.querySelectorAll(".digit")[i].addEventListener("click", function () {
        var currentDigit = this.innerHTML;
        if (currentDigit !== "=") {
            string += currentDigit;
            document.querySelector(".display").innerHTML = string;
        }
        if (currentDigit === "=") {
            let result = eval(string);
            document.querySelector(".display").innerHTML = result;
        }
        if (currentDigit === "CE") {
            string = "";
            document.querySelector(".display").innerHTML = string;
        }
    });
}
