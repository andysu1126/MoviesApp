import { API_TOKEN } from "@env";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
export const getNowPlaying = async () => {
  const result = await axios.get(`${BASE_URL}/movie/now_playing`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};

export const getPopular = async () => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};

export const getTop = async () => {
  const result = await axios.get(`${BASE_URL}/movie/top_rated`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};

export const getUpcoming = async () => {
  const result = await axios.get(`${BASE_URL}/movie/upcoming`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};
export const getDetails = async (id) => {
  console.log(id);
  const result = await axios.get(`${BASE_URL}/movie/${id}`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};
export const getTvDetails = async (id) => {
  console.log(id);
  const result = await axios.get(`${BASE_URL}/tv/${id}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};

export const getAirToday = async () => {
  const result = await axios.get(`${BASE_URL}/tv/airing_today?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};
export const getOnTheAir = async () => {
  const result = await axios.get(`${BASE_URL}/tv/on_the_air?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  return result.data;
};
export const getPopularTv = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  return result.data;
};

export const getTopTv = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  return result.data;
};

export const getSearch = async (searchType, input) => {
  const result = await axios.get(
    `${BASE_URL}/search/${searchType}?query=${input}&include_adult=false&language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    }
  );
  return result.data.results;
};
