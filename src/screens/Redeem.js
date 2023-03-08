import React from 'react';
import { View } from 'react-native';
import {
  Layout,
  Section,
  SectionContent,
  Text,
  TopNav,
  Button,
  useTheme,
} from 'react-native-rapi-ui';

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();

  return (
    <Layout>
      <TopNav middleContent="Redeem Vouchers" />
      <Section>
        <SectionContent>
          <Button
            style={{ marginTop: 10 }}
            text="Rapi UI Documentation"
            status="info"
            onPress={() => Linking.openURL('https://rapi-ui.kikiding.space/')}
          />
          <Button
            text="Go to second screen"
            onPress={() => {
              navigation.navigate('SecondScreen');
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Button
            status="danger"
            text="Logout"
            onPress={() => {
              signOut(auth);
            }}
            style={{
              marginTop: 10,
            }}
          />
          <Button
            text={isDarkmode ? 'Light Mode' : 'Dark Mode'}
            status={isDarkmode ? 'success' : 'warning'}
            onPress={() => {
              if (isDarkmode) {
                setTheme('light');
              } else {
                setTheme('dark');
              }
            }}
            style={{
              marginTop: 10,
            }}
          />
        </SectionContent>
      </Section>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>This is the redeem tab</Text>
      </View>
    </Layout>
  );
}
