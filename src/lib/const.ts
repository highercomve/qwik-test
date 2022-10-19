
import { ResolvePath } from './object.utils'

export const GetEnv = (env: string, def?: string): string => {
  console.log(import.meta)
  if (typeof window === "undefined") {
    return ResolvePath(import.meta, `env.${env}`, def)
  }
  return ResolvePath(window, `env.${env}`, def)
}
