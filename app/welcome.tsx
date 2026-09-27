import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Welcome() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_fdb85c78_4e02_4e8a_a171_4d0e524e9819}>
              <Text style={styles.node_0e999d24_11aa_401f_8926_61346c5aaa57}>Welcome to the App</Text>
              <Text style={styles.node_befb15d5_0580_4bb7_8771_8b7596e83eea}>Let's get you set up in just a few steps.</Text>
              <TouchableOpacity style={[styles.node_3c08e661_3674_4b48_908f_7b473ad7f2f9, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7} onPress={() => { try { (() => { console.warn('[navigateTo] Target page not found for pageId:', undefined); })(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Get Started</Text>
              </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = createStyles();

function createStyles() {
  const colors = getThemeColors();
  return StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    alignSelf: 'stretch',
  },
  node_fdb85c78_4e02_4e8a_a171_4d0e524e9819: {
    gap: 16,
    padding: 24,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_0e999d24_11aa_401f_8926_61346c5aaa57: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_befb15d5_0580_4bb7_8771_8b7596e83eea: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 16,
  },
  node_3c08e661_3674_4b48_908f_7b473ad7f2f9: {
    width: '100%',
  },
  });
}
