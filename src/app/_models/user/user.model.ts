export class UserModelForList{
  id: number;
  userName: string;
  password: string;
  email: string;

  constructor
  (
    id: number = 0,
    userName: string = '',
    password: string = '',
    email: string = '',
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
}
