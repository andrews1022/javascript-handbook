const boxes = document.querySelectorAll('.boxes'); // Grab all checkboxes of a certain class

// Limit the number of checked checkboxes
function limitChecks() {
	const max = 5; // Set the limit of checked boxes to be 5

	checkedBoxes = document.querySelectorAll('.boxes:checked');

	if (checkedBoxes.length > max) {
		return false;
	}

	return checkedBoxes;
}

for (let i = 0; i < boxes.length; i++) {
	boxes[i].onclick = limitChecks;
}
