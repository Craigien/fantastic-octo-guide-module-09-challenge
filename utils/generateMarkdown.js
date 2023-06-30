// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
    if (license === none)
    {
      return "";
    }

    else
    {
      return `https://img.shields.io/badge/License-${license}-blue`;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)
{
  if (license === none)
  {
    return "";
  }

  else
  {
    return `https://choosealicense.com/licenses/${license}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  if (license === none)
  {
    return "";
  }

  else
  {
    return `License: ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data);

  const licenseBadge = renderLicenseBadge(data.license);

  const licenseLink = renderLicenseLink(data.license);

  const selectedLicense = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

      ![alt text](assets/images/screenshot.png)
    
  ## Questions

  ${data.username}

  ${data.email}

  ## License

  ${selectedLicense}

  ## Features

  If your project has a lot of features, list them here.

  ## How to Contribute

  ${data.contribution}

  ## Tests

  ${data.test}`;
}

module.exports = {
  generateMarkdown
};
