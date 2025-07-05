# PROJECT DOCUMENTATION

## Project Description

This is an Angular application that allows users to search, filter, and view detailed information about countries using the REST Countries API. The app features a responsive UI, theme switching (dark/light mode), and state management with NgRx.

---

## Setup & Run Instructions

1. **Clone the repository:**

   git clone `https://github.com/cobbygraves/country-api`
   cd country-api

2. **Install dependencies:**

   npm install

3. **Run the application locally:**

   npm start

   The app will be available at `http://localhost:4200`.

4. **Run tests:**

   npm test

## Application Features

- **Search:** Find countries by name using the search bar.
- **Filter:** Filter countries by region.
- **Theme Switch:** Toggle between dark and light modes.
- **Country Details:** View detailed information about a selected country, including population, region, capital, and borders.
- **Error Handling:** User-friendly error messages for failed API requests.

## Component Structure

- **NavbarComponent:** Displays the app title and theme switcher.
- **SearchBarComponent:** Provides search and filter controls.
- **CountryCardComponent:** Shows a summary card for each country.
- **CountryDetailsComponent:** Displays detailed information for a selected country.
- **HomeComponent:** Main landing page listing all countries.
- **ErrorComponent:** Displays error messages.

## Routing Overview

- `/` - Home page listing all countries.
- `/country/:code` - Country details page for the selected country.
- `**` - Wildcard route for handling 404 errors.

Routes are configured in `app.routes.ts`.

## API Consumption

The application uses the [REST Countries API](https://restcountries.com/v3.1) to fetch country data. All API requests are managed through the `CountryService`, which handles searching, filtering, and retrieving country details.

## NgRx Store Implementation

- **State:** The store manages countries, user preferences, and theme state.
- **Actions:** Define events like loading countries, selecting a country, and toggling the theme.
- **Reducers:** Update the state based on actions.
- **Effects:** Handle side effects such as API calls and error handling.

NgRx files are organized under `src/app/store/`.

## Theme Switching Implementation

Theme switching is managed via NgRx. The theme state is stored in the NgRx store, and actions are dispatched to toggle between dark and light modes. The UI updates automatically based on the current theme state.

## Git Workflow

- **Main Branch:** Stable, production-ready code.
- **Feature Branches:** Each new feature or bugfix is developed in a separate branch (e.g., `feature/search-bar`).
- **Pull Requests:** Changes are merged into `master` via pull requests after code review and testing.
