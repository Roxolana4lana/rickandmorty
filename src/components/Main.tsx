import React from 'react';
import Input from './Input'
import Select from './Select'
import TableComponent from './Table'
import PaginationComponent from './Pagination'
import useCharactersService from '../services/useCharactersService'


export default function Main() {
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