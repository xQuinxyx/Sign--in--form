import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, FormControlLabel, Paper } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Login=()=> {
    const paperStyle={
         padding:"20px",
         height: '50vh',
         width: 280,
         margin: "20px auto"
    }
    const avatarStyle={

        backgroundColor: 'green'
    }
   const textfield={

   }
    const btnstyle={
        margin: "8px 0"
    
    }
    return (
        <Grid align="center">

            <Paper Elevation={10} style={paperStyle}>
            
            <Avatar  style={avatarStyle}><LockIcon></LockIcon></Avatar>
           
            <h2>Sign in</h2>
           
            <TextField label='Username' placeholder='Enter Username' margin="dense" fullwidth required></TextField>

            <TextField label='Password' placeholder='Enter Password' type='password' margin="dense" fullwidth required></TextField>
            
            <FormControlLabel 

                control={
                    <Checkbox

                    name='Checked'

                    color='primary'

               />}


               label='Remember Me'

               />

               <Button type="submit" color="primary" variant="contained" fullwidth style={btnstyle}>Sign in</Button>

               <Typography style={textfield}>

               <Link href="#">

            Forgot Password?
               
               </Link>

               </Typography>
               
               <Typography style={textfield}>

               <Link href="#">

           Don't Have an account? Sign up!
               
               </Link>
               
               </Typography>

            </Paper>
       
        </Grid>
        

    )
}

export default Login