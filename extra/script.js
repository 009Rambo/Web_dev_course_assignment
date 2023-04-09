function calculateBMI() {
	// Get input values
	const height = document.getElementById('height').value;
	const weight = document.getElementById('weight').value;

	// Calculate BMI
	const bmi = (weight / ((height/100) ** 2)).toFixed(2);

	// Display result
	document.getElementById('result').textContent = bmi;
}
