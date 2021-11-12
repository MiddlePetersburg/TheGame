import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import RoutesCollection from '../../../routes/index'
// import {RouterPaths} from '../../../constants/urls'

interface navigationProps { 
    paths?: unknown
}

export const Navigation:React.FC<navigationProps> = props => {
  const [state, setState] = React.useState({
    show: false,
  });

  const toggleDrawer = (open:boolean) => () => {
    setState({ ...state, ['show']: open });
  };

  const list = () => (
        <Box
          role="presentation"
        onClick={toggleDrawer(false)}
        >
            <List>
              {RoutesCollection.map((el, index) => (
            <ListItem button key={index}>
                <Link to={el.path}>{el.text}</Link>
            </ListItem>
            ))}
        </List>
            
        <Divider />
        </Box>
  );

  return (
    <div>
      <React.Fragment>
          <Button onClick={toggleDrawer(true)}><Menu/></Button>
          <Drawer
            open={state['show']}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
