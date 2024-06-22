import * as React from "react";
import { css, styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import {
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { v4 as uuidv4 } from "uuid";
import { MoreVert as IconManage } from "@mui/icons-material";

const cssFontSize = {
  header: 18,
  body: 16,
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#2A4395", //theme.palette.common.black,
    fontSize: cssFontSize.header, // 18,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: cssFontSize.body, // 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F3F8FF", //"tbody.odd",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#FAFBFB", //"tbody.odd",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // backgroundColor: "#FAFBFB",
    // border: 0,
  },
}));

// เตรียมข้อมูล
function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomizedTables(headerItems, rowItems, handleActionClickParent) {
  console.log("headerItems");
  console.log(headerItems);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowItems.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //ส่วนของเมนู
  let [anchorEls, setAnchorEls] = React.useState([]);

  const handleActionClick = (id, event) => {
    // alert(id)
    let tmpanchorEls = [...anchorEls];
    tmpanchorEls[id] = event.target;
    setAnchorEls(tmpanchorEls);
  };
  const handleActionClose = (id, msessage, event) => {
    let tmpanchorEls = [...anchorEls];
    tmpanchorEls[id] = null;
    setAnchorEls(tmpanchorEls);
    handleActionClickParent(id, msessage)
  };

  React.useEffect(() => {
    console.table(anchorEls);
  }, [anchorEls]);

  return (
    <TableContainer
      component={Paper}
      sx={{ minWidth: "100%", maxWidth: "100%", overflowX: "auto" }}
    >
      <Table
      >
        <TableHead>
          <TableRow
            key={uuidv4()}
            sx={{
              borderBottom: "2px groove #1682d4",
              borderTop: "2px groove #1682d4",
            }}
          >
            {headerItems.map((item) => (
              <StyledTableCell key={uuidv4()} align={item.align}>
                {item.name}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {(rowsPerPage > 0
            ? rowItems.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : rowItems
          ).map((row) => (
            <StyledTableRow
              key={row[0].value}
              style={{ borderBottom: "2px groove" }}
            >
              {row.map((item) => (
                <>
                  {console.log(row[0].value)}
                  {item.visible && item.type == "button" && (
                    <StyledTableCell 
                    align={item.align}
                    >
                      <Box>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={(e) => handleActionClick(row[0].value, e)}
                        >
                          <IconManage />
                        </IconButton>
                        <Menu
                          id={row[0].value}
                          anchorEl={()=> anchorEls[row[0].value]}
                          keepMounted
                          open={Boolean(anchorEls[row[0].value])}
                          onClose={(e) => handleActionClose(row[0].value, e)}
                        >
                          <MenuItem
                            onClick={(e) => handleActionClose(row[0].value, "View", e)}
                          >
                            View Details
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => handleActionClose(row[0].value, "Delete", e)}
                          >
                            Delete
                          </MenuItem>
                        </Menu>
                      </Box>
                    </StyledTableCell>
                  )}
                  {item.visible && item.type == "text" && (
                    <StyledTableCell key={uuidv4()} align={item.align}>
                      {item.value}
                    </StyledTableCell>
                  )}
                </>
              ))}
            </StyledTableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={12}
            count={rowItems.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              fontSize: 16,
              ".MuiTablePagination-displayedRows": {
                fontSize: cssFontSize.body,
                margin: "auto",
              },
              ".MuiTablePagination-selectLabel": {
                fontSize: cssFontSize.body,
                margin: "auto",
              },
            }}
          />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
