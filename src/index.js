import React from 'react';
import ReactDOM from 'react-dom';
import App from './example/App';
import registerServiceWorker from './example/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
