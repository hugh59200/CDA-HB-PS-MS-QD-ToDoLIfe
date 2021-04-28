import React from "react";
import TypedText from "../components/typed/TypedText";

const Home = () => {
  // const [message, setMessage] = useState("")

  // if (localStorage.getItem('username') != null){
  //   setMessage (
  //     "Welcome " + localStorage.getItem('username') + "!")
  // }

  return (
    <>
      <div className="container d-flex h-100">
        <div className="row homeMgTopTxt text-center">
          <h1 className=" text-uppercase text-white text-center ">
            <TypedText />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
