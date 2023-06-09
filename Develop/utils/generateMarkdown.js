// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badge}-green.svg)](${renderLicenseLink(license)})
  `
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinkURL = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${licenseLinkURL}/.`
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {

    return `
  ### License 
  ${license}
  ${renderLicenseBadge(license)}
  `
  }
}

// function to generate markdown for README
function generateMarkdown(data) {

  const { projectTitle,
    description,
    install,
    usage,
    contribution,
    test,
    licenseChoice,
    github,
    questionsEmail } = data;

  return `
  
  # ${projectTitle}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Contact](#contact)


  ## Project Description
  ${description}
  ${renderLicenseSection(licenseChoice)} 

  
  ## Installation 
  ${install}


  ## Usage 
  ${usage}


  ## Contribution
  ${contribution}


  ## Testing
  ${test}

  
  ## Contact
  Please contact [${github}](https://github.com/${github}) at ${questionsEmail} with any questions.

`;
}

module.exports = generateMarkdown;
