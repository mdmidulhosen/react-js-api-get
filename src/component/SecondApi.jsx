import React, { useEffect, useState } from 'react'


function SecondApi() {

    const [photos, setPhotos] = useState(null)

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) =>{
        return res.json()
    })
    .then((response) =>{
        setPhotos(response);
    })
},[])

  return (
    <div>
        {
            photos && photos.map((photo)=>{
                return <>
                <h1>{photo.id}</h1>
                <h1>{photo.url}</h1>
                <h1>{photo.title}</h1>
                </>
                
            })
        }
    </div>
  )
}

export default SecondApi;