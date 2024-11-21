import React from 'react';
import './style.css';

export default function Card({ children }) {
    return (
        <div className="card">
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos maiores dicta ab expedita, exercitationem illum 
                recusandae esse velit iste praesentium aperiam sint quibusdam 
                corrupti aliquid reprehenderit. Distinctio at quasi voluptatem.
            </p>
            <div className="card-children">
                {children}
            </div>
        </div>
    );
}
