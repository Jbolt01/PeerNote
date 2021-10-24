/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
import { Console } from 'console';
import { getSession } from 'next-auth/client';
import { supabase } from '../../services/supabase';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method === 'GET') {
    const { type, current_user_id, search, course_id, course_slug_number } =
      req.headers;

    switch (type) {
      case 'get-user-data':
        const { data: userData, error: getUserDataError } = await supabase
          .from('users')
          .select('id, name, email')
          .eq('email', session?.user.email)
          .single();

        if (getUserDataError) {
          return res
            .status(400)
            .send(
              `Error getting top courses request: ${getUserDataError.message}`
            );
        }

        res.status(200).json(userData);
        break;

      case 'COMMUNITY-get-latest-courses':
        const { data: courses, error } = await supabase
          .from('courses')
          .select('id, name, image, likes, materials_available')
          .order('created_at', { ascending: false })
          .range(0, 2);

        if (error) {
          return res
            .status(400)
            .send(`Error getting latest courses request: ${error.message}`);
        }

        res.status(200).json(courses);
        break;

      case 'COMMUNITY-get-most-liked-courses':
        const { data: mostLikedCourses, error: mostLikedCoursesErr } =
          await supabase
            .from('courses')
            .select('id, name, image, likes, materials_available')
            .order('likes', { ascending: false });

        if (mostLikedCoursesErr) {
          return res
            .status(400)
            .send(
              `Error getting top courses request: ${mostLikedCoursesErr.message}`
            );
        }

        res.status(200).json(mostLikedCourses);
        break;

      case 'HOME-get-liked-courses':
        const { data: likedCourses, error: likedCoursesErr } = await supabase
          .from('course_likes')
          .select(
            `
          courses: course_id (id, name, description, image, materials_available, likes)
        `
          )
          .order('created_at', { ascending: false })
          .eq('user_id', current_user_id);

        if (likedCoursesErr) {
          return res
            .status(400)
            .send(
              `Error getting top courses request: ${likedCoursesErr.message}`
            );
        }

        const likedCoursesArray = likedCourses
          ? likedCourses.map(array => array.courses)
          : [];

        res.status(200).json(likedCoursesArray);
        break;

      case 'SEARCH-get-searched-courses':
        if (search === '') {
          return res.status(200).json([]);
        }
        const { data: searchedCourses, error: searchedCoursesErr } =
          await supabase
            .from('courses')
            .select('id, name, image, likes, materials_available')
            .order('likes', { ascending: false })
            //   .or(`
            //   name.textSearch.${search},description.textSearch.${search},
            // `);
            .textSearch('name', `'${search}'`);

        if (searchedCoursesErr) {
          return res
            .status(400)
            .send(
              `Error getting top courses request: ${searchedCoursesErr.message}`
            );
        }

        res.status(200).json(searchedCourses);
        break;

      case 'SEARCH-get-searched-materials':
        if (search === '') {
          return res.status(200).json([]);
        }
        const { data: searchedMaterials, error: searchedMaterialsErr } =
          await supabase
            .from('materials')
            .select(
              `
            id, name, image, likes,
            users: creator_id ( name )
          `
            )
            // .order('likes', { ascending: false })
            .textSearch('name', `'${search}'`);

        if (searchedMaterialsErr) {
          return res
            .status(400)
            .send(
              `Error getting top materials request: ${searchedMaterialsErr.message}`
            );
        }

        res.status(200).json(searchedMaterials);
        break;

      case 'COURSE-get-latest-materials':
        const { data: latestMaterials, error: latestMaterialsErr } = await supabase
          .from('materials')
          .select(
            `
            id, name, image, likes,
            users: creator_id ( name )
          `
          )
          .order('created_at', { ascending: false })
          .eq('course_id', String(course_id));

        if (latestMaterialsErr) {
          return res
            .status(400)
            .send(
              `Error getting latest materials request: ${latestMaterialsErr.message}`
            );
        }

        res.status(200).json(latestMaterials);
        break;

      case 'COURSE-get-top-liked-materials':
        const { data: topCourseMaterials, error: topCourseMaterialsErr } =
          await supabase
            .from('materials')
            .select(
              `
          id, name, image, likes,
          users: creator_id ( name )
          `
            )
            .order('likes', { ascending: false })
            .eq('course_id', String(course_id));

        if (topCourseMaterialsErr) {
          return res
            .status(400)
            .send(
              `Error getting latest materials request: ${topCourseMaterialsErr.message}`
            );
        }

        res.status(200).json(topCourseMaterials);
        break;

      case 'HOME-get-liked-materials':
        const { data: likedMaterials, error: likedMaterialsErr } = await supabase
          .from('material_likes')
          .select(
            `
          materials: material_id (id, name, description, image, likes, creator_id, users: creator_id (name))
        `
          )
          .order('created_at', { ascending: false })
          .eq('user_id', current_user_id);

        if (likedMaterialsErr) {
          return res
            .status(400)
            .send(
              `Error getting top materials request: ${likedMaterialsErr.message}`
            );
        }

        const likedMaterialsArray = likedMaterials
          ? likedMaterials.map(array => array.materials)
          : [];

        res.status(200).json(likedMaterialsArray);
        break;

      case 'COURSE-increment-course-view':
        const { data } = await supabase.rpc('incrementcourseview', {
          row_slug_number: course_slug_number,
        });
        res.status(200).send(`success: another view added`);
        break;

      default:
        throw new Error('Unhandled event');
    }
  }

  if (req.method === 'POST') {
    const { type } = req.body.headers;

    const reqBody = req.body;
    const { values, currentUserId, courseId, materialId } = reqBody;

    switch (type) {
      case 'community-create-course':
        const { data: courseData, error } = await supabase
          .from('courses')
          .insert([
            {
              name: values.name,
              description: values.description,
              image: values.image,
              tags: values.tags,
              creator_id: currentUserId,
            },
          ])
          .single();

        if (error) {
          return res
            .status(400)
            .send(`Error creating new Course Thread: ${error.message}`);
        }

        res.status(200).json({ newCourseNumberSlug: courseData.id });
        break;

      case 'course-create-material':
        const { data: materialData, error: err } = await supabase
          .from('materials')
          .insert([
            {
              name: values.name,
              description: values.description,
              image: values.image,
              link: values.link,
              tags: values.tags,
              creator_id: currentUserId,
              course_id: courseId,
            },
          ])
          .single();

        if (err) {
          return res
            .status(400)
            .send(`Error creating new Material: ${err.message}`);
        }

        const { data, error: incrementCourseMaterialError } = await supabase.rpc(
          'incrementcoursematerial',
          {
            row_id: courseId,
          }
        );

        if (incrementCourseMaterialError) {
          return res
            .status(400)
            .send(
              `Error creating new Material: ${incrementCourseMaterialError.message}`
            );
        }

        res.status(200).json({ newMaterialId: materialData.id });

        break;

      case 'course-like-course':
        const { error: likeErr } = await supabase.from('course_likes').insert([
          {
            course_id: courseId,
            user_id: currentUserId,
          },
        ]);

        if (likeErr) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        const { error: incrementCourseLikeError } = await supabase.rpc(
          'incrementcourselike',
          {
            row_id: courseId,
          }
        );

        if (incrementCourseLikeError) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        res.status(200).json({ success: 'success' });
        break;

      case 'course-unlike-course':
        const { error: unlikeErr } = await supabase
          .from('course_likes')
          .delete()
          .eq('user_id', currentUserId)
          .eq('course_id', courseId);

        if (unlikeErr) {
          return res.status(400).send(`Error while unliking: ${error.message}`);
        }

        const { error: decrementCourseLikeError } = await supabase.rpc(
          'decrementcourselike',
          {
            row_id: courseId,
          }
        );
        if (decrementCourseLikeError) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        res.status(200).json({ success: 'success' });
        break;

      case 'RESUME-like-material':
        const { error: likeMaterialErr } = await supabase
          .from('material_likes')
          .insert([{ material_id: materialId, user_id: currentUserId }]);

        if (likeMaterialErr) {
          return res
            .status(400)
            .send(`Error while liking: ${likeMaterialErr.message}`);
        }

        const { error: incrementMaterialLikeError } = await supabase.rpc(
          'incrementmateriallike',
          {
            row_id: materialId,
          }
        );

        if (incrementMaterialLikeError) {
          return res
            .status(400)
            .send(`Error while liking: ${incrementMaterialLikeError.message}`);
        }

        res.status(200).json({ success: 'success' });
        break;

      case 'RESUME-unlike-material':
        const { error: unlikeMaterialErr } = await supabase
          .from('material_likes')
          .delete()
          .eq('user_id', currentUserId)
          .eq('material_id', materialId);

        if (unlikeMaterialErr) {
          return res
            .status(400)
            .send(`Error while unliking: ${unlikeMaterialErr.message}`);
        }

        const { error: decrementMaterialLikeError } = await supabase.rpc(
          'decrementmateriallike',
          {
            row_id: materialId,
          }
        );
        if (decrementMaterialLikeError) {
          return res
            .status(400)
            .send(`Error while liking: ${decrementMaterialLikeError.message}`);
        }

        res.status(200).json({ success: 'success' });
        break;

      default:
        throw new Error('Unhandled event');
    }
  }
}
