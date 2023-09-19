export const excerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '712e2028ecmsh685ee96ff32a4dbp1a424djsnab54d2ac8027',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData = async (url,options) => {
    const response  = await fetch(url,options);
    const data = await response.json();
    return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '712e2028ecmsh685ee96ff32a4dbp1a424djsnab54d2ac8027',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};