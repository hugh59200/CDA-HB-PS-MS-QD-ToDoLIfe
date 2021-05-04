export function DataOrNotData(response, setLoading, setData) {
	const json = response.data;
	if (json.length === 0) {
		setLoading(true);
	} else {
		setData(json);
		setLoading(false);
	}
}
