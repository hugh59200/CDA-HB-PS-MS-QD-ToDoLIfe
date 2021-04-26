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
      <div className="d-flex justify-content-center align-self-center align-items-center">
        <h1 className=" text-uppercase text-white text-center ">
          <TypedText />
        </h1>
      </div>
    </>
  );
};

export default Home;
