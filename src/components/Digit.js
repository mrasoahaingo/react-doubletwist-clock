import React from 'react'
import classNames from 'classnames'
import { Motion, spring } from 'react-motion'

const springConfig = [120, 17];
const cycle = [
    { angle:    0, animate: false },
    { angle: -179, animate: true },
];

class Digit extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentValue: 0,
            previousValue: 0,
            frame: 0
        };
    }
    componentWillReceiveProps (props){
        this.reinit && clearTimeout(this.reinit);
        this.reinit = setTimeout(() => {
            this.setState({
                previousValue: this.state.currentValue,
                frame: 0
            })
        }, 600);
        this.setState({
            currentValue: props.value,
            previousValue: this.state.currentValue,
            frame: props.value !== this.state.currentValue ? 1 : 0
        });
    }
    render () {
        const currentValue = this.state.currentValue;
        const previousValue = this.state.previousValue;

        const angle = cycle[this.state.frame].angle;
        const animate = cycle[this.state.frame].animate;

        const flipStyle = {
            a: animate ? spring(angle, springConfig) : angle
        };
        const digitBottomStyle = {
            o: animate ? spring(50, springConfig) : 100
        };
        return (
            <div className="Digit">
                <div className="Digit__Number Number">
                    <div className="Number__Half Number__Half--Top" data-front={currentValue}></div>
                    <Motion style={digitBottomStyle}>
                        {({o}) => (
                            <div style={{
                                opacity: o / 100
                            }} className="Number__Half Number__Half--Bottom Number__Half--Flipped" data-back={previousValue}></div>
                        )}
                    </Motion>
                    <Motion style={flipStyle}>
                        {({a}) => {
                            const numClassName = classNames(
                                'Number__Half', {
                                'Number__Half--Flipped': a < -90}
                            )
                            return <div style={{
                                transform: `rotateX(${a}deg)`
                            }} className={numClassName} data-front={previousValue} data-back={currentValue}></div>
                        }}
                    </Motion>
                </div>
            </div>
        )
    }
}

export default Digit
