import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth , provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {

        //signIn

        auth.signInWithPopup(provider)
        .then( (result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }

            )


            console.log(result);
        } )
        .catch((error) => {alert(error.message)});






    }



    return (
        <div className='login'>
            <div className='login_logo'>

                <img src='https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.jpg'>
                </img>
                <img src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'>
                </img>

            </div>

            <Button onClick={signIn} type='submit' >
                Sign In
            </Button>
            
        </div>
    )
}

export default Login
