export const BASE_URL = 'https://randomuser.me/api';

const getRandomUser = () => 
fetch(BASE_URL).then(data => data.json())

export default getRandomUser