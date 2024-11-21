import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import './style.css';

// eslint-disable-next-line react/prop-types
export default function Card({ cardtitle }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState();

  const saveData = () => {
    console.log({ title, content, id });

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: content,
        userId: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        
        if (response.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          return response.json();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          throw new Error('Something went wrong');
        }
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const cancelData = () => {
    setTitle('');
    setContent('');
    setId('');
  };

  return (
    <div className="card">
      <h2>{cardtitle}</h2>
      <TextInput
        label="Title"
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextInput
        label="Content"
        type="text"
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <TextInput
        label="Id"
        type="text"
        placeholder="Author ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button label="Save" color="green" onClick={saveData} />
      <Button label="Cancel" color="red" onClick={cancelData} />
    </div>
  );
}
