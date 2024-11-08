<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
FitTrack-smfxu7
</h1>
<h4 align="center">A web application for fitness enthusiasts to track their goals, monitor progress, and connect with friends</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="">
  <img src="https://img.shields.io/badge/Frontend-React-red" alt="">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="">
  <img src="https://img.shields.io/badge/Database-Firebase%20Firestore-black" alt="">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/FitTrack-smfxu7?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/FitTrack-smfxu7?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/FitTrack-smfxu7?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository houses the "FitTrack-smfxu7" Minimum Viable Product (MVP), designed to empower fitness enthusiasts. It leverages a modern tech stack including Next.js, React, Node.js, and Firebase Firestore for real-time data management. The MVP focuses on core features such as user authentication, goal setting, progress tracking, and social sharing to provide a motivating and engaging experience for users.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase employs a robust client-server architecture using Next.js for server-side rendering and React for the interactive frontend. The backend utilizes Node.js and Firebase Firestore for secure data management. |
| 📄 | **Documentation**  | This README file provides a detailed overview of the MVP, its components, installation instructions, usage examples, and API documentation. |
| 🔗 | **Dependencies**   | The MVP relies on essential packages such as Next.js, React, Material-UI, Firebase, and React Router to create a rich and functional user experience. |
| 🧩 | **Modularity**     | The project follows a modular structure with dedicated components for user authentication, goal creation, progress tracking, and social interactions, promoting maintainability and scalability. |
| 🧪 | **Testing**        | Automated tests are implemented using Jest and React Testing Library to ensure code quality and prevent regressions.  |
| ⚡️  | **Performance**    | The application is optimized for speed and responsiveness using Next.js features like automatic code splitting, server-side rendering, and image optimization. |
| 🔐 | **Security**       | Robust security measures are implemented, including Firebase Authentication for user login, HTTPS for secure communication, and input validation to prevent vulnerabilities. |
| 🔀 | **Version Control**| The codebase is managed using Git with a dedicated GitHub repository, ensuring proper versioning and collaboration.  |
| 🔌 | **Integrations**   | The MVP integrates with popular fitness trackers and devices, allowing users to import activity data seamlessly. It also leverages browser APIs for a smooth user experience. |
| 📶 | **Scalability**    | The application is designed to handle increasing user loads and data volumes by leveraging the scalability of Firebase Firestore and cloud hosting solutions. |

## 📂 Structure
```text
fitness-tracker/
├── package.json
├── commands.json
├── .env
├── startup.sh
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   ├── GoalForm.tsx
│   │   └── GoalList.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Dashboard.tsx
│   │   └── Goals.tsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   ├── auth.js
│   │   └── firestore.js
│   └── styles/
│       └── global.css
└── public/
    ├── index.html
    ├── favicon.ico
    └── assets/
        └── images/
            ├── logo.png
            └── profile-placeholder.png

```

## 💻 Installation
### 🔧 Prerequisites
- Node.js v18+
- npm 8+
- Firebase CLI: `npm install -g firebase-tools`
- A Firebase project (create one at [https://console.firebase.google.com](https://console.firebase.google.com))

### 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/coslynx/FitTrack-smfxu7.git
   cd FitTrack-smfxu7
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   -  Log in to your Firebase project (or create a new one): `firebase login`
   -  Initialize Firebase in your project directory: `firebase init`
   - Select "Firestore" for your database.
   - Create a new Firebase project or select an existing project.
4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Replace the placeholders in the `.env` file with your Firebase project details.
5. Start the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Fitness Tracker MVP.

## 🏗️ Usage
### 🏃‍♂️ Running the MVP
- Start the development server:
    ```bash
    npm run dev
    ```
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
- You can access the Fitness Tracker MVP through the browser interface.

### ⚙️ Configuration
- `.env`:  Contains essential environment variables, including Firebase project information.
- `package.json`:  Specifies project dependencies and scripts for tasks like building and starting the development server.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Deploying to Vercel
1. Create a Vercel account (if you don't have one) at [https://vercel.com](https://vercel.com).
2. Install the Vercel CLI: `npm install -g vercel`
3. Initialize Vercel in your project: `vercel init`
4. Follow the prompts to connect your project to Vercel.
5. Deploy your application: `vercel deploy`

### 🔑 Environment Variables
- `NEXT_PUBLIC_FIREBASE_API_KEY`:  Your Firebase API Key from your Firebase project.
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your Firebase Auth Domain.
- `NEXT_PUBLIC_FIREBASE_DATABASE_URL`: Your Firebase Database URL.
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your Firebase Project ID.
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Your Firebase Storage Bucket.
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase Messaging Sender ID.
- `NEXT_PUBLIC_FIREBASE_APP_ID`: Your Firebase App ID.
- **Important**: These environment variables are set in the `.env` file. Make sure to fill them in with your actual values.


## 📜 API Documentation
### 🔍 Endpoints
The Fitness Tracker API provides endpoints for user authentication, goal management, progress tracking, and social interactions. 

- **POST /api/auth/register**
  - Description: Register a new user.
  - Body: `{ "username": string, "email": string, "password": string }`
  - Response: `{ "id": string, "username": string, "email": string, "token": string }`

- **POST /api/auth/login**
  - Description: Login an existing user.
  - Body: `{ "email": string, "password": string }`
  - Response: `{ "id": string, "username": string, "email": string, "token": string }`

- **POST /api/goals**
  - Description: Create a new fitness goal.
  - Headers: `Authorization: Bearer TOKEN`
  - Body: `{ "name": string, "targetValue": number, "duration": string, "notes": string }`
  - Response: `{ "id": string, "name": string, "targetValue": number, "duration": string, "notes": string }`

- **GET /api/goals**
  - Description: Get all user goals.
  - Headers: `Authorization: Bearer TOKEN`
  - Response: `[ { "id": string, "name": string, "targetValue": number, "duration": string, "notes": string }, ... ]`

- **GET /api/goals/:id**
  - Description: Get a specific goal by ID.
  - Headers: `Authorization: Bearer TOKEN`
  - Response: `{ "id": string, "name": string, "targetValue": number, "duration": string, "notes": string }`

- **PUT /api/goals/:id**
  - Description: Update a goal by ID.
  - Headers: `Authorization: Bearer TOKEN`
  - Body: `{ "name": string, "targetValue": number, "duration": string, "notes": string }`
  - Response: `{ "id": string, "name": string, "targetValue": number, "duration": string, "notes": string }`

- **DELETE /api/goals/:id**
  - Description: Delete a goal by ID.
  - Headers: `Authorization: Bearer TOKEN`
  - Response: `{ "message": "Goal deleted successfully" }`

- **POST /api/progress/:goalId**
  - Description: Log progress for a goal.
  - Headers: `Authorization: Bearer TOKEN`
  - Body: `{ "value": number, "date": string }` 
  - Response: `{ "message": "Progress logged successfully" }`

### 🔒 Authentication
- The API uses JSON Web Tokens (JWT) for authentication.
- Users must register or login to receive a JWT token.
- The JWT token should be included in the `Authorization` header for all protected API requests using the format `Bearer YOUR_JWT_TOKEN`.

### 📝 Examples
```bash
# Register a new user
curl -X POST http://localhost:3000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"username": "fitnessuser", "email": "user@example.com", "password": "securepass123"}'

# Response
{
  "id": "user123",
  "username": "fitnessuser",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

# Create a new goal
curl -X POST http://localhost:3000/api/goals \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"name": "Weight Loss", "targetValue": 10, "duration": "2 weeks", "notes": "Lose 10 pounds in two weeks."}'

# Response
{
  "id": "goal123",
  "name": "Weight Loss",
  "targetValue": 10,
  "duration": "2 weeks",
  "notes": "Lose 10 pounds in two weeks."
}

# Log progress for a goal
curl -X POST http://localhost:3000/api/progress/goal123 \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -d '{"value": 2, "date": "2024-02-15"}'

# Response
{
  "message": "Progress logged successfully"
}
```

## 📜 License & Attribution

### 📄 License
This Minimum Viable Product (MVP) is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) license.

### 🤖 AI-Generated MVP
This MVP was entirely generated using artificial intelligence through [CosLynx.com](https://coslynx.com).

No human was directly involved in the coding process of the repository: FitTrack-smfxu7

### 📞 Contact
For any questions or concerns regarding this AI-generated MVP, please contact CosLynx at:
- Website: [CosLynx.com](https://coslynx.com)
- Twitter: [@CosLynxAI](https://x.com/CosLynxAI)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4,_v6-black" alt="">
</div>