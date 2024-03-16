import React, { FC } from 'react'
import _ from "lodash";
import { AppBar } from '@mui/material';
import styles from "./Header.module.css"

type menu ={ 
    name?:string;
    action?:()=>void;
}
interface HeaderProps{
    menus:menu[]
   
}

const Header:FC<HeaderProps> = (props) => {
    const {menus} = props;
  return (
    <AppBar className={styles.headerFlow}>
        {_.map(menus,(menu:menu)=><div key={menu?.name}  role="button"  onClick={menu?.action?menu?.action:()=>{alert(menu?.name)}}>{_.capitalize(menu?.name)}</div>)}
    </AppBar>
  )
}

export default Header