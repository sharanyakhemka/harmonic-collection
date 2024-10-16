// JavaScript to handle file uploads and voting

// Function to handle file upload
document.getElementById('uploadForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get the uploaded file
  const fileInput = document.getElementById('interpretation');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  // Simulate adding the uploaded image to the page (since no server is involved)
  const interpretationsDiv = document.getElementById('interpretations');
  
  const interpretationItem = document.createElement('div');
  interpretationItem.classList.add('interpretation-item');
  
  const img = document.createElement('img');
  img.src = URL.createObjectURL(file); // Temporary URL for the uploaded file
  img.alt = 'User Interpretation';

  const p = document.createElement('p');
  p.textContent = `Interpretation from User`;

  const voteButton = document.createElement('button');
  voteButton.classList.add('vote-button');
  voteButton.textContent = 'Vote';
  voteButton.addEventListener('click', function () {
    voteButton.textContent = 'Voted!'; // Change button text after voting
    voteButton.disabled = true; // Disable the button after voting
  });

  // Append elements to the interpretation item and the main div
  interpretationItem.appendChild(img);
  interpretationItem.appendChild(p);
  interpretationItem.appendChild(voteButton);
  interpretationsDiv.appendChild(interpretationItem);

  // Clear the file input after uploading
  fileInput.value = '';
});

// Add event listeners for vote buttons on loaded interpretations (if needed)
document.querySelectorAll('.vote-button').forEach(button => {
  button.addEventListener('click', function () {
    button.textContent = 'Voted!'; // Change button text after voting
    button.disabled = true; // Disable the button after voting
  });
});
