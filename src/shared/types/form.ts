import { LocalStorageData } from "./localstorage";

export type FormData = Omit<LocalStorageData, 'id' | 'time'>
