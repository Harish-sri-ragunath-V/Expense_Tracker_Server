# Expense Tracker Server

A backend server application for tracking and managing expenses. Built with Node.js and Express.

## Features

- User authentication and authorization
- Add, edit, delete expenses
- Categorize and filter expenses
- View expense history and summaries
- RESTful API endpoints

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (comes with Node.js)
- MongoDB (local or cloud)

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/Harish-sri-ragunath-V/Expense_Tracker_Server.git
    cd Expense_Tracker_Server
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables  
   Create a `.env` file in the root directory and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | /api/auth/register   | Register a new user      |
| POST   | /api/auth/login      | Login and get a token    |
| GET    | /api/expenses        | Get all expenses         |
| POST   | /api/expenses        | Add a new expense        |
| PUT    | /api/expenses/:id    | Update an expense        |
| DELETE | /api/expenses/:id    | Delete an expense        |

*More detailed API documentation can be added here.*

## Folder Structure

```
.
├── controllers
├── models
├── routes
├── middleware
├── utils
├── .env.example
├── package.json
└── server.js
```

## Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/Harish-sri-ragunath-V/Expense_Tracker_Server/issues).


## Contact

For any questions, please open an issue or contact [Harish-sri-ragunath-V](https://github.com/Harish-sri-ragunath-V).
```
