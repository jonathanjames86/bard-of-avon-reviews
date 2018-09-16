import React from 'react';

const ReviewListItem = ({author, publish_date, rating, id})=>(
    <div className="mb-3">
        <h3>
            {author}
        </h3>
        <div className="mb-2">
            {rating}
        </div>
        <div>
        </div>
    </div>
);

const ReviewsList = ({reviews})=>(
    <div>
        { reviews ?
            <div>
                {reviews.map(review=><ReviewListItem key={review.id} {...review}/>)}
            </div> :
            <div>
                Gathering Reviews...
            </div>
        }
    </div>
);


export default ReviewsList;

