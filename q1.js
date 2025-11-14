function parseNumbers() {
    let input = document.getElementById("numberInput").value.trim();

    if (input === "") {
        showError("Please enter some numbers.");
        return null;
    }

    let parts = input.split(/\s+/);

    for (let p of parts) {
        if (isNaN(p)) {
            showError("Invalid input! Only numbers are allowed.");
            return null;
        }
    }

    hideError();
    return parts.map(Number);
}

function computeStatistics(type) {
    let nums = parseNumbers();
    if (!nums) return;

    let n = nums.length;

    let mean = nums.reduce((a, b) => a + b, 0) / n;

    let variance = nums.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / n;

    let sd = Math.sqrt(variance);

    let resultText = "";

    if (type === "mean") resultText = "Mean = " + mean.toFixed(4);
    else if (type === "variance") resultText = "Variance = " + variance.toFixed(4);
    else if (type === "sd") resultText = "Standard Deviation = " + sd.toFixed(4);

    document.getElementById("result").innerText = resultText;
}

function showError(msg) {
    document.getElementById("errorMsg").innerText = msg;
    document.getElementById("result").innerText = "";
}

function hideError() {
    document.getElementById("errorMsg").innerText = "";
}