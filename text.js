// Find or create a hidden div
let hiddenDiv = document.getElementById('hiddenDiv');
if (!hiddenDiv) {
  hiddenDiv = document.createElement('div');
  hiddenDiv.style.display = 'none';
  hiddenDiv.id = 'hiddenDiv';
  document.body.appendChild(hiddenDiv);
}

// Set the inner HTML of the hidden div
hiddenDiv.innerHTML = '<p>This is vivasoft</p>';
