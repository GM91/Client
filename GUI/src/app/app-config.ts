import {InjectionToken} from "@angular/core";

export interface ApplicationConfig {
  appName: string;
  serverUrl: string;
}

export const MY_CONFIG: ApplicationConfig = {
  appName: 'My new App',
  serverUrl: 'http://193.205.230.8:5000/'
};

export const MY_CONFIG_TOKEN = new InjectionToken<ApplicationConfig>('config');
