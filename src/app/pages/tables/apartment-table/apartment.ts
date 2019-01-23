import { House } from '../smart-table/house';
import { Resident } from '../resident-table/resident';
/**
 * Model of an apartment.
 *
 * @export
 * @class Apartment
 */
export class Apartment {
    /**
     * Apatment ID.
     *
     * @type {number}
     * @memberof Apartment
     */
    id: number;

    /**
     * Apartment number.
     *
     * @type {number}
     * @memberof Apartment
     */
    number: number;

    /**
     * Apartment resident count.
     *
     * @type {number}
     * @memberof Apartment
     */
    residentcount: number;

    /**
     * Amount of rooms in an apartment.
     *
     * @type {number}
     * @memberof Apartment
     */
    rooms: number;

    /**
     * Floor of an apartment.
     *
     * @type {number}
     * @memberof Apartment
     */
    floor: number;

    /**
     * Full area of an apartment.
     *
     * @type {number}
     * @memberof Apartment
     */
    fullarea: number;

    /**
     * Living area of an apartment.
     *
     * @type {number}
     * @memberof Apartment
     */
    livingarea: number;

    /**
     * House ID in which apartment is located.
     *
     * @type {number}
     * @memberof Apartment
     */
    houseId: number;

    /**
     * House in which apartment is located.
     *
     * @type {House}
     * @memberof Apartment
     */
    house: House;

    /**
     * Array with residents, which live in this apartment.
     *
     * @type {Resident[]}
     * @memberof Apartment
     */
     resident: Resident[];
}
