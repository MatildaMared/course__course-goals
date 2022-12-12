import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ goal, deleteGoal }) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={() => deleteGoal(goal.id)}
				android_ripple={{ color: "#360872" }}
				style={({ pressed }) => pressed && styles.pressedItem}
			>
				<Text style={styles.goalText}>{goal.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 8,
		backgroundColor: "#5e0acc",
		overflow: "hidden",
	},
	goalText: {
		padding: 8,
		color: "white",
	},
	pressedItem: {
		backgroundColor: "#360872",
	},
});

export default GoalItem;
