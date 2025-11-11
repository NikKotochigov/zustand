export interface IConnectionMetrics {
  bitrateInKbps: number;
  bitrateOutKbps: number;
  RttMs: number;
}

export interface IRtcAudioStatisticState {
  name: string;
  userIP: string;
  isTurn: boolean;
  deviceType: string;
  appVersion: string;
  networkType: string;
  directionType: string;
  browser: string;
  connection: IConnectionMetrics | null;
}

export interface IRtcAudioStatisticActions {
  setName: (name: string) => void;
  setUserIP: (userIP: string) => void;
  setIsTurn: (isTurn: boolean) => void;
  setDeviceType: (deviceType: string) => void;
  setAppVersion: (appVersion: string) => void;
  setNetworkType: (networkType: string) => void;
  setDirectionType: (directionType: string) => void;
  setBrowser: (browser: string) => void;
  setConnection: (connection: IConnectionMetrics) => void;
}

export type RtcAudioStatisticStore = IRtcAudioStatisticState & IRtcAudioStatisticActions;
