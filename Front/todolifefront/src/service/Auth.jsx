import React, { useEffect, useState } from "react";

const Auth = () => {
  const [message, setMessage] = useState("");

  const makeMessage = () => {
    if (localStorage.getItem("username") != null) {
      setMessage(<>welcome {localStorage.getItem("username")}</>);
    } else {
      setMessage(<>see you soon</>);
    }
  };

  useEffect(() => {
    makeMessage();
  }, []);
  return (
    <h1 className="text-white text-center">
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {message}
    </h1>
  );
};

export default Auth;
