/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { PublicClientApplication } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */

export default function createMsalInstance(){
    return new PublicClientApplication(msalConfig());
} 

function msalConfig() {
    const tenantId = localStorage.getItem('tenant-id');

    return {
        auth: {
            clientId: localStorage.getItem('app-client-id'),
            authority: `https://login.microsoftonline.com/${tenantId}`,
            redirectUri: window.location.origin + localStorage.getItem('app-redirect-uri')  
        },
        cache: {
            cacheLocation: "localStorage", // This configures where your cache will be stored
            storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
        }
    };
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export function loginRequest() {
    return {
        scopes: ["User.Read", localStorage.getItem('app-id-uri')]
    }
}

export function tokenRequest() {
    return {
        scopes: ["api://<GUID>/general"]
    }
}

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphAvatarEndpoint: "https://graph.microsoft.com/v1.0/me/photo/$value",
};
