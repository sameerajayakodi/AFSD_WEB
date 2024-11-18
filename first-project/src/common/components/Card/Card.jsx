/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import './style.css'
import { ThemeContext } from '../ThemeProvider/ThemeProvider';

// eslint-disable-next-line react/prop-types
export default function Card({children}) {

    const { theme, toggle } = useContext(ThemeContext);
    return (
        <div className="card">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aut deleniti, numquam, accusamus temporibus qui doloribus soluta harum fugiat ratione nesciunt odio sit error aspernatur, voluptatibus facilis dolorum repellendus nobis.</p>
            <button onClick={toggle}>Change Theme</button>
            <div className='cardContent'>
                {children}
            </div>
        </div>
    )
}