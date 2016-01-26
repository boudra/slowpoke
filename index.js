import React from 'react';

const fullScreen = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
};

const spinnerStyles = {
    roundSpinner: {
        background: 'rgba(255,255,255,0.3)'
    }
};

const spinnerTypes = {
    roundSpinner: React.createClass({
        getInitialState: () => ({
            rotation: 0.0
        }),
        getDefaultProps: () => ({
            speed: 4,
            size: 30,
            weight: 19,
            foreground: '#673ab7',
            background: '#fffff',
        }),
        componentDidMount() {
            this.tick();
        },
        tick() {
            this.setState({
                rotation: (this.state.rotation + this.props.speed) % 720
            });
            window.requestAnimationFrame(this.tick);
        },
        render: function() {
            const circleStyle = (opacity, size, rotation, weight) => ({
                width: size,
                height: size,
                marginLeft: -size * 0.5,
                heightTop: -size * 0.5,
                position: 'absolute',
                top: '50%',
                opacity: opacity,
                left: '50%',
                borderRadius: '100%',
                transform: `rotateZ(${rotation}deg)`,
                border: `${this.props.size * (this.props.weight/100)}px solid transparent`,
            });
            return (
                <div>
                    <div style={ Object.assign(circleStyle(
                        0.3, this.props.size, 0,
                        this.props.weight / 100
                    ), {
                        border: `${this.props.size * (this.props.weight/100)}px solid ${this.props.foreground}`
                    }) } />
                    <div style={ Object.assign(circleStyle(
                        1.0, this.props.size, this.state.rotation,
                        this.props.weight / 100
                    ), {
                        borderRight: `${this.props.size * (this.props.weight/100)}px solid ${this.props.foreground}`
                    }) } />
                    <div style={ Object.assign(circleStyle(
                        1.0, this.props.size, this.state.rotation * 0.5,
                        this.props.weight / 100
                    ), {
                        borderRight: `${this.props.size * (this.props.weight/100)}px solid ${this.props.foreground}`
                    }) } />
                </div>
            );
        }
    })
};

const SlowPoke = props => {
    const spinnerName = `${props.type}Spinner`;
    return (
        <div style={Object.assign({}, fullScreen,spinnerStyles[spinnerName])}>
        {React.createElement(spinnerTypes[spinnerName], props.options || {})}
        </div>
    );
};

export default SlowPoke;
