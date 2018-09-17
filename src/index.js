import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/fundamental-ui/dist/fundamental-ui.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
