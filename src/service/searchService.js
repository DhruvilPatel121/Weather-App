const API_KEY = '1639c6a23356442f996121538252104';
const BASE_URL = 'http://api.weatherapi.com/v1';



export const getSearchSuggestions = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
    )

    const data = await response.json();

    return data.map(location => ({
      name: location.name,
      region: location.region,
      country: location.country
    }))

  } catch (error) {
    console.error('Error fetching suggestions:', error);
    return [];
  }
}