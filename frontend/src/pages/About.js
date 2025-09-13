// About.jsx
export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About This App</h1>
        <p>
          Welcome to <strong>Workout Tracker</strong> — your personal space
          to log, monitor, and reflect on your fitness journey. Whether you're
          lifting, running, doing yoga, or just trying to build a consistent
          habit, this app helps you stay organized and motivated.
        </p>

        <h2>Who Made This?</h2>
        <p>
          This project was created by <strong>Farhan Khan</strong>, a developer
          passionate about blending technology with everyday life improvement.
          With experience in full-stack web development and creative design,
          Farhan built this app to make personal fitness tracking simple,
          aesthetic, and powerful.
        </p>

        <h2>How It Was Built</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React for Basic UI and routing.
          </li>
          <li>
            <strong>Backend:</strong> Node.js + Express.js powering secure REST
            APIs.
          </li>
          <li>
            <strong>Database:</strong> MongoDB stores user profiles and workout
            logs.
          </li>
          <li>
            <strong>Authentication:</strong> JWT-based login/signup keeps your
            data private.
          </li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>Secure sign-up and login system.</li>
          <li>
            Create, update, and delete workout sessions with load, duration,
            and intensity.
          </li>
          <li>Track your progress with a personal, private log.</li>
          <li>Responsive design for desktop and mobile.</li>
        </ul>

        <h2>Why This App Exists</h2>
        <p>
          Many fitness apps are bloated with ads or unnecessary social features.
          <strong> My Workout Tracker</strong> was built with simplicity in
          mind — to give users a distraction-free, focused tool to log their
          sessions and stay accountable. (Just a little bit of motivation goes a
          long way! I just wanted to get my basics clear)
        </p>

        <h2>Future Plans</h2>
        <p>
          Upcoming features include progress charts, goal setting, reminders,
          and integrations with wearable devices. The goal is to keep the design
          minimal while making it more powerful.
        </p>

        <h2>Final Note</h2>
        <p>
          Thank you for using this app! Stay strong, stay consistent, and let
          technology help you become the best version of yourself.
        </p>
      </div>
    </div>
  );
}
