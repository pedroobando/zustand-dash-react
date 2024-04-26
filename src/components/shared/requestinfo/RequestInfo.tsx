import { useEffect, useState } from 'react';
import { tesloApi } from '../../../api/teslo.api';

export const RequestInfo = () => {
  const [requestInfo, setRequestInfo] = useState<unknown>('');

  useEffect(() => {
    tesloApi
      .get('/auth/private')
      .then((resp) => setRequestInfo(resp.data))
      .catch(() => 'Not Authorization');
  }, []);

  return (
    <>
      <h2>Informacion</h2>
      <pre>{JSON.stringify(requestInfo, null, 2)}</pre>
    </>
  );
};
