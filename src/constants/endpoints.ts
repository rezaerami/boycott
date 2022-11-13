const API_BASE: string = process.env.REACT_APP_API_BASE ?? '';

const ENDPOINTS: { [key: string]: { [key: string]: string } } = {
  BRANDS: {
    LIST: `${API_BASE}/brands/list.json`,
  },
};

export default ENDPOINTS;
