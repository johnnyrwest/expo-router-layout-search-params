Hello!

Thank you for checking this out.

Here is a minimal reproducible example of the search params issue my team is facing.

In `expo-router` v2, we were able to leverage `useLocalSearchParams()` in a nested `_layout.tsx` file, much like the one in `/app/(app)/onboarding/_layout.tsx`.

However, in v3, the params returned from `useLocalSearchParams()` are `"[object Object]"` instead of the expected object.

That definitely broke some onboarding behavior for us, and we were able to temporarily remedy the issue by using `useGlobalSearchParams()` instead — but we would rather not have to use that hook due to the re-renders.

Thanks again and please let me know if you need any more information!

GitHub issue [link](https://github.com/expo/expo/issues/27379)
