import { useEffect, useState } from 'react';

import Head from 'next/head';

import { DateTime } from 'luxon';
import { stringify } from 'querystring';

import useFetch from '~/hooks/useFetch';

export default function Home() {
	const [date, setDate] = useState(DateTime.now().toFormat('yyyy-MM-dd'));
	const params = stringify({ date });
	const { data, mutate } = useFetch(`/programmes/1337?${params}`);

	console.log(data);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
