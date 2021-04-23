/* authentification */

// import { useHistory } from "react-router";

// import Cookies from "universal-cookie";

// const cookies = new Cookies();

export let isLoggued = false;

export function authenticated(){
    isLoggued = true;
}

export function deconnected(){  
    isLoggued = false;
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    // localStorage.removeItem('user')
    // cookies.remove('token')
}

export function isAuthenticated(){
    if(localStorage.getItem('username') != null){
        authenticated()
    } else {
        deconnected()
    }
    return isLoggued;
}

/* confirmation */

export let isConfirm = false;

export function confirmed(){
    isConfirm = true;
}

export function unConfirmed(){
    isConfirm = false;
}

export function isConfirmed(){
    return isConfirm;
}

