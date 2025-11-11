import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {getStoreOptions} from '../../../../shared/helpers/getStoreOptions';
import {RtcAudioStatisticStore} from './types';
import {setAudioOut, setAudioIn} from './actions';

const storeName = 'RtcAudioStatistic';

const initialAudioOut = {
    isEnabled: false,
    bitrateKbps: 0,
    codec: '',
    lossPercent: 0,
    jitterMs: 0
};

const initialAudioIn = {
    isEnabled: false,
    bitrateKbps: 0,
    codec: '',
    lossPercent: 0,
    jitterMs: 0
};

export const useRtcAudioStatistic = create<RtcAudioStatisticStore>()(
    devtools(
        (set) => ({
            out: initialAudioOut,
            in: initialAudioIn,

            setAudioOut: (payload) =>
                set(setAudioOut(payload), undefined, {
                    type: `${storeName}/setAudioOut`,
                    payload
                }),

            setAudioIn: (payload) =>
                set(setAudioIn(payload), undefined, {
                    type: `${storeName}/setAudioIn`,
                    payload
                })
        }),
        getStoreOptions(storeName)
    )
);
