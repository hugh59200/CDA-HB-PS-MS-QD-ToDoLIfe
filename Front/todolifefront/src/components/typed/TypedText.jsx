import React, { Component } from "react";
import Typed from "react-typed";
import '../../views/home/Home.css'
class TypedText extends Component {
  render() {
    if (localStorage.getItem("username") == null) {
      return (
        /* soit typed soit text me one sans typed, a voir ensemble */
        <Typed className="fonthome"
          strings={["Bienvenue  <br/>  sur  ToDoLife."]}
          typeSpeed={40}
          backSpeed={80}
          backDelay={4000}
          startDelay={1000}
        ></Typed>
      );
    } else {
      return (
        /* soit typed soit text me one sans typed, a voir ensemble */
        <Typed className="fonthome"
          strings={[
            "Bienvenue " +
              localStorage.getItem("username") +
              "  <br/>  sur  ToDoLife.",
          ]}
          typeSpeed={40}
          backSpeed={80}
          backDelay={4000}
          startDelay={1000}
        ></Typed>
      );
    }
  }
}
export default TypedText;
