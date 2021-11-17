import * as React from 'react';
import './style.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import RoutesCollection from '../../../routes/index';

export const Navigation:React.FC = () => {
  const [state, setState] = React.useState({
    show: false,
  });
  const toggleDrawer = React.useCallback((open:boolean) => () => {
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
              <ListItem className="navigation-list__item" button key={el.meta.id}>
                <Link className="navigation-list__link" to={el.path}>{el.text}</Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};
