import React, { memo } from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import TableData from './TableData'
import { IResponce } from '../types/Interfaces';

interface ITableComponentProps {
    response: IResponce,
}

const tableThemes = ['Name', 'Avatar', 'Origin', 'Gender', 'Status']

const TableComponent = ({ response }: ITableComponentProps) => {
    return (
        <>
            <div className="table-wrapper">
                <Table responsive hover>
                    <thead style={{ position: "sticky", top: 0 }}>
                        <tr>
                            <th className="header"><Form.Check inline name="group1" type="checkbox" /></th>
                            {
                                tableThemes.map(item => (
                                    <th className="header" key={item}>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {response?.results && response?.results.map((item) => (
                            <TableData character={item} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default memo(TableComponent)