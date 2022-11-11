export interface IUser {
  id: string;
  name: string;
  age: number | string;
  address: string;
}

export interface IResp {
  code: number | string;
  success: boolean;
  data?: Array<IUser>;
}
