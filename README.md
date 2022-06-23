# UofU-Module10-Assignment

<h1 align="center">Module 10 Assignment- Team Profile Generator</h1>
  
## Description
Command-line application that takes information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
This application will require Jest for running tests and Inquirer for collecting input from users. The application will be invoked by using "node index.js"
## Usage
### User Story
AS A manager <br />
I WANT to generate a webpage that displays my team's basic info<br />
SO THAT I have quick access to their emails and GitHub profiles<br />

### Acceptance Criteria
GIVEN a command-line application that accepts user input<br />
WHEN I am prompted for my team members and their information<br />
THEN an HTML file is generated that displays a nicely formatted team roster based on user input<br />
WHEN I click on an email address in the HTML<br />
THEN my default email program opens and populates the TO field of the email with the address<br />
WHEN I click on the GitHub username<br />
THEN that GitHub profile opens in a new tab<br />
WHEN I start the application<br />
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number<br />
WHEN I enter the team manager’s name, employee ID, email address, and office number<br />
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team<br />
WHEN I select the engineer option<br />
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu<br />
WHEN I select the intern option<br />
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu<br />
WHEN I decide to finish building my team<br />
THEN I exit the application, and the HTML is generated<br /><br />
## License
## Contributing
## Tests
Employee.test.js, Engineer.test.js, Intern.test.js, Manager.test.js <br /> Each of these tests can be ran using Jest in the terminal.
## Questions
GitHub: [chigley22](https://github.com/chigley22)<br /> <br />
Feel free to email me with any questions: cman_hig@hotmail.com
