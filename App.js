import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [goal, setGoal] = useState("");
	const [goals, setGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setGoal(enteredText);
	}

	function addGoalHandler() {
		setGoals((currentGoals) => [...currentGoals, goal]);
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter your goal"
					style={styles.textInput}
					onChangeText={goalInputHandler}
				/>
				<Button title="Add goal!" onPress={addGoalHandler} />
			</View>
			<View style={styles.goalsContainer}>
				{goals.map((goal) => (
					<View key={goal} style={styles.goalItem}>
						<Text style={styles.goalText}>{goal}</Text>
					</View>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 48,
	},
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
	goalsContainer: {
		flex: 5,
	},
	goalItem: {
		margin: 8,
		borderRadius: 8,
		backgroundColor: "#5e0acc",
		padding: 8,
	},
	goalText: {
		color: "white",
	},
});
