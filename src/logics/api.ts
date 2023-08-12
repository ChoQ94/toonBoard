export const getRomanceList = async (page: string | number) => {
  const getUrl = `http://localhost:3000/api/comics/romance/page_${page}.json`;
  try {
    const response = await fetch(getUrl).then((res) => res.json());
    return response;
  } catch (err) {
    return {};
  }
};

export const getDramaList = async (page: string | number) => {
  const getUrl = `http://localhost:3000/api/comics/romance/page_${page}.json`;
  try {
    const response = await fetch(getUrl).then((res) => res.json());
    return response;
  } catch (err) {
    return {};
  }
};

export const getComicsList = async (genre: string, page: string | number) => {
  const getUrl = `http://localhost:3000/api/comics/${genre}/page_${page}.json`;
  try {
    const response = await fetch(getUrl).then((res) => res.json());
    return response;
  } catch (err) {
    return {};
  }
};
