/* authentification */

// import { useHistory } from "react-router";

// import Cookies from "universal-cookie";

// const cookies = new Cookies();

export let isLogged = false;

export function authenticated(id, username, token) {
    isLogged = true;
    // localStorage.setItem("id", id);
    // localStorage.setItem("username", username);
    // localStorage.setItem("token", token);
}

export function deconnected() {
    isLogged = false;
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    // localStorage.removeItem('user')
    // cookies.remove('token')
}

export function isAuthenticated() {
    if (localStorage.getItem('username') != null) {
        authenticated()
    } else {
        deconnected()
    }
    return isLogged;
}

/* confirmation */

export let isConfirm = false;

export function confirmed() {
    isConfirm = true;
    localStorage.removeItem('username')
    localStorage.removeItem('confirmation')
}

export function unConfirmed() {
    isConfirm = false;
    localStorage.setItem("confirmation", isConfirm);
}   

export function isConfirmed() {
    if (localStorage.getItem('confirmation') === true) {
        confirmed()
    } else {
        unConfirmed()
    }
    return isConfirm;
}