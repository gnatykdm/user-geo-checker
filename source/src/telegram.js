import WebApp from '@twa-dev/sdk';

export const initTelegramApp = () => {
  WebApp.enableClosingConfirmation();  

  WebApp.ready();  
};

export const getUserData = () => {
  return WebApp.initDataUnsafe?.user || null; 
};

export const sendDataToBot = (data) => {
  WebApp.sendData(JSON.stringify(data));
};

export const closeApp = () => {
  WebApp.close(); 
};
