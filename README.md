[![Build Status](https://travis-ci.com/sbibow/intro-cicd.svg?branch=master)](https://travis-ci.com/sbibow/intro-cicd)
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
- [x] Set up TravisCI to run automated tests (CI)
  - [x] Difference travis-ci.com travis-ci.org
- [x] Automatically deploy to now (CD)
  - [x] Travis CLI
  - [x] Now CLI

## Important links

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [TravisCI](https://travis-ci.com/)
- [Announcing support for open source projects on travis-ci.com](https://blog.travis-ci.com/2018-05-02-open-source-projects-on-travis-ci-com-with-github-apps)
- [Now.sh](https://zeit.co/now)
- [ExpressJS](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [supertest](https://github.com/visionmedia/supertest)
