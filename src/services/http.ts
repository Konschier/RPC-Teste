const request: RequestInit = {
	headers: {
		'content-type': 'application/json',
	},
	method: 'GET',
};

async function fetcher<T = any>(input: RequestInfo, config?: RequestInit) {
	if (typeof input === 'string') {
		input = `${process.env.NEXT_PUBLIC_API_URL}/${input}`;
	}
	const response = await fetch(input, { ...request, ...config });

	const data = await response.json();

	console.log(response);

	return data as T;
}


export default fetcher;
