import styled from 'styled-components'

export const Button = styled.button`
    background: ${props => props.bgPrimary ? 'blue' :'orange'};
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    font-size: ${props => props.fontSize ? '2rem' : '1rem'};
    font-weight: bold;
    padding: 1rem;
    opacity: 1;
        &hover{
            opacity: 0.7;
            transition : all 1s;
        }
`

export const ButtonToDoList = styled.button`
    apperance : none;
    background-color : ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    padding: .25em .5em;
    transition: all .5s;
    font-size: 17px;
    &:hover{
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props => props.theme.hoverBgColor};
        border: ${props => props.theme.borderButton}
    };
    &:disabled {
        cursor: no-drop
    }
`

export const SmallButton = styled(Button)`
        background-color: orange;
        font-size: 0.5rem;
        padding: 0.5rem
`