import { React, useState, useEffect } from "react";
import { StyleSheet, Modal, Text, View, Pressable, Image, TextInput } from "react-native";

import { ForgotEmail, ForgotPassword } from "./ForgotPasswordHandler.js";

const logo = require("../../data/images/logo.png");

export default function FortgotPasswordPage(props) {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [emailResponse, setEmailResponse] = useState("");
	const [passwordResponse, setPasswordResponse] = useState("");
	const [feedback, setFeedback] = useState("");
	const [showEmail, setShowEmail] = useState(true);

	useEffect(() => {
		switch(emailResponse) {
			case "bademail":
				setFeedback("Enter a valid email");
				break;
			case "fail":
				setFeedback("This account does not exist");
				break;
			case "success":
				setFeedback("Enter a new password");
				setShowEmail(false);
				break;
			default:
				setFeedback("");
		}
	}, [emailResponse]);
	useEffect(() => {
		switch(passwordResponse) {
			case "success":
				setFeedback("Password Reset! Try logging in");
				break;
			default:
				setFeedback("");
		}
	}, [passwordResponse]);

	// setShowEmail(true);

	return (
	<Modal
		animationType = "fade"
		transparent = {true}
		visible = {props.visible}
		onRequestClose = {() => {
			props.setVisible(false);
			setShowEmail(true);
			setEmail("");
			setPass("");
			setEmailResponse("");
			setPasswordResponse("");
			setFeedback("");
		}}>
		<View style = {styles.view}>
		<View style = {styles.viewInside}>
			<Image style = {styles.logo} source = {logo} />
			<Text style = {styles.feedbackText}>{feedback}</Text>
			{(showEmail) ?
			<TextInput
				style = {styles.input}
				value = {email}
				onChangeText = {setEmail}
				placeholder = "Email"
				placeholderTextColor = "#888"
				autoComplete = "email"
			/>
			:
			<TextInput
				style = {styles.input}
				value = {pass}
				onChangeText = {setPass}
				placeholder = "Password"
				placeholderTextColor = "#888"
				secureTextEntry = {true}
			/>}
			<View style = {styles.buttons}>
				<Pressable
					style = {styles.cancelButton}
					onPress = {() => {
						props.setVisible(false);
						setShowEmail(true);
						setEmail("");
						setPass("");
						setEmailResponse("");
						setPasswordResponse("");
						setFeedback("");
					}}>
					<Text style = {styles.cancelText}>Cancel</Text>
				</Pressable>
				{(showEmail) ?
				<View>
					{(email) ?
					<Pressable
						style = {styles.confirmButtonClickable}
						onPress = {() => {
							ForgotEmail(email, setEmailResponse);
						}}>
						<Text style = {styles.confirmText}>Reset</Text>
					</Pressable>
					:
					<View style = {styles.confirmButtonUnclickable}>
						<Text style = {styles.confirmText}>Reset</Text>
					</View>}
				</View>
				:
				<View>
					{(pass) ?
					<Pressable
						style = {styles.confirmButtonClickable}
						onPress = {() => {
							ForgotPassword(email, pass, setPasswordResponse);
						}}>
						<Text style = {styles.confirmText}>Confirm</Text>
					</Pressable>
					:
					<View style = {styles.confirmButtonUnclickable}>
						<Text style = {styles.confirmText}>Confirm</Text>
					</View>
					}
				</View>}
			</View>
		</View>
		</View>
	</Modal>
	);
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		margin: 20,
		backgroundColor: '#00000080',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		justifyContent: "center",
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	viewInside: {
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 20,
	},
	logo: {
		alignSelf: "center",
		width: 150,
		height: 100,
		resizeMode: "contain",
	},
	feedbackText: {
		color: 'red',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	input: {
		height: 40,
		width: "95%",
		margin: 5,
		padding: 12,
		borderWidth: 1,
		borderRadius: 8,
		backgroundColor: (5, 5, 5),
		borderColor: (20, 20, 20),
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 20,
		margin: 20,
	},
	cancelButton: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: '#fff',
		borderColor: '#2196F3',
		borderWidth: 2,
	},
	confirmButtonClickable: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#5454ff",
	},
	confirmButtonUnclickable: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: "#5454ff",
		opacity: 0.5,
	},
	cancelText: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	confirmText: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});