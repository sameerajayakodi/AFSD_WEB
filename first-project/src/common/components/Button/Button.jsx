import './style.css'

export function Button({style, name, onClick}) {

    // function clickEvent () {
    //     console.log('CLick')
    //     onClick();
    // }
    return(
        <button onClick={onClick} className='btn' style={style}>{name}</button>
    )
}





export function RoundedButton({bgColor, name}) {
    return(
        <button className='rounded-btn' style={{backgroundColor: bgColor}}>{name}</button>
    )
}

export function OutlineButton({color, name}) {
    return(
        <button className='outline-btn' style={{color: color, borderColor: color}}>{name}</button>
    )
}