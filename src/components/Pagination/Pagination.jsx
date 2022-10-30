import {
    PaginationComponent, PaginationItem,PaginationItemContainer
} from './Pagination.styled';


const Pagination = props => {
    let paginationItems = [];

    for (let i = 0; i < props.count; i++) {
        paginationItems.push(<PaginationItemContainer key={i} onClick={() => props.handleClick(i)}><PaginationItem  active={i === props.selected}></PaginationItem></PaginationItemContainer>);
    }

    return <PaginationComponent>
        {paginationItems}
    </PaginationComponent>
}

export default Pagination;