This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In terms of Framework i've choosen NextJs

The app has following funtionalities:

1. Displays the list of Dublin Bike stations in alphabetical order.

2. For each station, it shows the station address, number of bikes available, number of empty bike stands available, links station location to map.

3. Stations can be filtered by typing in station name/address/available bikes/number of empty bike stands

4. Favourite button for each station, on selecting it shows that station before all stations.

To add this feature it took me around 3hrs.

If I had more time I would have added a bit more CSS, refactored the code a bit more and added these 2 features.

1. Recommend the closest station based on location - would have achieved that, firstly determining my coords, lat, long. Then create a function/hook to determine shortest distance between 2 latitude and longitude. Use that hook to find the distance between my location and all the station location. Store it in an array(call it distance array) exactly same as the stationList. Find the minimum distance using Math.min on the distance array. Find the indexOf that minimum value in distance array, access the station from the staion array on that index. It would be the closest station from my location.

2. Recommend the closest station based on location - this can be achieved by using the react-google-map lib and rendering GoogleMap  mapping with multiple mark postion (lat,longitude) available from the stationList. 

