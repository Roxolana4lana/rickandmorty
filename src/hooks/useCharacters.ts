import { useEffect, useState } from 'react';
import { IResponce } from '../types/Interfaces';

const useCharacters = () => {
  const [charactersData, setCharactersData] = useState<IResponce>({ status: 'loading' });
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${name}&species=${species}`)
      .then(response => response.json())
      .then((json) => { setCharactersData({ status: 'loaded', ...json }) })
      .catch(error => setError(error));
  }, [currentPage, name, species]);

  return { charactersData, setCurrentPage, currentPage, name, setName, error, species, setSpecies };
};

export default useCharacters;