import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button
`
    background: lightblue;
    border: 1px solid lightgray;
    font-size: 20px;
    width: 200px;
    height: 40px;
    border-radius: 5px;
    text-decoration: none;
    margin: 10px;
    :focus {
        outline: 0;
    }
    :active{
        background: dodgerblue;
    }
`
const Dashboard = (props) => {
    return(
        <div className='dashboard'>
            <Button onClick={props.strike}>Strike</Button>
            <Button onClick={props.ball}>Ball</Button>
            <Button onClick={props.foul}>Foul</Button>
            <Button onClick={props.hit}>Hit</Button>
        </div>
    )
}

export default Dashboard;