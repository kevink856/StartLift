export function ForgotEmail(email, setValue) {
	fetch(`https://yooj4m5rk4.execute-api.us-west-1.amazonaws.com/latest/forgot?email=${email}`, {
		method: "GET",
		headers: {
			"content-type": "application/json"
		}
	})
	.then(res => res.text())
	.then(text => {
		setValue(text);
	})
	.catch(e => {
		console.error(e);
	});
}

export function ForgotPassword(email, password, setValue) {
	fetch("https://yooj4m5rk4.execute-api.us-west-1.amazonaws.com/latest/forgot", {
		method: "POST",
		headers: {
			"content-type": "application/json"
		},
		body: JSON.stringify({
			email: email,
			password: password
		})
	})
	.then(res => res.text())
	.then(text => {
		setValue(text);
	})
	.catch(e => {
		console.error(e);
	});
}