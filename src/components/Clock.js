import React from 'react'
import moment from 'moment'

import TimePart from './TimePart'

class Clock extends React.Component {
    constructor (props) {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        };
        this.tick();
    }
    tick () {
        setInterval(() => {
            this.setState({
                hour: moment().hour(),
                minute: moment().minute(),
                second: moment().second()
            });
        }, 1000);
    }
    render () {
        return (
            <div className="Clock">
                <TimePart value={this.state.hour}/>
                <span className="Clock__Dots">:</span>
                <TimePart value={this.state.minute}/>
                <span className="Clock__Dots">:</span>
                <TimePart value={this.state.second}/>
            </div>
        )
    }
}

export default Clock
