import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui-components';
import Items from './Items';

export default () => {
  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <Items />
      </ThemeProvider>
    </div>
  )
}