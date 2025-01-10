import { useState } from "react";

function LongURLInputBox() {
  //put null and string
  const [url, setUrl] = useState("");
  const handleUrlShortening = () => {

  };
  return (
    <>
      <div>LongURLInputBox</div>
      {/* prettier-ignore */}
      <input placeholder="enter destination url" onChange={(e)=>setUrl(e.target.value)}></input>
      <button onClick={handleUrlShortening}>Short</button>
      
    </>
  );
}

export default LongURLInputBox;
