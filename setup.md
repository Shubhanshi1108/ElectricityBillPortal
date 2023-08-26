After unzipping an Angular project, you can follow these steps to run the project:

1. **Open Terminal or Command Prompt:**

   Open a Terminal or Command Prompt window on your computer.

2. **Navigate to Project Directory:**

   Use the `cd` command to navigate to the root directory of the unzipped Angular project. For example:

   ```sh
   cd path/to/unzipped/angular_project
   ```

3. **Install Dependencies:**

   Before you can run the project, you need to install the project's dependencies. Use the following command:

   ```sh
   npm install
   ```

   This will install all the required packages listed in the `package.json` file.

4. **Start the Development Server:**

   Once the dependencies are installed, you can start the development server using the following command:

   ```sh
   ng serve
   ```

   The development server will compile your project and make it accessible at a local URL (usually `http://localhost:4200/`).

5. **Open in Browser:**

   Open your web browser and navigate to `http://localhost:4200/`. You should see your Angular project running.

   Any changes you make to the source code will trigger a live reload, so you can see the changes immediately in your browser.

6. **Stop the Development Server:**

   To stop the development server, go back to the Terminal or Command Prompt window where the server is running and press `Ctrl + C`.

Remember that these steps assume you're running the project in a development environment using the built-in development server. For production deployment, you might need to build the project using `ng build` and deploy the generated files to a web server.