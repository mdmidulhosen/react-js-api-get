import axios from "axios";
import { useEffect, useState } from "react";



function App() {

  const [datas, setDatas] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> setDatas(res.data))
  },[])

  return (
   <>
   <h1>Axios</h1>

   {
    datas.map((post)=>{
      const {id, title, body} = post;
      return <div className="card" key={id}> 
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    })
   }
   </>
  );
}

export default App;
