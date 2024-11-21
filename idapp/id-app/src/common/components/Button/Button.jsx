import React from 'react';



const Button = ({ onClick , name}) => {
    return (
        <button 
        onClick={onClick}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"> 
        
      
        {name}
    </button>
    );
};



export default Button;