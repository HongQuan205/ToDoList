import styled from 'styled-components'

export const Button = styled.button`
    apperance: none;
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    border: ${props => props.theme.borderButton};
    padding: .25rem .5rem;
    transition: all .5s;
    font-size: 17px;
    &:hover{
        color: ${props => props.theme.hoverTextColor};
        background-color: ${props => props.theme.hoverBgColor};
        border: ${props => props.theme.borderButton}
    }
    &:disable{
        cursor: no-drop;
    }
`