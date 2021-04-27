import React, { Component } from 'react';
import Typed from 'react-typed';
class TypedText extends Component {
    render() {
        return (
            /* soit typed soit text me one sans typed, a voir ensemble */
            <Typed strings={["Bienvenue  <br/>  sur  <br/>  ToDoLife ."]}
                typeSpeed={40}
                backSpeed={80}
                backDelay={4000}
                startDelay={1000}
                >
            </Typed>
        );
    }
}
export default TypedText;