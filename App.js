import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput placeholder="Enter your goal" style={styles.textInput} />
				<Button title="Add goal!" />
			</View>
			<View>
				<Text>My goals</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 16,
		paddingTop: 48,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "80%",
		marginRight: 8,
		padding: 8,
	},
});
