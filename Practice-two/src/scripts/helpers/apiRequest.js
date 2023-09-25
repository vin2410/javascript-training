class ApiRequest {
    constructor(baseUrl, path) {
        this.baseUrl = baseUrl;
        this.path = path;
    }

    // Get method
    getGroup = () => {
        return this.sendRequest(`${this.path}`, 'GET');
    };

    // Post method
    postItem = (data) => {
        return this.sendRequest(`${this.path}`, 'POST', data);
    };

    // Patch method
    patchItem = (id, data) => {
        return this.sendRequest(`${this.path}/${id}`, 'PATCH', data);
    };

    // Delete method
    deleteItem = (id) => {
        return this.sendRequest(`${this.path}/${id}`, 'DELETE');
    };

    sendRequest = async (path, method, body) => {
        const url = `${this.baseUrl}${path}`;
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
}

export default ApiRequest;
