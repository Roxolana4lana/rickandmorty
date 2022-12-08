import React from 'react'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import IconStatus from './IconStatus'
import { IResponce } from '../types/Interfaces';


interface ITableComponentProps {
    response: IResponce,
}

const TableComponent = ({response}: ITableComponentProps) => {
    const tableThemes = ['Name', 'Avatar', 'Origin', 'Gender', 'Status',]
    return (
        <>
            <div className='table-wrapper'>
                <Table responsive hover>
                    <thead style={{ position: 'sticky', top: 0 }}>
                        <tr>
                            <th className='header'><Form.Check inline name="group1" type='checkbox' /></th>
                            {
                                tableThemes.map(item => (
                                    <th className='header' key={item}>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {response?.results && response?.results.map((item) => (
                            <tr key={item.id} className={`${item.status === "Dead" ? "dead-character" : null}`}>
                                <td>
                                    <Form.Check inline name="group1" type="checkbox" />
                                </td>
                                <td><>{item.name} <br />{item.species}</></td>
                                <td><img src={item.image} className="avatar" /></td>
                                <td>{item.origin.name}</td>
                                <td>{item.gender}</td>
                                <td><IconStatus status={item.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className='pagination'>
            </div>
        </>
    );
}

export default React.memo(TableComponent)