import { Container, TextField, Box, Button } from '@mui/material';
import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState(" ");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(validateEmail(email)){
      setError({
        error: false,
        message: "",
      });
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };


  return (
    <>
      <Container
        sx={{
          margin: "auto",
          border: "1px red solid",
          height: "100vh",
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <picture>
            <source media='(min-width: 500px)' srcSet='https://res.cloudinary.com/dmqv0dbtb/image/upload/c_scale,w_500/v1684423977/fwzzdalno1tbvamgq0am.webp'/>
            <img src='https://res.cloudinary.com/dmqv0dbtb/image/upload/c_scale,w_320/v1684423977/fwzzdalno1tbvamgq0am.webp'/>
          </picture>
          <TextField 
            required
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            variant="outlined"
            error={error.error}
            helperText={error.message}
            sx={{mt:1, mb: 1}}
          />
          <TextField 
            required
            label='Password'
            type='password'
            variant='outlined'
            sx={{mt:1, mb: 1}}
          />
          <Button 
            type='submit'
            variant='outlined'
            sx={{mt:1, height: "56px"}}
          >
            Ingresar
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Login