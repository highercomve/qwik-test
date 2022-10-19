import { IStat } from "~/types/release"

export enum BgType {
  Waiting = "bg-primary",
  Success = "bg-success",
  Info = "bg-info",
  Warning = "bg-warning",
  Danger = "bg-danger",
  Inactive = "bg-secondary",
  Canceled = "bg-dark",
  Deleted = "bg-light",
  Default = "bg-light",
}

export interface StatusToBgType {
  [key: string]: BgType
  default: BgType
}

export const DeviceStatus = [
  { label: "NEW", value: "NEW" },
  { label: "DONE", value: "DONE" },
  { label: "UPDATED", value: "UPDATED" },
  { label: "FAILED", value: "FAILED" },
  { label: "ERROR", value: "ERROR" },
  { label: "WONTGO", value: "WONTGO" },
  { label: "WARNING", value: "WARNING" },
  { label: "SYNCING", value: "SYNCING" },
  { label: "QUEUED", value: "QUEUED" },
  { label: "DOWNLOADING", value: "DOWNLOADING" },
  { label: "TESTING", value: "TESTING" },
  { label: "INPROGRESS", value: "INPROGRESS" },
  { label: "CANCELED", value: "CANCELED" },
]

export enum Statuses {
  DONE = "DONE",
  WARNING = "WARNING",
  INPROGRESS = "INPROGRESS",
  ERROR = "ERROR",
  WONTGO = "WONTGO",
  CANCELED = "CANCELED",
  UPDATED = "UPDATED",
  SYNCING = "SYNCING",
  QUEUED = "QUEUED",
  DOWNLOADING = "DOWNLOADING",
  TESTING = "TESTING",
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  FAILED = "FAILED",
  SCHEDULED = "SCHEDULED",
  DELETED = "DELETED",
  PAUSED = "PAUSED",
}

export const statusToBgTypeConvertion: StatusToBgType = {
  "NEW": BgType.Inactive,
  "paused": BgType.Inactive,
  "new": BgType.Inactive,
  "done": BgType.Success,
  "DONE": BgType.Success,
  "UPDATED": BgType.Success,
  "failed": BgType.Danger,
  "ERROR": BgType.Danger,
  "WONTGO": BgType.Danger,
  "active": BgType.Warning,
  "WARNING": BgType.Warning,
  "SYNCING": BgType.Warning,
  "QUEUED": BgType.Warning,
  "DOWNLOADING": BgType.Warning,
  "TESTING": BgType.Warning,
  "scheduled": BgType.Info,
  "INPROGRESS": BgType.Info,
  "canceled": BgType.Canceled,
  "CANCELED": BgType.Canceled,
  "deleted": BgType.Deleted,
  default: BgType.Default
}

export const FINAL_STATES = [
  Statuses.DONE,
  Statuses.ERROR,
  Statuses.FAILED,
  Statuses.DELETED,
  Statuses.CANCELED,
  Statuses.UPDATED,
]

export const PLAYABLE_STATES = [
  Statuses.PAUSED,
  Statuses.NEW,
  Statuses.SCHEDULED,
]

export const CANCELABLE_STATES = [
  Statuses.ACTIVE,
  Statuses.PAUSED,
  Statuses.SCHEDULED,
  Statuses.NEW,
]

export const PAUSABLE_STATES = [
  Statuses.ACTIVE,
]

export const FAILED_STATES = [
  Statuses.ERROR,
  Statuses.FAILED,
  Statuses.WONTGO
]

export const CheckStateIn = (statusesList: string[] = [], state: string = '') => {
  return statusesList.indexOf(state.toUpperCase()) >= 0
}

export const CheckStateSummaryIn = (statusesList: string[] = [], states: IStat[] = []) => {
  return states.some((sum) => {
    return statusesList.indexOf(sum.state.toUpperCase()) >= 0
  })

}

export const StatusIsEqual = (a: string = '', b: string = '') => {
  return a.toUpperCase() === b.toUpperCase()
}