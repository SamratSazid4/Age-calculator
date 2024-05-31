
function calculateAge() {
    // Get input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}

function validateForm() {
    // Get input values
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Get the calculate button
    const calculateButton = document.getElementById('calculateButton');

    // Check if all fields have values
    if (day && month && year) {
        calculateButton.disabled = false;
    } else {
        calculateButton.disabled = true;
    }
}

document.addEventListener('DOMContentLoaded', validateForm);
