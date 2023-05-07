// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badge}-green.svg)](${renderLicenseLink(license)})
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLinkURL = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${licenseLinkURL}/.`
}

// TODO: Create a function that returns the license section of README
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const { projectTitle,
    description,
    licenseChoice,
    github,
    questionsEmail } = data;
  return `
  
  # ${projectTitle}

  ## Table of Contents
  - [Description](#project-description)
  - [Contact](#contact)


  ## Project Description
  ${description}
  ${renderLicenseSection(licenseChoice)} 


  ## Contact
  Please contact [${github}](https://github.com/${github}) at ${questionsEmail} with any questions.

`;
}

module.exports = generateMarkdown;
