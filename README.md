# City Explorer

City Explorer is a React-based web application that allows users to search for cities and view their details. It uses the GeoDB Cities API to fetch city data and provides a user-friendly interface for exploring this information.

## Features

- Search for cities by name
- Display city information including country and flag
- Pagination for search results
- Adjustable number of cities displayed per page
- Responsive design for various screen sizes
- Error handling and user feedback

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/city-explorer.git

2. Navigate to the project directory:
   cd city-explorer

3. Install the dependencies:
   npm install

4. Create a `.env` file in the root directory and add your RapidAPI key:
   REACT_APP_RAPIDAPI_KEY=your_api_key_here

## Usage

1. Start the development server:
   npm start

2. Open your browser and visit `http://localhost:3000`

3. Use the search box to look for cities. Press Enter or click the search icon to initiate the search.

4. Navigate through the results using the pagination controls at the bottom of the page.

5. Adjust the number of cities displayed per page using the input field in the bottom right corner.

## API Key

This project uses the GeoDB Cities API from RapidAPI. To run the project, you'll need to sign up for a free account at RapidAPI (https://rapidapi.com/) and subscribe to the GeoDB Cities API.

Once you have your API key, add it to the `.env` file as described in the Installation section.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.