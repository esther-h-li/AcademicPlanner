import { Stack } from "expo-router";

export default function RootLayout() {
  return  (
    <Stack>
       <Stack.Screen name="(tabs)" 
      options={{
        headerShown: false
      }}
      />
        <Stack.Screen name ="index" 
        options = {{
          headerShown: false,
          headerLeft: () => <></>
        }}
       />
        <Stack.Screen name ="second" 
        options = {{
        headerShown: false,
        headerLeft: () => <></>

      }}
      />
     
 
    <Stack.Screen name ="+not-found" 
        options = {{
        headerTitle: "Academic Planner"
      }}
       />

    </Stack>
  );
}
