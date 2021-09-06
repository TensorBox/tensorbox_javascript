/**
 * Check whether it's a company email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean}
 */
 // export function isCompanyEmail(email: string): boolean;


export class Tensorbox {
    constructor(api_key: string);
    generate(param_dict: {[key: string]: any}): Promise<any>;
}