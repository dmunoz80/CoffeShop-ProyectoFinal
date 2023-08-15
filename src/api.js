const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const fetchMessage = async () => {
    const response = await fetch(`${BASE_URL}/message`);
    const data = await response.json();
    return data.message;
}