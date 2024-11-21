import './style.css';

// eslint-disable-next-line react/prop-types
export default function TextInput({ label, type, placeholder, value, onChange }) {
  return (
    <div className="input">
      <label className="label">{label}:</label>
      <br />
      <input
        className="textInput"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
