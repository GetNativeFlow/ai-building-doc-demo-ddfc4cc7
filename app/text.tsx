import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function TextScreen() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_8f03f159_0acd_454e_911b_51776731dd93} />
      <Text style={styles.node_3eedfc14_81a2_47ba_bcd2_72238b964a54} numberOfLines={1}>Hello World (auto)</Text>
      <Text style={styles.node_04bd4569_4562_4461_b3e5_974a79e35e84}>Bold Test Text</Text>
      <Text style={styles.node_e4ced1d2_0116_4dce_85e9_220e6890c794}>Italic Test Text</Text>
      <Text style={styles.node_61b15ffb_965c_45af_8a37_696867cc88d5}>Underline Test Text</Text>
      <Text style={styles.node_00047ab2_60d9_4654_85ea_1320dc23cc98}>Strikethrough Test Text</Text>
      <Text style={styles.node_37b377b1_8442_465a_ad43_54955d4e02de} numberOfLines={1}>Truncated Test Text</Text>
      <Text style={styles.node_cf88a564_3475_49a8_984a_8f5640851f66}>Sub Test Text</Text>
      <Text style={styles.node_2a67bfaa_b044_4c16_acf8_0888952cedbb}>Highlight Test Text</Text>
      <Text style={styles.node_2fa11454_dc74_4f28_8054_dace083d4fda}>Size Test Text</Text>
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
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    overflow: 'visible',
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
  node_8f03f159_0acd_454e_911b_51776731dd93: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 16,
    flexWrap: 'nowrap',
    overflow: 'visible',
    padding: 16,
  },
  node_3eedfc14_81a2_47ba_bcd2_72238b964a54: {
    width: 220,
    height: 60,
    margin: 6,
    opacity: 0.9,
    minHeight: 44,
    borderColor: '#39D2C0',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#EE8B60',
    fontStyle: 'italic',
    textDecorationLine: 'underline line-through',
    fontSize: 8,
    fontWeight: 'bold',
    flexGrow: 5,
    flexShrink: 0,
  },
  node_04bd4569_4562_4461_b3e5_974a79e35e84: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_e4ced1d2_0116_4dce_85e9_220e6890c794: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  node_61b15ffb_965c_45af_8a37_696867cc88d5: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  node_00047ab2_60d9_4654_85ea_1320dc23cc98: {
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  node_37b377b1_8442_465a_ad43_54955d4e02de: {
    fontSize: 16,
  },
  node_cf88a564_3475_49a8_984a_8f5640851f66: {
    fontSize: 12,
  },
  node_2a67bfaa_b044_4c16_acf8_0888952cedbb: {
    fontSize: 16,
    backgroundColor: '#FEF08A',
  },
  node_2fa11454_dc74_4f28_8054_dace083d4fda: {
    fontSize: 60,
  },
});

