# Simple Chat App

A lightweight real-time chat application built with modern web technologies.

## Features

- **Real-time Messaging:** Instant communication powered by WebSockets.
- **Room-based Chats:** Join different rooms to chat with others.
- **Theming Support:** Seamless light/dark mode switching.
- **Responsive Design:** Optimized for various screen sizes.

## Tech Stack

### Backend
- **TypeScript:** Ensures type safety and better code maintainability.
- **WebSocket:** Enables real-time bi-directional communication.

### Frontend
- **TypeScript:** Provides type safety for React components.
- **React:** Builds dynamic and interactive user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Shadcn:** Pre-styled components for a consistent and polished design.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (>= 16.x)
- npm (or yarn)

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
   The backend will run on `ws://localhost:8080`.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Enter the name of the room you want to join.
3. Start chatting in real-time with others in the same room.

## Project Structure

```plaintext
.
├── backend             # Backend server code
│   ├── src             # TypeScript source files
│   ├── package.json    # Backend dependencies
├── frontend            # Frontend application
│   ├── src             # React source files
│   ├── public          # Static assets
│   ├── package.json    # Frontend dependencies
├── README.md           # Project documentation
```
## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the responsive design utilities.
- [Shadcn](https://shadcn.dev/) for pre-styled UI components.
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) for real-time communication.
