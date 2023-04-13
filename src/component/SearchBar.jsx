import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {

    const [input, setInput] = useState("");

    const fetchData = (value)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then(json=>{
            const result = json.filter((user)=>{
                return value && user && user.name && user.name.toLowerCase().includes(value)
            });
            console.log(result)
        })
    }

    const handleChange = (value) =>{
        setInput(value)
        fetchData(value)
    }

  return (
    <div className='container mx-auto'>
        <div className="searchBar flex justify-center">
        <input type="search" placeholder='Search Here' className='px-5 py-3 rounded' value={input} onChange={(e)=>handleChange(e.target.value)}/>
        </div>
      <h2 className='text-center text-white text-xl	font-bold mt-3'>Search Results</h2>
    </div>
  )
}

export default SearchBar