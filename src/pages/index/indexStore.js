import { defineStore } from 'pinia';

export const useIndexStore = defineStore('index', {
	state: () => ({
		status: 'loading',
		apiUrl: '',
		isSend: false,
	}),

	getters: {
	},

	actions: {
		register(email)
		{
			fetch(this.apiUrl + 'registration', {
				mode: "cors",
				method: 'POST',
				headers: {
					"Content-Type": "application/json", 
					"Accept": "application/json",
				},
				body: JSON.stringify({ email })
			})
			.then(response => {
				if (response.ok) {
					// Handle successful registration
					console.log('Registration successful');
					this.status = 'success';
				} else {
					// Handle registration error
					console.log('Registration failed');
					this.status = 'failed';
				}
			})
			.catch(error => {
				// Handle network error
				console.log('Registration failed');
				this.status = 'failed';
			});
		},
		initialize(){

			if (window.location.hostname.includes('planner.dev.crew-craft.cc'))
				this.apiUrl = 'https://api.dev.crew-craft.cc/api/';
			else if (window.location.hostname.includes('planner.test.crew-craft.cc'))
				this.apiUrl = 'https://api.test.crew-craft.cc/api/';
			else if (window.location.hostname.includes('localhost'))
				this.apiUrl = 'http://localhost:8000/api/';
			else
	            this.apiUrl = 'https://api.crew-craft.cc/api/';

			if(this.isDebug)
				console.log('this.apiUrl:', this.apiUrl);

		},
				
	},
});