import { firebaseInitError, isFirebaseConfigured } from '../firebase';

export default function FirebaseConfigMissing() {
  return (
    <div className="firebase-setup">
      <h1>Firebase is not configured</h1>
      <p>
        The app needs your Firebase web app keys in a <code>.env</code> file at the project root.
        Without them, the SDK cannot start and the page stays blank.
      </p>
      <ol className="firebase-setup-steps">
        <li>Copy <code>.env.example</code> to <code>.env</code>.</li>
        <li>
          In Firebase Console → Project settings → Your apps, copy the config values into{' '}
          <code>VITE_FIREBASE_*</code> variables.
        </li>
        <li>
          Stop and restart <code>npm run dev</code> so Vite reloads environment variables.
        </li>
      </ol>
      {!isFirebaseConfigured && (
        <p className="firebase-setup-hint">
          Missing: <code>VITE_FIREBASE_API_KEY</code> and/or <code>VITE_FIREBASE_PROJECT_ID</code>.
        </p>
      )}
      {firebaseInitError && (
        <p className="firebase-setup-err" role="alert">
          Initialization error: {firebaseInitError}
        </p>
      )}
    </div>
  );
}
