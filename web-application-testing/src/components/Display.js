import React from 'react'
import Styled from 'styled-components'

const Title = Styled.h2
`
    margin: 10px;
`

const DisplayDiv = Styled.div
`
    display: flex;
    flex-flow: row no-wrap;
    justify-content: center;
    padding: 10px;
`
const Display = (props) => {
    return(
        <DisplayDiv>
            <Title>Strikes: {props.strikes}</Title>
            <Title>Balls: {props.balls}</Title>
            <Title>Outs: {props.outs}</Title>
        </DisplayDiv>
    )
}

export default Display;