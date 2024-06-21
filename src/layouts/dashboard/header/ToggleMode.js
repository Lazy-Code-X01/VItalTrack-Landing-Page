import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { IconButton, Tooltip } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------
export default function ToggleMode() {
  // State variable to track the current icon
  const [isNightMode, setIsNightMode] = useState(false);

  // Function to toggle the icon and its associated state
  const toggleIcon = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <>
      <Tooltip arrow title="Toggle Mode">
        <IconButton color="primary" onClick={toggleIcon}>
          {isNightMode ? (
            <Iconify icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" width="25px" color="#9C6CC8" />
          ) : (
            <Iconify icon="line-md:moon-rising-filled-loop" width="25px" color="#9C6CC8" />
          )}
        </IconButton>
      </Tooltip>
    </>
  );
}
