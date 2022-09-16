import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { translate } from '../i18n';
import { RootState } from '../store';
import { setLanguage } from '../store/actions/langActions';

interface HeaderProps {
  fixed?: boolean;
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ fixed, transparent }) => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();

  let headerClass = 'header';

  if(fixed) {
    headerClass += ' header--fixed';
  }

  if(transparent) {
    headerClass += ' header--transparent';
  }

  const chooseLanguageHandler = (value: string) => {
    dispatch(setLanguage(value));
  }

  const handleChange = (event: SelectChangeEvent) => {
    chooseLanguageHandler(event.target.value);
  };

  return(
    <header className={headerClass}>
      <div className="container">
        <div className="header__brand">
          <h1><Link to="/">React</Link></h1>
        </div>
        <div className="header__nav">
          <div className="header__nav_lang">
            <Select
                className="selected"
                value={language}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'DE'}>DE</MenuItem>
                <MenuItem value={'FR'}>FR</MenuItem>
            </Select>
          </div>
          <ul className="header__nav_menu">
            <li><NavLink to="/" >{translate('home', language)}</NavLink></li>
            <li><NavLink to="/about" >{translate('about', language)}</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;