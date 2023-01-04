import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Page Not Found</h1>{" "}
      <br />
      <br />
      <Link to="/">
        <h4 style={{ textAlign: "center" }}>Go back to homepage.</h4>
      </Link>
    </>
  );
}
