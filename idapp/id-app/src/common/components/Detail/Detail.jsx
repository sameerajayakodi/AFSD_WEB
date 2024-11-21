export default function Detail({title, value}) {
    return(
        <div className="flex p-2 bg-green-50 rounded-md flex-col">
        <span className="text-gray-600">{title}</span>
        <span className="text-green-700 font-semibold">{value}</span>
    </div>
    );
}