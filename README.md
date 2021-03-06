# fullstack-code-test
Doorkee React/Redux Node/Express full stack code test. The goal of this test is to extend the provided boilerplate backend and frontend to query and display the location of the ISS in real time.

## Instructions:

1. Fork this repo to your personal github account
2. Clone this repo to your local machine
3. Install Mongo (this guide is for Mac OS)
  1. Install dependencies: `brew install mongo`
  2. Create data directory and set permissions: `sudo mkdir -p /data/db && sudo chown -R $(whoami):admin /data/db`
4. Start mongo (`mongod` or `brew services start mongo`)
5. Setup project dependencies: run `npm run setup` in the project root
6. Start the backend: `npm run start:api` in the project root
7. Start the client: `npm run start:client` in the project root. You'll probably need to do this in a separate terminal window
8. Code!

### backend:
 
1. Extend the existing Node backend to store (and update every 2 seconds) the location of the ISS (from [this api](http://open-notify.org/Open-Notify-API/ISS-Location-Now/)) in the Mongo database.
2. Create a route for retrieving the location of the ISS to be used by the frontend

### frontend:

1. Use a map library of your choice ([Google maps](https://developers.google.com/maps/documentation/), [Mapbox](https://www.mapbox.com/about/maps/), etc) to display the location of the ISS from the backend. It should automatically update every 5 seconds.
2. Create a Header with at least three dead links (About, Contact, Whatever, etc)
    - On desktop: 
      * Logo on the left side
      * links centered and spaced evenly horizontally
    - On Mobile:
      * Logo on the left side
      * Hamburger button on the right side that opens a drawer with the links spaced evenly vertically

### bonus:

1. Tests
2. Lint ([api](/api) and [client](/client) each have a local eslint config)
3. Authentication (JWT or session based, signup/login modal with a link in the header)
4. Click a spot on the map and display the next pass time for that location using [this endpoint](http://open-notify.org/Open-Notify-API/ISS-Pass-Times/)
