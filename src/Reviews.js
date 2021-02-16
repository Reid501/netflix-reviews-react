import useFirestore from "./useFirestore";
import { useState } from "react";

const Reviews = () => {
    const { docs } = useFirestore('reviews')
    console.log(docs);

    return ( 
        <div className="reviews-container">
            <h1 className="review-header">REVIEWS</h1>
            { docs && docs.map((doc) => (
                <div className="review" key={doc.id}>
                    <h1>{doc.title}</h1>
                    <p>{doc.review}</p>
                </div>
            ))}
        </div>
     );
}

 
export default Reviews;