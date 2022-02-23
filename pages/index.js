import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar';
import {
  Wrapper,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  ThemeLabel,
} from './styles';

import { Grid, Row, Col } from '../src/components/globalStyles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/components/globalStyles';
import { lightTheme, darkTheme } from '../src/components/Themes';

export default function Home() {
  const [theme, setTheme] = useState('Light Mode');
  const themeToggler = () => {
    theme === 'Light Mode' ? setTheme('Dark Mode') : setTheme('Light Mode');
  };

  return (
    <ThemeProvider theme={theme === 'Light Mode' ? lightTheme : darkTheme}>
      <Navbar></Navbar>
      <Row>
        <Col size={25}>
          <ThemeLabel>{theme}</ThemeLabel>
        </Col>
        <Col size={1}>
          <CheckBoxWrapper>
            <CheckBox onClick={themeToggler} id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
        </Col>
      </Row>
      <Wrapper>
        <Grid>
          {/* <Title>Hello World</Title>
          <Row>
            <Col size={1}>
              <Title>aaa</Title>
            </Col>
            <Col size={1}>
              <Title>aaa</Title>
            </Col>
          </Row> */}
        </Grid>
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}
