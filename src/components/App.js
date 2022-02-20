import React, { useState, useEffect } from "react";

function App(){
    const [image, setImage] = useState(null)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => setImage(data.message))
        
    }, [])

    if (!image){
        return <p>"Loading..."</p>
    }

    return (
        <div>
            <p>Check out this doge!</p>
            <img src={image} alt="A Random Dog"/>
        </div>
    )
}

export default App 
