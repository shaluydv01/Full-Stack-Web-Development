

function myRed(){
    document.getElementById('box-1').style.backgroundColor='red';
}

function myGreen(){
    document.getElementById('box-2').style.backgroundColor='green';
}

function myBlue(){
    document.getElementById('box-3').style.backgroundColor='blue';
}

function myYellow(){
    document.getElementById('box-4').style.backgroundColor='yellow';
}

// Get HTML elements
const header=document.getElementById('h1');
const nameInput=document.getElementById('nameInput');
const submitBtn=document.getElementById('submitBtn');

// Add event listener to submit button
submitBtn.addEventListener('click', (e)=>
{
    e.preventDefault();  // Prevent default form submission
    const name = nameInput.value.trim();   // Get user input

    // Check if input is not empty
    if (name !== '') {
      // Update header text
      header.innerText = `Hello, ${name}!`;
    } else {
      alert('Please enter your name.');
    }
  });


