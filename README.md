# Tech Test Setup

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js v22.12.0**\
  You can use a version manager like [nvm](https://github.com/nvm-sh/nvm) to install and manage the correct version:

  ```bash
  nvm install 22.12.0
  nvm use 22.12.0
  ```

- **pnpm** (preferred package manager)\
  If not already installed:

  ```bash
  npm install -g pnpm
  ```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run the main application:

   ```bash
   pnpx nx dev frontapp
   ```

3. To run Storybook:

   ```bash
   pnpx nx storybook ui
   ```

## Tech Test Task

The main task is to implement a feature that calls an external API and displays a list of search results.

- The API endpoint will be provided. For now, use the placeholder URL:

  ```plaintext
  https://www.xyz.com/api/search
  ```

- The API response will return multiple datasets:
  - `AllResults`: Combined results from all categories (this should be the default view when the page loads)
  - `NewsResults`: News-related items
  - `HelpCentreResults`: Help center content
  - `VideoResults`: Video content
  - `ShopResults`: Shopping-related content

- Your implementation should include:
  - A TypeScript-based API call using appropriate interfaces or types to provide structure to the data.
  - Handling of loading and error states.
  - A navigation menu that allows switching between available datasets, as shown in Figma (e.g., "All   News   Video").
    - This navigation should only show items for datasets that contain results.
    - The `AllResults` view should be shown by default on initial load.
  - A component to render the search results.
    - This component should be styled using modular CSS files.
    - The layout should use existing CSS variables for styling (accessible through browser dev tools).
    - Font styles should align with Figma tokens, using classes by replacing `/` with `-`. For example:
      - `'body/xsmall/regular/default'` -> `class="body-xsmall"`
      - `'body/small/bold/default'` -> `class="body-small bold"`

Feel free to use tools or libraries of your choice, but prioritize code structure, reusability, accessibility, and clarity.

If you have any questions or assumptions, please document them.


  git config --global user.email "peter.costello@mancity.com"
  git config --global user.name "Peter Costello"