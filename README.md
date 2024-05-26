# Weather Application

This is a weather application built using React. The application fetches and displays weather data for different locations using an HTTP client and provides a user-friendly interface styled with Tailwind CSS.

## Features

- Fetches real-time weather data.
- Displays weather information in a clean, user-friendly interface.
- Uses responsive design to ensure compatibility across various devices.

## Technologies Used

### React and Related Libraries

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for managing a tree of components.
- **react-scripts**: Scripts from Create React App to automate tasks like starting the development server, building the production build, running tests, etc.

### HTTP Client

- **axios**: A promise-based HTTP client for making HTTP requests.

### CSS Tools

- **autoprefixer**: A PostCSS plugin that parses your CSS and adds vendor prefixes.
- **postcss**: A tool for transforming styles with JS plugins.
- **tailwindcss**: A utility-first CSS framework for rapidly building custom designs.

### Icon Library

- **react-icons**: Provides popular icons as React components.

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/holikyan/weather-app-reactJS.git
   ```

1. Navigate to the project directory:

   `cd weather-app-reactJS`

1. Install the dependencies:

   `npm install`

### Getting the Weather API Key

1.  Visit [OpenWeatherMap](https://openweathermap.org/).

2.  Register for a free account.

3.  After registering, log in and navigate to the API section.

4.  Generate an API key.

5.  Copy the API key.

6.  In the root folder of the project, open the `.env` file and paste your API key:

    `REACT_APP_WEATHER_API_KEY=your_api_key_here`

### Running the Application in Development Mode

To start the development server, run:

`npm run start`

Open http://localhost:3000 to view it in the browser.

### Building for Production

To create a production build, run:

`npm run build`

The build artifacts will be stored in the `build/` directory.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Weather data is provided by [OpenWeatherMap](https://openweathermap.org/).
- Icons are provided by React Icons.

---

This project is designed to be user-friendly and can be used by anyone with basic knowledge of React and JavaScript. Happy coding!
