function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const statements = [
  { input: 'Tisha.currentLocation', return: '"Sydney, Australia"' },
  { input: 'Tisha.contactInfo', return: '["<a href=\'mailto:iamtisha22@gmail.com\'>iamtisha22@gmail.com</a>", "<a rel=\'noopener\' href=\'https://www.linkedin.com/in/tisha-jhabak-91a2a7206/\'>LinkedIn</a>", "<a rel=\'noopener\' href=\'https://github.com/TishaJhabak1014\'>GitHub</a>"]' },
  { input: 'Tisha.resume', return: '"<a rel=\'noopener\' href=\'/Tisha_resume_9.pdf\' target=\'_blank\'>Tisha.pdf</a>"' },
  { input: 'Tisha.blogs', return: '"<a rel=\'noopener\' href=\'/https://medium.com/@jhabaktisha22\' target=\'_blank\'>Tisha@medium</a>"' },
  { input: 'Tisha.interests', return: '["design", "basketball", "cooking", "starcraft"]' },
  { input: 'Tisha.education', return: '"B. Software Engineering (Honours) - The University of Sydney, NSW"' },
  { input: 'Tisha.skills', return: '["Java", "JavaScript", "Python", "React", "Redux", "Flask", "webpack", "git"]' },
  { input: '|', return: '' }

];

const terminalWindow = document.getElementById('terminal-window');
statements.forEach(statement => {
  const statementDiv = document.createElement('div');
  statementDiv.classList.add('statement');
  const inputStatement = document.createElement('div');
  inputStatement.classList.add('input-statement');
  inputStatement.textContent = `> ${statement.input}`; // Add ">" before each input

  const returnStatement = document.createElement('div');
  returnStatement.classList.add('return-statement');
  returnStatement.innerHTML = statement.return;
  statementDiv.appendChild(inputStatement);
  statementDiv.appendChild(returnStatement);
  terminalWindow.appendChild(statementDiv);
  
});
// Function to toggle visibility of blinking "|"
function toggleBlinking() {
  const lastStatement = terminalWindow.lastElementChild;

  if (lastStatement.textContent.includes('|')) {
    lastStatement.textContent = lastStatement.textContent.replace('|', '');
  } else {
    lastStatement.textContent += '|';
  }
  lastStatement.classList.add('input-statement');
  lastStatement.classList.add('blinker');
}

// Call toggleBlinking function every 500 milliseconds to create blinking effect
setInterval(toggleBlinking, 500);

