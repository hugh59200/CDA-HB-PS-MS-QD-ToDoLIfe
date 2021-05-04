/* authentification */
export let isLoggued = false;

export function authenticated(id, username, token) {
    isLoggued = true;
}

export function deconnected() {
    isLoggued = false;
    localStorage.removeItem('id')
    localStorage.removeItem('username')
    localStorage.removeItem('token')
    localStorage.removeItem('id_todolist')
    localStorage.removeItem('label_todolist')
}

export function isAuthenticated() {
    if (localStorage.getItem('username') != null) {
        authenticated()
    } else {
        deconnected()
    }
    return isLoggued;
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
