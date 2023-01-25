import React, {useState} from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const[ctime,setctime] = useState(time);
  const updatedtime = () => {


    time = new Date().toLocaleTimeString();
    setctime(time);
  };
  setInterval(updatedtime, 1000);
  return(
  <div>
    <h1> {ctime} </h1>  
  </div>
  );
}

export default App;
