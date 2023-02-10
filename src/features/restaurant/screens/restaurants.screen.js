import { Text, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Button, Card } from "react-native-paper";

export const RestaurantsScreen = () => {
  const [data, setData] = useState();
  const inputHandler = (event) => {
    setData(event);
  };

  console.log(data);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "yellow" }}>
          <Searchbar placeholder="Search" onChangeText={inputHandler} />
        </View>

        <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
          <View>
            <Card>
              <Card.Title title="Card Title" subtitle="Card Subtitle" />
              <Card.Content>
                <Text variant="titleLarge">Furfuri nagar</Text>
                <Text variant="bodyMedium">Card content</Text>
              </Card.Content>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // // justifyContent: "center",
  },
});
