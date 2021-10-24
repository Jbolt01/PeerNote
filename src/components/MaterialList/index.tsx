/* eslint-disable no-nested-ternary */
import {
  Text,
  VStack,
  Box,
  Flex,
  Spacer,
  Img,
  Spinner,
  Skeleton,
  SimpleGrid,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import styles from './styles.module.scss';

import { NotFound } from '../NotFound';
import useLocale from '../../services/hooks/useLocale';

type MaterialCardContentProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
  likes: number;
  users: {
    name: string;
  };
};

interface MaterialListProps {
  title?: string;
  materialArray?: Array<MaterialCardContentProps>;
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
}

export function MaterialList({
  materialArray,
  title,
  isLoading = false,
  isFetching = false,
  error,
}: MaterialListProps) {
  const t = useLocale();

  return (
    <>
      {!!title && (
        <Flex mt="8" align="center">
          <Text fontSize="3xl" fontWeight="semibold">
            {title}
          </Text>
          {isFetching && <Spinner color="purple.600" size="md" ml="3" />}
        </Flex>
      )}
      <Box width="100%" pt="4" mb="4">
        {isLoading ? (
          <SimpleGrid w="100%" spacing="4" columns={[1, 2, 2, 3]}>
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />{' '}
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />{' '}
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />{' '}
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />
            <Skeleton
              h="96"
              startColor="purple.600"
              endColor="purple.800"
              borderRadius="2xl"
            />
          </SimpleGrid>
        ) : error ? (
          <Text>Error in React Query, call de Tacobell</Text>
        ) : (
          <VStack w="100%">
            {materialArray && materialArray?.length > 0 ? (
              <SimpleGrid w="100%" spacing="4" columns={[1, 2, 2, 3]}>
                {materialArray.map(material => (
                  <Link
                    key={material.id}
                    href={`/community/summary/${material.id}`}
                  >
                    <a>
                      <Box
                        className={styles.materialCard}
                        position="relative"
                        bg="purple.800"
                        height="96"
                        borderRadius="2xl"
                      >
                        <Img
                          src={
                            material.image !== ''
                              ? material.image
                              : '/assets/illustrations/MaterialImageSource.svg'
                          }
                          alt={t.materialList.thumbAlt}
                          w="100%"
                          h="55%"
                          borderTopRadius="2xl"
                          objectFit="cover"
                        />
                        <VStack
                          position="absolute"
                          px={3}
                          py={1}
                          h="45%"
                          alignItems="flex-start"
                        >
                          <Text fontSize="lg" fontWeight="600" noOfLines={3}>
                            {material.name}
                          </Text>

                          <Spacer />

                          <Box alignItems="flex-start" spacing="0" pb="1">
                            <Flex align="baseline">
                              <Box mr="1" color="purple.500">
                                <AiFillHeart />
                              </Box>

                              <Text color="purple.500">
                                {material.likes !== null && material.likes === 1
                                  ? `${material.likes} ${t.materialList.like}`
                                  : material.likes > 1
                                  ? `${material.likes} ${t.materialList.like}s`
                                  : `${t.materialList.noLikes}`}
                              </Text>
                            </Flex>

                            <Flex align="baseline" color="purple.500">
                              <FaUser />
                              <Text ml="1">{material.users.name}</Text>
                            </Flex>
                          </Box>
                        </VStack>
                      </Box>
                    </a>
                  </Link>
                ))}
              </SimpleGrid>
            ) : (
              <NotFound h="96" w="100%" boxSize="120px" activeBackground />
            )}
          </VStack>
        )}
      </Box>
    </>
  );
}
