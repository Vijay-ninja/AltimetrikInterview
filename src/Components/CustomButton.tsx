import { Button } from "@mui/material"

const CustomButton = ({title,onClickhandler,}:{title:string,onClickhandler:()=>void,variant?:string}) => {
  return (
    <Button  onClick={onClickhandler}>{title}</Button>
  )
}

export default CustomButton;