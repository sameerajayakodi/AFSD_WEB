/* eslint-disable react/prop-types */
import "./style.css";
export default function Button({ name, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {name}
    </button>
  );
}
