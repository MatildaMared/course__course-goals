import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ addGoal }) {
	const [goal, setGoal] = useState("");

	function goalInputHandler(enteredText) {
		setGoal(enteredText);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Enter your goal"
				style={styles.textInput}
				value={goal}
				onChangeText={goalInputHandler}
			/>
			<Button
				title="Add goal!"
				onPress={() => {
					addGoal(goal);
					setGoal("");
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 24,
		borderBottomColor: "#cccccc",
		borderBottomWidth: 1,
		flex: 1,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		flex: 1,
		marginRight: 8,
		padding: 8,
	},
});

export default GoalInput;
