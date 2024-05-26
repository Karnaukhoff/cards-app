import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { getInfo } from './api';
import { store } from './store/store';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const data = useSelector((state: any) => state.data.all);//переопределить тип
  const dispatch = useDispatch();
  getInfo().then((data) => console.log(data))
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>Hello World!</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
