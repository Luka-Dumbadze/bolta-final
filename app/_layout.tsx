import React from 'react';
import { Stack, Slot } from 'expo-router';
import { SessionProvider } from '../providers/SessionProvider';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <Slot />
    </SessionProvider>
  );
}


