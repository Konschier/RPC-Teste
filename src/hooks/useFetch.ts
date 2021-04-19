import useSWR, { SWRConfiguration } from 'swr';

import fetcher from '~/services/http';

export default function useFetch<Data = any, Error = any>(
	url: string,
	axiosConfig?: RequestInit,
	swrConfig?: SWRConfiguration<Data, Error>
) {
	const swr = useSWR<Data, Error>(url, () => fetcher(url, axiosConfig), swrConfig);

	return swr;
}
