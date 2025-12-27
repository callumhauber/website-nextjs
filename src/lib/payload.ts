import { getPayload } from 'payload';

import config from '@/../payload.config';

const getPayloadClient = async () => {
  return await getPayload({ config });
};

export default getPayloadClient;
