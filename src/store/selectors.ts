import { RtcAudioStatisticStore } from './types';

export const getName = (state: RtcAudioStatisticStore) => state.name;
export const getUserIP = (state: RtcAudioStatisticStore) => state.userIP;
export const getIsTurn = (state: RtcAudioStatisticStore) => state.isTurn;
export const getDeviceType = (state: RtcAudioStatisticStore) => state.deviceType;
export const getAppVersion = (state: RtcAudioStatisticStore) => state.appVersion;
export const getNetworkType = (state: RtcAudioStatisticStore) => state.networkType;
export const getDirectionType = (state: RtcAudioStatisticStore) => state.directionType;
export const getBrowser = (state: RtcAudioStatisticStore) => state.browser;
export const getConnection = (state: RtcAudioStatisticStore) => state.connection;

export const getSetName = (state: RtcAudioStatisticStore) => state.setName;
export const getSetUserIP = (state: RtcAudioStatisticStore) => state.setUserIP;
export const getSetIsTurn = (state: RtcAudioStatisticStore) => state.setIsTurn;
export const getSetDeviceType = (state: RtcAudioStatisticStore) => state.setDeviceType;
export const getSetAppVersion = (state: RtcAudioStatisticStore) => state.setAppVersion;
export const getSetNetworkType = (state: RtcAudioStatisticStore) => state.setNetworkType;
export const getSetDirectionType = (state: RtcAudioStatisticStore) => state.setDirectionType;
export const getSetBrowser = (state: RtcAudioStatisticStore) => state.setBrowser;
export const getSetConnection = (state: RtcAudioStatisticStore) => state.setConnection;
