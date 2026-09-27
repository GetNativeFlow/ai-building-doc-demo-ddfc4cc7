import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, Switch, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Permissions() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_70cceb46_833d_4f1a_b630_60c6f39adc0c, setState_70cceb46_833d_4f1a_b630_60c6f39adc0c] = useState({ isEnabled: false });
  const [state_eab448d4_8d32_4788_9c51_5b72be6993ae, setState_eab448d4_8d32_4788_9c51_5b72be6993ae] = useState({ isEnabled: false });
  const [state_d147fc64_9019_4e55_b512_c3f37affe6f2, setState_d147fc64_9019_4e55_b512_c3f37affe6f2] = useState({ isEnabled: false });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_c3758c0b_abcd_4d11_ba7f_fb2ce8748518}>
              <Text style={styles.node_730f75e2_6690_44d4_92c3_eb8a27c6f2b6}>App Permissions</Text>
              <Text style={styles.node_0c57512b_be2e_416e_87b2_d46e22b7cae2}>Enable the following to get the best experience.</Text>
              <View style={styles.node_6048c4b4_418d_4c7b_bcbd_62dcefe304bd}>
                        <View style={styles.node_ad2565a6_0928_474b_9bac_1b548432119d}>
                                    <Text style={styles.node_ca8a219c_a764_4ec7_a16e_e836ce4d60fb}>Camera</Text>
                                    <Text style={styles.node_2a6cc0ee_3ec4_47ea_a579_452d37951662}>Allow access to take photos and scan documents.</Text>
                        </View>
                        <Switch value={typeof state_70cceb46_833d_4f1a_b630_60c6f39adc0c !== 'undefined' ? (state_70cceb46_833d_4f1a_b630_60c6f39adc0c.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_70cceb46_833d_4f1a_b630_60c6f39adc0c === 'function') setState_70cceb46_833d_4f1a_b630_60c6f39adc0c(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_70cceb46_833d_4f1a_b630_60c6f39adc0c]} />
              </View>
              <View style={styles.node_7393d8c8_264e_4e14_9af5_e7570300c081}>
                        <View style={styles.node_11fb9710_8713_4f9a_a41f_a8542bb8a98d}>
                                    <Text style={styles.node_33d9ea12_46e7_448b_990d_d9347655d359}>Notifications</Text>
                                    <Text style={styles.node_d8175072_122d_40d2_8f32_ea97e8c1a967}>Get updates about your account and activity.</Text>
                        </View>
                        <Switch value={typeof state_eab448d4_8d32_4788_9c51_5b72be6993ae !== 'undefined' ? (state_eab448d4_8d32_4788_9c51_5b72be6993ae.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_eab448d4_8d32_4788_9c51_5b72be6993ae === 'function') setState_eab448d4_8d32_4788_9c51_5b72be6993ae(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_eab448d4_8d32_4788_9c51_5b72be6993ae]} />
              </View>
              <View style={styles.node_ab0154b3_8116_435f_92aa_2593fbb8884e}>
                        <View style={styles.node_e06fc470_a593_4b0b_8628_8be1e19c57c3}>
                                    <Text style={styles.node_caa8428f_60f6_4ddc_8858_b2730347334d}>Location</Text>
                                    <Text style={styles.node_ecc9ab0c_2359_4021_949d_e6a77c3c6d51}>Used to personalize content based on where you are.</Text>
                        </View>
                        <Switch value={typeof state_d147fc64_9019_4e55_b512_c3f37affe6f2 !== 'undefined' ? (state_d147fc64_9019_4e55_b512_c3f37affe6f2.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_d147fc64_9019_4e55_b512_c3f37affe6f2 === 'function') setState_d147fc64_9019_4e55_b512_c3f37affe6f2(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_d147fc64_9019_4e55_b512_c3f37affe6f2]} />
              </View>
              <View style={styles.node_bcb88cd5_9fe2_49a2_9b13_016f0adc59b4} />
              <TouchableOpacity style={[styles.node_c97f5b23_30eb_4aee_9c58_df04d4ea6742, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7} onPress={() => { try { (() => { console.warn('[navigateTo] Target page not found for pageId:', undefined); })(); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Continue</Text>
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
  node_c3758c0b_abcd_4d11_ba7f_fb2ce8748518: {
    gap: 20,
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_730f75e2_6690_44d4_92c3_eb8a27c6f2b6: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_0c57512b_be2e_416e_87b2_d46e22b7cae2: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 16,
  },
  node_6048c4b4_418d_4c7b_bcbd_62dcefe304bd: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_ad2565a6_0928_474b_9bac_1b548432119d: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_ca8a219c_a764_4ec7_a16e_e836ce4d60fb: {
    fontSize: 16,
  },
  node_2a6cc0ee_3ec4_47ea_a579_452d37951662: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  node_7393d8c8_264e_4e14_9af5_e7570300c081: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_11fb9710_8713_4f9a_a41f_a8542bb8a98d: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_33d9ea12_46e7_448b_990d_d9347655d359: {
    fontSize: 16,
  },
  node_d8175072_122d_40d2_8f32_ea97e8c1a967: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  node_ab0154b3_8116_435f_92aa_2593fbb8884e: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_e06fc470_a593_4b0b_8628_8be1e19c57c3: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_caa8428f_60f6_4ddc_8858_b2730347334d: {
    fontSize: 16,
  },
  node_ecc9ab0c_2359_4021_949d_e6a77c3c6d51: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  node_bcb88cd5_9fe2_49a2_9b13_016f0adc59b4: {
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_c97f5b23_30eb_4aee_9c58_df04d4ea6742: {
    width: '100%',
  },
  });
}
