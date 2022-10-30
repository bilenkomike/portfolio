import {
    PaginationComponent, PaginationItem
} from './Pagination.styled';


const Pagination = props => {
    let paginationItems = [];

    for (let i = 0; i < props.count; i++) {
        paginationItems.push(<PaginationItem key={i} onClick={() => props.handleClick(i)} active={i === props.selected}></PaginationItem>);
    }

    return <PaginationComponent>
        {paginationItems}
    </PaginationComponent>
}

export default Pagination;