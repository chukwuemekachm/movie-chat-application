# movie-chat-application
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=popout-square&logo=javascript&logoColor=yellow)

A movie chat application with commenting abilities.

## Getting Started
To setup, the following should be installed on your machine.

- [Node.js](https://nodejs.org/en/download/current/) 10 and above
- [Git](https://git-scm.com/downloads)
- [Firebase FireStore Storage](https://firebase.google.com/products/firestore/)

### Installation

If you have all the prerequisites you can use the steps below to setup locally.

##### Create and update the env variables
- Run the command below to create a `.env` file from the sample provided
```sh
touch .env
cp .env.sample .env
```
- Now update the environmental variables with the variables from your [Firebase FireStore Storage](https://firebase.google.com/products/firestore/) configuration you want to use for the installation.

##### Install Dependencies
- Run the commands below to install the required `node` dependencies
```sh
npm install yarn -g
yarn install
```

### Usage
- To start/launch, run
```sh
yarn start
```
- Your default browser should open a new tab on port `3000`

### Explanation of architecture
![Arcitecture Diagram](https://res.cloudinary.com/dvcaeuvee/image/upload/v1571136879/Screenshot_2019-10-15_at_11.54.06_AM.png)
In the diagram above, we could observe the core components of the app in play.
- UI Interfaces are wrapper with HOCs to provide data in the providers without passing the props down through all the individual parent thereby causing a problem known as prop drilling. [-Kent C. Dodds](https://kentcdodds.com/).
These HOCs also provide the action creators required to inform the providers of data changes.

- When a user performs an action that requires data changes, actions are dispatched to the Providers that update the state and return the newly created state to the underlying components via the withContext HOC.

- The JSON Storage stores the JSON movie object collection.
The commenting feature uses Firebase firestore storage as the backend. When a new comment is added, it is broadcast to firestore which adds it to the collection and broadcasts the updates. For now, we are not notifying users of this updates as we don't have a way of knowing which movies they've commented on and we can't afford to notify them on everything so we just update their screens when they have the comments page of the affected movie open.

![Folder Structure](https://res.cloudinary.com/dvcaeuvee/image/upload/v1571135542/Screenshot_2019-10-15_at_11.24.05_AM.png)
In the screenshot above we can observe the codebase 3 levels deep from the root.
The src folder contains the whole projects source codes. At the root of the src folder are the components, hocs, and settings folders.


### Improvements
- If I had more time, I would add authentication to the app. It won't affect the entire app, just the commenting feature, this way, everyone can view the information about the movies and see the comments made by other users but in other for them to be part of the conversation they have to be authenticated.
With this, I can keep track of the users who have commented on a movie and then send them updates on the activities of those movies.

- Next, the table doesn't currently show enough information about the movies, so I'll build into the current comments page detailed information about the movies.



## Built With
- [React](https://reactjs.org/)
- [Create-react-app](https://github.com/facebook/create-react-app)
- [Styled-Components](https://www.styled-components.com/)
- [Firebase](https://firebase.google.com/)


## Author

* **Chima Chukwuemeka** [@chukwuemekachm](https://github.com/chukwuemekachm)
