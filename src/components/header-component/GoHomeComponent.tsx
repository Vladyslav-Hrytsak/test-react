import {useNavigate} from "react-router";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {moviesSliceActions} from "../../redux/slices/moviesSlice.ts";

const GoHomeComponent = () => {

    const navigate = useNavigate();
    const {searchResults } = useAppSelector(state => state.moviesSlice);
    const dispatch = useAppDispatch();

    const onClick = ()=>{
        navigate('/')
        if(searchResults.length > 0){
            dispatch(moviesSliceActions.searchMovies(''));
        }

    };
    return (
        <div className={'ff'}>
            <button onClick={
                onClick
            }>
                ⮐ BACK
            </button>
        </div>
    );
};

export default GoHomeComponent;