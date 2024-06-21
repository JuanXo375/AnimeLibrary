import { CSSProperties, ClassAttributes } from "react";

interface Props{
    color:string;
    style?:CSSProperties;
    className:string;
}

const IconMenu = ({color,style,className}:Props) => {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} style={style} xmlnsXlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve">
            <path d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z" id="XMLID_314_" fill={color}/>
            <path d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z" id="XMLID_315_" fill={color}/>
            <path d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z" id="XMLID_316_" fill={color}/>
        </svg>
    </>
  )
}

export default IconMenu
