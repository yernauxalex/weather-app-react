import styled from 'styled-components'

const StyledWeatherAppForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    padding-bottom: 2rem;
    color: white;
    input {
        width: 100%;
        height: 2rem;
        background-color: rgba(0, 0, 0, 0.15);
        color: white;
        border: none;
        border-bottom: 2px solid white;
        border-radius: 10px;
        padding: 0 0.5rem;
    }
    select {
        width: 100%;
        height: 2rem;
        background-color: rgba(0, 0, 0, 0.15);
        color: white;
        border: none;
        border-bottom: 2px solid white;
        border-radius: 10px;
    }
    select option {
        color: white;
        background-color: #2c2c2e;
    }
    button {
        width: 100%;
        height: 2rem;
        background-color: rgba(0, 0, 0, 0.15);
        color: white;
        border-color: white;
        border-radius: 10px;
        font-size: 1.5rem;
    }
`

export default StyledWeatherAppForm