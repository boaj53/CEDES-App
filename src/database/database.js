import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite/legacy';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

const db = SQLite.openDatabase('myDatabase.db');

const downloadDatabase = async (url) => {
  const dbPath = `${FileSystem.documentDirectory}SQLite/myDatabase.db`;

  try {
    // Elimina la base de datos existente si existe
    const dbExists = await FileSystem.getInfoAsync(dbPath);
    if (dbExists.exists) {
      await FileSystem.deleteAsync(dbPath, { idempotent: true });
      console.log('Base de datos actual eliminada');
    }

    // Descarga la nueva base de datos
    const { uri } = await FileSystem.downloadAsync(url, dbPath);
    console.log('Database downloaded to:', uri);
    await AsyncStorage.setItem('db_initialized', 'true');
  } catch (error) {
    console.error('Error downloading database', error);
  }
};

const initializeDatabase = async () => {
  try {
    const dbPath = `${FileSystem.documentDirectory}SQLite/myDatabase.db`;
    
    // Verificar la conectividad a Internet
    const state = await NetInfo.fetch();
    
    if (state.isConnected) {
      console.log('Connected to the internet. Proceeding to download database.');

      // este enlace debe de ser un enlace directo para que pueda funcionar ( dudas a gpt ) 
      await downloadDatabase('https://raw.githubusercontent.com/boaj53/cedes-app/main/DataBase/myDatabase.db');

    } else {
      console.log('No internet connection. Using the existing database.');
      const dbExists = await FileSystem.getInfoAsync(dbPath);
      if (!dbExists.exists) {
        console.error('Database does not exist and no internet connection to download it.');
        // Aquí puedes manejar la falta de una base de datos existente
      }
    }
  } catch (error) {
    console.error('Error initializing database', error);
  }
};

export const getDb = () => db;

export default initializeDatabase;