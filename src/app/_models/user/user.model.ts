
export class UserModelForCreate{
  phoneNumber: string;
  password: string;

  constructor
  (
    phoneNumber: string = '',
    password: string = '',
  ) {
    this.phoneNumber = phoneNumber;

    this.password = password;
  }
}
export class UserModelForList{
  id: number;
  userName: string;
  phoneNumber: string;
  password: string;
  email: string;

  constructor
  (
    id: number = 0,
    userName: string = '',
    phoneNumber: string = '',
    password: string = '',
    email: string = '',
  ) {
    this.id = id;
    this.userName = userName;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.email = email;
  }
}
