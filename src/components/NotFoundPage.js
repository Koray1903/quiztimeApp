import React from "react";
import {Link} from "react-router-dom";
import "../style/NotFoundPage.css";

const NotFoundPage = () => {

  return (
    <>
      <div className="NotFoundPage">
        <Link to="/">
          <p className="returnHomepage">HOMEPAGE</p>
        </Link>
      </div>
    </>
  );
};
export default NotFoundPage;