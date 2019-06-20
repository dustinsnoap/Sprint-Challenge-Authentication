import React from 'react'
import {withRouter} from 'react-router-dom'

const withAuth = Component => {
    const Auth = props => {
        const isAuth = Boolean(localStorage.getItem('token'))
        if(!isAuth) props.history.push('/login') //if no token, redirect to login
        return isAuth ? <Component {...props} /> : <pre>You are not authorized</pre>
    }
    return withRouter(Auth)
}

export default withAuth