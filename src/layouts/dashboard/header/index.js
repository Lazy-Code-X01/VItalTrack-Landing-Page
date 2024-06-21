import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import ToggleMode from './ToggleMode';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to update date and time
    const updateDateTime = () => {
      const now = new Date();

      // Format date in the desired format (e.g., 14 July 2023)
      const formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).format(
        now
      );

      // Format time in the desired format (e.g., 10:00 am)
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(now);

      // Update the state with the formatted date and time
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    // Update date and time immediately and then every second
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <>
      <StyledRoot>
        <StyledToolbar>
          <IconButton
            onClick={onOpenNav}
            sx={{
              mr: 1,
              color: 'text.primary',
              display: { lg: 'none' },
            }}
          >
            <Iconify icon="eva:menu-2-fill" />
          </IconButton>

          <ToggleMode />
          <Box sx={{ flexGrow: 1 }} />

          <Stack
            direction="row"
            alignItems="center"
            spacing={{
              xs: 0.5,
              sm: 1,
            }}
          >
            <Stack
              sx={{
                color: '#000',

                fontWeight: '400',
              }}
            >
              <Typography sx={{ fontSize: '10px' }}>{currentDate}</Typography>
              <Typography sx={{ fontSize: '10px' }}>{currentTime}</Typography>
            </Stack>
            <NotificationsPopover />
            <AccountPopover />
          </Stack>
        </StyledToolbar>
      </StyledRoot>
    </>
  );
}
