import './HeaderComponent.css'
import SearchComponent from "./search-component/SearchComponent.tsx";
import GoHomeComponent from "./GoHomeComponent.tsx";


const HeaderComponent = () => {
    return (
        <div className={'header-container'}>
            <div className= 'header'>
                <GoHomeComponent/>
                <SearchComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;