import { API_BASE_URL, PATH } from '../constants/urls';

const sendRequest = async (path, method, body) => {
    const url = `${API_BASE_URL}/${path}`;
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Error while sending request');
    }
};
// Get method
export const getGroup = () => {
    return sendRequest(`${PATH}`, 'GET');
};

// Post method
export const postItem = (id, data) => {
    return sendRequest(`${PATH}/${id}`, 'POST', data);
};

// Patch method
export const patchItem = (id, data) => {
    return sendRequest(`${PATH}/${id}`, 'PATCH', data);
};

// Delete method
export const deleteItem = (id) => {
    return sendRequest(`${PATH}/${id}`, 'DELETE');
};
