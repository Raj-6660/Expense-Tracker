## Direct Link to the website
[LINK](https://expense-tracker-mu-six-78.vercel.app/)
- For reference use --- gmail: test@test.com & password: test@123 for login
- Else a new account can be created.

## Contributors
- [Rajarshya Singh Mahal(ME)](https://github.com/Raj-6660)
- [Pranav Pahuja](https://github.com/peecode007)
- [Rajnath Singh](https://github.com/EPFPhmiw47mosLJR)


# Environment Variables Configuration
This project requires an .env file to store sensitive configuration details. Please create a .env file in the root directory of the project and add the following environment variables:

## Required Variables:
1. MongoDB URL (MONGO_DB_URL)
The connection string for your MongoDB database. Example:<br>
```MONGO_DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority```

2. Hashing Rounds (HASHING_ROUNDS)
Number of hashing rounds for password encryption. Example:<br>
```HASHING_ROUNDS=10```

3. Cookie Secret (COOKIE_SECRET)
A secret string used to sign and verify cookies. Example:<br>
```COOKIE_SECRET=your_cookie_secret_key```

4. Allowed Origins (ALLOWED_ORIGINS)
A comma-separated list of origins allowed to access the server. Example:<br>
```ALLOWED_ORIGINS=http://localhost:3000,http://example.com```

5. Node Environment (NODE_ENV)
The runtime environment for the application. Options: development, production. Example:<br>
```NODE_ENV=development```

## Steps to Create the .env File:
1. Create a file named .env in the root directory of the project.
2. Copy the above variables and provide appropriate values for your environment.
3. Save the file.
Example .env File:<br>
```MONGO_DB_URL=mongodb+srv://username:password@cluster.mongodb.net/dbname```<br>
```HASHING_ROUNDS=10```<br>
```COOKIE_SECRET=your_cookie_secret_key```<br>
```ALLOWED_ORIGINS=http://localhost:3000,http://example.com```<br>
```NODE_ENV=development```

Once the .env file is created, you can run the application properly.

