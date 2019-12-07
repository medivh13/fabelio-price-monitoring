# Fabelio Price Monitor Web App

This is build in react and mongodb. and I alse use react-bootstrap to make some views, ex: carousel for the image in detail product

## Guide - Development
1. Clone the repo.
2. Run 'npm install' to install server dependencies.
3. Run 'cd client' to enter client directory then run 'npm install' to install client dependencies.
4. In root directory run 'npm run dev' to start the app.
5. Open http://localhost:3000 to view it in the browser.

## Guide - Deployment
1. Clone the repo.
2. Run 'npm install' to install server dependencies.
3. Run 'cd client' to enter client directory then run 'npm install' to install client dependencies.
4. In root directory do these following steps to deploy app in heroku.
    * git init
    * git add .
    * git commit -am "Make it better"
    * heroku create
    * git remote -v
    * git push heroku master
    * dont forget to instal the mlab mongodb adds-on in heroku then do "heroku config:get MONGODB_URI" to get mongodb uri

## to Run the unit test, type npm test

## Demo
https://jody-fabelio-assignment.herokuapp.com/products
