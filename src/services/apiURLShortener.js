import axios from "axios";
import toast from "react-hot-toast";

const URL = "https://is.gd/create.php";
const proxy = "https://api.allorigins.win/get?url=";

export async function shortenURL(url) {
    try {
        const apiUrl = encodeURIComponent(`${URL}?format=simple&url=${url}`);
        const response = await axios(proxy + apiUrl);

        const { data } = response;

        return data;
    } catch (err) {
        console.error(err);
        toast.error("Couldn't Shorten URL :(");
    }
}
