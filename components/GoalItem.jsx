import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ goal, deleteGoal }) {
	return (
		<Pressable onPress={() => deleteGoal(goal.id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{goal.text}</Text>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
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

export default GoalItem;
