
import parse from 'html-react-parser';
import { useSelector, useDispatch} from 'react-redux';
import styles from './style.module.scss'
export default function index() {

    const menu = useSelector((state) => state.menu.menu);
    
    return (
        <div className = {styles.textWrapper}>
            {parse(menu)}
        </div>
    )
}