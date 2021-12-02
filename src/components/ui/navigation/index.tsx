import * as React from 'react';
import './Navigation.scss';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import RoutesCollection from '../../../routes';

export const Navigation: React.FC = () => {
  const [state, setState] = React.useState({
    show: false,
  });
  const toggleDrawer = React.useCallback((open: boolean) => () => {
    setState({ ...state, show: open });
  }, [state.show]);
  return (
    <nav className="navigation">
      <Button onClick={toggleDrawer(true)}><Menu /></Button>
      <Drawer
        open={state.show}
        onClose={toggleDrawer(false)}
        className="navigation__drawer"
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List className="navigation-list">
            {RoutesCollection.map((el) => (
              <NavLink
                key={el.meta.id}
                style={({ isActive }) => ({
                  color: isActive ? '#1f91fd' : '',
                })}
                className="navigation-list__link"
                to={el.path}
              >
                {el.text}
              </NavLink>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};
