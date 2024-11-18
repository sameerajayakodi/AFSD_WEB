import './style.css';
// eslint-disable-next-line react/prop-types
export default function UserCard({title , body}) {
    return (
        <div className="userCard">
            <h3>Title : {title}</h3>
            <p>{body}</p>
        </div>
    )
}