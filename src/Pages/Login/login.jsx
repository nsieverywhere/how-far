import React from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Landingcss from 'Pages/Landing/landing.module.css';
import {Link} from "react-router-dom";


function Login() {
    return (
        <div>
            <form id={Landingcss.form}>
                <label className={Landingcss.title}>Login</label>
                <TextField sx={{"display": "block", "width": "20rem"}}  className={Landingcss.inputs}  required placeholder="Username" margin="normal" fullWidth />
                <TextField sx={{"display": "block"}}  className={Landingcss.inputs}  required placeholder="Password" type="password" margin="normal" fullWidth />
                <Button sx={{"display": "block"}} className={Landingcss.button} sx={{backgroundColor: "#421042"}} variant="contained" margin="normal"  fullWidth >
                    Login
                </Button>
                <p>Not a member? <Link to="/signup">SIGN UP</Link></p>
            </form>
        </div>
    )
}

export default Login
