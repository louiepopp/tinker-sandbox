# Tinker

Welcome to Shouter's Tinker project! This project serves as a sandbox/playground for anyone to work with Shouter's tech stack.


## About the app

The project consist of two applications; a NestJS backend and React Native running on Expo for the frontend. The backend is dockerized with a MongoDB instance to which it connects.
The application already includes the following features:
 - Sign Up/Sign In functionality using Passport with JWT tokens.
 - A core redux state using RTK.
 - A simple logged-in navigation stack and core components.
 - Backend functionality for creating and getting _services_, a service is an entity much like a Shouter task. It includes name, description, price and availability.

## Prerequisites

In order to run the Tinker app, you must have the following applications on your machine.
- Yarn
- Docker
- Docker-Compose
- ngrok (optional)
- XCode (optional)
- Expo Go (optional on iPhone)


## Getting started

#### Starting the backend API

1. Navigate to the _/api_ folder
2. Run ``yarn install``
3. Run ``docker-compose up``. This will start the backend application and database with all the environment variables already set in the _docker-compose.yml_ file. The backend will run on

#### Running the frontend

1. Navigate to the _/app_ folder.
2. Run ``yarn install``
3. Run ``yarn start``

#### Opening the app

There are two ways to open the application.

First option: Running in the simulator:
1. After running ``yarn start``, simply press __I__ in the terminal, and it will open your Simulator application, download Expo Go and start the app. It will already point to your local backend API on __localhost:4000__

Second option: Running on iPhone:
1. Run ``ngrok http 4000``
2. Copy the first URL in the _Forwarding_ column. It looks like this ``https://82fd-77-233-244-190.ngrok-free.app``
3. Navigate to _/api/src/settings.ts_ and set the _endpoint_ variable to the copied URL from ngrok.
4. Take your iPhone and open the camera app.
5. Scan the QR code in your console running the Expo app.
6. Alternatively open the Expo Go app on your iPhone and your app instance should show up under locally running Expo instances.

