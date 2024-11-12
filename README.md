# Jsonplaceholder API Automation with Playwright

This project contains automated tests for the Jsonplaceholder api platform  using Playwright.

## Features

- **CI/CD Integration:** The project is integrated with CI/CD pipelines to automate the testing process, ensuring that tests run smoothly with each new code deployment.
- **Retry Mechanism:** The retry mechanism is implemented to handle flaky tests and ensure reliable test execution.
- **Daily Email Notifications:** GitHub Actions configuration includes a step to send daily email notifications with test results.
- **Env file for login details:** .env file is used to endure login details protection

## Project Setup

### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (Version 14 or later)
- npm (comes with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/asoorji/jsonplaceholder.git
   cd jsonplaceholder
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

## Running Tests

To execute the tests locally:

1. **Run Playwright Tests:**

   ```bash
   npx playwright tests
   ```