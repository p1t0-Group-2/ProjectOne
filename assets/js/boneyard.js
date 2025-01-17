// Just where I am keeping code that will be useful for these projects, taken from other activites we did in class


// // Acceptance Criteria
// // It's done when I click the Save button and the form's current values are stored in a object.

// // It's done when the object is saved as a string using localStorage.


// const firstNameInput = document.querySelector('#first-name');
// const lastNameInput = document.querySelector('#last-name');
// const emailInput = document.querySelector('#email');
// const passwordInput = document.querySelector('#password');
// const signUpButton = document.querySelector('#sign-up');

// signUpButton.addEventListener('click', function (event) {
//   event.preventDefault();

//   // TODO: Create user object from submission
//   const user = {
//     firstName: firstNameInput.value,
//     lastName: lastNameInput.value,
//     email: emailInput.value,
//     password: passwordInput.value
//   };

//   // TODO: Set new submission to local storage
//   localStorage.setItem('user',JSON.stringify(user));

// saveButton.addEventListener('click', function (event) {
//     event.preventDefault();
  
//     const studentGrade = {
//       student: student.value,
//       grade: grade.value,
//       comment: comment.value.trim(),
//     };
  
//     localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
//     renderMessage();
//   });
  
//   function renderMessage() {
//     const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
//     if (lastGrade !== null) {
//       document.querySelector('.message').textContent =
//         lastGrade.student + ` received a/an ${lastGrade.grade}`;
//     }
//   }

// });








// This is when we used empty arrays for the grid rather than populating them with empty strings



// // Check if the selected location is valid (not full)
// let validMove = false;
// if (gameBoard[selectedColumn].length < 6) {
//     // Update the game board with the player's move (drop to the lowest Y-value in that X-value)
//     validMove = true;
//     gameBoard[selectedColumn].push(playerNumber)
//     console.log("Valid move");
//     console.log(selectedColumn,gameBoard[selectedColumn].length);
// } else {
//     //If the Y column is full, the player must select a different column
//     console.log("Column is full, select a different column");
//     console.log(gameBoard);
// }



