import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./colors";

// -----------------------------------------------------------------------
// Check It! — homepage + todo app screen
//
// This whole screen is written as ONE big component.
// Your job in this activity is to break it apart into clearly defined,
// reusable components.
// Nothing here should change Visually or Functionally
// -----------------------------------------------------------------------

const todoItems = [
  {
    id: "1",
    title: "Finish React Native homework",
    description: "Refactor the Check It! homepage into components.",
  },
  {
    id: "2",
    title: "Grocery run",
    description: "Milk, eggs, coffee, oat milk.",
  },
  {
    id: "3",
    title: "Review pull request",
    description: "Check the staging branch before Monday standup.",
  },
  {
    id: "4",
    title: "Walk the dog",
    description: "Evening loop around the block before it gets dark.",
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Check It!</Text>
          <Text style={styles.headerSubtitle}>Where the tasks never end</Text>
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.descriptionTitle}>Why Check It?</Text>
          <Text style={styles.descriptionText}>
            Check It! keeps every task, big or small, in one calm, clutter-free
            list. No ads, no noise — just you and the things you need to get
            done today.
          </Text>

          <View style={styles.ctaRow}>
            <View style={styles.ctaButton}>
              <Button
                title="Try Now"
                color="#89b4fa"
                onPress={() => console.log("Try Now pressed")}
              />
            </View>
            <View style={styles.ctaButton}>
              <Button
                title="Create Account"
                color="#cba6f7"
                onPress={() => console.log("Create Account pressed")}
              />
            </View>
          </View>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputSectionTitle}>Add a task</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Water the plants"
            placeholderTextColor="#6c7086"
          />
          <Text style={styles.inputHint}>
            This is where you'll type a new task. We'll wire this up with state
            next week!
          </Text>
        </View>

        <View style={styles.todoSection}>
          <Text style={styles.todoSectionTitle}>Your tasks</Text>

          {/*
            TODO: this list is small right now, so a ScrollView + .map()
            is fine. Once the list can grow (real todos, loaded from
            state/storage), convert this to a FlatList for better
            performance with large lists.
          */}
          {todoItems.map((item) => (
            <View key={item.id} style={styles.todoCard}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Text style={styles.todoDescription}>{item.description}</Text>
              <View style={styles.todoButtonRow}>
                <View style={styles.todoButton}>
                  <Button
                    title="Complete Task"
                    color="#a6e3a1"
                    onPress={() => console.log("Complete:", item.id)}
                  />
                </View>
                <View style={styles.todoButton}>
                  <Button
                    title="Delete Task"
                    color="#f38ba8"
                    onPress={() => console.log("Delete:", item.id)}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Thank you for using Check It!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.base,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  header: {
    backgroundColor: colors.mantle,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.surface0,
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.lavender,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.subtext,
    marginTop: 4,
  },
  descriptionSection: {
    padding: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.subtext,
    marginBottom: 16,
  },
  ctaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ctaButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputSection: {
    backgroundColor: colors.surface0,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: colors.mantle,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.surface1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  inputHint: {
    fontSize: 13,
    color: colors.overlay,
    marginTop: 8,
    fontStyle: "italic",
  },
  todoSection: {
    padding: 20,
  },
  todoSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
  todoCard: {
    backgroundColor: colors.surface0,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  todoTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },
  todoDescription: {
    fontSize: 14,
    color: colors.subtext,
    marginTop: 4,
    marginBottom: 12,
  },
  todoButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoButton: {
    flex: 1,
    marginHorizontal: 4,
  },
  footer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 14,
    color: colors.overlay,
  },
});
