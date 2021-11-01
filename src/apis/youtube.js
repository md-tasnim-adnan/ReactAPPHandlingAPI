import axios from "axios";

const KEY = "AIzaSyBKFjZsgJMRBwNMMJ54RXm_GXPwQQs0xVU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
