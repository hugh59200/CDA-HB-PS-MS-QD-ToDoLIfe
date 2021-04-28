import React from "react";
import TypedText from "../../components/typed/TypedText";
import './Home.css'

const Home = () => {

  return (
    <>
      <div>
        <h1 className="titre">
           <TypedText/>
           {/* soit typed soit text me one sans typed, a voir ensemble
           Bienvenue <br/> sur ToDoLife. */}
           </h1>
      </div>
    </>
  );
};

export default Home;
