import qs from 'qs';
import projectConfig from 'projectConfig';

const url = 'https://api.edamam.com/search';

const request = (path, options) => new Promise((resolve, reject) => {
	fetch(`${url}${path}`, options)
		.then(response => response.json())
		.then((json) => {
			resolve(json);
		})
		.catch((error) => {
			console.log('error: ', error);
		});
});

export const getRequest = (path, queryParams) =>
	request(`${path}?app_id=${projectConfig.app_id}&app_key=${projectConfig.app_key}&to=30&${qs.stringify(queryParams)}`);