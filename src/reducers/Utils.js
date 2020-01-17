/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description redux Reducers - Utils
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */


import {INITIAL_UTILS, REQUEST_GET_BATTERY_POWERS, REQUEST_GET_BATTERY_POWERS_SUCCESS, RESET_UTILS,
	REQUEST_GET_EXAMPLES, REQUEST_GET_EXAMPLES_SUCCESS
} from "../constants/Utils";


const Utils = (state = INITIAL_UTILS, action) => {

	switch (action.type) {

		case REQUEST_GET_EXAMPLES:
			return {
				...state,
				loading: true,
			};
		case REQUEST_GET_EXAMPLES_SUCCESS:

			//ajustar objecto api !!!pedir a equipa de BE que altere o nome do objecto!!!
			let workSchedule = action.payload.data.map(day => {
				return {
					value: day.id,
					label: day.descricao
				}
			});

			return {
				...state,
				workSchedules: workSchedule,
				loading: false,
			};

		case REQUEST_GET_BATTERY_POWERS:
			return {
				...state
			};
		case REQUEST_GET_BATTERY_POWERS_SUCCESS:
			return {
				...state,
				batteryPowers : action.payload.data
			};

		case RESET_UTILS :
			return {
				...INITIAL_UTILS
			};
		default:
			return state;
	}
};

export default Utils;