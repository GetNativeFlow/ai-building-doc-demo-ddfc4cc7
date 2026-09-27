import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator, TextInput, FlatList } from 'react-native';
import { default as StudioSpinner } from '../components/StudioSpinner';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_c02e8a1a_07aa_456a_bca4_55c830483ead, setState_c02e8a1a_07aa_456a_bca4_55c830483ead] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_40001043_caea_46d4_b1d3_75ef834ac56b, setState_40001043_caea_46d4_b1d3_75ef834ac56b] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log('');
  }, []);

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_ce9474c1_8d8e_4960_a5e8_33b7143f68d9}>
              <Text style={styles.node_68de2bfe_121b_4514_a60f_39b984ca6265}>Create Your Account</Text>
              <TouchableOpacity style={[styles.node_25659af5_0fcc_4f4c_8366_52de2acc3a7a, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.node_4c2a5927_b4d0_4ba3_aa1b_20fb995e3090}>
                        <View style={styles.node_9221f0db_2408_45f3_92fa_44298fb44f6c}>
                          <Text style={{ marginBottom: 4, fontWeight: '600' }}>Email</Text>
                                    <TextInput style={[styles.node_c02e8a1a_07aa_456a_bca4_55c830483ead, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }]} placeholder="you@example.com" value={typeof state_c02e8a1a_07aa_456a_bca4_55c830483ead !== 'undefined' ? (state_c02e8a1a_07aa_456a_bca4_55c830483ead.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_c02e8a1a_07aa_456a_bca4_55c830483ead === 'function') setState_c02e8a1a_07aa_456a_bca4_55c830483ead(prev => ({...prev, text: v})); }} />
                        </View>
                        <View style={styles.node_715c269e_386b_4a77_a0a7_0d381e79d9dd}>
                          <Text style={{ marginBottom: 4, fontWeight: '600' }}>Password</Text>
                                    <TextInput style={[styles.node_40001043_caea_46d4_b1d3_75ef834ac56b, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }]} placeholder="Enter a password" value={typeof state_40001043_caea_46d4_b1d3_75ef834ac56b !== 'undefined' ? (state_40001043_caea_46d4_b1d3_75ef834ac56b.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_40001043_caea_46d4_b1d3_75ef834ac56b === 'function') setState_40001043_caea_46d4_b1d3_75ef834ac56b(prev => ({...prev, text: v})); }} />
                        </View>
              </View>
              <View style={[styles.node_1c280387_beeb_402f_9cd0_1d4ac85e70e1, styles.node_1c280387_beeb_402f_9cd0_1d4ac85e70e1Content]}>
                {(Array.isArray([{id:'1'},{id:'2'},{id:'3'}]) ? [{id:'1'},{id:'2'},{id:'3'}] : []).map((item, index, arr) => (
                  <View key={index}>
                    <View>
                        <View style={styles.node_2982883a_00b6_4bc7_9112_94a47ef3d3b2}>
                                    <View style={styles.node_83fdecba_093c_4e21_b4d8_939bacfd4058}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#6366F1" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></Path><Circle cx="12" cy="7" r="4"></Circle></G></Svg></View>
                                    </View>
                                    <View style={styles.node_b34188d6_b282_496a_b44a_6081cbcb7a52}>
                                                  <Text style={[styles.node_4e7fd783_f2a5_43cb_acca_4ff0e16236a2, { "color": ((item.selected) === (isLoading) ? "$primary" : ""), "backgroundColor": ((item.selected) === (isLoading) ? "#EFEBFD" : "") }]}>Alice Johnson</Text>
                                                  <Text style={styles.node_ca58915c_8b92_49e6_99fb_1460a7ffd13e}>Financial Analyst</Text>
                                    </View>
                        </View>
                    </View>
                    {index < arr.length - 1 && <View style={{ height: 1, backgroundColor: '#E5E7EB', marginVertical: 0 }} />}
                  </View>
                ))}
              </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  node_ce9474c1_8d8e_4960_a5e8_33b7143f68d9: {
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
  node_68de2bfe_121b_4514_a60f_39b984ca6265: {
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  node_4c2a5927_b4d0_4ba3_aa1b_20fb995e3090: {
    gap: 16,
    padding: 0,
  },
  node_1c280387_beeb_402f_9cd0_1d4ac85e70e1: {
    minHeight: 60,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_1c280387_beeb_402f_9cd0_1d4ac85e70e1Content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_2982883a_00b6_4bc7_9112_94a47ef3d3b2: {
    padding: 8,
    minHeight: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_83fdecba_093c_4e21_b4d8_939bacfd4058: {
    width: 36,
    height: 36,
    minHeight: 36,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  node_934a98ce_a6e8_4971_a1b1_ccfe32b326b4: {
    color: '#6366F1',
  },
  node_b34188d6_b282_496a_b44a_6081cbcb7a52: {
    minHeight: 40,
    justifyContent: 'flex-start',
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
  node_4e7fd783_f2a5_43cb_acca_4ff0e16236a2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_ca58915c_8b92_49e6_99fb_1460a7ffd13e: {
    fontSize: 14,
  },
});

