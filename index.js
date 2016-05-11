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
    }
};

const spinnerTypes = {
    roundSpinner: React.createClass({
        getInitialState: () => ({
            rotation: 0.0
        }),
        getDefaultProps: () => ({
            show: false,
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
                rotation: (this.state.rotation + this.props.speed) % 720,
                frameRequest: window.requestAnimationFrame(this.tick)
            });
        },
        componentWillUnmount() {
            window.cancelAnimationFrame(this.state.frameRequest);
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
                <div className="slowpoke">
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
    if(!props.show) return <div/>;
    return (
        <div className="slowpoke-container" style={Object.assign({}, fullScreen, spinnerStyles[spinnerName], props.style)}>
        {React.createElement(spinnerTypes[spinnerName], props.options || {})}
        </div>
    );
};

export default SlowPoke;
