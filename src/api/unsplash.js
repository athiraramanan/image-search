import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: 
		{
			Authorization: 'Client-ID xdBP8yCBXfS3AdFWbKdv4Tja1rluUkEX0pUHD0NKyus'
		}
});
