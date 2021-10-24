module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EnV3");


/***/ }),

/***/ "EnV3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FctI");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TZoU");
/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable consistent-return */

/* eslint-disable no-case-declarations */


async function handler(req, res) {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_0__["getSession"])({
    req
  });

  if (req.method === 'GET') {
    const {
      type,
      current_user_id,
      search,
      course_id,
      course_slug_number
    } = req.headers;

    switch (type) {
      case 'get-user-data':
        const {
          data: userData,
          error: getUserDataError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('users').select('id, name, email').eq('email', session === null || session === void 0 ? void 0 : session.user.email).single();

        if (getUserDataError) {
          return res.status(400).send(`Error getting top courses request: ${getUserDataError.message}`);
        }

        res.status(200).json(userData);
        break;

      case 'COMMUNITY-get-latest-courses':
        const {
          data: courses,
          error
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('courses').select('id, name, image, likes, materials_available').order('created_at', {
          ascending: false
        }).range(0, 2);

        if (error) {
          return res.status(400).send(`Error getting latest courses request: ${error.message}`);
        }

        res.status(200).json(courses);
        break;

      case 'COMMUNITY-get-most-liked-courses':
        const {
          data: mostLikedCourses,
          error: mostLikedCoursesErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('courses').select('id, name, image, likes, materials_available').order('likes', {
          ascending: false
        });

        if (mostLikedCoursesErr) {
          return res.status(400).send(`Error getting top courses request: ${mostLikedCoursesErr.message}`);
        }

        res.status(200).json(mostLikedCourses);
        break;

      case 'HOME-get-liked-courses':
        const {
          data: likedCourses,
          error: likedCoursesErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('course_likes').select(`
          courses: course_id (id, name, description, image, materials_available, likes)
        `).order('created_at', {
          ascending: false
        }).eq('user_id', current_user_id);

        if (likedCoursesErr) {
          return res.status(400).send(`Error getting top courses request: ${likedCoursesErr.message}`);
        }

        const likedCoursesArray = likedCourses ? likedCourses.map(array => array.courses) : [];
        res.status(200).json(likedCoursesArray);
        break;

      case 'SEARCH-get-searched-courses':
        if (search === '') {
          return res.status(200).json([]);
        }

        const {
          data: searchedCourses,
          error: searchedCoursesErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('courses').select('id, name, image, likes, materials_available').order('likes', {
          ascending: false
        }) //   .or(`
        //   name.textSearch.${search},description.textSearch.${search},
        // `);
        .textSearch('name', `'${search}'`);

        if (searchedCoursesErr) {
          return res.status(400).send(`Error getting top courses request: ${searchedCoursesErr.message}`);
        }

        res.status(200).json(searchedCourses);
        break;

      case 'SEARCH-get-searched-materials':
        if (search === '') {
          return res.status(200).json([]);
        }

        const {
          data: searchedMaterials,
          error: searchedMaterialsErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('materials').select(`
            id, name, image, likes,
            users: creator_id ( name )
          `) // .order('likes', { ascending: false })
        .textSearch('name', `'${search}'`);

        if (searchedMaterialsErr) {
          return res.status(400).send(`Error getting top materials request: ${searchedMaterialsErr.message}`);
        }

        res.status(200).json(searchedMaterials);
        break;

      case 'COURSE-get-latest-materials':
        const {
          data: latestMaterials,
          error: latestMaterialsErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('materials').select(`
            id, name, image, likes,
            users: creator_id ( name )
          `).order('created_at', {
          ascending: false
        }).eq('course_id', String(course_id));

        if (latestMaterialsErr) {
          return res.status(400).send(`Error getting latest materials request: ${latestMaterialsErr.message}`);
        }

        res.status(200).json(latestMaterials);
        break;

      case 'COURSE-get-top-liked-materials':
        const {
          data: topCourseMaterials,
          error: topCourseMaterialsErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('materials').select(`
          id, name, image, likes,
          users: creator_id ( name )
          `).order('likes', {
          ascending: false
        }).eq('course_id', String(course_id));

        if (topCourseMaterialsErr) {
          return res.status(400).send(`Error getting latest materials request: ${topCourseMaterialsErr.message}`);
        }

        res.status(200).json(topCourseMaterials);
        break;

      case 'HOME-get-liked-materials':
        const {
          data: likedMaterials,
          error: likedMaterialsErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('material_likes').select(`
          materials: material_id (id, name, description, image, likes, creator_id, users: creator_id (name))
        `).order('created_at', {
          ascending: false
        }).eq('user_id', current_user_id);

        if (likedMaterialsErr) {
          return res.status(400).send(`Error getting top materials request: ${likedMaterialsErr.message}`);
        }

        const likedMaterialsArray = likedMaterials ? likedMaterials.map(array => array.materials) : [];
        res.status(200).json(likedMaterialsArray);
        break;

      case 'COURSE-increment-course-view':
        const {
          data
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('incrementcourseview', {
          row_slug_number: course_slug_number
        });
        res.status(200).send(`success: another view added`);
        break;

      default:
        throw new Error('Unhandled event');
    }
  }

  if (req.method === 'POST') {
    const {
      type
    } = req.body.headers;
    const reqBody = req.body;
    const {
      values,
      currentUserId,
      courseId,
      materialId
    } = reqBody;

    switch (type) {
      case 'community-create-course':
        const {
          data: courseData,
          error
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('courses').insert([{
          name: values.name,
          description: values.description,
          image: values.image,
          tags: values.tags,
          creator_id: currentUserId
        }]).single();

        if (error) {
          return res.status(400).send(`Error creating new Course Thread: ${error.message}`);
        }

        res.status(200).json({
          newCourseNumberSlug: courseData.id
        });
        break;

      case 'course-create-material':
        const {
          data: materialData,
          error: err
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('materials').insert([{
          name: values.name,
          description: values.description,
          image: values.image,
          link: values.link,
          tags: values.tags,
          creator_id: currentUserId,
          course_id: courseId
        }]).single();

        if (err) {
          return res.status(400).send(`Error creating new Material: ${err.message}`);
        }

        const {
          data,
          error: incrementCourseMaterialError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('incrementcoursematerial', {
          row_id: courseId
        });

        if (incrementCourseMaterialError) {
          return res.status(400).send(`Error creating new Material: ${incrementCourseMaterialError.message}`);
        }

        res.status(200).json({
          newMaterialId: materialData.id
        });
        break;

      case 'course-like-course':
        const {
          error: likeErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('course_likes').insert([{
          course_id: courseId,
          user_id: currentUserId
        }]);

        if (likeErr) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        const {
          error: incrementCourseLikeError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('incrementcourselike', {
          row_id: courseId
        });

        if (incrementCourseLikeError) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        res.status(200).json({
          success: 'success'
        });
        break;

      case 'course-unlike-course':
        const {
          error: unlikeErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('course_likes').delete().eq('user_id', currentUserId).eq('course_id', courseId);

        if (unlikeErr) {
          return res.status(400).send(`Error while unliking: ${error.message}`);
        }

        const {
          error: decrementCourseLikeError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('decrementcourselike', {
          row_id: courseId
        });

        if (decrementCourseLikeError) {
          return res.status(400).send(`Error while liking: ${error.message}`);
        }

        res.status(200).json({
          success: 'success'
        });
        break;

      case 'RESUME-like-material':
        const {
          error: likeMaterialErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('material_likes').insert([{
          material_id: materialId,
          user_id: currentUserId
        }]);

        if (likeMaterialErr) {
          return res.status(400).send(`Error while liking: ${likeMaterialErr.message}`);
        }

        const {
          error: incrementMaterialLikeError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('incrementmateriallike', {
          row_id: materialId
        });

        if (incrementMaterialLikeError) {
          return res.status(400).send(`Error while liking: ${incrementMaterialLikeError.message}`);
        }

        res.status(200).json({
          success: 'success'
        });
        break;

      case 'RESUME-unlike-material':
        const {
          error: unlikeMaterialErr
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].from('material_likes').delete().eq('user_id', currentUserId).eq('material_id', materialId);

        if (unlikeMaterialErr) {
          return res.status(400).send(`Error while unliking: ${unlikeMaterialErr.message}`);
        }

        const {
          error: decrementMaterialLikeError
        } = await _services_supabase__WEBPACK_IMPORTED_MODULE_1__[/* supabase */ "a"].rpc('decrementmateriallike', {
          row_id: materialId
        });

        if (decrementMaterialLikeError) {
          return res.status(400).send(`Error while liking: ${decrementMaterialLikeError.message}`);
        }

        res.status(200).json({
          success: 'success'
        });
        break;

      default:
        throw new Error('Unhandled event');
    }
  }
}

/***/ }),

/***/ "FctI":
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "TZoU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return supabase; });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UbdS");
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const supabase = Object(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__["createClient"])('https://igjxeqhbrewixmqpeodv.supabase.co', process.env.SUPABASE_ANON_KEY);

/***/ }),

/***/ "UbdS":
/***/ (function(module, exports) {

module.exports = require("@supabase/supabase-js");

/***/ })

/******/ });