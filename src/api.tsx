import { MD5} from 'crypto-js';
import axios from 'axios';

export async function getInfo() {
    const apiKey = '8a7e3d76c313799c218714bc82757d21';
    const ts = new Date().getTime();
    const hash = MD5(ts + '651d3811d0952529409c81fcfff8fc2ea212abb9' + apiKey);
    
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`);
        return response.data.data.results;
    } catch (error) {
        console.error(error);
        return null;
    }
  }