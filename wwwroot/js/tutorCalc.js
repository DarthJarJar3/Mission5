document.addEventListener("DOMContentLoaded", function () {
    var hourlyRate = 20;
    var btnCalculate = document.getElementById("btnCalculate");
    var hoursNeeded = document.getElementById("hoursNeeded");
    var hoursError = document.getElementById("hoursError");
    var totalCost = document.getElementById("totalCost");

    btnCalculate.addEventListener("click", function (e) {
        e.preventDefault();

        var hoursValue = hoursNeeded.value.trim();
        var hours = parseFloat(hoursValue);

        if (hoursValue === "" || isNaN(hours) || hours <= 0) {
            hoursError.style.display = "block";
            return;
        }

        hoursError.style.display = "none";

        var total = hours * hourlyRate;
        var totalFormatted = total.toFixed(2);
        totalCost.value = "$" + totalFormatted;
    });

    hoursNeeded.addEventListener("input", function () {
        hoursError.style.display = "none";
    });
});
