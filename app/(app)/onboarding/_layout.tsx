import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";

export default function OnboardingLayout() {
  const globalSearchParams = useGlobalSearchParams();
  const localSearchParams = useLocalSearchParams();

  console.log({ globalSearchParams, localSearchParams });

  // {"globalSearchParams": {"foo": "bar", "params": "[object Object]", "screen": "index"}, "localSearchParams": {"params": "[object Object]", "screen": "index"}}
  // in expo-router v2, the "params" properties of globalSearchParams and localSearchParams were objects, not strings
  // this specific behavior broke our current app, so we opted to use useGlobalSearchParams for now, but would love to see the old behavior back

  return <Stack initialRouteName="/(app)/onboarding/index" />;
}
