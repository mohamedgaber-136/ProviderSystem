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
import { useEffect, useMemo, useState } from "react";
import { Button, Container, Grid, IconButton } from "@mui/material";
import { SearchField } from "components/SearchField";
import FilterField from "components/FilterField";
import LongMenu from "components/ActionIcon";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Collapse } from "@mui/material"; // Import Collapse
import RangeFilter from "components/RangeFilter";
import { useParams } from "react-router-dom";
import MDButton from "components/MDButton";
export default function EnhancedTable({
  initialData,
  FieldArray,
  ActionsList,
  ButtonLabel = "",
  onButtonClick,
  MergeList = [],
}) {
  console.log(MergeList, "MergeList");
  const [order, setOrder] = useState("asc");
  const [selected, setSelected] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState(
    Object.keys(initialData[0] || {})[0] || ""
  );
  const [filteredData, setFilteredData] = useState(initialData);
  const [filterState, setFilterState] = useState({});

  // Function to apply all active filters
  const applyFilters = () => {
    let resultData = [...initialData];

    Object.keys(filterState).forEach((filterKey) => {
      const filterValue = filterState[filterKey];
      console.log(filterState, "filterState");
      if (
        typeof filterValue !== "object" &&
        filterState[filterKey]?.toLowerCase() !== "all"
      ) {
        resultData = resultData.filter((item) =>
          item[filterKey]
            ?.toString()
            ?.toLowerCase()
            .includes(filterValue.toLowerCase())
        );
      } else if (filterState[filterKey].type === "date") {
        resultData = resultData.filter(
          (item) =>
            new Date(item[filterKey]) >= new Date(filterValue.startDate) &&
            new Date(item[filterKey]) <= new Date(filterValue.endDate)
        );
      } else if (filterState[filterKey].type === "number") {
        resultData = resultData.filter(
          (item) =>
            item[filterKey] >= filterValue.min &&
            item[filterKey] <= filterValue.max
        );
      }
      // else if (filterState[filterKey].toLowerCase() === "all") {
      //   resultData = [...initialData];
      // }
    });
    console.log(resultData, "filtered data");
    setFilteredData(resultData);
  };

  // Refilter the data when any filter changes
  useEffect(() => {
    applyFilters();
  }, [filterState]);

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
    const result = keys.map((key) => {
      const mergeObject = MergeList.find((mergeObj) => mergeObj.first === key);
      if (mergeObject) {
        const itemKey = mergeObject.mergeLabel;
        console.log(mergeObject, "mergeObject");
        return {
          id: itemKey,
          numeric: typeof data[0][key] === "number",
          disablePadding: false,
          label: modifyLabelText(itemKey),
          merge: true,
        };
      }
      if (MergeList.map(({ second }) => second).includes(key)) {
        return false;
      }
      return {
        id: key,
        numeric: typeof data[0][key] === "number",
        disablePadding: false,
        label: modifyLabelText(key),
      };
    });
    console.log(result, "updated keys");
    return result;
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
          {headCells.map(
            (headCell) =>
              // If it's email or contact_number, don't render a label in the header
              // add a condation to set one cell for the composed header
              headCell && (
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
                      "& .MuiTableSortLabel-icon": {
                        color: "white !important",
                      }, // Ensures icon is white
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
              )
          )}
          {ActionsList ? (
            <TableCell sx={{ borderRadius: 0 }}>Actions</TableCell>
          ) : null}
        </TableRow>
      </TableHead>
    );
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {},
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      fontSize: 14,
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
      [...filteredData]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, filteredData]
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
    if (key.toLowerCase().includes("status")) {
      return (
        <StyledTableCell align="center" key={key}>
          <Button
            style={{
              backgroundColor: row[key] === true ? "green" : "red",
              color: "#fff",
              padding: 4,
            }}
          >
            <small>{row[key] ? "active" : "de-active"}</small>
          </Button>
        </StyledTableCell>
      );
    } else if (key.toLowerCase() === "logo") {
      return (
        <StyledTableCell align="center" key={key}>
          <img
            src={row[key]} // Assuming `row[key]` contains the image URL for the logo
            alt="logo"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }} // You can adjust the size accordingly
          />
        </StyledTableCell>
      );
    }
    const firstFound = MergeList.find(({ first }) => first === key);
    const secondFound = MergeList.find(({ second }) => second === key);
    if (firstFound) {
      return (
        <StyledTableCell align="center">
          <Button className="d-flex flex-column align-items-center">
            {Object.values(firstFound).map((keyItem) => (
              <div key={keyItem}>
                <small> {row[keyItem]}</small>
              </div>
            ))}
          </Button>
        </StyledTableCell>
      );
    } else if (secondFound) {
      return null;
    }

    return (
      <StyledTableCell
        align={typeof row[key] === "number" ? "center" : "center"}
        key={key}
      >
        <Button>{row[key]}</Button>
      </StyledTableCell>
    );
  };

  function modifyLabelText(text) {
    return text
      .split("_")
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
    // return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <Box sx={{ width: "100%" }}>
      {ButtonLabel && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            marginBlock: 2,
          }}
        >
          <MDButton color="dark" variant="outlined" onClick={onButtonClick}>
            {ButtonLabel}
          </MDButton>
        </Box>
      )}
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
      {FieldArray ? (
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
              sx={{
                flexWrap: { xs: "wrap", sm: "nowrap" }, // Wrap on mobile, no wrap on larger screens
                overflowX: { xs: "auto", sm: "visible" }, // Allow horizontal scrolling on mobile
                whiteSpace: { xs: "nowrap", sm: "normal" }, // Prevent wrapping in mobile view for scrolling
              }}
            >
              {FieldArray.map((item, index) =>
                item.type.includes("range") ? (
                  <Grid key={index} item xs={12} sm={4} md={3} lg={3}>
                    <RangeFilter
                      FilterArea={item}
                      filterState={filterState}
                      setFilterState={setFilterState}
                    />
                  </Grid>
                ) : (
                  <Grid key={index} item xs={12} sm={4} md={3} lg={3}>
                    <FilterField
                      FilterArea={item}
                      filterState={filterState}
                      setFilterState={setFilterState}
                    />
                  </Grid>
                )
              )}
              {/* <MDButton color="dark" onClick={setFilterState({})}>
                Clear
              </MDButton> */}
              {/* {FieldArray.map(
                (item, index) =>
                  item.type === "dropdown" && (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={4} // Adjust this as needed for tablet size
                      md={3} // Adjust this as needed for desktop size
                      lg={3} // Adjust this as needed for larger screens
                    >
                      {
                        item.type === "dropdown" && (
                          <FilterField
                            FilterArea={item}
                            filterState={filterState}
                            setFilterState={setFilterState}

                            // setData={setFilteredData}
                            // initialData={filteredData}
                            // data={initialData}
                          />
                        )
                        // : (
                        //   <></>
                        // )
                      }
                    </Grid>
                  )
              )} */}
            </Grid>
          </Paper>
        </Collapse>
      ) : null}

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
                    {/* Render the merged email and contact number column */}
                    {/* {renderEmailAndContact(row)} */}

                    {/* Render other cells */}
                    {Object.keys(row).map((key) => checkKeys(key, row))}
                    {ActionsList ? (
                      <StyledTableCell>
                        <LongMenu ActionsList={ActionsList} row={row} />
                      </StyledTableCell>
                    ) : null}
                  </StyledTableRow>

                  // <StyledTableRow hover key={`row-${index}`}>
                  //   {Object.keys(row).map((key) => checkKeys(key, row))}
                  //   {ActionsList ? (
                  //     <StyledTableCell>
                  //       <LongMenu ActionsList={ActionsList} row={row} />
                  //     </StyledTableCell>
                  //   ) : null}
                  // </StyledTableRow>
                ))
              ) : (
                <StyledTableRow hover>
                  <StyledTableCell colSpan={headCells.length + 1}>
                    <div className="p-2 d-flex justify-content-center">
                      <Button>No Data Found</Button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[15, 20, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            justifyContent: "space-between",
            display: "flex",
            width: "100%", // Ensures the main container is full width
            "& .MuiTablePagination-root": {
              width: "100%", // Sets the width of the pagination root div
            },
            "& > div": {
              width: "100%", // Sets width for the immediate child div
            },
            "& .MuiTablePagination-spacer": {
              display: "none", // Hides the spacer element
            },
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
              marginLeft: "auto", // Apply margin-left: auto to align to the right
            },
            "& #\\:r5\\:": {
              justifySelf: "flex-end", // Align specific element with ID to flex-end
            },
            "& .MuiTablePagination-selectLabel": {
              margin: 0, // Remove margin for select label
              justifySelf: "flex-start", // Align select label to flex-start
            },
          }}
        />
      </Paper>
    </Box>
  );
}
EnhancedTable.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.object).isRequired, // Validate 'data' as an array of objects
  FieldArray: PropTypes.arrayOf(PropTypes.any).isRequired,
  setData: PropTypes.any, // Validate 'setData'
  initialData: PropTypes.any, // Validate 'initialData ' as an array (could specify type inside 'any')
  ActionsList: PropTypes.array, // Validate
  ButtonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  MergeList: PropTypes.arrayOf(PropTypes.object),
};
