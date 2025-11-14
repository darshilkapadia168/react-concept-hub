import axios from 'axios'
import { useState } from 'react';

function App() {

  //Api Call With fetch
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  //   const data = await response.json()
  //   console.log(data); 
  // }

  //Api call with axios
  const [data, setdata] = useState([])

  const GetData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data);
    
  }

  return (
    <div>
      <button onClick={GetData}>Get Data</button>
    <div>
      {data.map(function(elem,idx){
        return <div key={idx}>
          <h3>Hello,{elem.author}</h3>
        </div>
      })}
    </div>
    </div>
    // <button onClick={getData}>Get Data</button>
  )
}

export default App