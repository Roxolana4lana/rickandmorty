import React, { memo } from 'react'
import DeadCharacterIcon from '../icons/DeadCharacterIcon.js'
import AliveCharacterIcon from '../icons/AliveCharacterIcon.js'
import UnknownCharacterIcon from '../icons/UnknownCharacterIcon.js'
import { statusEnum } from '../types/Enums'

type Status = {
    status: statusEnum | string
}

const IconStatus = ({ status }: Status) => {

    switch (status) {
        case statusEnum.DEAD:
            return (
                <div className='charakter-status-dead'>
                    <DeadCharacterIcon /><span>{statusEnum.DEAD}</span>
                </div>
            );
        case statusEnum.ALIVE:
            return (
                <div className='charakter-status-alive'>
                    <AliveCharacterIcon /><span>{statusEnum.ALIVE}</span>
                </div>
            );
        case statusEnum.UNKNOWN:
            return (
                <div className='charakter-status-unknown'>
                    <UnknownCharacterIcon /><span>{statusEnum.UNKNOWN}</span>
                </div>
            )
        default:
            return (
                <div className='charakter-status-unknown'>
                    <UnknownCharacterIcon /><span>{statusEnum.UNKNOWN}</span>
                </div>
            )
    }
}


export default memo(IconStatus)