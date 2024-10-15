import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function LongMenu({ ActionsList, row }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (action) => {
    if (typeof action === 'function') {
      action(row.id); // Execute if action is a function (like swal alert)
    } else if (typeof action === 'string' && action) {
      const path = action.replace(":Id", row.id); // Replace :Id with actual id for navigation
      navigate(path);
    }
    handleClose();
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
          },
        }}
      >
        {ActionsList.map((option, index) => (
          <MenuItem 
            key={index} 
            onClick={() => handleMenuItemClick(option.action)}
          
            sx={{display:"flex",justifyContent:"center" }}
          >
            <IconButton size="small" >
              {option.icon}
            </IconButton>
            {option.content}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

LongMenu.propTypes = {
  ActionsList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      content: PropTypes.string.isRequired,
      action: PropTypes.string, // Route path as a string
    })
  ).isRequired,
  row: PropTypes.object.isRequired,
};
