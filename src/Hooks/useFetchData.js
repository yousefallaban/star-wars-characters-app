import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (character) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    if (character) {
      const endpoints = [character.homeworld, ...character.films].filter(Boolean);
      const fetchData = async () => {
        try {
          const [homeworldRes, ...rest] = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
          const homeworld = homeworldRes.data.name;
          const films = rest.map(item => item.data.title);

          setData({
            ...character,
            films: films,
            homeworld,
          });

        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [character]);

  return { loading, data };
};

export default useFetchData;
