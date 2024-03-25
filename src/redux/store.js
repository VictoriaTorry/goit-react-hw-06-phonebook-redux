import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const reducer = (state, action) => {
  switch (action.type) {
    case 'onAdding':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]   
      };

    case 'onDelete':
        return {
            ...state,
            contacts: state.contacts.filter(item => item.id !== action.payload)
        };
      
    case 'onFilter':
        return {
            ...state,
            filter: action.payload
          };

    default:
      return state;
  }
};

let initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
const initialContacts = JSON.parse(localStorage.getItem('contacts'));
if(initialContacts){
    initialState = initialContacts;
}

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, {contacts: initialState, filter: ''}, enhancer);
