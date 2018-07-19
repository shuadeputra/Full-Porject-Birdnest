import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';

// const $ = require('jquery')
// // $.DataTable = require('datatables.net')
// $(function() {
//   $('#example').DataTable();
// } 
// );

// Start Reducers
// InitialState fungsinya seperti state biasa
const initialState = {
  login: "",
  username: "",
  invoicenumber: "",
  userid: "",
  id_product:"",
};

function reducer(state = {initialState}, action) {
  switch (action.type) {
    // case for login problem
    case 'login':
      return {
        login: action.value,
        username: action.value2,
        userid: action.userid_number
      };
    // end of case login

    // case for invoice problem
    case 'ditelinvoice':
      return {
        invoicenumber: action.invoice,
        login: action.value,
        username: action.value2,
        userid: action.userid_number
      };
    // end of case invoice

     // case for product problem
     case 'product_picture':
     return {
       id_product: action.id,
       login: action.value,
       username: action.value2,
       userid: action.userid_number
     };
   // end of case product

  //  case for logout problem
  case 'logout':
  return {
  };
  // end of logout

    default:
      return state;
  }
}

const store = createStore(reducer);
// End of Reducers

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();


