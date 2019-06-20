import Styled from 'styled-components'

export default Styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    nav {
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        max-width: 800px;
        padding: 1rem 0;
        width: 80%;

        button {background-color: transparent}
        a, button {
            color: #ccc;
            text-decoration: none;
            font-size: 2rem;
            &:hover {color: #fff}
        }
    }
`