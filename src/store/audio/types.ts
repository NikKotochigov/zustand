export interface IAudioMetrics {
    isEnabled: boolean;
    bitrateKbps: number;
    codec: string;
    lossPercent: number;
    jitterMs: number;
}

export interface IAudioStatisticState {
    out: IAudioMetrics;
    in: IAudioMetrics;
}

export interface IAudioStatisticActions {
    setAudioOut: (out: IAudioMetrics) => void;
    setAudioIn: (audioIn: IAudioMetrics) => void;
}

export type RtcAudioStatisticStore = IAudioStatisticState & IAudioStatisticActions;
