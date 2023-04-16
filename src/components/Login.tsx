import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PATHNAME } from "../router";

const Login: FC = () => {
  return (
    <div>
      <Link to={LOGIN_PATHNAME}>
        <h1>登录</h1>
      </Link>
    </div>
  );
};
export default Login;
