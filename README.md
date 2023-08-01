  <h1>Solar Energy System Calculator</h1>
  <p>This project is a web application that helps users calculate the solar energy system's specifications based on their power requirements. The application is built using React and integrates with Firebase for data storage.</p>

  ![image](https://github.com/ricichien/react-holu/assets/85197053/80a73c90-e161-47e8-b36d-75b121f1a17e)

  <h2>Case 1 - Calculation in SolarSystemCalculator Class</h2>
  <p>The SolarSystemCalculator class is responsible for calculating the specifications of a solar energy system based on the given maximum power requirement in kilowatts (KW). The class contains static properties that represent the characteristics of the solar panels used in the system and various methods to perform the calculations.</p>

  ![image](https://github.com/ricichien/react-holu/assets/85197053/406753f0-4b56-41b1-989b-8fe33bb3ce50)

  <h2>Budget Form</h2>
  <p>The BudgetForm component allows users to enter their desired power requirement in kilowatts (KW) and simulates a solar energy system based on the input. The user's input is validated, and if valid, the calculated data is stored in the Firebase database.</p>

![image](https://github.com/ricichien/react-holu/assets/85197053/f392cd79-8732-4c3c-8e2c-8a9389a2a8ee)

  <h2>Budget Summary</h2>
  <p>The BudgetSummary component retrieves and displays the calculated data of the solar energy system from the Firebase database. The data is fetched based on the unique ID passed via the URL parameters.</p>

  <h2>Header</h2>
  <p>The Header component represents the landing page of the application. It allows users to enter their name, email, and phone number before proceeding to the budget form. The form's inputs are validated, and if all inputs are valid, the user is navigated to the BudgetForm component.</p>

  <h2>Styling</h2>
  <p>The global.css file contains global styles used throughout the application.</p>

  <h2>Installation and Usage</h2>
  <p>To run the application locally, follow these steps:</p>
  <ol>
    <li>Clone the GitHub repository for the project.</li>
    <li>Ensure that you have Node.js and npm (Node Package Manager) installed on your machine.</li>
    <li>Navigate to the project's root directory in your terminal.</li>
    <li>Run <code>npm install</code> or <code>yarn install</code> to install the project dependencies.</li>
    <li>Start the development server using <code>npm start</code> or <code>yarn start</code>.</li>
    <li>Open your web browser and go to <code>http://localhost:3000</code> to access the application.</li>
  </ol>

  <h2>Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>React Router</li>
    <li>Firebase</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

  <p>Feel free to customize the README.md file as needed and add more sections, such as acknowledgments, credits, or contributing guidelines, based on your project requirements.</p>
</body>
</html>
