# Playwright UI Automation - E2E Assignment

## Overview

This project demonstrates UI automation using Playwright with Page Object Model (POM).  
The automated flow covers login, inventory interaction, cart validation, and checkout process.

## Tech Stack

- Playwright
- TypeScript
- Page Object Model (POM)
- GitHub Actions (CI)

---

## Test Scenario

End-to-End Flow:

1. Login to application
2. Validate successful login
3. Add product to cart
4. Verify cart
5. Complete checkout

---

## CI Integration

Playwright tests run automatically using GitHub Actions on every push.

---

## Assumptions

- Test application is publicly accessible
- Valid test users are available
- Application UI remains stable during test execution
- Network connectivity is stable

## AI Tools Usage

During this assignment, I actively used AI tools to improve productivity and ensure better test coverage.

### Tools Used

- ChatGPT  
- GitHub Copilot  

### How I Used AI Tools

- Generated initial test scenarios  
- Helped structure Page Object Model  
- Assisted in writing Playwright assertions  
- Reviewed test coverage  
- Helped draft documentation and README  

### Example Where AI Was Useful

AI helped generate structured test scenarios and edge cases for the end-to-end flow, which improved overall test coverage and ensured meaningful assertions.

### Example Where I Corrected AI Output

In one instance, AI suggested using static waits in Playwright tests. I replaced them with locator-based waits and assertions to avoid flaky tests and improve reliability.

### Reflection

AI tools helped accelerate development and improve test coverage. I reviewed and refined outputs to ensure maintainability and accuracy.