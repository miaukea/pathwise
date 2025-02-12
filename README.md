# Pathwise
## Description
Pathwise is an app that allows users to create personalized travel itineraries, with AI-powered suggestions for activities, restaurants, and attractions. Travel AI is an intelligent travel assistant designed to help users plan and optimize their trips efficiently. By leveraging real-world data, AI-powered recommendations, and seamless user interaction, Pathwise provides a comprehensive and personalized travel experience. This full-stack web application integrates a robust backend with an intuitive frontend to deliver a polished, interactive, and responsive user interface.
## Features
- AI-powered travel itinerary suggestions
- Location-based recommendations using real-world data
- Secure user authentication with JWT
- Interactive user interface with React
- RESTful API built with Node.js and Express.js
- Database management with PostgreSQL and Sequelize ORM
- Secure handling of API keys and sensitive information using environment variables
- Deployment on Render with data persistence
## Technologies Used
- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL, Sequelize ORM
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Render
- **APIs:** Integration with at least two server-side APIs
- **Version Control:** Git and GitHub
- **Project Management:** Agile methodologies
## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/miaukea/pathwise
   ```
2. Navigate to the project directory:
   ```sh
   cd pathwise
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```sh
   DATABASE_URL=
   JWT_SECRET=
   API_KEY_1=
   API_KEY_2=
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
## Usage
1. Sign up and log in to access personalized recommendations.
2. Enter your destination and travel preferences.
3. Receive AI-generated travel plans and suggestions.
4. Save, edit, and manage your itineraries.
## Folder Structure
```
pathwise/
│-- backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│-- frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│-- .env
│-- package.json
│-- README.md
```
## Deployment
The application is deployed on Render. Access the live version here:
## Screenshots
![Pathwise Screenshot](./screenshots/pathwise-homepage.png)
## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
## License
This project is licensed under the MIT License.
## Contact
For any inquiries, reach out to us at 
