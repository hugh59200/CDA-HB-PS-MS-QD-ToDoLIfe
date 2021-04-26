import React from "react";

const MaWatchlist = () => {
  return (
    
      <div className="container-fluid ">
        <h1 className="text-center text-white">Watchlist</h1>
        <br />
        <div className="row ">
          <div className="col-4  text-white text-center">
            Films
            <br />
            <img
              src="https://img.icons8.com/ios/100/000000/movie--v1.png"
              alt=""
            />
          </div>
          <div className="col-4  text-white text-center">
            Series
            <br />
            <img src="https://img.icons8.com/ios/100/000000/tv.png" alt="" />
          </div>
          <div className="col-4  text-white text-center">
            Livres
            <br />
            <img
              src="https://img.icons8.com/ios-filled/100/000000/open-book.png"
              alt=""
            />
          </div>
        </div>
      </div>
    
  );
};
export default MaWatchlist;
