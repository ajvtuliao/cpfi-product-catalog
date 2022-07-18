import React from 'react';
import './Body.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                <Stack spacing={6}  sx={{ mt: 5, minWidth: '100%'}} direction="row">
                  <Button variant="contained" size="medium" sx={{mt: 0.1, mb: 0.3, ml: -8, backgroundColor:'#05B1B0', textTransform: 'capitalize', }} startIcon={<SearchIcon fontSize="inherit" /> }><b>Search</b></Button>
                  <DropdownButton
                    id="dropdown-button"
                    variant="light"
                    menuVariant="light"
                    title="Sort by"
                    className="sort"
                    size="md"
                  >
                    <Dropdown.Item eventKey="1">Alphabetical - A to Z</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Price - Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Price - High to Low</Dropdown.Item>
                    <Dropdown.Item eventKey="4">SKU - Low to High</Dropdown.Item>
                    <Dropdown.Item eventKey="5">SKU - High to Low</Dropdown.Item>
                  </DropdownButton>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
}
export default Body;