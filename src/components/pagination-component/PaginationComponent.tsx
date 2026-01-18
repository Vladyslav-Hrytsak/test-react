import './PaginationComponent.css'


interface Props {
    page: number;
    nextPage: () => void;
    prevPage: () => void;
}

const PaginationComponent = ({ page, nextPage, prevPage }: Props) => {
    return (
        <div className="pagination-div">
            <button onClick={prevPage} disabled={page === 1}>
                PREV
            </button>

            <span>Page: {page}</span>

            <button onClick={nextPage}>
                NEXT
            </button>
        </div>
    );
};

export default PaginationComponent;
