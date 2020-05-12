import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ocGray3, ocIndigo8, ocPink6, ocGray7 } from './constants/style';
import { ExpensebookPage } from './components/ExpensebookPage';
import { DialogProvider } from './contexts/DialogContext';
import { ExpenseProvider } from './contexts/ExpenseContext';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    
    background: ${ocGray3};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        buttonColors: {
          indigo: ocIndigo8,
          pink: ocPink6,
          gray: ocGray7,
        },
      }}
    >
      <DialogProvider>
        <ExpenseProvider>
          <GlobalStyle />
          <ExpensebookPage />
        </ExpenseProvider>
      </DialogProvider>
    </ThemeProvider>
  );
}

export default App;
