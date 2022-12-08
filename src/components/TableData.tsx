import React, { memo } from 'react'
import Form from 'react-bootstrap/Form';
import IconStatus from './IconStatus'
import { ICharacter } from '../types/Interfaces';
import { statusEnum } from '../types/Enums'

interface ITableDataComponentProps {
    character: ICharacter,
}

const TableData = ({ character }: ITableDataComponentProps) => {
    return (
        <tr key={character.id} className={`${character.status === statusEnum.DEAD ? "dead-character" : null}`}>
            <td>
                <Form.Check inline name="group1" type="checkbox" />
            </td>
            <td><>{character.name} <br />{character.species}</></td>
            <td><img alt='' src={character.image} className="avatar" /></td>
            <td>{character.origin.name}</td>
            <td>{character.gender}</td>
            <td><IconStatus status={character.status} /></td>
        </tr>
    );
}

export default memo(TableData)