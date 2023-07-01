// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
    if (license === "None")
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
  if (license === "None")
  {
    return "";
  }

  else if (license === "Apache License 2.0")
  {
    return `https://choosealicense.com/licenses/apache-2.0`;
  }

  else if (license === "Boost Software License 1.0")
  {
    return `https://choosealicense.com/licenses/bsl-1.0`;
  }

  else if (license === "GNU AGPLv3")
  {
    return `https://choosealicense.com/licenses/agpl-3.0`;
  }

  else if (license === "GNU GPLv3")
  {
    return `https://choosealicense.com/licenses/gpl-3.0`;
  }

  else if (license === "GNU LGPLv3")
  {
    return `https://choosealicense.com/licenses/lgpl-3.0`;
  }

  else if (license === "MIT")
  {
    return `https://choosealicense.com/licenses/mit`;
  }

  else if (license === "Mozilla Public License 2.0")
  {
    return `https://choosealicense.com/licenses/mpl-2.0`;
  }

  else
  {
    return `https://choosealicense.com/licenses/unlicense`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  if (license === "None")
  {
    return "";
  }

  else
  {
    return `This project uses the ${license} license`;
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

  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

  ${selectedLicense}

  ${licenseLink}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}
  
  ## Questions

  My GitHub profile: https://github.com/${data.username}

  For answers to any questions regarding the project, please email me at: ${data.email}`;
}

module.exports = {
  generateMarkdown
};
