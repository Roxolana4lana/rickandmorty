import React, { useState, Dispatch, memo } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { IResponce } from '../types/Interfaces';

interface IPaginationComponentProps {
    response: IResponce,
    currentPage: number,
    setCurrentPage: Dispatch<React.SetStateAction<number>>
}

const PaginationComponent = ({ response, currentPage, setCurrentPage }: IPaginationComponentProps) => {
    const totalPages = response?.info?.pages || 0;
    const pages = (Array.from(Array(totalPages + 1).keys())).slice(1);
    const limit = 5;
    const [maxLimit, setMaxLimit] = useState(5);
    const [minLimit, setMinLimit] = useState(0);

    const onPageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }
    const onPrevClick = () => {
        if ((currentPage - 1) % limit === 0) {
            setMaxLimit(maxLimit - limit);
            setMinLimit(minLimit - limit);
        }
        setCurrentPage(prev => prev - 1);
    }

    const onNextClick = () => {
        if (currentPage + 1 > maxLimit) {
            setMaxLimit(maxLimit + limit);
            setMinLimit(minLimit + limit);
        }
        setCurrentPage(prev => prev + 1);
    }

    return (
        <Pagination>
            <Pagination.Prev onClick={onPrevClick} disabled={currentPage === 1} />
            {minLimit >= 1 && <span className="page-ellipsis"><Pagination.Ellipsis /></span>}
            {pages.map(page => {
                if (page <= maxLimit && page > minLimit) {
                    return (
                        <Pagination.Item key={page} id={page.toString()} onClick={(e) => onPageChange(Number((e.target as any).id))} active={currentPage === page}>
                            {page}
                        </Pagination.Item>
                    );
                } else {
                    return null;
                }
            }
            )}
            {pages.length > maxLimit && <span className="page-ellipsis"><Pagination.Ellipsis /></span>}
            <Pagination.Next onClick={onNextClick} disabled={currentPage === totalPages} />
        </Pagination>
    );
}

export default memo(PaginationComponent)

