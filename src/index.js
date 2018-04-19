import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './common/win-directional-navigation';
import './common/win-handle-focus-change';
import './common/windows';

window.navigator.gamepadInputEmulation = 'keyboard';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
