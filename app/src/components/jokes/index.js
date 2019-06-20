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
            this.setState({jokes: res.data})
        } catch (err) {console.log(err)}
    }
    render = () =>
        <Wrapper className='jokes'>
            <h1>Jokes</h1>
            <ul className='joke-list'>
                {this.state.jokes.map(joke =>
                    <li key={joke.id}>{joke.joke}</li>
                )}
            </ul>
        </Wrapper>
}

export default withAuth(Jokes)