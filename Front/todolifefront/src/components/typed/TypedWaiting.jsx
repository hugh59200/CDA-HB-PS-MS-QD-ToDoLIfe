import React, { Component } from 'react';
// import { render } from 'react-dom';
import Typed from 'react-typed';

class TypedWaiting extends Component {
    render() {
        return (
                <Typed
                    strings={["Waiting"]}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay= {4000}
                    startDelay= {1000}
                    loop >
                </Typed>
        );
    }
}
export default TypedWaiting;