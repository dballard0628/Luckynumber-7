// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

import fs from "fs"

function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
    }
    if (license === "GNU") {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](${renderLicenseLink(license)})`
    }
    if (license === "APACHE") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    }
    if (license === "GNU") {
        return `[GNU](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    }
    if (license === "APACHE") {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let path = "";
    if (license === "MIT") {
        path = "utils/mit.md";
    }
    if (license === "GNU") {
        let path = "utils/gnu.md";
    }
    if (license === "APACHE") {
        let path = "utils/Apache.md";
    }
    const text = fs.readFileSync(path, "utf-8");
    return text;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseText = renderLicenseSection(data.license);
    fs.writeFileSync("LICENSE", licenseText);

    return `# ${data.title}

${licenseBadge}

## Table of Contents 
- [License](#license)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [How to reach me](#how-to-reach-me)

## License
${renderLicenseLink(data.license)}



  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution guidelines
  ${data.contribution}

  ## Test instructions
  ${data.test}

  ## How to reach me 
  ${data.email}
   https://github.com/${data.gitUsername}
`;
}

export default generateMarkdown;
