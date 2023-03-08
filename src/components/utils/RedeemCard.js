import React from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Badge,
  Pressable,
} from 'native-base';

export default RedeemCard = (props) => {
  const { title, company, image, tag } = props;
  console.log('asdf');
  return (
    <Pressable
      alignItems="center"
      marginBottom={2}
      onPress={() => {
        console.log('pressed');
      }}
    >
      <Box
        maxW="xl"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 5}>
            <Image
              source={{
                uri: image,
              }}
              alt="image"
            />
          </AspectRatio>
          {/* <Center
            bg="violet.500"
            _dark={{
              bg: 'violet.400',
            }}
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {tag}
          </Center> */}
          <Badge
            variant={'subtle'}
            position="absolute"
            top="1"
            left={'1'}
            px="3"
            py="1.5"
            colorScheme={'info'}
            borderRadius={10}
          >
            {tag}
          </Badge>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {company}
            </Text>
          </Stack>

          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400"
              >
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Pressable>
  );
};
