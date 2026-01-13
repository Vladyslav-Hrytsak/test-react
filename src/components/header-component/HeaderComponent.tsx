import './HeaderComponent.css'
import SearchComponent from "../search-component/SearchComponent.tsx";


const HeaderComponent = () => {
    return (
        <div className= 'header'>
            Header Component
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;