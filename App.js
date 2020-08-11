import React from 'react';
import './App.css';
import RequestType from './components/RequestType'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import UserData from './components/UserData'
import theme from './theme'
import sampleData from './Data';
/** Theme provider added for base component */
function App() {
  return (
    <div className="App" style={{width:'918px'}}>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <UserData/>
        {/* <RequestType sampleData={sampleData} /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
