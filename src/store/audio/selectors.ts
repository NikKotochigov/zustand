import { RtcAudioStatisticStore } from './types';

export const getAudioOut = (state: RtcAudioStatisticStore) => state.out;
export const getAudioIn = (state: RtcAudioStatisticStore) => state.in;

export const getSetAudioOut = (state: RtcAudioStatisticStore) => state.setAudioOut;
export const getSetAudioIn = (state: RtcAudioStatisticStore) => state.setAudioIn;
