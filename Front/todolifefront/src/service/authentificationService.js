/* authentification */
export let isLogged = false;

export function authenticated(id, username, token) {
    isLogged = true;
}

export function deconnected() {
    isLogged = false;
    localStorage.removeItem('user')
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('id_todolist')
    localStorage.removeItem('label_todolist')
    localStorage.removeItem('stat')
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
