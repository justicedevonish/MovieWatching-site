import React, { useState, useEffect } from 'react';
import RatingCard from '../components/RatingCard';

function Rating() {
    const [ratings, setRatings] = useState([]);

    const fetchRatingData = () => {
        fetch('http://localhost:3000/data/ratingData.json')
            .then(res => res.json())
            .then(data => {
                setRatings(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchRatingData();
    }, []);

    return (
        <section id="ratings" className="ratings">
            <div className="container-fluid">
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <h4 className="section-title">Movie Ratings</h4>
                </div>
                <div className="row mt-5" data-aos="fade-up" data-aos-delay="300">
                    {ratings &&
                        ratings.length > 0 &&
                        ratings.map(rating => <RatingCard key={rating._id} rating={rating} />)}
                </div>
            </div>
        </section>
    );
}

export default Rating;
