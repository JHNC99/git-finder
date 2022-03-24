import React, { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
const User = () => {
  const { id } = useParams();
  const { getUser, user } = useContext(GithubContext);
  getUser(id);
  return <div></div>;
};

export default User;
