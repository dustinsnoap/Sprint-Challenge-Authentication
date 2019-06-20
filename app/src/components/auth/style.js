import Styled from 'styled-components'

export default Styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-gap: 1rem;
    max-width: 333px;
    width: 100%;

    h1 {
        font-size: 2.4rem;
        text-align: center;
    }
    button {cursor: pointer}
    input, button {
        background-color: rgba(250,250,250,.72);
        border-radius: 5px;
        color: #222;
        font-size: 1.8rem;
        height: 4rem;
        padding: 1rem;
        width: 100%;
        &:hover {background-color: rgba(250,250,250,.99)}
    }
`