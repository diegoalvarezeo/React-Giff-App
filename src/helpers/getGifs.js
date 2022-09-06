export const getGifs = async(category)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zd7c08wipU7Q0X4yDvoW1rzAcoxZDQKN&q=${ category }`;
    const resp = await fetch(url);  
    const {data} = await resp.json();
  
    const gifs = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
  
    }));
    console.log(gifs)
    return gifs;
  }