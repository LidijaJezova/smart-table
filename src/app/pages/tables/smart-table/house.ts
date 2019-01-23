// import { Apartment } from '../apartments/apartment';

/**
 * Model of a house.
 *
 * @export
 * @class House
 */
export class House {
    /**
     * ID of a house.
     *
     * @type {number}
     * @memberof House
     */
    id: number;

    /**
     * Number of a house.
     *
     * @type {number}
     * @memberof House
     */
    number: number;

    /**
     * Street on which house is located.
     *
     * @type {string}
     * @memberof House
     */
    street: string;

    /**
     * City in which house is located.
     *
     * @type {string}
     * @memberof House
     */
    city: string;

    /**
     *Country in which house is located.
     *
     * @type {string}
     * @memberof House
     */
    country: string;

    /**
     * Post Index of a house.
     *
     * @type {string}
     * @memberof House
     */
    postindex: string;

    /**
     * Array with apartments, which are located in a house.
     *
     * @type {Apartment[]}
     * @memberof House
     */
    // apartment: Apartment[];
}
