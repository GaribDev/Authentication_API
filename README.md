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

This API allows user to create an account by entering their details like full name, user name, email-id, and password. After sucessfully creating an account the user can login to their account using the user name and password. Once the user has sucesssfullly logged in, they recieve a JWT token. This token is valid for 2 hours. Using this token users can perform various activites. Here they can use it to fetch details of their account.

1. Open Postman and create a post request to localhost:4000/user/sign_up as below:

![image](https://user-images.githubusercontent.com/57034231/124587732-978be600-de75-11eb-80e1-ecdaf897750e.png)

2. After this, sign with this URL localhost:3000/user/sign_in . Enter the keys and values for email and password:

![image](https://user-images.githubusercontent.com/57034231/124587884-c99d4800-de75-11eb-9586-e76cd6fb50b3.png)

3. Then, enter the parameters for the key and value for fetching the profile you created as shown below and send:
![image](https://user-images.githubusercontent.com/57034231/124587980-e2a5f900-de75-11eb-90bd-7579624cb687.png)




