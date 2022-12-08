import React from 'react';
import Input from './components/Input'
import Select from './components/Select'
import TableComponent from './components/Table'
import PaginationComponent from './components/Pagination'
import useCharacters from './hooks/useCharacters'
import { Status } from './types/Enums'
import './styles/index.scss'

function App() {
  const { charactersData, setCurrentPage, currentPage, name, setName, error, setSpecies } = useCharacters();
  return (
    <div className="wrapper">
      <h1>Charakters</h1>
      <div className="filter-items">
        <Input name={name} setName={setName} />
        <Select setSpecies={setSpecies} />
      </div>

      <div className="data-wrapper">
        {(error || charactersData?.error) && <div>Error, try again</div>}
        {(charactersData.status === Status.LOADED && charactersData?.results) &&
          <>
            <TableComponent response={charactersData} />
            <PaginationComponent
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              response={charactersData}
            />
          </>
        }
        {
          charactersData.status === Status.LOADING && <div> Loading... </div>
        }
      </div>
    </div>
  );
}

export default App;
