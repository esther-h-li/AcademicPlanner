import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return  (
    <Tabs
      screenOptions = {{
        tabBarActiveTintColor: "#317873",
      }}
      >
        <Tabs.Screen 
      name="explore" 
      options={{

        title: "Explore",
        tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name = {focused ? "compass" : "compass-outline"}
        color = {color}
        size = {30} 
        />
           ),
      
         }}
      />
        <Tabs.Screen 
      name="community" 
      options={{

        title: "Community",
        tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name = {focused ? "people-sharp" : "people-outline"}
        color = {color}
        size = {30} 
        />
           ),
      
         }}
      />
      <Tabs.Screen 
      name="index" 
      options={{

        title: "Home",
        tabBarIcon: ({focused, color}) => (
        <Ionicons 
        name = {focused ? "home-sharp" : "home-outline"}
        color = {color}
        size = {30} 
        />
           ),
      
         }}
      />

        <Tabs.Screen 
    name="schedule" 
      options={{
        title: "Schedule",
        tabBarIcon: ({color, focused}) => (
          <Ionicons
            name={focused ? "calendar-sharp" : "calendar-outline"}
            color={color}
            size={30}
          />
        ),
      }}
      />

          <Tabs.Screen 
    name="settings" 
      options={{
        title: "Settings",
        tabBarIcon: ({color, focused}) => (
          <Ionicons
            name={focused ? "settings" : "settings-outline"}
            color={color}
            size={30}
          />
        ),
      }}
      />
    </Tabs>

  );
}
