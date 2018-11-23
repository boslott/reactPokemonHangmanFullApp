import { injectGlobal } from 'styled-components';

const theme = {
  ltRed: '#EF5753',
  red: '#E3342F',
  dkRed: '#CC1F1A',

  pokeYellow: '#ffcd00',
  
  ltestBlue: '#EFF8FF',
  ltBlue: '#6CB2EB',
  blue: '#2779BD',
  dkBlue: '#1C3D5A',

  ltGray: '#DAE1E7',
  gray: '#8795A1',
  dkGray: '#3D4852',

  white: '#FFFFFF',
  offWhite: '#F8FAFC',
  black: '#22292F',

  maxWidth: '100rem',
  boxShadow: '0 1.2rem 2.4rem 0 rgba(0, 0, 0, 0.09)',
};

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

export default theme;