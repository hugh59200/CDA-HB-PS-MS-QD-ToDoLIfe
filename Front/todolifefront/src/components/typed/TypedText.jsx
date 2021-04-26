import React, { Component } from 'react';
// import { render } from 'react-dom';
import Typed from 'react-typed';

class TypedText extends Component {
    render() {
        return (
                <Typed
                    strings={["bienvenue sur todolife"]}
                    typeSpeed={80}
                    backSpeed={80}
                    backDelay= {4000}
                    startDelay= {1000}
                    // loop 
                    >
                </Typed>
        );
    }
}
export default TypedText;