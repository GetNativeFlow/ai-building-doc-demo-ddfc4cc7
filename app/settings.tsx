import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, FlatList, Switch, ActivityIndicator } from 'react-native';
import { default as StudioSpinner } from '../components/StudioSpinner';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Settings() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_a6675bf6_8210_46d9_a3a7_cb41205b8fb2, setState_a6675bf6_8210_46d9_a3a7_cb41205b8fb2] = useState({ isEnabled: false });
  const [state_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9, setState_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9] = useState({ isEnabled: false });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_4972ae5d_a9db_4c6f_a41c_bc888e9f8922}>
              <Text style={styles.node_9e48ce1f_5a3f_4eab_abb0_d2043d34e388}>Settings</Text>
              <Text style={styles.node_dbb60770_9251_4be7_9586_df0078ac8dca}>Manage your account and app preferences</Text>
              <View style={[styles.node_11a0240b_3c79_42dc_8335_df0702bbc3f8, { height: 1, backgroundColor: '#E0E0E0', alignSelf: 'stretch' }]} />
              <Text style={styles.node_798bfa2f_c585_43bd_bd15_b408c6e07984}>ACCOUNT</Text>
              <View style={[styles.node_7c3e7cab_e6bf_4f58_a70a_4aea4a63596d, styles.node_7c3e7cab_e6bf_4f58_a70a_4aea4a63596dContent]}>
                {(Array.isArray([{id:'1'},{id:'2'},{id:'3'}]) ? [{id:'1'},{id:'2'},{id:'3'}] : []).map((item, index, arr) => (
                  <View key={index}>
                    <View>
                        <View style={styles.node_be93e29e_8234_4c78_9023_1f20e72a7b87}>
                                    <View style={styles.node_ac5b416b_b4a9_4d9c_9b5e_4bbc8cd3ae89}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#F59E0B" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M10.268 21a2 2 0 0 0 3.464 0"></Path><Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_d4d19d92_3ac2_4842_82a6_4de285ec13fa}>
                                                  <Text style={styles.node_1e830337_4214_4f48_a790_51426dd86fe5}>Notifications</Text>
                                                  <Text style={styles.node_326a5648_3acd_4bcf_84fe_5525bf32ad27}>Manage push and email alerts</Text>
                                    </View>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                    </View>
                    {index < arr.length - 1 && <View style={{ height: 1, backgroundColor: '#E5E7EB', marginVertical: 0 }} />}
                  </View>
                ))}
              </View>
              <Text style={styles.node_5628795e_7f4d_4407_93eb_4e8fea9043ef}>PREFERENCES</Text>
              <View style={[styles.node_3b222674_94ff_4c93_a4dd_4eb8a0817ce9, { padding: 16, borderRadius: 12, backgroundColor: colors.surface, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3 }]}>
                        <View style={styles.node_95899a11_ae58_4067_859b_c0c5c8def5bf}>
                                    <Text style={styles.node_d390bf05_e277_49c6_a1ec_8be5bff2d94b}>Push Notifications</Text>
                                    <Switch value={typeof state_a6675bf6_8210_46d9_a3a7_cb41205b8fb2 !== 'undefined' ? (state_a6675bf6_8210_46d9_a3a7_cb41205b8fb2.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_a6675bf6_8210_46d9_a3a7_cb41205b8fb2 === 'function') setState_a6675bf6_8210_46d9_a3a7_cb41205b8fb2(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_a6675bf6_8210_46d9_a3a7_cb41205b8fb2]} />
                        </View>
                        <View style={[styles.node_2d0b78a5_cd64_4ad6_a04c_c63220f5bbf2, { height: 1, backgroundColor: '#E0E0E0', alignSelf: 'stretch' }]} />
                        <View style={styles.node_33df9494_fe82_48f8_bc70_74c66c7a7d45}>
                                    <Text style={styles.node_9120379d_ee28_41e8_83b1_ce332dcba2c9}>Dark Mode</Text>
                                    <Switch value={typeof state_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9 !== 'undefined' ? (state_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9.isEnabled ?? false) : false} onValueChange={(v) => { if (typeof setState_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9 === 'function') setState_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9(prev => ({...prev, isEnabled: v})); }} trackColor={{ false: '#E0E0E0', true: '#0077E6' }} style={[styles.node_fcc73d8c_686f_44ab_b0cd_011d9cc1bbe9]} />
                        </View>
              </View>
              <Text style={styles.node_ed244e90_4d21_4511_b726_c7549a494909}>MORE</Text>
              <View style={[styles.node_e769bb8b_3518_4ff2_8da0_d5d9210dd9c3, styles.node_e769bb8b_3518_4ff2_8da0_d5d9210dd9c3Content]}>
                {(Array.isArray([{id:'1'},{id:'2'},{id:'3'}]) ? [{id:'1'},{id:'2'},{id:'3'}] : []).map((item, index, arr) => (
                  <View key={index}>
                    <View>
                        <View style={styles.node_ee55f150_385c_4e1b_9f36_a1a6986491a6}>
                                    <View style={styles.node_3a8f3e11_89c1_49b9_a071_a9eec6d1e19a}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#F59E0B" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M10.268 21a2 2 0 0 0 3.464 0"></Path><Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_f5088701_2c02_4918_a161_02e626a5991c}>
                                                  <Text style={styles.node_5bb116e9_234c_4df7_9274_44ef1111b715}>Notifications</Text>
                                                  <Text style={styles.node_1b9a91a7_9a1d_477f_9132_69cd4938cb3e}>Manage push and email alerts</Text>
                                    </View>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                    </View>
                    {index < arr.length - 1 && <View style={{ height: 1, backgroundColor: '#E5E7EB', marginVertical: 0 }} />}
                  </View>
                ))}
              </View>
              <TouchableOpacity style={[styles.node_674f089e_78ed_45d6_9a03_d26cc53bf1e3, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.error, alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: colors.error, fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Log Out</Text>
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
  node_4972ae5d_a9db_4c6f_a41c_bc888e9f8922: {
    gap: 16,
    padding: 20,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_9e48ce1f_5a3f_4eab_abb0_d2043d34e388: {
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_dbb60770_9251_4be7_9586_df0078ac8dca: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: -12,
  },
  node_11a0240b_3c79_42dc_8335_df0702bbc3f8: {
    marginTop: 4,
    marginBottom: 4,
  },
  node_798bfa2f_c585_43bd_bd15_b408c6e07984: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  node_7c3e7cab_e6bf_4f58_a70a_4aea4a63596d: {
    minHeight: 60,
    borderRadius: 12,
    backgroundColor: colors.surface,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_7c3e7cab_e6bf_4f58_a70a_4aea4a63596dContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_be93e29e_8234_4c78_9023_1f20e72a7b87: {
    padding: 10,
    minHeight: 52,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_ac5b416b_b4a9_4d9c_9b5e_4bbc8cd3ae89: {
    width: 36,
    height: 36,
    minHeight: 36,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  node_1247f6ed_e19f_47e9_9f81_35fcb02cc9aa: {
    color: '#F59E0B',
  },
  node_d4d19d92_3ac2_4842_82a6_4de285ec13fa: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_1e830337_4214_4f48_a790_51426dd86fe5: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_326a5648_3acd_4bcf_84fe_5525bf32ad27: {
    color: '#6B7280',
    fontSize: 12,
  },
  node_d2bb84a3_d88e_4b1f_9eb9_2c71a969e92a: {
    color: '#D1D5DB',
  },
  node_5628795e_7f4d_4407_93eb_4e8fea9043ef: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 8,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  node_3b222674_94ff_4c93_a4dd_4eb8a0817ce9: {
    gap: 0,
    padding: 4,
    minHeight: 60,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  node_95899a11_ae58_4067_859b_c0c5c8def5bf: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_d390bf05_e277_49c6_a1ec_8be5bff2d94b: {
    fontSize: 15,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_2d0b78a5_cd64_4ad6_a04c_c63220f5bbf2: {
    marginLeft: 12,
    marginRight: 12,
  },
  node_33df9494_fe82_48f8_bc70_74c66c7a7d45: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_9120379d_ee28_41e8_83b1_ce332dcba2c9: {
    fontSize: 15,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_ed244e90_4d21_4511_b726_c7549a494909: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 8,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  node_e769bb8b_3518_4ff2_8da0_d5d9210dd9c3: {
    minHeight: 60,
    borderRadius: 12,
    backgroundColor: colors.surface,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_e769bb8b_3518_4ff2_8da0_d5d9210dd9c3Content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_ee55f150_385c_4e1b_9f36_a1a6986491a6: {
    padding: 10,
    minHeight: 52,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_3a8f3e11_89c1_49b9_a071_a9eec6d1e19a: {
    width: 36,
    height: 36,
    minHeight: 36,
    borderRadius: 12,
    backgroundColor: '#FEF3C7',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  node_7bc71660_709b_4795_9510_c5e23e3849a7: {
    color: '#F59E0B',
  },
  node_f5088701_2c02_4918_a161_02e626a5991c: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_5bb116e9_234c_4df7_9274_44ef1111b715: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_1b9a91a7_9a1d_477f_9132_69cd4938cb3e: {
    color: '#6B7280',
    fontSize: 12,
  },
  node_f4013bda_8e84_4867_a286_4d9fe77c4742: {
    color: '#D1D5DB',
  },
  node_674f089e_78ed_45d6_9a03_d26cc53bf1e3: {
    color: colors.error,
    marginTop: 20,
    borderColor: colors.error,
  },
  });
}
