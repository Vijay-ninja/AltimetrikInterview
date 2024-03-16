import React, { ChangeEvent, ChangeEventHandler, SyntheticEvent, useState } from 'react'

const useValue = (initialState:any) => {
  const [value, setValue] = useState<any>(initialState);
  const valueChangeHandler = (e:any)=>{
    setValue(e.target.value);
  }
  return{
    value,
    valueChangeHandler,
  }
}

export default useValue