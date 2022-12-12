import { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Button,
	Modal,
	Image,
} from "react-native";

function GoalInput({ addGoal, visible, closeModal }) {
	const [goal, setGoal] = useState("");

	function goalInputHandler(enteredText) {
		setGoal(enteredText);
	}

	function addGoalHandler() {
		addGoal(goal);
		setGoal("");
		closeModal();
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					source={require("./../assets/images/goal.png")}
					style={styles.image}
				/>
				<TextInput
					placeholder="Enter your goal"
					style={styles.textInput}
					value={goal}
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.button}>
						<Button title="Cancel" onPress={closeModal} color="#f31282" />
					</View>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#8141d5" />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		padding: 32,
		backgroundColor: "#311b6b",
	},
	textInput: {
		width: "100%",
		padding: 16,
		marginBottom: 16,
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 4,
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		width: "40%",
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 16,
	},
});

export default GoalInput;
