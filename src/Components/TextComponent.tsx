import { TextField } from '@mui/material'
import React from 'react'

const TextComponent = ({ value, textChangeHandler, placeholder }: { value: string | number, textChangeHandler: any, placeholder: string ,type?:string }) => {
    return (
        <TextField
            value={value}
            onChange={textChangeHandler}
            placeholder={placeholder}
        />
    )
}

export default TextComponent