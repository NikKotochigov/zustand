import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getStoreOptions } from '../../../../shared/helpers/getStoreOptions';
import { AudioStore } from './types';
import {
  setAudioOut,
  setAudioIn,
  setAudioOutEnabled,
  setAudioInEnabled,
  setAudioOutBitrate,
  setAudioInBitrate,
  setAudioOutCodec,
  setAudioInCodec,
  setAudioOutLossPercent,
  setAudioInLossPercent,
  setAudioOutJitter,
  setAudioInJitter
} from './actions';

const storeName = 'audio';

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

export const useAudio = create<AudioStore>()(
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
        }),
      
      setAudioOutEnabled: (payload) =>
        set(setAudioOutEnabled(payload), undefined, {
          type: `${storeName}/setAudioOutEnabled`,
          payload
        }),
      
      setAudioInEnabled: (payload) =>
        set(setAudioInEnabled(payload), undefined, {
          type: `${storeName}/setAudioInEnabled`,
          payload
        }),
      
      setAudioOutBitrate: (payload) =>
        set(setAudioOutBitrate(payload), undefined, {
          type: `${storeName}/setAudioOutBitrate`,
          payload
        }),
      
      setAudioInBitrate: (payload) =>
        set(setAudioInBitrate(payload), undefined, {
          type: `${storeName}/setAudioInBitrate`,
          payload
        }),
      
      setAudioOutCodec: (payload) =>
        set(setAudioOutCodec(payload), undefined, {
          type: `${storeName}/setAudioOutCodec`,
          payload
        }),
      
      setAudioInCodec: (payload) =>
        set(setAudioInCodec(payload), undefined, {
          type: `${storeName}/setAudioInCodec`,
          payload
        }),
      
      setAudioOutLossPercent: (payload) =>
        set(setAudioOutLossPercent(payload), undefined, {
          type: `${storeName}/setAudioOutLossPercent`,
          payload
        }),
      
      setAudioInLossPercent: (payload) =>
        set(setAudioInLossPercent(payload), undefined, {
          type: `${storeName}/setAudioInLossPercent`,
          payload
        }),
      
      setAudioOutJitter: (payload) =>
        set(setAudioOutJitter(payload), undefined, {
          type: `${storeName}/setAudioOutJitter`,
          payload
        }),
      
      setAudioInJitter: (payload) =>
        set(setAudioInJitter(payload), undefined, {
          type: `${storeName}/setAudioInJitter`,
          payload
        })
    }),
    getStoreOptions(storeName)
  )
);
