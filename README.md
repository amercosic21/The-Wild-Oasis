# The Wild Oasis

The Wild Oasis is a modern web application designed to manage bookings, cabins, and user accounts for a luxury retreat. Built with React, it provides a seamless user experience with features like authentication and real-time updates.

## Features

- **User Authentication**: Secure login and account management.
- **Booking Management**: Create, update, and delete bookings with real-time updates.
- **Cabin Management**: Add, update, and manage cabin details, including images and pricing.
- **Pagination**: Efficiently handle large datasets with server-side pagination.
- **Dark Mode**: Toggle between light and dark themes for better accessibility.
- **Desktop-First Design**: Optimized for desktop use, tailored for hotel reception staff.
- **Error Handling**: Graceful error handling with fallback UI using `react-error-boundary`.

## Tech Stack

- **Frontend**: React, React Router, Styled Components
- **State Management**: React Context, React Query
- **Backend**: Supabase (for authentication, database, and storage)
- **Utilities**: React Hook Form, React Hot Toast
- **Build Tool**: Vite

## Default Login Information

To log into the application, use the following credentials:

- **Email**: `amercosic@test.com`
- **Password**: `password`

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amercosic21/The-Wild-Oasis.git
   ```
2. Navigate to the project directory:
   ```bash
   cd the-wild-oasis
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Folder Structure

```
src/
├── [App.jsx](http://_vscodecontentref_/0)                # Main application component
├── [main.jsx](http://_vscodecontentref_/1)               # Entry point for React
├── context/               # Context providers (e.g., DarkModeContext)
├── data/                  # Static data and utility components
├── features/              # Feature-specific components (authentication, bookings, cabins, etc.)
├── hooks/                 # Custom React hooks
├── pages/                 # Page components for routing
├── services/              # API service functions (e.g., Supabase integration)
├── styles/                # Global and shared styles
├── ui/                    # Reusable UI components (e.g., buttons, modals, inputs)
├── utils/                 # Utility functions and constants
public/
├── default-user.jpg       # Default avatar image
├── logo-dark.png          # Dark mode logo
├── logo-light.png         # Light mode logo
```

## Screenshots

### Home Page
![Dashboard](https://github.com/user-attachments/assets/bdce5f0a-6227-442e-b20b-7472237a9b29)

### Booking Management
![Bookings](https://github.com/user-attachments/assets/a39e958e-28b9-485e-8797-eb84862d6c47)

### Cabin Details
![Cabins](https://github.com/user-attachments/assets/1508c6d9-d460-402c-897a-fd40115f2978)

### Light Mode
![Bookings-light](https://github.com/user-attachments/assets/65228e27-804b-48a8-ab3d-bc65d79c1c1f)
