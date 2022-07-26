import * as React from 'react';
import './Body.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from "react-bootstrap/ButtonGroup";

// import DropdownButton from 'react-bootstrap/DropdownButton';

class Body extends React.Component {
  render() {
    return (
        <div className="body">
          <Container>
            <Row>
              <Col lg={10} md={10}>
                <TextField 
                  sx={{ mt: 5, ml: -7, minWidth: '100%', color: "#05B1B0", backgroundColor:'#FFFFFF'}}
                  id="search-field"
                  size="small"
                  label={'-'}
                  placeholder="Search Products..."
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#05B1B0', mr: 0.5, my: 0.5 }}/>
                      </InputAdornment>
                    )
                  }}
                />
              </Col>
              <Col lg={2} md={2}>
                <Stack spacing={3}  sx={{ mt: 5, minWidth: '100%'}} direction="row">
                  <Button variant="contained" size="medium" sx={{mt: 0.1, mb: 0.2, ml: -8, backgroundColor:'#05B1B0', textTransform: 'capitalize', }} startIcon={<SearchIcon fontSize="inherit" /> }><b>Search</b></Button>
                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="dark" className="sort-menu"><b>Sort Products</b></Dropdown.Toggle>
                    <Dropdown.Menu className="sort" variant="dark">
                      <Dropdown.Item eventKey="">Alphabetical - A to Z</Dropdown.Item>
                      <Dropdown.Item eventKey="">Alphabetical - Z to A</Dropdown.Item>
                      <Dropdown.Item eventKey="">Price - Low to High</Dropdown.Item>
                      <Dropdown.Item eventKey="">Price - High to Low</Dropdown.Item>
                      <Dropdown.Item eventKey="">SKU - Low to High</Dropdown.Item>
                      <Dropdown.Item eventKey="">SKU - High to Low</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Stack>
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
              <Stack sx={{ mt: 2, ml: -7}} direction="column">
                <hr className="line-1"/>
                <h4 className="filter-title">Filter Products by:</h4>
                <hr className="line-2"/>
                <h5 className="filter-text">Brand</h5>
                <h5 className="filter-text">Category</h5>
                <h5 className="filter-text">Type</h5>
                <h5 className="filter-text">Price Point</h5>
                <h5 className="filter-text">Grammage</h5>
              </Stack>
              </Col>
              <Col lg={10}>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}
export default Body;