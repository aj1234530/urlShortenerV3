import { useState } from "react";
import LinkWrapperCard from "../components/LinkWrapperCard";
interface LinkCardData {
    shortUrl: string,
    longUrl: string,
    numberOfClicks: string
}
function Landing() {
  const handleSubmit = () => {};
  //for the guest user the links are stored in the cookies
  const urlsFromBrowserStorage = useState<LinkCardData >();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div>
          <h1>Shorty</h1>
        </div>
        <nav className="gap-4">
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>
        <div className="gap-10">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
      <section className=" w-full border bg-slate-50">
        <h1>Short Links with</h1>
        <h2>superpowers</h2>
        <p>
          Dub.co is the open-source link management infrastructure for modern
          marketing teams
        </p>
        <div>
          <form onSubmit={handleSubmit}>
            <input placeholder="Shorten any link..."></input>
            <button type="submit">Short</button>
          </form>
          <div>
           {urlsFromBrowserStorage && 
           urlsFromBrowserStorage.map(()=>(
            <LinkWrapperCard shortUrl={}>
           ))
           }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
