import { Box, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import { CourseList } from '../../components/CourseList/index';
import { SearchInput } from '../../components/SearchInput';
import { MaterialList } from '../../components/MaterialList/index';

import { useGetSearchedMaterials } from '../../services/hooks/useMaterials';
import { useGetSearchedCourses } from '../../services/hooks/useCourses';
import useLocale from '../../services/hooks/useLocale';

export default function SearchPage() {
  const [text, setText] = useState('');
  const t = useLocale();

  const {
    data: searchedCourses,
    isLoading: isLoadingCourse,
    isFetching: isFetchingCourse,
    refetch: refetchCourse,
    error: errorCourse,
  } = useGetSearchedCourses(text);

  const {
    data: searchedMaterials,
    isLoading: isLoadingMaterial,
    isFetching: isFetchingMaterial,
    refetch: refetchMaterial,
    error: errorMaterial,
  } = useGetSearchedMaterials(text);

  useEffect(() => {
    refetchCourse();
    refetchMaterial();
  }, [text]);

  return (
    <>
      <Head>
        <title>{t.search.tabTitle}</title>
      </Head>

      <Box
        w="90%"
        mx="auto"
        maxWidth={1080}
        marginTop={12}
        marginBottom={4}
        borderColor="purple.500"
        justifyContent="center"
      >
        {' '}
        <SearchInput
          placeholder={t.search.placeholder}
          value={text}
          onChange={search => setText(search)}
        />
        <Box w="100%" mt="4">
          <Tabs variant="soft-rounded">
            <TabList>
              <Tab
                _focus={{ boxShadow: 'none' }}
                _selected={{ color: 'purple.900', bg: 'green.400' }}
              >
                {t.search.filterCourse}
              </Tab>
              <Tab
                _focus={{ boxShadow: 'none' }}
                _selected={{ color: 'purple.900', bg: 'purple.500' }}
              >
                {t.search.filterMaterial}
              </Tab>
              <Tab isDisabled color="gray.900">
                {t.search.filterInstitutions}
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="0">
                <CourseList
                  title={t.search.results}
                  coursesArray={searchedCourses}
                  isLoading={isLoadingCourse}
                  isFetching={isFetchingCourse}
                  error={errorCourse}
                />
              </TabPanel>
              <TabPanel p="0">
                <MaterialList
                  title={t.search.results}
                  materialArray={searchedMaterials}
                  isLoading={isLoadingMaterial}
                  isFetching={isFetchingMaterial}
                  error={errorMaterial}
                />
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>{/* <p>three!</p> */}</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
