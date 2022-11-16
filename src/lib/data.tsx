import { TEmployee } from '@/components/elements/employee';

export const defaultUserValues: TEmployee = {
  _id: '123456789',
  avatar: '',
  firstname: 'reset',
  lastname: 'reset',
  phone: 'reset',
  email: 'reset@reset.com',
  createdOn: new Date().toLocaleDateString('ja-JP').replaceAll('/', '-').toString(),
  role: 'reset',
  status: 'reset'
};
