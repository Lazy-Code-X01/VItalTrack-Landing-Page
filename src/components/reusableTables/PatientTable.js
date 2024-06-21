import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';

// mock
import account from '../../_mock/account';

// components
import Scrollbar from '../scrollbar';

// sections
import { UserListHead } from '../../sections/@dashboard/user';

// mock
import useUsers from '../../hooks/useUsers';

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'department', label: 'Department', alignRight: false },
  { id: 'matric_number', label: 'Matric Number', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
];


  function descendingComparator(a, b, orderBy) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
    // Function to search by matric number
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return array.filter((_user) => {
        const matricNumber = _user.matric_number.toLowerCase();
        return matricNumber.indexOf(query.toLowerCase()) !== -1;
      });
      
    }
    return stabilizedThis.map((el) => el[0]);
  }

  export default function PatientTable() {
    const [userData, setUserData] = useState(null); // New state variable for user dat

    // eslint-disable-next-line camelcase
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState('asc');
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('name');
    const [filterName, setFilterName] = useState('');
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Use the useUsers hook
    const { USERLIST, loader, error, setUsers, setError } = useUsers();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.email);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, email) => {
    const selectedIndex = selected.indexOf(email);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, email);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };


  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;


  useEffect(() => {
    // This code block will be executed whenever `userData` is updated.
    console.log(userData);
  }, [userData]);

    return(
      <>
          <Card>
            <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                  <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      // eslint-disable-next-line camelcase
                      const { _id, firstName, lastName, department, email, phoneNumber, matric_number } = row;
                      const selectedUser = selected.indexOf(email) !== -1;

                      return (
                      <TableRow hover key={_id} tabIndex={-1} lastName="checkbox" selected={selectedUser}>
                          <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, email)} />
                          </TableCell>

                          <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                              <Avatar alt={firstName} src={account.studentPhoto} />
                              <Typography variant="subtitle2" noWrap>
                              {/* eslint-disable-next-line camelcase */}
                              {`${lastName} ${firstName}`}
                              </Typography>
                          </Stack>
                          </TableCell>

                          <TableCell align="left">{department}</TableCell>
                          {/* eslint-disable-next-line camelcase */}
                          <TableCell align="left">{matric_number}</TableCell>

                          <TableCell align="left">{email}</TableCell>

                          <TableCell align="left">{phoneNumber}</TableCell>
                      </TableRow>
                      );
                  })}
                  {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                      </TableRow>
                  )}
                  </TableBody>
                  {error ? (
                  <TableBody>
                      <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <Paper
                          sx={{
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h6" paragraph>
                              Error
                          </Typography>

                          <Typography variant="body2">
                              {error}
                          </Typography>
                          </Paper>
                      </TableCell>
                      </TableRow>
                  </TableBody>
                  ): isNotFound && (
                  <TableBody>
                      <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <Paper
                          sx={{
                              textAlign: 'center',
                          }}
                          >
                          <Typography variant="h6" paragraph>
                              Not found
                          </Typography>

                          <Typography variant="body2">
                              No results found for &nbsp;
                              <strong>&quot;{filterName}&quot;</strong>.
                              <br /> Try checking for typos or using complete words.
                          </Typography>
                          </Paper>
                      </TableCell>
                      </TableRow>
                  </TableBody>
                  )}
              </Table>
            </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[5, 7,]}
              component="div"
              count={USERLIST.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
      </>
    )
}