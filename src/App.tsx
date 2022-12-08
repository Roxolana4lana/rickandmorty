import React from 'react';
import Input from './components/Input'
import Select from './components/Select'
import TableComponent from './components/Table'
import PaginationComponent from './components/Pagination'
import useCharactersService from './services/useCharactersService'
import './styles/index.scss'

function App() {
  const { charactersData, setCurrentPage, currentPage, name, setName, error, setSpecies } = useCharactersService();
  return (
      <div className="wrapper">
          <h1>Charakters</h1>
          <div className="filter-items">
              <Input name={name} setName={setName} />
              <Select setSpecies={setSpecies} />
          </div>

          <div className="data-wrapper">
              {(error || charactersData?.error) && <div>error</div>}
              {(charactersData.status === "loaded" && !error && !charactersData?.error) ?
                  <>
                      <TableComponent response={charactersData} />
                      <PaginationComponent
                          setCurrentPage={setCurrentPage}
                          currentPage={currentPage}
                          response={charactersData}
                      />
                  </>
                  : <div> Loading... </div>
              }
          </div>
      </div>
  );
}

export default App;
