import React from 'react'
import {Route, NavLink, withRouter} from 'react-router-dom'

import Wrapper from './style'
import Register from '../auth/register'
import Login from '../auth/login'
import Jokes from '../jokes'

class App extends React.Component {
    h_logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    render = () =>
        <Wrapper className='app'>
            <nav>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/jokes'>Jokes</NavLink>
                <button onClick={this.h_logout}>Logout</button>
            </nav>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/jokes' component={Jokes} />
        </Wrapper>
}

export default withRouter(App)