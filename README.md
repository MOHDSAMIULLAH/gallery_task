
# Image Gallery with Masonry Layout

This project is a responsive image gallery built with React.js and Tailwind CSS, utilizing a Masonry layout for a dynamic, grid-like display. The images are fetched from the [Picsum API](https://picsum.photos/) and include pagination features, allowing users to load more images seamlessly.

## Deployed Link: https://gallery-task-psi.vercel.app/

## Features

- **Responsive Design**: The gallery is fully responsive, adapting to various screen sizes using Tailwind CSS and Masonry layout.
- **Masonry Layout**: The images are displayed in a Masonry grid, ensuring an aesthetically pleasing layout.
- **Pagination**: Users can load more images using a "Load More" button, which fetches additional images from the API.
- **Dynamic Image Loading**: Images are fetched dynamically from the Picsum API, ensuring fresh content with each load.

## Technologies Used

- **React.js**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Masonry CSS**: Masonry layout component for React.
- **Axios**: Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MOHDSAMIULLAH/gallery_task.git
   cd image-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will run at `http://localhost:3000`.

### Usage

- **Home Page**: Displays the gallery with images fetched from the Picsum API.
- **Load More**: Click the "Load More" button at the bottom of the gallery to fetch and display more images.

### API

- Images are fetched from the [Picsum API](https://picsum.photos/v2/list).

### Deployment

To deploy the project, we can use platforms  Vercel.
