import React from 'react';
import Menuitems from './MenuItems';
import { useLocation } from 'react-router';
import { Box, Button, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          // } else if(item.onClick) {
          //   const onclick = item.onClick
          //   return (
          //     // <Button variant="outlined"
          //     // color="primary"
          //     // fullWidth
          //     // onClick={item.onClick}
          //     // />
          //     <NavItem item={<Button variant="outlined"
          //       color="primary"
          //       fullWidth
          //       // onClick={onclick}
          //       />} key={item.id} pathDirect={pathDirect} />
          //   );
        } else if(item.onClick){
          console.log("item.onClick" + item.onClick)
          return (
            <NavItem item={item} key={item.id} pathDirect={pathDirect} />
          );
        } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect} />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
