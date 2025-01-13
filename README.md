# Agile Content - Frontend Technical Test

## Author: [Fernando Segre](https://www.linkedin.com/in/fernando-segre/)

Dear recruiting team,

As per the requirements, this documentation file will walk you through the build. For this build I will use the following:

- NextJs 15 for server side actions/components
- Typescript for type safety and ESLINT for code formatting
- Considering no UI library must be used, I will style components with the TailwindCSS framework (the utility classes will allows us to create a fully responsive UI)
- Native fetch() for API data fetching
- Jest for creating unit and integration tests
- Context API for creating a state, and easily dispatch actions (via reducers) to interact with the application

---

1. UI - Components & Pages ✅ **DONE**
   First, I'll replicate the screenshots into components and pages (search page via params)

- “Homepage” - ✅ **DONE** (commit "Homepage Initial UI")
  ● A search input that allows you to search for animals, the retrieved results will be
  displayed on the results page
  ● Header and footer are just visual elements, they are not interactive

- “Results page” - ✅ **DONE** (commit "Search Page Initial UI Initial UI")
  ● A search input is displayed in the header to be able to search again
  ● All retrieved results are displayed as a list
  ● When clicking on an item title, additional information will be displayed in a box
  ● If no results are found, a message should be displayed
  ● If no search term is used, another message should be displayed

2. State Context, Actions - ✅ **DONE** (commit "App Build with Context, final UI, & Actions")
   ● Context creation
   ● Initial State & reducer Actions setup (selecting a rresult, loading...)
   ● Data fetching (using faker mock data on server action)

3. Testing - ✅ **DONE** (commit "App Testing")
   ● Unit Test for getFakeData(), as a USER i will retrieve results from the getFakeData() server action
   ● Unit Test for testing users actions in the UI (via state reducer actions)
   ● Integreation Test for selecting a result and display the card

4. What would I have done differently if I had more time?
   ● Replace the mocked data with a live API integration to simulate a real, and not randomized, scenarios.

---

### Running the Project

#### This guide will help you set up and run the project locally.

- **Live URL**: [google-alpha-rose.vercel.app](https://google-alpha-rose.vercel.app)
- **Repository URL**: [GitHub Repository](https://github.com/FernandoSeg-GH/google)

---

### Prerequisites

Ensure you have **Node.js**: Version 20 or higher, installed in your environment.

### Installation Steps

#### 1. **Clone the Repository**

Open your terminal and run:

```bash
git clone https://github.com/FernandoSeg-GH/google.git
cd google
```

#### 2. **Install Dependencies**

Install the required packages using npm or yarn:

```bash
# Using npm
npm install

# Or, using yarn
yarn install
```

#### 3. **Run the Development Server**

Start the local development server:

```bash
# Using npm
npm run dev

# Or, using yarn
yarn dev
```

The application will now be running locally. Open your browser and navigate to:

```
http://localhost:3000
```

### Running Tests

To run the unit and integration tests:

```bash
# Using npm
npm run test

# Or, using yarn
yarn test
```
