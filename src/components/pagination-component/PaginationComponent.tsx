import {useSearchParams} from "react-router";

const PaginationComponent = () => {

    const [query, setQuery] = useSearchParams({pg:'1'})


    return (
        <div>

            <button onClick={()=>{
                const pg = query.get('pg')
                if(pg){
                    let currentPage = +pg
                    setQuery({pg:(++currentPage).toString()})
                }
            }}>PREV</button>

            <button onClick={()=>{
                const pg = query.get('pg')
                if(pg){
                    let currentPage = +pg
                    setQuery({pg:(--currentPage).toString()})
                }
            }} >NEXT</button>


        </div>
    );
};

export default PaginationComponent;