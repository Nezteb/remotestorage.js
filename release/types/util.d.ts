/// <reference types="node" />
import Global = NodeJS.Global;
export declare const logError: (error: string | Error) => void;
export declare const globalContext: (Window & typeof globalThis) | (Global & typeof globalThis);
export declare const getGlobalContext: () => any;
export declare const extend: (...args: any[]) => unknown;
export declare const containingFolder: (path: string) => string;
export declare const isFolder: (path: string) => boolean;
export declare const isDocument: (path: string) => boolean;
export declare const baseName: (path: string) => string;
export declare const cleanPath: (path: string) => string;
export declare const bindAll: (object: object) => void;
export declare const equal: (a: any, b: any, seen?: any[]) => boolean;
export declare const deepClone: (obj: any) => any;
export declare const pathsFromRoot: (path: string) => string[];
export declare const localStorageAvailable: () => boolean;
/**
 * Extract and parse JSON data from localStorage.
 *
 * @param {string} key - localStorage key
 *
 * @returns {object} parsed object or undefined
 */
export declare const getJSONFromLocalStorage: (key: string) => {
    [key: string]: any;
};
/**
 * Decide if data should be treated as binary based on the content (presence of non-printable characters
 * or replacement character) and content-type.
 *
 * @param {string} content - The data
 * @param {string} mimeType - The data's content-type
 *
 * @returns {boolean}
 */
export declare const shouldBeTreatedAsBinary: (content: string | ArrayBuffer, mimeType: string) => boolean;
/**
 * Read data from an ArrayBuffer and return it as a string
 * @param {ArrayBuffer} arrayBuffer
 * @param {string} encoding
 * @returns {Promise} Resolves with a string containing the data
 */
export declare const getTextFromArrayBuffer: (arrayBuffer: ArrayBuffer, encoding: string) => Promise<string | ArrayBuffer>;
/**
 * Encode string in base64
 * @param {String} str
 * @returns {String} base64-encoded string
 */
export declare const toBase64: (str: string) => string;
export declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
//# sourceMappingURL=util.d.ts.map