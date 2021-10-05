import PropTypes from "prop-types";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import TranslateIcon from '@material-ui/icons/Translate';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  lang: {
    marginLeft: '10px',
    fontSize: '14px'
  }
}));

const DropdownMenu = ({ id, title, menus, onSelect }) => {
  const classes = useStyles();
  const [menu, setMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubMenuClick = (menu) => {
    setAnchorEl(null);
    setMenu(menu);
    onSelect(menu)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div>
    <div onClick={handleMenuClick}>{title}</div>
    <Menu
      id={`menu-${id}`}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      onClose={handleClose}
    >
      {
        menus.map(menu => (
          <MenuItem key={menu.name} onClick={() => handleSubMenuClick(menu)}>
            {menu.text}
          </MenuItem>
        ))
      }
    </Menu>
  </div>
}

DropdownMenu.propTypes = {
  menus: PropTypes.array,
  onSelect: PropTypes.func
}

export default DropdownMenu;