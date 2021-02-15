import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'add': return state + Number(action.number);
        case 'plus': return state + 1;
        case 'minus': return state - 1;
        case 'reset': return 0;

        default: return  state
    }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


