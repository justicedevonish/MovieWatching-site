import React, { useState, useEffect } from 'react';
import './catalog.css';
import Card from '../components/Card';
import Search from '../components/Search';

function Catalog() {
    const filterList = [
        {
            _id: 1,
            name: 'All',
            active: true,
        },
        {
            _id: 2,
            name: 'Romance',
            active: false,
        },
        {
            _id: 3,
            name: 'Action',
            active: false,
        },
        {
            _id: 4,
            name: 'Thriller',
            active: false,
        },
        {
            _id: 5,
            name: 'Horror',
            active: false,
        },
        {
            _id: 6,
            name: 'Adventure',
            active: false,
        },
        {
            _id: 7,
            name: "Sci-Fi",
            active: false,
        }
    ];

    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [filters, setFilters] = useState(filterList);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = () => {
        fetch('http://localhost:3001/api/data')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setMovies(data);
    }, [data]);

    const handleFilterMovies = category => {
        setFilters(
            filters.map(filter => {
                filter.active = false;
                if (filter.name === category) {
                    filter.active = true;
                }
                return filter;
            })
        );

        if (category === 'All') {
            setMovies(data);
            return;
        }
        const filteredMovies = data.filter(movie => movie.category === category);
        setMovies(filteredMovies);
    };

    // Search handler function
    const handleSearch = query => {
        setSearchQuery(query);
    };

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setMovies(data); // Reset to all movies if search query is empty
            return;
        }

        const filteredMovies = data.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setMovies(filteredMovies);
    }, [searchQuery, data]);

    return (
        <section id="catalog" className="catalog" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="container-fluid">
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <h4 className="section-title">Movies</h4>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="300">
                    <ul className="filters">
                        {filters.map(filter => (
                            <li
                                key={filter._id}
                                className={`${filter.active ? 'active' : undefined}`}
                                onClick={() => handleFilterMovies(filter.name)}
                            >
                                {filter.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="search-input" data-aos="fade-up" data-aos-delay="300">
                    <Search handleSearch={handleSearch} />
                </div>
                <div className="row mt-5" data-aos="fade-up" data-aos-delay="500">
                    {movies &&
                        movies.length > 0 &&
                        movies.map(movie => <Card key={movie._id} movie={movie} />)}
                </div>
            </div>
        </section>
    );
}

export default Catalog;
