import './style.css';
// eslint-disable-next-line react/prop-types
export function Button({name='button' , style , onClick}) {
       
    return (
        <button onClick={onClick} className="btn" style={style}>{name}</button>
    )
}



// eslint-disable-next-line react/prop-types
export function OutlineButton({color,name}){
    return (
        <button className='outline_button'  style={{borderColor:color,color:color}}>{name}</button>
    )

}