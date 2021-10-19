jsamazona

to show project on live server using npm

covert our folder to npm project

npm init

then press enter for every question you see

thus will create package.json

this mean it converted to a node project

now install liver server package

npm install -D live-server

npm start

it will show your liver server

---

render Dynamic Home screen using js

---

build url Router

---

create Node.js Server

---

in this session we will locad the data we created in the backend
we will send ajax request from the frontend and get the data from the backend

install npm install cors to open this error ==== Access to fetch at 'http://localhost:5000/api/products' from origin 'http://192.168.1.183:8080' has been blocked by CORS policy

---

at this session we are going to use webpack to manage javascript files and merge them in one single js file to serve by web server
benifits is :- it will make the speed faster in retreving the information from the browser - npm packages to use axios packages we have to install web pack for that

             we will use  to install the 3 of them  this code is below

             use the new one instead npm install --save-dev webpack@4.43.0 webpack-cli@3.3.12 webpack-dev-server@3.11.0

             now install axios to see the benifits of webpack

---

in this session we will install babel to coverting ES6 code in the backend to ES5
which can be run on node.js

after installing its time to create babel rc file = this file configuration for babel transpiler
then we install npm install -D nodemon

then npm start
you will go to this localhost link click on it and add http://localhost:5000/api/products you will see the node server is working

at the end of this lesson we incorporate babel transpiler to our project ,and coverted server.js from ES5 format to ES6 format

---

in this lesson we will enable code ESlint in our backend ,frontend project
to do that install npm install -D eslint
after installing go to the extension to download eslint

after that we configurate a new file name eslintrc.js

---

ater all setting and configuration we are ready now to back to coding and create Rating component

---

in this session we will create API in the backend and create a function at the frontend to send AJAXrequest to get all data from the products

---

in this session we desgined the product UI

---

in this session we are going to implement add to cart button and create and event handler for it
once you click on it will redirect you to a new page
we need to create after render method

---

in this lesson we will create add to cart screen

---

in this lesson we will desgin Cart screen UI

---

in this lession we will implement cart action and finish it
i got stuck in mongoose.connect and i removed
useUnifiedTopology: true,
useCreateIndex: true,

also i used MONGODB_URL="mongodb://localhost:27017/jsamazonadb"

        its connected to the database now

        http://localhost:5000/api/users/createadmin

        ---------------------------

in this session we build signin Backend part 21

---

in this session we will connect implement signin Actions

---

in this session part 23 we will implement loading pages and modal when you sign in and go to cart

---

in this session part 24 we will implement register screen from frontend and backend

i used db.users.drop();

http://localhost:5000/api/users/createadmin

its working fine after the drop

---

in this session we will create user profile screen
