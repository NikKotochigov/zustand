export interface IAudioOut {
  isEnabled: boolean;
  bitrateKbps: number;
  codec: string;
  lossPercent: number;
  jitterMs: number;
}

export interface IAudioIn {
  isEnabled: boolean;
  bitrateKbps: number;
  codec: string;
  lossPercent: number;
  jitterMs: number;
}

export interface IAudioState {
  out: IAudioOut;
  in: IAudioIn;
}

export interface IAudioActions {
  setAudioOut: (out: IAudioOut) => void;
  setAudioIn: (audioIn: IAudioIn) => void;
  setAudioOutEnabled: (isEnabled: boolean) => void;
  setAudioInEnabled: (isEnabled: boolean) => void;
  setAudioOutBitrate: (bitrate: number) => void;
  setAudioInBitrate: (bitrate: number) => void;
  setAudioOutCodec: (codec: string) => void;
  setAudioInCodec: (codec: string) => void;
  setAudioOutLossPercent: (lossPercent: number) => void;
  setAudioInLossPercent: (lossPercent: number) => void;
  setAudioOutJitter: (jitter: number) => void;
  setAudioInJitter: (jitter: number) => void;
}

export type AudioStore = IAudioState & IAudioActions;
