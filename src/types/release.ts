
export interface IStat {
  state: string
  count: number
  first_schedule_time: string
  last_schedule_time: string
}

export interface IStatWithTimeStamp {
  state: string
  count: number
  first_schedule_time: string
  last_schedule_time: string
}

export interface IStatus {
  state: string
  message: string
} 

export interface IRelease {
  id: string
  owner_id: string
  deleted_at: null
  created_at: string
  updated_at: string
  status: IStatus
  type: string
  channel_id: string
  channel_rev: 43
  duration: number
  schedule_time: string
  step: {
    rev: number
    "state-sha": string
    progress: {
      status: string
    }
  }
  "step-time": string
  "progress-time": string
  "time-created": string
  "time-modified": string
  mark_public_processed: boolean
  garbage: boolean
}