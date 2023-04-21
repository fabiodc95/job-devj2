import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Heading from './Heading';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import Filters from './Filters';

const Index = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [criterion, setCriterion] = useState("release_date")
  const [genre, setGenre] = useState(null);

  const fetchMovies = () => {
    setLoading(true);

    return fetch(`/api/movies?orderBy=${criterion}&genre=${genre}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchMovies();
  }, [criterion, genre]);

  return (
    <Layout>
      <Heading />
      <Filters setCriterion={setCriterion} setGenre={setGenre} />
      <MovieList loading={loading}>
        {movies.map((item, key) => (
          <MovieItem key={key} {...item} />
        ))}
      </MovieList>
    </Layout>
  );
};

export default Index;
