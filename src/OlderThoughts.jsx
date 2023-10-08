import { useState, useEffect } from "react"
import { Time } from "./Time";

export const OlderThoughts = () => {


const [olderThoughts, setOlderThoughts] = useState([]);

const thoughtsAPI = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

useEffect(() => {
    fetchHappyThoughts();
}, [])

const fetchHappyThoughts = () => {
    fetch(thoughtsAPI)
    .then((response) => response.json())
    .then((data) => {
        setOlderThoughts(data);
        console.log(setOlderThoughts)
    })
    .catch((error) => {
        console.log("failed to fetch thoughts", error );
    });
}


  return (
    <div>
        <ul>
            {olderThoughts.map(olderThought => (
                <li className="thoughtBox" key= {olderThought._id}>
                    {olderThought.message}
                
                    <p>
                        <button className="heart" onClick={() => onLike(_id)}> ❤️
                        </button> x 
                        
                    <Time time={olderThought.createdAt} />
                        </p>
                </li>
            ))}
        </ul>
    </div>
  )
}
