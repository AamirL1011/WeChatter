import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import Button from "react-bootstrap/Button";

// Login-Logout button
const LoginBtn = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Button size={"lg"} className={"loginBtn"} variant={"dark"} onClick={() => loginWithRedirect({})}>Log in</Button>
      )}

      {isAuthenticated && <Button size={"lg"} className={"loginBtn"} variant={"dark"} onClick={() => logout()}>Log out</Button>}
    </div>
  );
};

export default LoginBtn;