import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  logoBaseUrl: "https://app.finlex.de",
  questionManager: 'https://api.finlex.de/question-manager/v1',
  officeManager: 'https://api.finlex.de/office-manager/v1',
  contractManager: 'https://api.finlex.de/contract-manager/v1',
  s3IntegrationService: 'https://api.finlex.de/s3-integration/v1',
  authServer: 'https://auth-prod-eu-central-1.finlexlabs.de',
  fxThemeServer: 'https://static-finlex-webapp-prod-eu-central-1-finlexlabsde.s3-eu-central-1.amazonaws.com/shell-cdn',
  appPath: '/customer-dashboard/app',
  logLevel: NgxLoggerLevel.WARN
};
