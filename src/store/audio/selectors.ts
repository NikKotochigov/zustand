import { AudioStore } from './types';

// Selectors for state
export const getAudioOut = (state: AudioStore) => state.out;
export const getAudioIn = (state: AudioStore) => state.in;

export const getAudioOutEnabled = (state: AudioStore) => state.out.isEnabled;
export const getAudioInEnabled = (state: AudioStore) => state.in.isEnabled;

export const getAudioOutBitrate = (state: AudioStore) => state.out.bitrateKbps;
export const getAudioInBitrate = (state: AudioStore) => state.in.bitrateKbps;

export const getAudioOutCodec = (state: AudioStore) => state.out.codec;
export const getAudioInCodec = (state: AudioStore) => state.in.codec;

export const getAudioOutLossPercent = (state: AudioStore) => state.out.lossPercent;
export const getAudioInLossPercent = (state: AudioStore) => state.in.lossPercent;

export const getAudioOutJitter = (state: AudioStore) => state.out.jitterMs;
export const getAudioInJitter = (state: AudioStore) => state.in.jitterMs;

// Selectors for actions
export const getSetAudioOut = (state: AudioStore) => state.setAudioOut;
export const getSetAudioIn = (state: AudioStore) => state.setAudioIn;
export const getSetAudioOutEnabled = (state: AudioStore) => state.setAudioOutEnabled;
export const getSetAudioInEnabled = (state: AudioStore) => state.setAudioInEnabled;
export const getSetAudioOutBitrate = (state: AudioStore) => state.setAudioOutBitrate;
export const getSetAudioInBitrate = (state: AudioStore) => state.setAudioInBitrate;
export const getSetAudioOutCodec = (state: AudioStore) => state.setAudioOutCodec;
export const getSetAudioInCodec = (state: AudioStore) => state.setAudioInCodec;
export const getSetAudioOutLossPercent = (state: AudioStore) => state.setAudioOutLossPercent;
export const getSetAudioInLossPercent = (state: AudioStore) => state.setAudioInLossPercent;
export const getSetAudioOutJitter = (state: AudioStore) => state.setAudioOutJitter;
export const getSetAudioInJitter = (state: AudioStore) => state.setAudioInJitter;
