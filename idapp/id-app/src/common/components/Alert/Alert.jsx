/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Alert({ message }) {
  return (
    <div className="fixed p-2 px-4 font-bold text-white bg-red-500 animate-pulse rounded-xl top-2 right-2">
      <p>{message}</p>
    </div>
  );
}
