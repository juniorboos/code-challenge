const ENVIRONMENTS = {
    DEV : 'http://localhost:8001/api/'
};
const baseURL = ENVIRONMENTS['DEV'];

export function CONFIG_HEADERS ()  {
    return {
        'Content-Type': 'application/json; charset=utf-8',
        cancellable: true,
        timeout: 60000,
    }
}


// * ACTION TYPES * \\
export const URL_EXAMPLES = baseURL + 'examples';