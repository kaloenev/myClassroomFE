import React, { useEffect, useState } from 'react';

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Img,
  Center,
  RadioGroup,
  Radio,
  useToast,
} from '@chakra-ui/react';
import { report } from '../../../icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import { axiosInstance } from '../../../axios';
import { getResponseMessage } from '../../../helpers/response.util';

export default function ReportModal({
  isOpen,
  onClose,
  onOpenRate,
  terminId,
  course,
}: {
  isOpen: boolean;
  onClose: any;
  onOpenRate?: any;
  terminId: any;
  course: any;
}) {
  const [reason, setReason] = useState('');
  const [isDone, setIsDone] = useState(false);

  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit: SubmitHandler = async data => {
    try {
      const url = course?.privateLesson ? 'reportLesson' : 'reportCourse';

      await axiosInstance.post(`lessons/${url}`, {
        terminId: terminId,
        title: data.title,
        description: data.description,
      });

      setIsDone(true);
      reset();
      toast({
        title: 'Успешно докладване за нередност',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (err) {
      toast({
        title: getResponseMessage(err),
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  useEffect(() => {
    reset();
    setReason('null');
    setIsDone(false);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
        reset();
      }}
      size={{ base: 'sm', sm: 'md', md: 'xl' }}
      isCentered>
      <ModalOverlay />
      <ModalContent p={{ base: 0, lg: 8 }}>
        <ModalBody w={'full'} overflow={'hidden'} minH={'60vh'}>
          <ModalCloseButton color={'purple.500'} />
          {isDone ? (
            <Center as={Stack} px={4} maxW={'md'} spacing={20} lineHeight={1.2} minH={'60vh'} h={'full'}>
              <Stack spacing={12} h={'full'} align={'center'} justify={'center'}>
                <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: '3xl' }} color={'grey.600'} textAlign={'center'}>
                  Благодарим Ви за обратната връзка!
                </Heading>

                <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={'center'} color="grey.400" lineHeight={1}>
                  Вашето оплакване ще бъде разгледано в най-кратък срок, за да установим дали е извършено нарушение.
                </Text>
              </Stack>

              <Button
                as={ReactRouterLink}
                to={'/'}
                w={'full'}
                py={6}
                fontWeight={700}
                fontSize={18}
                color={'white'}
                bg={'purple.500'}
                _hover={{ bg: 'purple.500' }}
                onClick={() => {
                  onClose();
                  onOpenRate();
                  reset();
                }}>
                Към началната страница
              </Button>
            </Center>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex align={'center'} justify={'center'}>
                <Stack
                  spacing={{ base: 8, md: 12 }}
                  w={'full'}
                  px={{ base: 6, lg: 6 }}
                  my={4}
                  align={'center'}
                  textAlign={'center'}>
                  <Img src={report} alt={'report icon'} w={6} h={6} />
                  <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: '3xl' }} color={'grey.500'}>
                    Докладвайте за нередност
                  </Heading>

                  <Stack spacing={8} align={'start'} w={'full'}>
                    <RadioGroup
                      value={reason}
                      onChange={e => {
                        setValue('title', e);
                        setReason(e);
                      }}>
                      <Stack spacing={10} direction="column" align={'start'}>
                        <Radio
                          size="lg"
                          colorScheme="purple"
                          value={`${course?.privateLesson ? 'Урокът' : 'Курсът'} не отговаря на описанието си`}
                          bg={'grey.100'}>
                          <Text textAlign={'left'} fontSize={{ base: 14, lg: 16 }} color={'grey.500'}>
                            {course?.privateLesson ? 'Урокът' : 'Курсът'} не отговаря на описанието си
                          </Text>
                        </Radio>
                        <Radio size="lg" colorScheme="purple" value={'Непълно съдържание'} bg={'grey.100'}>
                          <Text textAlign={'left'} fontSize={{ base: 14, lg: 16 }} color={'grey.500'}>
                            Непълно съдържание
                          </Text>
                        </Radio>

                        <Radio
                          size="lg"
                          colorScheme="purple"
                          value={`${course?.privateLesson ? 'Урокът' : 'Курсът'} не се проведе`}
                          bg={'grey.100'}>
                          <Text textAlign={'left'} fontSize={{ base: 14, lg: 16 }} color={'grey.500'}>
                            {course?.privateLesson ? 'Урокът' : 'Курсът'} не се проведе
                          </Text>
                        </Radio>

                        <Radio size="lg" colorScheme="purple" value={'Грубо поведение от учителя'} bg={'grey.100'}>
                          <Text textAlign={'left'} fontSize={{ base: 14, lg: 16 }} color={'grey.500'}>
                            Грубо поведение от учителя
                          </Text>
                        </Radio>

                        <Radio size="lg" colorScheme="purple" value={'Друго'} bg={'grey.100'}>
                          <Text textAlign={'left'} fontSize={{ base: 14, lg: 16 }} color={'grey.500'}>
                            Друго*
                          </Text>
                        </Radio>
                      </Stack>
                    </RadioGroup>

                    <Input bg="grey.100" placeholder="Вашето оплакване" {...register('description')} />

                    <Text fontSize={{ base: 'sm', md: 'md' }} textAlign={'start'} color="grey.400">
                      *Опишете накратко Вашето оплакване в полето
                    </Text>
                  </Stack>

                  <Stack spacing={2} w={'full'}>
                    <Button
                      type={'submit'}
                      w={'full'}
                      bg={'purple.500'}
                      fontSize={18}
                      fontWeight={700}
                      color={'white'}
                      _hover={{
                        opacity: '0.9',
                      }}>
                      Подай сигнал
                    </Button>

                    {onOpenRate ? (
                      <Button
                        size={{ base: 'md', lg: 'lg' }}
                        fontWeight={700}
                        color={'purple.500'}
                        bg={'transparent'}
                        _hover={{ bg: 'transparent' }}
                        onClick={() => {
                          onClose();
                          onOpenRate();
                          reset();
                        }}>
                        Отказ
                      </Button>
                    ) : (
                      <Button
                        size={{ base: 'md', lg: 'lg' }}
                        fontWeight={700}
                        color={'purple.500'}
                        bg={'transparent'}
                        _hover={{ bg: 'transparent' }}
                        onClick={() => {
                          onClose();
                          reset();
                        }}>
                        Отказ
                      </Button>
                    )}
                  </Stack>
                </Stack>
              </Flex>
            </form>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
