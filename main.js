
// open pdf
import React, { Component } from 'react';
import Pdf from '/Users/Yichen/Desktop/My_Projects/yichen-yao.github.io/resume.pdf';

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Resume</a>
        </div>
    );

  }
}