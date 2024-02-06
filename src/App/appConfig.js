import { AppConfigurationClient } from '@azure/app-configuration';

export default async function setLocalSettings() {

  const {
    VITE_API_BASE_URL,
    VITE_APP_CLIENT_ID,
    VITE_APP_REDIRECT_URI,
    VITE_TENANT_ID,
    VITE_APP_ID_URI
  } = import.meta.env;

  if(isDefined(VITE_API_BASE_URL)) {
    localStorage.setItem('api-base-url', VITE_API_BASE_URL);
  }

  if(isDefined(VITE_APP_CLIENT_ID)) {
    localStorage.setItem('app-client-id', VITE_APP_CLIENT_ID);
  }

  if(isDefined(VITE_APP_REDIRECT_URI)) {
    localStorage.setItem('app-redirect-uri', VITE_APP_REDIRECT_URI);
  }

  if(isDefined(VITE_TENANT_ID)) {
    localStorage.setItem('tenant-id', VITE_TENANT_ID);
  }

  if(isDefined(VITE_APP_ID_URI)) {
    localStorage.setItem('app-id-uri', VITE_APP_ID_URI);
  }

  if(isDefined(window.AZURE_CONFIG_URL) && window.AZURE_CONFIG_URL !== '--AZURE_CONFIG_URL--') {
    const client = await createClient();
    const settings = client.listConfigurationSettings();
    for await (const setting of settings) {
        const { key, value } = setting;
        const existingValue = localStorage.getItem(key);
        if(!existingValue){
          localStorage.setItem(key, value);
        }
    }
  }

  
}

async function createClient() {
  const { VITE_AZURE_CONFIG_URL } = import.meta.env;
  const connectionString = isDefined(VITE_AZURE_CONFIG_URL) ? VITE_AZURE_CONFIG_URL : window.AZURE_CONFIG_URL;
  return new AppConfigurationClient(connectionString);
}

function isDefined(param) {
  return typeof param !== 'undefined';
}
