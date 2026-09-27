import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, Switch, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function NotificationPreferences() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_d40fad75_2f1d_49cd_ad2e_40c7f16f178a, setState_d40fad75_2f1d_49cd_ad2e_40c7f16f178a] = useState({ isEnabled: false });
  const [state_62fee3e7_d782_4841_a432_605f99c02e56, setState_62fee3e7_d782_4841_a432_605f99c02e56] = useState({ isEnabled: false });
  const [state_a4def061_eee6_408b_9171_8598245ced4e, setState_a4def061_eee6_408b_9171_8598245ced4e] = useState({ isEnabled: false });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_63b7cb41_be8c_4172_95ae_4d40f14043c0}>
              <Text style={styles.node_87bf89c0_934c_4779_a5ca_200fe6b70f16}>Notification Preferences</Text>
              <View style={styles.node_15798752_3e48_4811_8a72_929971064b85}>
                        <View style={styles.node_9d1de1fd_b48e_455e_b8bf_0f46a350f5cc}>
                                    <Text style={styles.node_a94e8871_cea0_4778_81c3_293e647ed11b}>Email Alerts</Text>
                                    <Switch value={typeof state_d40fad75_2f1d_49cd_ad2e_40c7f16f178a !== 'undefined' ? (state_d40fad75_2f1d_49cd_ad2e_40c7f16f178a.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_d40fad75_2f1d_49cd_ad2e_40c7f16f178a === 'function') setState_d40fad75_2f1d_49cd_ad2e_40c7f16f178a(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_d40fad75_2f1d_49cd_ad2e_40c7f16f178a]} />
                        </View>
                        <Text style={styles.node_f20030d3_b84c_403d_9c13_ddbb150b61ba}>Receive updates and alerts via email</Text>
              </View>
              <View style={styles.node_86be9dba_bffa_430d_aaa9_69eaab795893}>
                        <View style={styles.node_a2d08fa8_51c8_4f61_bc8c_991da10b333e}>
                                    <Text style={styles.node_125cfe15_7f5f_4da7_a419_6f3ba0b04238}>Push Notifications</Text>
                                    <Switch value={typeof state_62fee3e7_d782_4841_a432_605f99c02e56 !== 'undefined' ? (state_62fee3e7_d782_4841_a432_605f99c02e56.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_62fee3e7_d782_4841_a432_605f99c02e56 === 'function') setState_62fee3e7_d782_4841_a432_605f99c02e56(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_62fee3e7_d782_4841_a432_605f99c02e56]} />
                        </View>
                        <Text style={styles.node_5f1014ec_6b5d_4511_adc7_dc00f9b6bdbb}>Get push notifications on your device</Text>
              </View>
              <View style={styles.node_47a62d84_8351_4d43_8088_0dd2e3347b49}>
                        <View style={styles.node_c7eedaf1_b4d2_4e80_b158_7e1eee3791a0}>
                                    <Text style={styles.node_929b9681_e037_445c_9f85_ddb02cd455ea}>SMS Alerts</Text>
                                    <Switch value={typeof state_a4def061_eee6_408b_9171_8598245ced4e !== 'undefined' ? (state_a4def061_eee6_408b_9171_8598245ced4e.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_a4def061_eee6_408b_9171_8598245ced4e === 'function') setState_a4def061_eee6_408b_9171_8598245ced4e(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_a4def061_eee6_408b_9171_8598245ced4e]} />
                        </View>
                        <Text style={styles.node_f4ca66e3_3691_45dc_8275_2d4f9b349826}>Receive text message alerts for important updates</Text>
              </View>
              <View style={styles.node_5f024566_fe34_42bb_aa6a_bb969075f5d9} />
              <TouchableOpacity style={[styles.node_99098f0e_e5ba_4839_a48a_3ea818da0fa9, { backgroundColor: '#16A34A', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Save Changes</Text>
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
  node_63b7cb41_be8c_4172_95ae_4d40f14043c0: {
    padding: 20,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_87bf89c0_934c_4779_a5ca_200fe6b70f16: {
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_15798752_3e48_4811_8a72_929971064b85: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  node_9d1de1fd_b48e_455e_b8bf_0f46a350f5cc: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_a94e8871_cea0_4778_81c3_293e647ed11b: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_f20030d3_b84c_403d_9c13_ddbb150b61ba: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  node_86be9dba_bffa_430d_aaa9_69eaab795893: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  node_a2d08fa8_51c8_4f61_bc8c_991da10b333e: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_125cfe15_7f5f_4da7_a419_6f3ba0b04238: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_5f1014ec_6b5d_4511_adc7_dc00f9b6bdbb: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  node_47a62d84_8351_4d43_8088_0dd2e3347b49: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  node_c7eedaf1_b4d2_4e80_b158_7e1eee3791a0: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_929b9681_e037_445c_9f85_ddb02cd455ea: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_f4ca66e3_3691_45dc_8275_2d4f9b349826: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 4,
  },
  node_5f024566_fe34_42bb_aa6a_bb969075f5d9: {
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
  node_99098f0e_e5ba_4839_a48a_3ea818da0fa9: {
    width: '100%',
  },
  });
}
