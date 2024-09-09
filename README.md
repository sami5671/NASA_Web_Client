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

1. Clone the Repository

```bash
git clone https://github.com/sami5671/NASA_Web_Client.git
cd NASA_Web_Client
```

2. Install the dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm start
```

## Backend

go to https://github.com/sami5671/NASA_Web_Server

### Access the Application

you can access the application in your browser at `http://localhost:5173`.

## Usage

- **Select a Location**: Use the interactive map to choose a target location.
- **Set Up Notifications**: Get alerts for upcoming Landsat overpasses.
- **Compare Data**: Upload ground-based spectral measurements and compare them with Landsat SR data.
- **Explore Educational Resources**: Learn how to analyze and interpret spectral data.

## Acknowledgements

- [NASA](https://www.nasa.gov/) and [USGS](https://www.usgs.gov/) for the Landsat missions.
- [Google Earth Engine](https://earthengine.google.com/) for providing powerful tools for accessing and analyzing satellite data.
- [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) for being the backbone of this application.

---

Feel free to customize this README to better fit your project's specifics or your preferred setup!
