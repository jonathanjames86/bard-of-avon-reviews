import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './ReviewsList.css'


const ReviewListItem = ({author, publish_date, rating, id, body})=>(
    <div className="mb-3">
        <h3 className="Author">
            {author}
        </h3>
        <div className="mb-2">
            {rating} - {body}
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
                <CircularProgress  color="primary" />
                Gathering Reviews...
            </div>
        }
    </div>
);


export default ReviewsList;

