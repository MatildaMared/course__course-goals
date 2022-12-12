import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [goals, setGoals] = useState([]);

	function addGoalHandler(goal) {
		const newGoal = {
			text: goal,
			id: Math.random().toString(),
		};
		setGoals((currentGoals) => [...currentGoals, newGoal]);
	}

	function deleteGoalHandler(goalId) {
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	}

	return (
		<View style={styles.appContainer}>
			<GoalInput addGoal={addGoalHandler} />
			<View style={styles.goalsContainer}>
				<FlatList
					keyExtractor={(item) => item.id}
					data={goals}
					renderItem={(itemData) => {
						const goal = itemData.item;
						return <GoalItem deleteGoal={deleteGoalHandler} goal={goal} />;
					}}
				/>
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
	goalsContainer: {
		flex: 5,
	},
});
