# Introduction to CI/CD

From code to app

## What is Continuous Integration and Continuous Delivery

The central concept of DevOps is to automate all steps of deployment.

Continuous Integration describes a practice where the source is built and tested
on each commit a developer pushes.

Continuous Delivery is a extension of CI in which script run to make the built
software able to deploy on a press of a button.

As last step Continuous Deployment automates the button pressing on certain
developer actions like pushing to a branch or creating a tag.

In practice there is no distinction between the last two.

## A simple project

- [x] Write a simple ExpressJS API
  - [x] npm install express
  - [x] Writing a simple hello world API
- [x] Add some automated tests
  - [x] Refactor for testing
  - [x] npm install jest supertest --save-dev
- [x] Push our code to GitHub
- [ ] Set up TravisCI to run automated tests (CI)
  - [ ] Difference travis-ci.com travis-ci.org
- [ ] Automatically deploy to heroku (CD)
  - [ ] Travis CLI
  - [ ] Heroku CLI
