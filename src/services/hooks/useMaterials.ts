import { useQuery } from 'react-query';
import { api } from '../api';

type materialData = {
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

export function useGetLatestMaterials(courseId) {
  return useQuery<materialData[]>('useGetlatestMaterials', async () => {
    const { data } = await api.get('/api/supaRequests', {
      headers: {
        type: 'COURSE-get-latest-materials',
        course_id: courseId,
      },
    });

    return data;
  });
}

export function useGetLikedMaterials(currentUserId) {
  return useQuery<materialData[]>('useGetLikedMaterials', async () => {
    const { data } = await api.get('/api/supaRequests', {
      headers: {
        type: 'HOME-get-liked-materials',
        current_user_id: currentUserId.id,
      },
    });

    return data;
  });
}

export function useGetTopLikedMaterials(courseId) {
  return useQuery<materialData[]>('useGetTopLikedMaterials', async () => {
    const { data } = await api.get('/api/supaRequests', {
      headers: {
        type: 'COURSE-get-top-liked-materials',
        course_id: courseId,
      },
    });

    return data;
  });
}

export function useGetSearchedMaterials(searchText) {
  return useQuery<materialData[]>(
    'useGetSeachedMaterials',
    async () => {
      const { data } = await api.get('/api/supaRequests', {
        headers: {
          type: 'SEARCH-get-searched-materials',
          search: searchText,
        },
      });

      return data;
    },
    {
      staleTime: 1000 * 5, // 5 sec
    }
  );
}

export function useMaterials() {
  return useQuery<materialData[]>(
    'materials',
    async () => {
      const { data } = await api.get('/api/supaRequests', {
        headers: {
          type: 'COMMUNITY-get-latest-materials',
        },
      });

      return data;
    },
    {
      staleTime: 1000 * 5, // 5 sec
    }
  );
}
