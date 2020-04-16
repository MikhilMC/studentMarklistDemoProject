function generatePercentageCard() {
    let studentName = document.getElementById("name").value;
    let className = document.getElementById("class").value;
    let rollNumber = document.getElementById("rollNo").value;
    let mark1 = document.getElementById("mark1").value;
    mark1 = Number(mark1);
    let mark2 = document.getElementById("mark2").value;
    mark2 = Number(mark2);
    let mark3 = document.getElementById("mark3").value;
    mark3 = Number(mark3);
    let percentage = getPercentage(mark1, mark2, mark3);
    setResult(studentName, className, percentage);
}

function getPercentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    let avg = total / 300;
    return (avg * 100).toFixed(2);
}

function setResult(name, cls, per) {
    let formBox = document.querySelector(".form-box");
    formBox.setAttribute("hidden", "true");
    let resultBox = document.querySelector(".percentage-card");
    resultBox.removeAttribute("hidden");
    document.getElementById("studentName").textContent = name;
    document.getElementById("className").textContent = cls;
    document.getElementById("percentage").textContent = per + "%";
}