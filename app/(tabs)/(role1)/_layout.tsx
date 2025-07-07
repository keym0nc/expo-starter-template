// app/(auth)/(first)/_layout.tsx
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../../../styles/global.css";

export default function AccountantLayout() {
  return (
    <React.Fragment>
      <StatusBar />
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="second" />
        <Tabs.Screen name="third" />
        <Tabs.Screen name="fourth" />
      </Tabs>
    </React.Fragment>
  );
}
