import './HeaderComponent.css'
import SearchComponent from "./search-component/SearchComponent.tsx";
import GoHomeComponent from "./GoHomeComponent.tsx";
import UserInfoComponent from "./user-info/UserInfoComponent.tsx";


const HeaderComponent = () => {
    return (
        <div className={'header-container'}>
            <div className= 'header'>
                <GoHomeComponent/>
                <SearchComponent/>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;