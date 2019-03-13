// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    // Add your Firebase configuration
    apiKey: 'AIzaSyBPPanDXv-5b-GTCsMmpMHmWqUry1R_axc',
    authDomain: 'fir-authentication-d181b.firebaseapp.com',
    databaseURL: 'https://fir-authentication-d181b.firebaseio.com',
    projectId: 'fir-authentication-d181b',
    storageBucket: '',
    messagingSenderId: '600675165623'
  }
};
