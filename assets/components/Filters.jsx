import React, { useEffect, useState } from 'react';
import OrderByDropdown from './OrderByDropdown';
import GenresDropdown from './GenresDropdown';

const Filters = ({ setCriterion, setGenre }) => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = () => {
    return fetch('api/genres/list')
      .then(res => res.json())
      .then(data => { setGenres(data) });
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="mx-auto max-w-screen-sm mb-8 lg:mb-16 flex justify-center gap-4">
      <OrderByDropdown setCriterion={setCriterion} />
      <GenresDropdown data={genres?.genres} setGenre={setGenre} />
    </div>
  )
}

export default Filters;