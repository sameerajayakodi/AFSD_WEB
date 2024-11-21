import './style.css';
// eslint-disable-next-line react/prop-types
export default function Button({ label, onClick , color }) {
    return (
      <button className="button" onClick={onClick} style={{backgroundColor: color}}>
        {label}
      </button>
    );
}