# URLShortener
Website to shorten any given URL.

# Prerequisites
- Node >= 8.0
  - To install `apt-get install nodejs`
- npm >= 6.4
  - Installed automatically when installing nodejs
- Mongodb >= 3.2
  - To install `apt-get install mongodb`

# Application
- First clone the repository using `git clone`
- Run `npm install` inside the root directory to install the dependencies
- To start application `npm start`
- Go to http://localhost:3000

# Implementation
- To Shorten URL, send a request to endpoing `/shorten` with 'url' as field in the post body
- The returned value will be the reference for the url

# ToDo
- Implement a GET method along with the POST API to shorten the URL.
- Generate only a backend API on this repo
