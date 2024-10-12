import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { Button, Container, Grid, IconButton } from "@mui/material";
import { SearchField } from "components/SearchField";
import FilterField from "components/FilterField";
import LongMenu from "components/ActionIcon";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Collapse } from "@mui/material"; // Import Collapse
export default function EnhancedTable({
  initialData,
  FieldAarray,
  ActionsList,
}) {
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState(
    Object.keys(initialData[0] || {})[0] || ""
  );
  const [filterdData, setFilteredData] = useState(initialData);
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1;
    if (b[orderBy] > a[orderBy]) return 1;
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  // Creating Dynamic HeadCells ----------------------------
  const createHeadCells = (data) => {
    const keys = Object.keys(data[0] || {});
    return keys.map((key) => ({
      id: key,
      numeric: typeof data[0][key] === "number",
      disablePadding: false,
      label: key.charAt(0).toUpperCase() + key.slice(1),
    }));
  };

  const headCells = createHeadCells(initialData);

  function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead
        sx={{ display: "table-header-group", backgroundColor: "#1c3c5a" }}
      >
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "center" : "center"}
              sortDirection={orderBy === headCell.id ? order : false}
              sx={{ borderRadius: 0 }} // This line removes the border radius
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                sx={{
                  color: "white !important", // Ensures white color always
                  "&:hover": { color: "white !important" }, // Ensures white on hover
                  "&.Mui-active": { color: "white !important" }, // Ensures white on active
                  "& .MuiTableSortLabel-icon": { color: "white !important" }, // Ensures icon is white
                }}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
          <TableCell sx={{ borderRadius: 0 }}>Actions</TableCell>
        </TableRow>
      </TableHead>
    );
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const visibleRows = useMemo(
    () =>
      [...filterdData]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, filterdData]
  );

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    headCells: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        numeric: PropTypes.bool.isRequired,
        disablePadding: PropTypes.bool,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  const checkKeys = (key, row) => {
    if (key === "Status") {
      return (
        <StyledTableCell align="center" key={key}>
          <Button
            style={{
              backgroundColor: row[key] === "Active" ? "green" : "red",
              color: "#fff",
              padding: 4,
            }}
          >
            <small>{row[key]}</small>
          </Button>
        </StyledTableCell>
      );
    } else if (key === "Logo") {
      return (
        <StyledTableCell align="center" key={key}>
          <img
            src={row[key]} // Assuming `row[key]` contains the image URL for the logo
            alt="logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }} // You can adjust the size accordingly
          />
        </StyledTableCell>
      );
    } else {
      return (
        <StyledTableCell
          align={typeof row[key] === "number" ? "center" : "center"}
          key={key}
        >
          <Button>{row[key]}</Button>
        </StyledTableCell>
      );
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBlock: 2,
        }}
      >
        <SearchField setData={setFilteredData} initialData={initialData} />
        <IconButton
          title="Filter list"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FilterListIcon />
        </IconButton>
      </Box>

      <Collapse in={showFilters} timeout="auto" unmountOnExit>
        <Paper
          sx={{
            width: "100%",
            mb: 2,
            borderRadius: 1,
            overflow: "hidden",
            p: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="flex-start"
          >
            {FieldAarray.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                <FilterField
                  FilterArea={item}
                  setData={setFilteredData}
                  initialData={filterdData}
                  data={initialData}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Collapse>

      <Paper sx={{ width: "100%", mb: 2, borderRadius: 0, overflow: "hidden" }}>
        <TableContainer component={Paper} sx={{ borderRadius: 0 }}>
          <Table sx={{ minWidth: 750 }} aria-label="enhanced table">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={true}
              onRequestSort={handleRequestSort}
              rowCount={initialData.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.length ? (
                visibleRows.map((row, index) => (
                  <StyledTableRow hover key={`row-${index}`}>
                    {Object.keys(row).map((key) => checkKeys(key, row))}
                    <StyledTableCell>
                      <LongMenu ActionsList={ActionsList} row={row} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow hover>
                  <StyledTableCell colSpan={headCells.length + 1}>
                    No Data Found
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filterdData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            justifyContent: "flex-start",
            display: "flex",
            "& .MuiTablePagination-toolbar": {
              margin: 0, // Remove margin from the toolbar
            },
            "& .MuiTablePagination-selectRoot": {
              margin: 0, // Remove margin from the select dropdown
            },
            "& .MuiButtonBase-root": {
              margin: 0, // Remove margin from buttons
            },
            "& .MuiTypography-root": {
              margin: 0, // Remove margin from typography
            },
            "& .MuiTablePagination-displayedRows": {
              margin: 0, // Remove margin from displayed rows
            },
            "& div[id^=':r2:']": {
              margin: 0, // Remove margin for the element with id starting with :r2:
            },
            "& .MuiTablePagination-selectLabel": {
              margin: 0, // Remove margin for select label
            },
          }}
        />
      </Paper>
    </Box>
  );
}
EnhancedTable.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate 'data' as an array of objects
  FieldAarray: PropTypes.arrayOf(PropTypes.any).isRequired,
  setData: PropTypes.any, // Validate 'setData'
  initialData: PropTypes.any, // Validate 'initialData ' as an array (could specify type inside 'any')
  ActionsList: PropTypes.array, // Validate
};
