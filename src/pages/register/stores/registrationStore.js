import { defineStore } from 'pinia';

export const useRegistrationStore = defineStore('registration', {
	state: () => ({
		status: 'loading',
		apiUrl: '',
		emailIsSend: false,
		passwordIsSend: false,
		companyIsRegistered: false,
		emailForm: {
			given_name: '',
			family_name: '',
			email: '',
		},
		passwordForm:{
			password: '',
			password2: '',
		}
	}),

	getters: {
	},

	actions: {
	},
});