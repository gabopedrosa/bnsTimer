# Timer Management Application

This application allows you to manage multiple timers for different channels, specifically designed to assist in tracking spawn timers for bosses like Golden Deva.

---

## How to Use the Application

### Overview
Each channel has a timer that you can set to track the respawn time for bosses. The application provides clear and simple controls to manage these timers efficiently.

### Steps to Use:
1. **Select a Channel:** Each timer corresponds to a specific channel.
2. **Boss Selection:** Choose the type of boss you defeated (Normal or Mutated) after killing it.
3. **Start Timer:**
    - For a Normal Boss, click the button labeled **Normal**. This will start a countdown of 5 minutes, indicating the time remaining until the next spawn.
    - For a Mutated Boss, click the button labeled **Mutated**. This will start a countdown of 8 minutes, indicating the time remaining until the next spawn.
4. **Sound Notification:** The app will notify you with an alert sound once the timer expires.

### Note:
- Make sure to start the timer only after killing a boss, as the spawn timer begins immediately after its defeat.
- The application stores the timers locally on your browser using LocalStorage, ensuring your data is not shared with other users.

---

## Features
- **Multiple Timer Management:** Track spawn times for multiple channels simultaneously.
- **Localized Data Storage:** Timers are saved in your browser's LocalStorage, providing a private and secure experience.
- **User-Friendly Design:** Built using PrimeNG components for an intuitive user interface.
- **Custom Logic:** Developed with TypeScript for precise and efficient timer functionality.

---

## Application Development

### Technologies Used
- **Framework:** Angular (Version 10.2.4)
- **UI Components:** PrimeNG
- **Programming Language:** TypeScript

### Key Highlights
- **Angular CLI:** Simplifies component generation, development server setup, and building the project.
- **PrimeNG Components:** Provides a responsive and visually appealing user interface.
- **LocalStorage Integration:** Ensures user data is securely stored without requiring server-side handling.

---

## Development Workflow

### Running the Application
1. **Development Server:**
   - Run `ng serve` in your terminal.
   - Navigate to `http://localhost:4200/` to access the app.
   - The application will reload automatically upon detecting any changes in the source files.

### Building the Project
- Use `ng build` to generate the production-ready version of the application.
- The build artifacts will be stored in the `dist/` directory.

### Testing
- **Unit Tests:** Run `ng test` to execute unit tests using [Karma](https://karma-runner.github.io).
- **End-to-End Tests:** Run `ng e2e` to perform end-to-end testing via [Protractor](http://www.protractortest.org/).

---

## Further Help
- For more information on Angular CLI, run `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli).

---

Enjoy managing your timers and ensuring timely responses to Golden Deva spawns!
