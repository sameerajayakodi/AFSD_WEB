import lankaNIC from "lanka-nic";
import { useState } from "react";
import Swal from "sweetalert2";
import image from "../../assets/image.png";
import Button from "../../common/components/Button/Button";
import Input from "../../common/components/Input/Input";
import Description from "../Description/Description";

export default function Card() {
  // const [error, setError] = useState("");
  let [input, setInput] = useState("");
  const [nicDetails, setNicDetails] = useState(null);

  const submitData = () => {
    if (input.length > 10) {
      input = input.slice(2);
    }

    if (input.length < 10) {
      Swal.fire({
        width: "30em",
        icon: "error",
        title: "Oops...",
        text: "Enter Valid Id Number",
      });
      // setError("Enter Valid Id Number");
      return;
    }

    const { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(input);

    const formattedDateOfBirth = dateOfBirth
      ? dateOfBirth.toLocaleDateString()
      : "No Details Available";

    setNicDetails({ dateOfBirth: formattedDateOfBirth, gender });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-white shadow-lg rounded-2xl">
      <div className="relative pt-6 pr-8 mb-6 bg-green-100 rounded-2xl">
        <img
          src={image}
          alt="ID Card"
          className="w-full rounded-2xl object-cove"
        />
        <button
          className="absolute text-gray-500 top-2 right-2 hover:text-red-500"
          onClick={() => {
            setInput("");
            setNicDetails(null);
          }}
        >
          <span className="p-2 bg-white rounded-full">✖</span>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <Input
            placeholder="Enter NIC No"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button name="Submit" onClick={submitData} />
        </div>

        {nicDetails && (
          <Description
            nicNo={input}
            dateOfBirth={nicDetails.dateOfBirth}
            gender={nicDetails.gender}
          />
        )}

        {/* {error && <Alert message={error} />} */}
      </div>
    </div>
  );
}
