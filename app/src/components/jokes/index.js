import React from 'react'
import api from '../../config/api'
import withAuth from '../../config/auth'

import Wrapper from './style'

class Jokes extends React.Component {
    state = {
        jokes: []
    }
    componentDidMount = async () => {
        try {
            const res = await api.get('/jokes')
            this.setState({users: res.data})
        } catch (err) {console.log(err)}
    }
    render = () =>
        <Wrapper className='jokes'>
            <h1>jokes</h1>
        </Wrapper>
}

export default withAuth(Jokes)