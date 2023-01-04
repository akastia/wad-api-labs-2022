import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Navigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AuthContext } from "../../contexts/authContext"

const TemplateLoginPage = props => {
  const context = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [unregistered, setUnregistered] = useState(false);


  const login = () => {
    context.authenticate(username, password);
  };

  const register = () => {
    setUnregistered(true)
  }


  if (context.isAuthenticated === true) {
    return <Navigate to={"/"} />;
  }

  if(unregistered === true){
    return <Navigate to={"/signup"} />;
  }

  

  return (
    <>
      <Box component ="div" pt={15} sx={{ justifyContent:'center', display: 'flex' }}>
          <Typography component="h2" variant="h3">
            Log into TMDB
          </Typography>
        </Box>
        <Box component ="div" pt={7} sx={{ justifyContent:'center', display: 'flex'}}>
          <TextField
           id="username"
            label="Username"
           type="text"
           onChange={e => {setUsername(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ justifyContent:'center',display: 'flex'}}>
          <TextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={e => {setPassword(e.target.value)}}
          />
        </Box>
        <Box component ="div" pt={1} sx={{ justifyContent:'center',display: 'flex', color:'orange'}}>
          <Button
          variant="contained"
          color="primary"
          sx = {{ backgroundColor: "orange" }}
          onClick={login}
          >
            Log in
          </Button>
        </Box> 
        <Box component ="div" pt={20} sx={{ justifyContent:'center', display: 'flex' }}>
          <Typography component="h5" variant="h6" sx={{color: 'red'}}>
            Not registered?
          </Typography>
        </Box>
        <Box component ="div" pt={1} sx={{ justifyContent:'center',display: 'flex'}}>
          <Button
          variant="contained"
          color="primary"
          sx = {{ backgroundColor: "orange" }}
          onClick={register}
          >
            Sign Up
          </Button>
        </Box>
    </>
  );
};

export default TemplateLoginPage;