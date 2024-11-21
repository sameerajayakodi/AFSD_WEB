import Detail from "../../common/components/Detail/Detail";

export default function Description({ nicNo, dateOfBirth, gender }) {
  return (
    <div className="rounded-md space-y-3">
      <Detail title="NIC No" value={nicNo || "Not Provided"} />
      <Detail title="Birthday" value={dateOfBirth || "No Details"} />
      <Detail title="Gender" value={gender || "No Details Available"} />
    </div>
  );
}
