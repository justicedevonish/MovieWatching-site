import React from 'react';
import './ratingcard.css';

function RatingCard({ rating }) {
    return (
        <div className="rating col-xl-3 col-md-6 mb-4">
            <article>
                <div className="post-img">
                    <img src={rating.thumbnail} alt="" className="img-fluid" />
                </div>

                <p className="post-category">{rating.category}</p>

                <h2 className="title">
                    <a href="#">{rating.title}</a>
                </h2>

                <div className="d-flex align-items-center">
                    <img
                        src={rating.author.image}
                        alt=""
                        className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                        <p className="post-author-list">{rating.author.name}</p>
                        <p className="post-date">
                            <time dateTime="2024-01-01">{rating.date}</time>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default RatingCard;
