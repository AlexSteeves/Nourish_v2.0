
import parse from 'html-react-parser';
import { useSelector, useDispatch} from 'react-redux';
export default function index() {

    const menu = useSelector((state) => state.menu.menu);
    
    return (
        <div className = "">
            {parse(menu)}
        </div>
    )
}