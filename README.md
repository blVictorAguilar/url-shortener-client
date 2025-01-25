# URL Shortener Application

This is a simple React-based URL Shortener application that allows users to input a long URL and receive a shortened version. The UI is clean, responsive, and uses Tailwind CSS for styling.

---

## Features

- Enter a URL in the input field.
- Generate a shortened URL using the "Shorten URL" button.
- Display the shortened URL with a clickable link.
- Responsive and visually appealing design.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v20 or later
- **npm**

---

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blVictorAguilar/url-shortener-client.git
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
    http://localhost:5173/
   ```

---

## Scripts

Here are the available npm/yarn scripts:

- **`dev`**: Start the development server.
- **`build`**: Build the application for production.
- **`preview`**: Serve the production build.

---

## Styling

This application uses [Tailwind CSS](https://tailwindcss.com/) for styling. Ensure Tailwind is properly configured in your project with the following:

1. **`tailwind.config.js`**:

   ```javascript
   module.exports = {
     content: ["./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

2. **`index.css`**:
   ```css
   @tailwind base;
   ```

---
