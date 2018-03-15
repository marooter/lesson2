import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
    text-align: center;
`;

export default class Header extends React.Component{
    render(){
        return(
            <h1>
                <Styled>
                    BASIC TODO
                </Styled>  
            </h1>
        )
    }
}