import styled from 'styled-components'

const StyledWeatherApp = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 2vh;
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.background});
    background-size: cover;
    h2 {
        margin-top: 0;
        padding-top: 1.5rem;
        font-size: 2rem;
    }
    .display-weather {
        display: flex;
        flex-direction: raw;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        font-size: 1.5rem;
        color: white;
        ul{
            list-style: none;
            padding: 1.3rem 0.8rem 1.3rem 0.8rem;
            margin: 0; 
        }
        li{
            padding: 0.3rem;
        }
        h3{
            margin: 0;
            padding: 0;
            font-size: 2rem;
        }
        #temp{
            font-size: 1.5rem;
        }
        img {
            width: 2rem;
            height: 2rem;
            object-fit: contain;
        }
        .weather-icon {
            width: 40%;
            height 40%;
            padding: 0 1rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }`

export default StyledWeatherApp