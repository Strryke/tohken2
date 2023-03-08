import React from 'react';
import { View } from 'react-native';
import {
  Layout,
  Section,
  SectionContent,
  TopNav,
  Button,
  useTheme,
} from 'react-native-rapi-ui';

import RedeemCard from '../components/utils/RedeemCard';
import { ScrollView, Text } from 'native-base';

const vouchers = [
  {
    title: '$3 off McSpicy Burger',
    company: 'McDonalds',
    image:
      'https://images.squarespace-cdn.com/content/v1/5e4ebffeccd62403a77158ca/1624531674353-FH6RPXS8RHT9CSTQ6WDB/B1653_McD_McSpicy_48Sht.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'Gong Cha',
    image: 'https://www.sgdtips.com/wp-content/uploads/Gong-Cha-Promotions.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'EatBook',
    image:
      'https://eatbook.sg/wp-content/uploads/2022/12/chope-year-end-sale-2022.jpg',
    tag: 'Food',
  },
  {
    title: '$3 off McSpicy Burger',
    company: 'McDonalds',
    image:
      'https://images.squarespace-cdn.com/content/v1/5e4ebffeccd62403a77158ca/1624531674353-FH6RPXS8RHT9CSTQ6WDB/B1653_McD_McSpicy_48Sht.jpg',
    tag: 'Food',
  },
  {
    title: '10% off on all food items',
    company: 'EatBook',
    image:
      'https://eatbook.sg/wp-content/uploads/2022/12/chope-year-end-sale-2022.jpg',
    tag: 'Food',
  },
];

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();

  return (
    <ScrollView>
      <Layout>
        <TopNav middleContent="Redeem Vouchers" />
        {/* <Section>
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
      </Section> */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {vouchers.map((voucher, index) => (
            <RedeemCard {...voucher} />
          ))}
          {/* <RedeemCard  /> */}
        </View>
      </Layout>
    </ScrollView>
  );
}
