import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

   const isConnet = async() => {
    const res = await fetch("http://127.0.0.1:8000", {
      method: "GET",
    });
    const json = await res.json();
    setMessage(json.message);
   }

  return (
    <div className="App">
      <button onClick={isConnet}>연결 확인</button>
      결과 : {message}
    </div>
  );
}

export default App;
