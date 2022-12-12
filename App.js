import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [goals, setGoals] = useState([]);
	const [showModal, setShowModal] = useState(false);

	function openModal() {
		setShowModal(true);
	}

	function closeModal() {
		setShowModal(false);
	}

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
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<View style={styles.button}>
					<Button title="Add new goal" color="#793FD4" onPress={openModal} />
				</View>
				<GoalInput
					addGoal={addGoalHandler}
					visible={showModal}
					closeModal={closeModal}
				/>
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
		</>
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
	button: {
		marginBottom: 16,
		borderRadius: 8,
		overflow: "hidden",
	},
});
