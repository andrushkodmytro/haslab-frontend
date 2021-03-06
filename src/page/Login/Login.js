import React from 'react';
import Container from 'components/ui/Container/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { loginRequest } from 'page/Login/loginReducer';



const useStyles = makeStyles((theme) => ({
  loginPage: {
    marginTop: '120px',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const location = useLocation();

  const loginHandler = (e) => {
    e.preventDefault();

    const { email, password } = e.target;

    const data = { email: email.value, password: password.value };

    const { from } = location.state || { from: { pathname: "/" } };
    dispatch(loginRequest({data, from }));
  };
  const {from}= location
console.log(location)
  return (
    <Container maxWidth='xs' className={classes.loginPage}>
      <Typography component='h1' variant='h5'>
        Login
      </Typography>
      <form onSubmit={loginHandler}>
        <TextField
          label='Email'
          placeholder='Email'
          margin='normal'
          name='email'
          fullWidth
          variant='outlined'
          autoFocus
        />
        <TextField
          label='Password'
          placeholder='Password'
          margin='normal'
          name='password'
          fullWidth
          variant='outlined'
        />

        <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
        <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary' size='large'>
          Submit
        </Button>

        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} className={classes.navLink} to='/forgot-password' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} className={classes.navLink} to='/register' variant='body2'>
              {' '}
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>{' '}
    </Container>
  );
}
