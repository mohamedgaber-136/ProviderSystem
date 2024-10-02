import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useMemo, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import { SearchField } from "components/SearchField";
import FilterField from "components/FilterField";
export default function EnhancedTable({ data, FieldAarray }) {
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [orderBy, setOrderBy] = useState(Object.keys(data[0] || {})[0] || "");

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

  const headCells = createHeadCells(data);

  function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead sx={{ display: "table-header-group",backgroundColor:'#1c3c5a', }}>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "left" : "left"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
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
      [...data]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, data]
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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Grid
          container
          gap={2}
          padding={3}
          alignItems={"center"}
          justifyContent={"start"}
        >
          <Grid item xs={12}>
            <SearchField FindData={visibleRows} />
          </Grid>
          {FieldAarray.map((item, index) => (
            <Grid key={index} xs={5} md={2}>
              <FilterField FilterArea={item} />
            </Grid>
          ))}
        </Grid>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-label="enhanced table">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={true}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              headCells={headCells}
            />
            {/* {Creating Dynamic HeadCells ----------------------------}  */}

            <TableBody>
              {visibleRows.map((row, index) => (
                <StyledTableRow hover key={row.id + index}>
                  {Object.keys(row).map((key) =>
                    key == "status" ? (
                      <StyledTableCell
                        align={typeof row[key] === "number" ? "left" : "left"}
                        key={key}
                      >
                        <Button
                          style={{
                            backgroundColor:
                              row[key] == "active" ? "green" : "red",
                            color: "#fff",
                            padding: 2,
                          }}
                        >
                          {row[key]}
                        </Button>
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell
                        align={typeof row[key] === "number" ? "left" : "left"}
                        key={key}
                      >
                        <Button>{row[key]}</Button>
                      </StyledTableCell>
                    )
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
EnhancedTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate 'data' as an array of objects
  FieldAarray: PropTypes.arrayOf(PropTypes.any).isRequired, // Validate 'FieldAarray' as an array (could specify type inside 'any')
};
