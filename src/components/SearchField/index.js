import MDInput from 'components/MDInput';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchField = ({FindData}) => {
    const [searchQuery, setSearchQuery] =useState(""); 
    // Test Data 
    // Search query state
    const filteredRows = FindData.filter((row) => {
        return Object.values(row).some((value) =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      console.log(filteredRows)
  return (
    <MDInput
    label="Search"
    value={searchQuery}
    type="search" 
    autoComplete='search'
    onChange={(e) => setSearchQuery(e.target.value)}
    fullWidth />
  )
}
SearchField.propTypes = {
  FindData: PropTypes.any
};