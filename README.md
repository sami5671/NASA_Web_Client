# GeoSync

**GeoSync** is a web-based application designed to facilitate the comparison of ground-based spectral measurements with Landsat Surface Reflectance (SR) data. The platform empowers educators, students, researchers, and citizen scientists to explore satellite data, foster interdisciplinary learning, and make informed decisions about Earth's land surface.

## Features

- **Interactive Map Interface**: Select and define target locations for data comparison.
- **Landsat Overpass Notifications**: Receive alerts when Landsat will pass over a specific location.
- **Data Access & Visualization**: Access Landsat SR data and compare it with ground-based spectral measurements.
- **Educational Resources**: Step-by-step tutorials and resources to guide users in data analysis.

## Technology Stack

- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Node.js](https://nodejs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (or your preferred database)
- **APIs**: Google Earth Engine API, USGS Earth Explorer
- **Notification Services**: Twilio (SMS), SendGrid (Email)

## Installation

### Prerequisites

- Node.js (v14.x or later)
- npm or Yarn
- MongoDB (if used as the database)
- Google Earth Engine API credentials
- Twilio/SendGrid API keys for notifications

### Clone the Repository

```bash
git clone https://github.com/yourusername/GeoSync.git
cd GeoSync
```

### Backend Setup

1. Navigate to the `backend` directory:

```bash
cd backend
```

2. Install the dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory with the following variables:

```bash
MONGODB_URI=your_mongodb_uri
GE_API_KEY=your_google_earth_engine_api_key
TWILIO_API_KEY=your_twilio_api_key
SENDGRID_API_KEY=your_sendgrid_api_key
```

4. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the `frontend` directory:

```bash
cd ../frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```

### Access the Application

Once both the frontend and backend servers are running, you can access the application in your browser at `http://localhost:3000`.

## Usage

- **Select a Location**: Use the interactive map to choose a target location.
- **Set Up Notifications**: Get alerts for upcoming Landsat overpasses.
- **Compare Data**: Upload ground-based spectral measurements and compare them with Landsat SR data.
- **Explore Educational Resources**: Learn how to analyze and interpret spectral data.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request to contribute to the project.

### To Contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [NASA](https://www.nasa.gov/) and [USGS](https://www.usgs.gov/) for the Landsat missions.
- [Google Earth Engine](https://earthengine.google.com/) for providing powerful tools for accessing and analyzing satellite data.
- [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) for being the backbone of this application.

---

Feel free to customize this README to better fit your project's specifics or your preferred setup!
