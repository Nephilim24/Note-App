import Button from "./Button";
import './NavBar.scss';
export const NavBar = ({ searchMode, setSearchMode }) => {
    return (
        <nav className="nav">
            {searchMode ?
                <Button type={'back'} onClick={() => setSearchMode(false)} />
                :
                <div></div>
            }
            {searchMode ? <input type="text" placeholder="Поиск..." /> : <h1>Заметки</h1>}
            <Button type={searchMode ? 'remove' : 'search'} onClick={() => setSearchMode(prev => !prev)} />
        </nav>
    );
}