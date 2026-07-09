import {useEffect, useState} from 'react'
import './App.css'
import Cell from './component/Cell'


 const winingcombo=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]

 ]

function App() {
  const [cells,setCells]=useState(['','','','','','','','','',])
  const [go ,setGo]=useState('circle');
  const [winingmasage,setWiningmasage]=useState('')

  useEffect(()=>{
     winingcombo.forEach((combo)=>{
      const wincircle=combo.every((cell)=>cells[cell]==='circle')
      const wincross=combo.every((cell)=>cells[cell]==='cross')
     
      if(wincircle){
        setWiningmasage('circle win!!')
      }
      else if(wincross){
        setWiningmasage('cross win!!!')
      }
    })
  },[cells])
  useEffect(()=>{
    if( cells.every((cell)=>cell!=='') &&!winingmasage ){
      setWiningmasage(' drow win!!');
    }
  },[cells,winingmasage])
   useEffect(()=>{
    if(winingmasage){
      const timer =setTimeout(()=>{
        startgame();
      },1500)
      return ()=> clearTimeout(timer)
      
    }
   },[winingmasage])

const startgame=()=>{
  setCells(['','','','','','','','','']);
  setGo('circle')
  setWiningmasage('')
}
  return (
    <div className='container'>
      <div className='content'>
        {cells.map((cell ,index)=>(
          
       <Cell  winingmasage={winingmasage} cell={cell} id={index} key={index} cells={cells} setCells={setCells} go={go} setGo={setGo}/>
        ))}
      </div>
      <div className='masage'>{winingmasage}</div>
      <div className='help'>{!winingmasage &&`its now ${go} turn!`}</div>
    </div>
  )
}

export default App