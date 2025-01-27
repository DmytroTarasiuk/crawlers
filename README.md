# Local Development Setup with Custom Port

This guide provides instructions for setting up the project to avoid conflicts with the API server running on port `3000`.

## Prerequisites

- Node.js v20 or later
- npm or yarn installed
- Docker

## Steps to Run the Project

1. **Clone the Repository**  
   Clone the project repository to your local machine.

   ```bash
   git clone https://github.com/DmytroTarasiuk/crawlers.git
   cd crawlers

   ```

2. **Install Dependencies**
   Install the required dependencies using npm.
   `npm install`

3. **Start the Development Server**
   To avoid conflicts with the API server on port 3000, specify a different port (e.g., 5000) when starting the development server.
   `npm run dev`

4. **Access the Application**
   Open your browser and navigate to:
   `http://localhost:5000/client/state`
