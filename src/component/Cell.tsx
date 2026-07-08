import React, {Dispatch,SetStateAction} from 'react'
type Cellprops={
  id:number;
  go:string;
  setGo:Dispatch<React.SetStateAction<string>>
  cells:string[];
  setCells:Dispatch<React.SetStateAction<string[]>>;
  cell:string;
  winingmasage:string;
}

function Cell({go,setGo,id,cells,setCells,cell,winingmasage}:Cellprops) {
  const heandleclick=()=>{
  
    if(winingmasage){
      return;
    }
  const nottaken=!cells[id];


  if(nottaken){
    if(go==='circle'){
      heandlechangego('circle');
      setGo('cross')
    }else if(go==='cross'){
      heandlechangego('cross');
      setGo('circle')
    }
  }
  }
   const heandlechangego=(celltochange:string )=>{
      const copycell=[...cells];
      copycell[id]=celltochange;
     setCells(copycell)
   }
   
  return (
    <div className='stop' onClick={heandleclick}>
      <div className='cell' data-value={cell}>{cell?(cell==='circle'?'o':'x'):''}</div>
      
    </div>
  )
}

export default Cell