import React, { useState } from 'react'
import Box from './Box'
import './style.css'

function Board() {
    // const [initialData,setInitialData]=useState([null,null,null,null,null,null,null,null,null])
    const [initialData,setInitialData]=useState(["","","","","","","","",""])
    const [firstPlayerIsX,setFirstPlayerIsX]=useState(true)
    function displayIndex(index){
        let anotherData=[...initialData]
        anotherData[index]= firstPlayerIsX ? "X":"O"
        setInitialData(anotherData)
        setFirstPlayerIsX(!firstPlayerIsX)
    }
    function checkwinner(){
        const winner =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i of winner){
            let[x,y,z]=i
            if(initialData[x]==initialData[y] && initialData[x]==initialData[z])
            {
                return initialData[x]
            }
        }
    }
    let gameover=false;
    let result= document.getElementById("winnerDisplay")
    let winnerData=checkwinner()
    if(winnerData=="X"){
        result.textContent="X is the winner"        
        gameover=true;
    }else
    if(winnerData=="O")
    {
        result.textContent="O is the winner"
        gameover=true;
    }
   // console.log(gameover+"1")
    function resetTheGame(){
        let nullValues=[null,null,null,null,null,null,null,null,null]                   
            setInitialData(nullValues)
            result.textContent=""
            //console.log(gameover)

        
    }

  return (
    <div className='main'>
        <h1 style={{textAlign:'center'}}>TIC TAC TOE</h1>
        <div className='gameboard'>
        
            <div className='row'>
                <Box data1={initialData[0]} data2={function(){
                     if (gameover==false)  {
                        displayIndex(0)
                    }
                
                 }}/>
                <Box data1={initialData[1]} data2={function(){
                    if (gameover==false) {
                        displayIndex(1)
                    }
                
                }}/>
                <Box data1={initialData[2]} data2={function(){
                    if (gameover==false) {
                        displayIndex(2)
                    }
                
                }}/>
            </div>
            <div className='row'>
                <Box data1={initialData[3]} data2={function(){
                    if (gameover==false) {
                    displayIndex(3)
                }
            
                }}/>
                <Box data1={initialData[4]} data2={function(){
                    if (gameover==false) {
                    displayIndex(4)
                }
            
                }}/>
                <Box data1={initialData[5]} data2={function(){
                    if (gameover==false) {
                        displayIndex(5)
                    }
                
                }}/>
            </div>
            <div className='row'>
                <Box data1={initialData[6]} data2={function(){
                    if (gameover==false) {
                    displayIndex(6)
                }
            
                }}/>
                <Box data1={initialData[7]} data2={function(){
                    if (gameover==false) {
                    displayIndex(7)
                }
                
                }}/>
            <Box data1={initialData[8]} data2={function(){
                if (gameover==false) {
                    displayIndex(8)
                }
                
            }}/>
           
        </div>
        
               
        </div>
        <div className='winnerDetails'>
                <h1 id="winnerDisplay"></h1>
                <button onClick={resetTheGame}>Reset</button>
            </div>
    </div>
    
  )
}

export default Board