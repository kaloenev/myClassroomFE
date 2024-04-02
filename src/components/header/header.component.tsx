import React, { useContext, useEffect, useState } from 'react';
import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { headerImage, headerImageMobile, headerImageDesktop } from '../../images';
import AuthContext from '../../context/AuthContext';

export const Header = ({
  onLoginOpen,
  setModalTabIndex,
  elRef,
}: {
  onLoginOpen: any;
  setModalTabIndex: any;
  elRef: any;
}) => {
  const { userData } = useContext(AuthContext);
  const [showRegButton, setShowRegButton] = useState(true);
  const handleModalOpen = (tabIndex: number) => {
    setModalTabIndex(tabIndex);
    onLoginOpen();
  };

  const handleScroll = () => {
    elRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (userData) {
      setShowRegButton(false);
    } else {
      setShowRegButton(true);
    }
  }, [userData]);
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
      backgroundImage={{ base: headerImageMobile, lg: headerImage, xl: headerImageDesktop }}
      backgroundSize={'cover'}
      backgroundPosition={{ base: 'center center', lg: '75%', xl: 'center center' }}>
      <VStack
        w={'full'}
        mt={{ base: '18vh', lg: '20vh', xl: 0 }}
        justify={{ base: 'start', xl: 'center' }}
        align={{ base: 'center', lg: 'flex-start' }}
        px={useBreakpointValue({ base: 8, sm: 16, md: 28, lg: 16, xl: 20, '2xl': 40 })}>
        <Stack
          maxW={{ base: 'full', lg: '48vw', xl: '37vw', '2xl': '30vw' }}
          align={'center'}
          justify={'center'}
          spacing={{ base: 12, md: 16, lg: 14 }}>
          <Stack spacing={{ base: 12, md: 14, lg: 10 }}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.5}
              textAlign={{ base: 'center', lg: 'left' }}
              fontSize={useBreakpointValue({
                base: '2.4vh',
                sm: 'xl',
                md: 30,
                lg: 36,
                '2xl': '2.3vw',
              })}>
              Стани отличник от вкъщи! <br /> Започни да учиш онлайн по-лесно и удобно с {''}
              <Text as="span" color={'blue.100'}>
                MyClassroom
              </Text>
            </Text>

            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.35}
              textAlign={{ base: 'center', lg: 'left' }}
              fontSize={{ base: 14, md: 18, xl: 20 }}>
              Голямо разнообразие от онлайн частни уроци и курсове за ученици и студенти. Избери най – подходящия за
              теб!
            </Text>
          </Stack>

          <Stack
            direction={'row'}
            align={'center'}
            justify={{ base: 'center', lg: 'flex-start' }}
            w={'full'}
            spacing={{ base: 6, sm: 8, md: 14, lg: 8 }}>
            <Button
              w={{ base: 'full', sm: 'fit-content', lg: 'inherit', xl: 'full' }}
              size={{ base: 'xs', sm: 'md', lg: 'md', xl: 'lg' }}
              p={{ base: '15px', sm: '20px', lg: 0 }}
              fontSize={{ base: '5px', md: 'xl' }}
              fontWeight={700}
              bg={'blue.200'}
              color={'white'}
              _hover={{ opacity: '0.9' }}
              onClick={handleScroll}>
              Научи повече
            </Button>

            {showRegButton && (
              <Button
                w={{ base: 'full', sm: 'fit-content', lg: 'inherit', xl: 'full' }}
                size={{ base: 'xs', sm: 'md', lg: 'md', xl: 'lg' }}
                p={{ base: '15px', sm: '20px', lg: 0 }}
                fontSize={{ base: '4px', md: 'xl' }}
                fontWeight={700}
                bg={'white'}
                color={'purple.500'}
                onClick={() => handleModalOpen(1)}
                _hover={{ opacity: '0.9' }}>
                Регистрирай се
              </Button>
            )}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Header;
