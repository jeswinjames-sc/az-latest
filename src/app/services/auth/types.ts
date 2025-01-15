/**
 * @author Garfunkel.Vila
 */

export interface ILoginResponse {
  meta: ILoginMeta
  data: ILoginResponseData
}
export interface ILoginResponseData {
  token: string
  badPwdCount: number
  badPwdTimestamp: string
  requiresChangePassword: string
  user: ILoginDataDataUser
}
export interface ILoginDataDataUser {
  firstName: string
  lastName: string
  email: string
  channel: string
}

export interface IGetTokenParams {
  username: string
  password: string
}

export type IErrorData = {
  userName: string
  password: string
  message: string
}

export interface ILoginMeta {
  code: String
  status: string
  message: string
}
