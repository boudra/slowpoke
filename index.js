var React = require('react');

Object.assign = function (target) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  var output = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    if (source !== undefined && source !== null) {
      for (var nextKey in source) {
        if (source.hasOwnProperty(nextKey)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
  }
  return output;
}

var fullScreen = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
};

var spinnerTypes = {
  roundSpinner: React.createClass({
    getInitialState: function() {
      return { rotation: 0.0 };
    },
    getDefaultProps: function() {
      return {
        show: false,
        speed: 4,
        size: 30,
        weight: 19,
        foreground: 'rgba(0,0,0,0.7)',
        background: 'rgba(0,0,0,0.2)'
      };
    },
    componentDidMount: function() {
      this.tick();
    },
    tick: function() {
      this.setState({
        rotation: (this.state.rotation + this.props.speed) % 720,
        frameRequest: window.requestAnimationFrame(this.tick)
      });
    },
    componentWillUnmount: function() {
      window.cancelAnimationFrame(this.state.frameRequest);
    },
    render: function() {
      return React.createElement("div", { className: "slowpoke" },
        React.createElement("div", {
            style: {
              width: this.props.size,
              height: this.props.size,
              marginLeft: -this.props.size * 0.5,
              marginTop: -this.props.size * 0.5,
              position: 'absolute',
              top: '50%',
              left: '50%',
              borderRadius: '100%',
              transform: "rotateZ(" + this.state.rotation + "deg)",
              border: (this.props.size * (this.props.weight/100)) + "px solid " + this.props.background,
              borderRightColor: this.props.foreground
            }
        })
      );
    }
  })
};

function SlowPoke(props) {
  var spinnerName = props.type + "Spinner";
  if(!props.show) return React.createElement("div");
  return React.createElement("div", {
    className: "slowpoke-container",
    style: Object.assign({}, fullScreen, props.style)
  }, React.createElement(spinnerTypes[spinnerName], props || {}));
}

module.exports = SlowPoke;
