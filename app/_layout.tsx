import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { I18nProvider } from '../lib/i18n/I18nProvider';
import { NativeFlowThemeProvider } from '../lib/theme/NativeFlowThemeProvider';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    // Handle deep links when app is already open
    const subscription = Linking.addEventListener('url', ({ url }) => {
      const parsed = Linking.parse(url);
      if (parsed.path) {
        router.push(parsed.path as any);
      }
    });

    // Handle deep link that opened the app
    Linking.getInitialURL().then((url) => {
      if (url) {
        const parsed = Linking.parse(url);
        if (parsed.path) {
          router.push(parsed.path as any);
        }
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <NativeFlowThemeProvider>
    <I18nProvider>
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: true,
            title: 'Settings',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="notificationpreferences"
        options={{
          headerShown: true,
            title: 'Notification Preferences',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: true,
            title: 'Welcome',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="permissions"
        options={{
          headerShown: true,
            title: 'Permissions',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: true,
            title: 'Sign Up',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="text"
        options={{
          headerShown: true,
            title: 'Text',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
    </Stack>
    </I18nProvider>
    </NativeFlowThemeProvider>
  );
}
