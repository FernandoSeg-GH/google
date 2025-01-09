# Google Clone Project

## Author: **Fernando Segre**

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

## Getting Started

### Clone the Repository

First, clone the repository:

```bash
git clone git@github.com:FernandoSeg-GH/google.git
```

### Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd google
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Run the Development Server

Once the dependencies are installed, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Documentation

Detailed documentation is available in the root of the project: [DOCUMENTATION.md](DOCUMENTATION.md).
