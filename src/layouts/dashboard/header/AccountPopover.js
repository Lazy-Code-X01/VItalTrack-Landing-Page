import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';

// mocks_
import account from '../../../_mock/account';

// ----------------------------------------------------------------------
import { useLogoutMutation } from '../../../slices/adminApiSlice';
import {logout} from '../../../slices/authSlice'

const MENU_OPTIONS = [
  {
    label: 'My Profile',
    icon: 'eva:person-fill',
    path: '/dashboard/appointments'
  },
  {
    label: 'Account Settings',
    icon: 'eva:settings-2-fill',
    path: '/dashboard/chats'
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);
  const [logoutApiCall] = useLogoutMutation()
  const { userInfo }  = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose =  () => {
    setOpen(null);
  };

  const logoutHandler = async () => {
    try {
      logoutApiCall().unwrap()
      dispatch(logout())
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      > 
        <Box sx={{ my: 1.5, px: 2.5 }}>
          {userInfo && (
            <>
              <Typography variant="subtitle2"  sx={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'no-wrap'}}>
                {userInfo.docUserName}
              </Typography>

              <Typography variant="body2" sx={{ color: 'text.secondary', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'no-wrap' }}>
                {userInfo.organizationEmail}
              </Typography>
            </>
          )}
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <Link to={option.path} style={{textDecoration: 'none', color: 'initial'}}>
              <MenuItem key={option.label} onClick={handleClose}>
                {option.label}
              </MenuItem>
            </Link>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={logoutHandler} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
