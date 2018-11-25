import React, { Component } from 'react';
import styled from 'styled-components';

import { NameRow } from './NameDisplayStyles';
import { LetterBox } from './NameDisplayStyles';

class NameDisplay extends Component {
  render() {
    return (
      <NameRow>
        {this.props.name.split('').map((letter, index) => (
          <LetterBox key={index}>{letter}</LetterBox>
        ))}
      </NameRow>
    );
  }
}

export default NameDisplay;