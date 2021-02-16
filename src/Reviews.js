import useFirestore from "./useFirestore";
import { useState } from "react";

const Reviews = () => {
    const { docs } = useFirestore('reviews')
    console.log(docs);

    return ( 
        <div className="reviews-container">
            <div className="container">
            { docs && docs.map((doc) => (
                <div className="review" key={docs.title}>
                    <h1>{doc.title}</h1>
                    <p>{doc.review}</p>
                </div>
            ))}
            </div>
        </div>
     );
}

 
export default Reviews;