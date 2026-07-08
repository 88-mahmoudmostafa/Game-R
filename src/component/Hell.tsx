import React,{Dispatch,SetStateAction} from 'react'
type Hellprops={
    go:string;
    setGo:Dispatch<React.SetStateAction<string>>
    setHells:Dispatch<React.SetStateAction<string[]>>
    hells:string[];
    hell:string;
    id:number;
    winmasage:string;
}

function Hell({go,setGo,setHells,hell,hells,id,winmasage}:Hellprops) {

    const heandleclick=()=>{
      if(winmasage){
        return;
      }
       const nottaken=!hells[id]
        if(nottaken){
          if(go==='circle'){
         heandlechange('circle');
         setGo('cross')
          }else if(go==='cross'){
            heandlechange('cross');
            setGo('circle')

          }
        }
        
        
    }


    const heandlechange=(helltochange:string)=>{
    const copyhell=[...hells];
    copyhell[id]=helltochange;
    setHells(copyhell)
    }
  return (
    <div className='help'  onClick={heandleclick}>
       <div className='hell' data-value={hell}>{hell?(hell==='circle'?'o':'x'):''}</div>

    </div>
  )
}

export default Hell