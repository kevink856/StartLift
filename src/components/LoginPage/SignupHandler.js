export default function Signup(email, password, setValue) {
	fetch("https://yooj4m5rk4.execute-api.us-west-1.amazonaws.com/latest/signup", {
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