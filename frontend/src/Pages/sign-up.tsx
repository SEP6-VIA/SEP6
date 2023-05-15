import React, { useState }  from "react";
import { makeStyles } from "tss-react/mui";
import { Typography, Button } from "@mui/material"
import { Colors }  from '../Constants/Colors';
import SignUpField from "../Components/SignUpField";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/authentication";


const SignUp = () => {

  const { classes } = useStyles();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(name, email, username, password)
    try {
      await AuthService.signup(name,email,username, password).then(
        (response) => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
     <Typography variant="h1">
          SignUp
        </Typography>
    <form className={classes.sign_up_form} onSubmit={handleSignup}>
        <SignUpField label="Name" value={name} typeOF="text" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setName(e.target.value)} required/>
        <SignUpField label="Email" value={email} typeOF="text" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} required/>
        <SignUpField label="Username" value={username} typeOFe="text" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setUsername(e.target.value)} required/>
        <SignUpField label="Password" value={password} typeOF="password" onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)} required/>
        <div>
        <Button className={classes.sign_up_button} type="submit" variant="contained">Register</Button>
        </div>
    </form>
    <div className={classes.already}>
      <div className={classes.firstLine}></div>
      <div>Already a member?</div>
      <div className={classes.secondLine}></div>
    </div>
    <div>
    <a href="/login">Login</a>
    </div>
    

    </>
  );
};

const useStyles = makeStyles()(() => ({
  sign_up_form:{
    display:'grid',
    justifyContent: 'center',
    alignItems:'center'
  },
  
  sign_up_button:{
    textAlign: 'center',
    fontSize:'2.188rem',
    fontStyle:'normal',
    fontFamily:'Rubik',
    fontWeight:'800',
    color:Colors.light_blue,
    width:'16rem',
    height: '3rem',
    background: Colors.red1,
    borderRadius: '1.25rem',
    margin:'2rem'
  },
  already:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'2rem'

  },
  firstLine: {
    border: '0.25rem solid',
    borderColor: Colors.black1,
    height: '0rem',
    width:'14rem',
    margin: '1rem'
    
  },
  secondLine: {
    border: '0.25rem solid',
    borderColor: Colors.black1,
    height: '0rem',
    width:'14rem',
    margin: '1rem'
  }
}));


export default SignUp;


