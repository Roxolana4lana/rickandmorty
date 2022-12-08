import React, { Dispatch, memo } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

interface ISelectComponentProps {
    setSpecies: Dispatch<React.SetStateAction<string>>
}

const availableSpecies = ['Alien', 'Human', 'Cronenberg', 'Animal', 'unknown', 'Poopybutthole', 'Humanoid']

const SelectComponent = ({ setSpecies }: ISelectComponentProps) => {
    const handleSelect = (species: string | null) => {
        if (typeof species === 'string') {
            setSpecies(species);
        }
    };
    return (
        <Dropdown onSelect={e => handleSelect(e)}>
            <Dropdown.Toggle id="dropdown-basic" >
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {availableSpecies.map(item => (
                    <Dropdown.Item key={item} eventKey={item} >{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default memo(SelectComponent)