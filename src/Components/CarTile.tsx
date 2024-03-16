import React from 'react'
import style from "./Header.module.css"
import { carDetailType } from '../GlobalContext/CarContext';
// to save time using the upperCase in props to match with JSON data 
const CarTile = ({Name,Year,Origin,carClickHandler,car}:{Name:string;Year:string;Origin:string,carClickHandler:(val:any)=>void,car:carDetailType}) => {
    return (
    <div className={style.spacer} onClick={()=>carClickHandler(car)}>
     <p className={style.letter}>{Name}</p>
     <p className={style.letter}>{Year}</p>
     <p className={style.letter}>{Origin}</p>
    </div>
  )
}

export default CarTile