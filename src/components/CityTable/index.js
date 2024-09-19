import React from 'react';

const CityTable = ({ cities, loading, searchPerformed, searchQuery, currentPage, citiesPerPage }) => {
  const startIndex = (currentPage - 1) * citiesPerPage;

  return (
    <div className="table-container">
      <table className="city-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="3" className="table-message">
                <div className="loader"></div>
                Loading...
              </td>
            </tr>
          ) : !searchPerformed || searchQuery === '' ? (
            <tr>
              <td colSpan="3" className="table-message">Start searching</td>
            </tr>
          ) : cities.length === 0 ? (
            <tr>
              <td colSpan="3" className="table-message">No data</td>
            </tr>
          ) : (
            cities.map((city, index) => (
              <tr key={city.id}>
                <td>{startIndex + index + 1}</td>
                <td>{city.name}</td>
                <td>
                  <img
                    src={`https://flagsapi.com/${city.countryCode}/flat/24.png`}
                    alt={city.countryCode}
                  />
                  {city.country}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CityTable;