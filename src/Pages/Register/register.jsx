import React from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Landingcss from 'Pages/Landing/landing.module.css';
import {Link} from "react-router-dom";

function Register() {
    return (
        <div>
            <form id={Landingcss.form}>
                <label className={Landingcss.title}>Sign Up</label>
                <TextField sx={{"display": "block", "width": "20rem"}}  className={Landingcss.inputs}  type="text" required placeholder="Username" margin="normal" fullWidth />
                 <TextField sx={{"display": "block"}}  className={Landingcss.inputs}  required placeholder="Email" type="text" margin="normal" fullWidth />
                <TextField sx={{"display": "block"}}  className={Landingcss.inputs}  required placeholder="Password" type="password" margin="normal" fullWidth />

                <Button sx={{"display": "block"}} className={Landingcss.button} sx={{backgroundColor: "#421042"}} variant="contained" fullWidth >
                    Sign Up
                </Button>
                <p>Already have an account? <Link to="/">LOGIN</Link></p>
            </form>
        </div>
    )
}

export default Register
