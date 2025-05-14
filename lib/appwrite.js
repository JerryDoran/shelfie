import { Client, Account, Avatars, Databases } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('6803c05e003325b6e134')
  .setPlatform('dev.maestro.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
