import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getStoreOptions } from '../../../../shared/helpers/getStoreOptions';
import { IConnectionMetrics, RtcAudioStatisticStore } from './types';
import {
  setName,
  setUserIP,
  setIsTurn,
  setDeviceType,
  setAppVersion,
  setNetworkType,
  setDirectionType,
  setBrowser,
  setConnection
} from './actions';

const storeName = 'rtcAudioStatistic';

export const useRtcAudioStatistic = create<RtcAudioStatisticStore>()(
  devtools(
    (set) => ({
      name: '',
      userIP: '',
      isTurn: false,
      deviceType: '',
      appVersion: '',
      networkType: '',
      directionType: '',
      browser: '',
      connection: null,
      setName: (payload: string) =>
        set(setName(payload), undefined, {
          type: `${storeName}/setName`,
          payload
        }),
      setUserIP: (payload: string) =>
        set(setUserIP(payload), undefined, {
          type: `${storeName}/setUserIP`,
          payload
        }),
      setIsTurn: (payload: boolean) =>
        set(setIsTurn(payload), undefined, {
          type: `${storeName}/setIsTurn`,
          payload
        }),
      setDeviceType: (payload: string) =>
        set(setDeviceType(payload), undefined, {
          type: `${storeName}/setDeviceType`,
          payload
        }),
      setAppVersion: (payload: string) =>
        set(setAppVersion(payload), undefined, {
          type: `${storeName}/setAppVersion`,
          payload
        }),
      setNetworkType: (payload: string) =>
        set(setNetworkType(payload), undefined, {
          type: `${storeName}/setNetworkType`,
          payload
        }),
      setDirectionType: (payload: string) =>
        set(setDirectionType(payload), undefined, {
          type: `${storeName}/setDirectionType`,
          payload
        }),
      setBrowser: (payload: string) =>
        set(setBrowser(payload), undefined, {
          type: `${storeName}/setBrowser`,
          payload
        }),
      setConnection: (payload: IConnectionMetrics) =>
        set(setConnection(payload), undefined, {
          type: `${storeName}/setConnection`,
          payload
        })
    }),
    getStoreOptions(storeName)
  )
);
