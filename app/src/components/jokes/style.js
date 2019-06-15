import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 800px;

    h1 {
        font-size: 2.4rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    ul {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1.5rem;
        li {
            font-size: 1.6rem;
            text-align: center;
        }
    }
`