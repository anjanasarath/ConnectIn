import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FormContainer from './CompanyFormContainer';

const muiTheme = getMuiTheme({});

export default class App extends React.Component {
  render() {
    return (
          <div>
            <MuiThemeProvider muiTheme={muiTheme}>
              <div className='row center'>
                <FormContainer/>
              </div>
            </MuiThemeProvider>
          </div>
    );
  }
}
