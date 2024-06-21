import { CSSProperties, ClassAttributes } from "react";

interface Props{
  color:string;
  style?:CSSProperties;
  className:string;
  onClick:() => void;
}

const IconMenu = ({color,style,className,onClick}:Props) => {
  return (
    <>
      <div className={className} style={style} onClick={onClick}>
        <div style={{background:`${color}`}}></div>
        <div style={{background:`${color}`}}></div>
        <div style={{background:`${color}`}}></div>
      </div>
    </>
  )
}

export default IconMenu
