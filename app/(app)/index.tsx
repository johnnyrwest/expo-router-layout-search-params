import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Index() {
  const { push } = useRouter();

  return (
    <View>
      <Button
        title="Begin onboarding"
        onPress={() => {
          push({
            pathname: "/(app)/onboarding",
            params: { foo: "bar" },
          });
        }}
      />
    </View>
  );
}
