import { IConnectionMetrics } from './types';

export const setName = (name: string) => ({ name });
export const setUserIP = (userIP: string) => ({ userIP });
export const setIsTurn = (isTurn: boolean) => ({ isTurn });
export const setDeviceType = (deviceType: string) => ({ deviceType });
export const setAppVersion = (appVersion: string) => ({ appVersion });
export const setNetworkType = (networkType: string) => ({ networkType });
export const setDirectionType = (directionType: string) => ({ directionType });
export const setBrowser = (browser: string) => ({ browser });
export const setConnection = (connection: IConnectionMetrics) => ({ connection });
