import React from 'react'
import Digit from './Digit'

export default (props) => {
    const getValue = (part = 'right') => (value) => {
        if (part === 'left') return parseInt(value / 10, 10);
        if (part === 'right') return value % 10;
    }
    return (
        <div className="Clock__Part">
            <Digit value={getValue('left')(props.value)}/>
            <Digit value={getValue('right')(props.value)}/>
        </div>
    )
};
