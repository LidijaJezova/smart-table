import { Apartment } from "../apartment-table/apartment";


/**
 * Model of a house.
 *
 * @export
 * @class Resident
 */
export class Resident {
    /**
     * ID of a resident.
     *
     * @type {number}
     * @memberof Resident
     */
    id: number;

    /**
     * Residents first name.
     *
     * @type {string}
     * @memberof Resident
     */
    firstName: string;

    /**
     * Residents last name.
     *
     * @type {string}
     * @memberof Resident
     */
    lastName: string;

    /**
     * Residents pers. code.
     *
     * @type {string}
     * @memberof Resident
     */
    persCode: string;

    /**
     * Residents phone number.
     *
     * @type {string}
     * @memberof Resident
     */
    phone: string;

    /**
     *Residents e-mail address. 
     *
     * @type {string}
     * @memberof Resident
     */
    email: string;

    /**
     * Date of resident birthday.
     *
     * @type {string}
     * @memberof Resident
     */
    birthday: string;

    /**
     * ID of the resident apartment.
     *
     * @type {number}
     * @memberof Resident
     */
    apartmentId: number;

    /**
     * Resident apartment.
     *
     * @type {Apartment}
     * @memberof Resident
     */
    apartment: Apartment;
}
