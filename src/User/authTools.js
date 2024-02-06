import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { loginRequest, tokenRequest } from '../App/authConfig';

export async function getAccessToken(msalInstance) {
  await msalInstance.handleRedirectPromise();
  const account = msalInstance.getActiveAccount();

  // Login if no account is found
  if (account == null)
    return msalInstance.loginRedirect(loginRequest());

  return await msalInstance.acquireTokenSilent(tokenRequest())
    .then((res) => {
      return res.accessToken;
    })
    .catch((err) => {
      if (err instanceof InteractionRequiredAuthError)
        return msalInstance.loginRedirect(loginRequest());

      throw new Error('An unexpected error occurred while acquiring an access token.');
    });
}

export async function getGraphApiAccessToken(msalInstance) {
  await msalInstance.handleRedirectPromise();
  const account = msalInstance.getActiveAccount();

  // Login if no account is found
  if (account == null) {
    return msalInstance.loginRedirect(loginRequest());
  }

  // If an account is found, attempt to acquire an access token
  return await msalInstance.acquireTokenSilent(loginRequest())
    .then((res) => {
      return res.accessToken;
    })
    .catch((err) => {
      if (err instanceof InteractionRequiredAuthError)
        return msalInstance.loginRedirect(loginRequest());

      throw new Error('An unexpected error occurred while acquiring an access token.');
    });
}