import { IAudioMetrics } from './types';

export const setAudioOut = (out: IAudioMetrics) => ({ out });
export const setAudioIn = (audioIn: IAudioMetrics) => ({ in: audioIn });
