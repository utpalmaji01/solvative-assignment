import React, { useRef, useEffect } from 'react';

const SearchBox = ({ onSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Keyboard shortcut (CTRL/CMD + /) to focus the search box
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === '/') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="search-box">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search cities..."
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBox;