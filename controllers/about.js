'use strict';

import logger from "../utils/logger.js";


const start = {
  createView(request, response) {
    response.send('About the Playlist app');   
  },
};

const about = {
  createView(request, response) {
    logger.info("About page loading!");
    response.send('About the Playlist app');   
  },
};


export default about;
