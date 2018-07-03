import React from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Logo from './Logo';


export default class Login extends React.Component {
	
	constructor(props) {
		//console.log('Version 12');
		super(props);

		this.state = {
			passValid: false,
			emailValid: false,
			emailErrMsg: true,
			passErrMsg: true,
			loginBtn: true
		}
	}

	render() {
		return (

			<KeyboardAvoidingView style = {styles.cont} behavior = 'position' enabled >

				<View style = {styles.top}>
					<Logo />
				</View>

				<View style = {styles.bottom}>
					<Text style = {styles.textHead}>Email</Text>	
					<TextInput
						style = {styles.textIn} placeholder = 'Input email address' 
						returnKeyType = 'next' onSubmitEditing = {() => this.passInput.focus()}
						onChangeText = { (text) => this.validate(text, 'em') }
						underlineColorAndroid = 'transparent'/>
					<Text style = {[this.state.emailErrMsg === false? styles.textErr:styles.txt]}>not correct format for email address</Text>

					<Text style = {styles.textHead}>Password</Text>
					<TextInput secureTextEntry = {true} 
						style = {styles.textIn} placeholder = 'Input password' 
						ref = {(input) => this.passInput = input}
						onChangeText = { (text) => this.validate(text, 'pa') }
						underlineColorAndroid = 'transparent'/>
					<Text style = {[this.state.passErrMsg === false? styles.textErr:styles.txt]}>please use at least 6 - 12 characters</Text>
					
					<TouchableOpacity disabled = {this.state.loginBtn} style = {styles.btn} onPress = {this.login}>
						<Text style = {styles.txtBtn}>Sign in</Text>
					</TouchableOpacity>
				</View>
				
			</KeyboardAvoidingView>

		);
	}
		
	
	validate(text, type) {
		
		var regEm = /^([a-z0-9_-]+)@([a-z0-9]+)\.([a-z\.-]{2,6})$/;
		var regPass = /^[a-z0-9]{6,12}$/;
		
		if(type === 'em') {
			if(regEm.test(text)) {
				//console.log('valid email');
				this.state.emailValid = true;
				this.setState({emailErrMsg: true})
			} else {
				//console.log('invalid email');
				this.state.emailValid = false;
				this.setState({emailErrMsg: false})
			}
		} else if(type === 'pa') {
			if(regPass.test(text)) {
				//console.log('valid pass');
				this.state.passValid = true;
				this.setState({passErrMsg: true})
			} else {
				//console.log('invalid pass');
				this.state.passValid = false;
				this.setState({passErrMsg: false})
			}
		}
		this.buttonController(this.state.emailValid, this.state.passValid);
	}

	buttonController(email, pass){ 
		/*console.log("Email State : " +email);
		console.log("Password State : " +pass);*/
		if (this.state.emailValid && this.state.passValid) {
			//console.log('button enabled');
			this.setState({loginBtn: false})
		} else {
			//console.log('button disabled')
			this.setState({loginBtn: true})
		}

	}

	login() {
		Keyboard.dismiss();
		alert('Login Success!');
	}
}

const styles = StyleSheet.create ({
	cont: {
		flex: 1,
	},
	top: {
		height: '55%',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottom: {
		height: '45%',
		backgroundColor: '#fff',
		alignItems: 'stretch',
	},
	textHead: {
		left: '5%',
		fontSize: hp('2.5%'),
	},
	textIn: {
		fontStyle: 'italic',
		fontSize: hp('2.5%'),
		alignSelf: 'center',
		padding: '2%',
		height: '16%',
		width: '90%',
		borderWidth: 1.5,
		borderStyle: 'solid',
		borderColor: '#9370DB',
		borderRadius: 5,
		backgroundColor: '#fff',
	},
	txt: {
		left: '5%',
		color: '#fff', 
		fontStyle: 'italic',
		fontSize: hp('2%'),
		marginBottom: '2%',
	},
	textErr: {
		left: '5%',
		color: '#f00', 
		fontStyle: 'italic',
		fontSize: hp('2%'),
		marginBottom: '2%',
	},
	btn: {
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: '5%',
		padding: '2%',
		height: '16%',
		width: '90%',
		backgroundColor: '#9370DB',
		borderRadius: 5,
	},
	txtBtn: {
		textAlign: 'center',
		bottom: '8%',
		fontSize: hp('3%'),
		fontWeight: 'bold',
		color: '#fff',
	},
});