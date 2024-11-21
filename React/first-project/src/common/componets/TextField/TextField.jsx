import './style.css';
// eslint-disable-next-line react/prop-types
export default function TextField({label, type='text', placeholder}) {
    return (
        <div>
            <label className='label'>{label} : </label>
            <input className='input' type={type} placeholder={placeholder} />
        </div>
    )
}