### Tecnical Test - Google Replica

## Goal of the test

The purpose of the test is to validate your technical and organizational skills. It’s not a
big deal if you can’t finish it, we prefer to have an incomplete clean and functional code
than a badly organized and “ugly” code.
You can use any framework (preferably React) or external resources you need or even
vanilla js, but don’t forget that the goal is to show us your competences.
All styling has to be done without any external UI library.

## Specifications

The application to develop is quite simple (you can refer to the screenshots for more
details):

- “Homepage”
  ● A search input that allows you to search for animals, the retrieved results will be
  displayed on the results page
  ● Header and footer are just visual elements, they are not interactive

- “Results page”
  ● A search input is displayed in the header to be able to search again
  ● All retrieved results are displayed as a list
  ● When clicking on an item title, additional information will be displayed in a box
  ● If no results are found, a message should be displayed
  ● If no search term is used, another message should be displayed

- “Data”
  ● All data is created using faker.js (https://github.com/faker-js/faker)
  ● Images are from random animals, so it’s ok if they don’t match the selected item
  ● Animals are searched by both title and type

## Objectives

● Build this application as a production grade code.
● Focus on replicating the given screenshots/design
● Provide at least one test validating some use cases
● What would you have done differently if you had more time? Why?

---

Dear recruiting team,
As per the requirements above, this documentation file will walk you through the build. Written as I would plan it out IRL.
For this build I will use the following:

- NextJs 15 for server side actions/components
- Typescript for typesafety and ESLINT for code formating
- Considering no UI library must be used, I will style components with the TailwindCSS framework (the utility classes will allows us to create a fully responsive UI)
- Native fetch() for API data fetching
- End to End testing to make specific actions work (search functionaly, diplaying results),
- Context API for created a state, to easily dispatch actions (via reducers) and interact with data accross all components
-

1. UI - Components & Pages
   First, I'll replicate the screenshots into components and pages (search page via params)

- “Homepage”
  ● A search input that allows you to search for animals, the retrieved results will be
  displayed on the results page
  ● Header and footer are just visual elements, they are not interactive

- “Results page”
  ● A search input is displayed in the header to be able to search again
  ● All retrieved results are displayed as a list
  ● When clicking on an item title, additional information will be displayed in a box
  ● If no results are found, a message should be displayed
  ● If no search term is used, another message should be displayed

2. State - Initial State, Managements, Actions
3. API - Fetch Data , update state & components
4. E2E Testing
