class MarkDown {

    static renderLicenseBadge(license) {
      const badges = {
        mit: '![GitHub](https://img.shields.io/github/license/gpkarlsson/09-Nodejs-ReadMe-Generator?style=plastic)',
        isc: '[![License: ISC'
        //gnup1v3:
      }
    }
  
    static generateMarkdown(data) {
      return `
      # ${data.title}
      
      ## Description
      ${data.description}
      
      ## Table of Contents
      - [Project Description](#Description)
      - [Usage](#Usage)
      - [Credits](#Credits)
      - [Installation](#Installation)
      ## Usage
      ## Credits
      ${data.credits}
      ## Installation
      ${data.installation}
      ## Contact
      ${data.email}
      ${data.github}
      ## License
      ${data.license} + # Released under MIT License
      MIT License
      Copyright (c) [2023] [Gordon Karlsson]
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
    `;
    }
  }
  
  // TODO: Create a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) { }
  
  
  module.exports = MarkDown;