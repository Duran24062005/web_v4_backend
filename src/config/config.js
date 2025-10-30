import 'dotenv/config'; // esto reemplaza require('dotenv').config()

export const config = {
  app: {
    port: process.env.PORT || 8000
  },
  mongodb: {
    uri: process.env.CLOUSTER_PRUEBA
  }
};