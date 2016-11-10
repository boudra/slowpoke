import React from 'react';
import ReactDOM from 'react-dom';

import SlowPoke from '../index';

const App = props => (
    <SlowPoke type="round" show={true} />
);


ReactDOM.render(<App/>, document.getElementById('app'));
