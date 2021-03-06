import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
import App from './App';
import reportWebVitals from './reportWebVitals';

let render = () => {
    ReactDOM.render(<Root>< App /> </Root>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept('./Root', () => {
        setTimeout(() => { render() })
    })
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();