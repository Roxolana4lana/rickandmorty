import React, { useRef } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import SearchIcon from '../icons/SearchIcon.js'

interface IInputProps {
    name: string,
    setName: (name: string) => void
}

export default function Input({ name, setName }: IInputProps) {
    const target = useRef(null);
    const handleChange = (value: string) => {
        setName(value);
    };

    return (
        <InputGroup >
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={e => handleChange(e.target.value)}
                value={name}
                ref={target}
            />
            <Overlay target={target.current} show={name.length > 7} placement="bottom">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        {name}
                    </Tooltip>
                )}
            </Overlay>
            <InputGroup.Text id="basic-addon2"><SearchIcon /></InputGroup.Text>
        </InputGroup>
    );
}