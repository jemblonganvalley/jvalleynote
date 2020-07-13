import React from 'react'

const CircleButton = ({
    bgColor, 
    icon, 
    color, 
    width, 
    height, 
    iconSize, 
    posTop, 
    posRight, 
    posBottom, 
    posLeft,
    rounded,

}) => {

  return (
    <button className='btn material-icons' style={{
        backgroundColor : bgColor,
        color : color,
        width : width,
        height : height,
        fontSize : iconSize,
        top : posTop,
        right : posRight,
        bottom : posBottom,
        left : posLeft,

        position : 'fixed',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : rounded ? '100%' : '4px',
    }}>
      {icon}
    </button>
  )
}

export default CircleButton
