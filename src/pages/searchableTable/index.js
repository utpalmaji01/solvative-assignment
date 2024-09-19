import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.scss';
import Snackbar from '../../components/Snackbar';
import CityTable from '../../components/CityTable';
import CityTablePagination from '../../components/CityTablePagination';
import SearchBox from '../../components/SearchBox';

const SearchableTable = () => {
    const [cities, setCities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [citiesPerPage, setCitiesPerPage] = useState(3);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [warning, setWarning] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);
  
    const { REACT_APP_RAPIDAPI_KEY } = process.env;
  
    useEffect(() => {
      if (searchQuery) {
        fetchCities();
      } else {
        setCities([]);
        setTotalCount(0);
      }
    }, [searchQuery, currentPage]);
  
    const fetchCities = async () => {
      setLoading(true);
      setError(null);
  
      const params = {
        offset: (currentPage - 1) * citiesPerPage,
        limit: citiesPerPage,
        namePrefix: searchQuery,
      };
  
      try {
        const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
          params,
          headers: {
            'x-rapidapi-key': REACT_APP_RAPIDAPI_KEY,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
          }
        });
        setCities(response.data.data);
        setTotalCount(response.data.metadata.totalCount);
        setSearchPerformed(true);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    const handleSearch = (query) => {
      setSearchQuery(query);
      setCurrentPage(1);
      setSearchPerformed(true);
    };
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    const handleCitiesPerPageChange = (event) => {
        if (event.key === 'Enter') {
          const newValue = event.target.value === '' ? 1 : Math.min(Math.max(parseInt(event.target.value), 1), 10);
          setCitiesPerPage(newValue);
          setCurrentPage(1);
          fetchCities();
        }
      };
    
      const handleCitiesPerPageBlur = (event) => {
        const newValue = event.target.value === '' ? 1 : Math.min(Math.max(parseInt(event.target.value), 1), 10);
        setCitiesPerPage(newValue);
      };
  
    const totalPages = Math.ceil(totalCount / citiesPerPage);
  
    return (
      <div className="searchable-table-container">
        <h1 className="main-title">City Explorer</h1>
        {error && <Snackbar message={error} onClose={() => setError(null)} type="error" />}
      {warning && <Snackbar message={warning} onClose={() => setWarning(null)} type="warning" />}
        <SearchBox onSearch={handleSearch} />
        <CityTable 
          cities={cities} 
          loading={loading} 
          searchPerformed={searchPerformed}
          searchQuery={searchQuery}
          currentPage={currentPage}
          citiesPerPage={citiesPerPage}
        />
        <div className="table-footer">
        <div className="pagination-wrapper">
          <CityTablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className="cities-per-page">
          <span>Cities per page:</span>
          <input
            type="number"
            min="1"
            max="10"
            value={citiesPerPage}
            onChange={(e) => {
              const value = e.target.value === '' ? '' : Math.min(Math.max(parseInt(e.target.value), 1), 10);
              setCitiesPerPage(value);
            }}
            onKeyPress={handleCitiesPerPageChange}
            onBlur={handleCitiesPerPageBlur}
          />
        </div>
      </div>
    </div>
  );
};

  
  export default SearchableTable;