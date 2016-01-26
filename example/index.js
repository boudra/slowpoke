const React = require('react');
const ReactDOM = require('react-dom');

import SlowPoke from '../index';

const App = props => (
    <SlowPoke type="round" />
);

ReactDOM.render(<App/>, document.getElementById('app'));
