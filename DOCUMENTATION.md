Dear recruiting team,

As per the requirements above, this documentation file will walk you through the build. Written as I would plan it out IRL.
For this build I will use the following:

- NextJs 15 for server side actions/components
- Typescript for typesafety and ESLINT for code formating
- Considering no UI library must be used, I will style components with the TailwindCSS framework (the utility classes will allows us to create a fully responsive UI)
- Native fetch() for API data fetching
- End to End testing to make specific actions work (search functionaly, diplaying results),
- Context API for created a state, to easily dispatch actions (via reducers) and interact with data accross all components

You may refer to my repository in github to check on commits for each of the features I work on (this will help keep a good version control)

1. UI - Components & Pages
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

2. State - Initial State, Managements, Actions
3. API - Fetch Data , update state & components
4. E2E Testing
