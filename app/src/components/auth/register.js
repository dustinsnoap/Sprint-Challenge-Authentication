import React from 'react'
import Wrapper from './style'
import {withRouter} from 'react-router-dom'

import api from '../../config/api'

class Register extends React.Component {
    state = {
        username: '',
        password: ''
    }
    componentDidMount = () => {
        if(localStorage.getItem('token'))
            this.props.history.push('/jokes')
    }
    h_submit = async () => {
        try {
            const payload = {
                username: this.state.username,
                password: this.state.password
            }
            const res = await api.post('/register', payload)
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/jokes')
        } catch (err) {
            console.log(err)
        }
    }
    h_field_update = e => this.setState({[e.target.name]: e.target.value})
    render = () =>
        <Wrapper className='register'>
            <h1>Login</h1>
            <input
                type='text'
                name='username'
                placeholder='Username'
                onChange={this.h_field_update}
                value={this.state.username}/>
            <input
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.h_field_update}
                value={this.state.password}/>
            <button onClick={this.h_submit}>Login</button>
        </Wrapper>
}

export default withRouter(Register)