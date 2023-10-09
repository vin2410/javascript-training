import { API_BASE_URL, PATH } from '../constants/urls';
import { errorMessage } from '../constants/errorMessage';

export default class ApisClient {
    sendRequest = async (path, method, body) => {
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
            throw new Error(errorMessage.REQUEST_ERROR);
        }
    };
    // Get method
    getItem = async () => {
        return await this.sendRequest(`${PATH}`, 'GET');
    };

    // Post method
    postItem = async (data) => {
        return await this.sendRequest(`${PATH}`, 'POST', data);
    };

    // Patch method
    patchItem = async (id, data) => {
        return await this.sendRequest(`${PATH}/${id}`, 'PATCH', data);
    };

    // Delete method
    deleteItem = async (id) => {
        return await this.sendRequest(`${PATH}/${id}`, 'DELETE');
    };
}
