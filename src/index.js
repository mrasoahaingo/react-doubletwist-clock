import './styl/clock.styl'

import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import ClockContainer from './components/Clock'

injectTapEventPlugin();

render(
    <div className="ClockContainer">
        <ClockContainer/>
    </div>
    , document.getElementById('app')
);
