# Flashdev Technologies

Official corporate website for Flashdev Technologies.

## Tech Stack
- React
- Vite
- Tailwind CSS
- Firebase (Firestore & Auth)
- Framer Motion
- React Router DOM

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Firebase Configuration

This project uses Firebase for storing project inquiries and for the admin dashboard authentication.

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Add a Web App to the project.
3. Enable **Firestore Database**.
4. Enable **Authentication** (Email/Password provider).
5. Create an admin user account in the Authentication tab (this is used to log into the `/admin` dashboard).
6. Copy the Firebase configuration object provided by Firebase.

## Environment Variables

Create a `.env` file in the root of the project based on the `.env.example` file and fill in your Firebase configuration values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Firestore Security Rules

Deploy the included `firestore.rules` file to your Firebase project to secure the database. These rules allow anyone to submit a project inquiry, but only authenticated admins can read, update, or delete them.

```bash
firebase deploy --only firestore:rules
```
Or paste the contents of `firestore.rules` directly into the Rules tab in the Firestore dashboard.

## Vercel Deployment

This project is optimized for deployment on Vercel. 
The `vercel.json` file is included to handle SPA routing correctly.

1. Push your code to a Git repository.
2. Import the project into Vercel.
3. Set the Environment Variables in the Vercel project settings.
4. Deploy!
