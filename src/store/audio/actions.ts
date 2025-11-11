import { IAudioOut, IAudioIn } from './types';

export const setAudioOut = (out: IAudioOut) => ({ out });

export const setAudioIn = (audioIn: IAudioIn) => ({ in: audioIn });

export const setAudioOutEnabled = (isEnabled: boolean) => (state: any) => ({
  out: { ...state.out, isEnabled }
});

export const setAudioInEnabled = (isEnabled: boolean) => (state: any) => ({
  in: { ...state.in, isEnabled }
});

export const setAudioOutBitrate = (bitrate: number) => (state: any) => ({
  out: { ...state.out, bitrateKbps: bitrate }
});

export const setAudioInBitrate = (bitrate: number) => (state: any) => ({
  in: { ...state.in, bitrateKbps: bitrate }
});

export const setAudioOutCodec = (codec: string) => (state: any) => ({
  out: { ...state.out, codec }
});

export const setAudioInCodec = (codec: string) => (state: any) => ({
  in: { ...state.in, codec }
});

export const setAudioOutLossPercent = (lossPercent: number) => (state: any) => ({
  out: { ...state.out, lossPercent }
});

export const setAudioInLossPercent = (lossPercent: number) => (state: any) => ({
  in: { ...state.in, lossPercent }
});

export const setAudioOutJitter = (jitter: number) => (state: any) => ({
  out: { ...state.out, jitterMs: jitter }
});

export const setAudioInJitter = (jitter: number) => (state: any) => ({
  in: { ...state.in, jitterMs: jitter }
});
