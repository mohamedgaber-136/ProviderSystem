import MDInput from 'components/MDInput';
import PropTypes from 'prop-types';
import { useEffect, useState, useMemo } from 'react';

export const SearchField = ({ setData, initialData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Memoize initialData to avoid unnecessary re-renders
  const memoizedInitialData = useMemo(() => initialData, [initialData]);

  useEffect(() => {
    let filteredRows = memoizedInitialData;

    if (searchQuery) {
      filteredRows = memoizedInitialData.filter((row) =>
        Object.values(row).some((value) =>
          value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Only update if the data has changed to avoid infinite loops
    setData((prevData) => {
      if (JSON.stringify(prevData) !== JSON.stringify(filteredRows)) {
        return filteredRows;
      }
      return prevData;
    });
  }, [searchQuery, memoizedInitialData, setData]);

  return (
    <MDInput
      label="Search"
      value={searchQuery}
      type="search"
      autoComplete="search"
      onChange={handleSearchChange}
      fullWidth
    />
  );
};

SearchField.propTypes = {
  initialData: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};
