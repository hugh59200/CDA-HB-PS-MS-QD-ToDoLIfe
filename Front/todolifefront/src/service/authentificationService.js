export let isLoggued = false

export function authenticated(){
    isLoggued = true
}

export function deconnected(){
    isLoggued = false
}

export function isAuthenticated(){
    return isLoggued
}