import {User} from '../../types';

export const formatUsers = (user: any): User => ({
  firstName: user?.name?.first || '',
  lastName: user?.name?.last || '',
  username: user?.username || '',
  picture: user?.picture?.medium || '',
  email: user?.email || '',
  address: {
    street: `${user?.location?.street?.name || ''} ${
      user?.location?.street?.number || ''
    }`,
    city: user?.location?.city || '',
    postcode: user?.location?.postcode || '',
  },
});
