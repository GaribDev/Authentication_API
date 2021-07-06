# Authentication_API
 Simple api that authenticates it's user, made using Noje.js, MongoDB and JWT.

## Requried packages 
 - NodeJS
 - Express
 - Mongoose
 - Bcrypt (for encrypting users password)
 - JWT
 - Nodemon

Install the required packages using these commands :
```sh
  npm install express mongoose bcrypt  --save
  npm install jsonwebtoken --save
  npm install nodemon --save-dev
```
##  Running the project 

Run the project by using the following command and try logging by using the JWT
```sh
npm start
```

## Working of API

1. Open Postman and create a post request to localhost:4000/user/sign_up as below:
![image](https://user-images.githubusercontent.com/57034231/124587732-978be600-de75-11eb-80e1-ecdaf897750e.png)

2. After this, sign with this URL localhost:3000/user/sign_in . Enter the keys and values for email and password:
![image](https://user-images.githubusercontent.com/57034231/124587884-c99d4800-de75-11eb-9586-e76cd6fb50b3.png)

3. Then, enter the parameters for the key and value for fetching the profile. You want to create as shown below and send:
![image](https://user-images.githubusercontent.com/57034231/124587980-e2a5f900-de75-11eb-90bd-7579624cb687.png)




