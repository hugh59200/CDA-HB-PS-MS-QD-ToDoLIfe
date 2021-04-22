/* authentification */

export let isLoggued = false;

export function authenticated(){
    isLoggued = true;
}

export function deconnected(){  
    isLoggued = false;
}

export function isAuthenticated(){
    if(localStorage.getItem('id') != null){
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