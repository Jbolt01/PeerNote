webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/locales/en.js":
/*!***************************!*\
  !*** ./src/locales/en.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  headers: {\n    search: 'Search',\n    community: 'Community',\n    signInWithGoogle: 'Sign In with Google',\n    signIn: 'SignIn'\n  },\n  mainPage: {\n    mainPage: 'PeerNote',\n    h1_part1: 'Learn from',\n    h1_span: 'the \\nsmartest students',\n    h1_part2: '\\nin your class',\n    h2: 'PeerNote is the most convenient way to access \\nand share class resources with your peers!',\n    strong: 'Share knowledge and grow together!',\n    aboutbutton: 'What is PeerNote?',\n    communityButton: 'View Classes'\n  },\n  about: {\n    about: 'About | PeerNote',\n    h1: 'Imagine a Library Made By The',\n    h1_span: 'Worldwide Community',\n    strong: 'Just like a \"Youtube\" for written files',\n    quote: '\"None of us is as smart as all of us.\"',\n    quote_author: '- Kenneth Blanchard',\n    paragraph1: \"It has been proven that one of the best ways to understand a topic is to learn about it from your peers. Teachers are great as primary sources of knowledge but your classmate's also have lots of useful info.\",\n    paragraph2: \"Students already take notes, so why not share them? Your notes could be\",\n    paragraph2_span: 'the missing ingredient in your classmate\\'s understanding.',\n    subtitle: 'This is where PeerNote comes into the picture!',\n    paragraph3: 'We are a platform where students all over the world can share and leave their knowledge to be appreciated by the future generations',\n    howItWorks: 'How it works:',\n    bulletPoint1_part1: '- Sign In to Create a',\n    bulletPoint1_span: 'Course or a Topic',\n    bulletPoint1_part2: 'Thread.',\n    bulletPoint2: \"- On \\\"Thread's Page\\\" link\",\n    bulletPoint2_span: 'your resource.',\n    bulletPoint3: '- Then share your \"Resource Link\" with our',\n    bulletPoint3_span: 'Community!'\n  },\n  home: {\n    greeting: 'Hi',\n    yourLibrary: 'Your Library',\n    likedCourses: 'liked Courses',\n    likedMaterials: 'liked Materials'\n  },\n  communityPage: {\n    community: 'Community',\n    latestCourses: 'Latest Course Topics',\n    topLiked: 'Top Liked Topics',\n    form: {\n      newCourse: 'New Topic/Course',\n      courseName: 'Course Name',\n      courseNameEx: 'Ex: MIT | Undergraduate Degree | Computer Science',\n      courseDescription: 'Course Description',\n      courseUrl: 'Paste here the image URL',\n      tags: 'Tags',\n      tagsEx: 'Ex: mit, indergratuate degree , computer science',\n      closeButton: 'Close',\n      createButton: 'Create'\n    },\n    toast: {\n      title: 'Course Thread created',\n      description: 'Redirecting to Course Page...'\n    }\n  },\n  search: {\n    search: 'Search | PeerNote',\n    placeholder: 'Search by Name...',\n    filterCourse: 'Courses',\n    filterMaterial: 'Resources',\n    filterInstitutions: 'Institutions (soon)',\n    results: 'Results:'\n  },\n  coursePage: {\n    topSummaries: 'Top Resources',\n    latestSummaries: 'Latest Resources',\n    form: {\n      newMaterial: 'New Material',\n      name: 'Name',\n      nameEx: \"Ex: What I learnt on 'Computer Science' at MIT...\",\n      description: 'Description',\n      imageURL: 'Image URL',\n      imageURLEx: '(optional)',\n      materialLink: 'Material Link',\n      materialLinkEx: 'Ex: GDrive, Notion etc...',\n      tags: 'Tags',\n      tagsEx: 'Ex: mit, undergraduate degree, computer science',\n      closeButton: 'Close',\n      createButton: 'Create'\n    },\n    toast: {\n      title: 'Resource Created successfully',\n      description: 'Redirecting to Resource Page...'\n    }\n  },\n  page404: {\n    tabMessage: '404: Page not found',\n    message: 'Oops, nothing here yet...'\n  },\n  materialList: {\n    thumbAlt: 'Resource Thumbnail',\n    like: 'Like',\n    noLikes: 'No Likes'\n  },\n  courseList: {\n    thumbAlt: 'Course Thumbnail',\n    like: 'Like',\n    noLikes: 'No Likes',\n    manySummaries: 'Resources',\n    noSummary: 'No resources yet'\n  },\n  signInButton: {\n    confirmations: 'Do you really want to sign out?',\n    confirmationButton: 'Yep, Sign Out!'\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xvY2FsZXMvZW4uanM/MDkwYiJdLCJuYW1lcyI6WyJoZWFkZXJzIiwic2VhcmNoIiwiY29tbXVuaXR5Iiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbiIsIm1haW5QYWdlIiwiaDFfcGFydDEiLCJoMV9zcGFuIiwiaDFfcGFydDIiLCJoMiIsInN0cm9uZyIsImFib3V0YnV0dG9uIiwiY29tbXVuaXR5QnV0dG9uIiwiYWJvdXQiLCJoMSIsInF1b3RlIiwicXVvdGVfYXV0aG9yIiwicGFyYWdyYXBoMSIsInBhcmFncmFwaDIiLCJwYXJhZ3JhcGgyX3NwYW4iLCJzdWJ0aXRsZSIsInBhcmFncmFwaDMiLCJob3dJdFdvcmtzIiwiYnVsbGV0UG9pbnQxX3BhcnQxIiwiYnVsbGV0UG9pbnQxX3NwYW4iLCJidWxsZXRQb2ludDFfcGFydDIiLCJidWxsZXRQb2ludDIiLCJidWxsZXRQb2ludDJfc3BhbiIsImJ1bGxldFBvaW50MyIsImJ1bGxldFBvaW50M19zcGFuIiwiaG9tZSIsImdyZWV0aW5nIiwieW91ckxpYnJhcnkiLCJsaWtlZENvdXJzZXMiLCJsaWtlZE1hdGVyaWFscyIsImNvbW11bml0eVBhZ2UiLCJsYXRlc3RDb3Vyc2VzIiwidG9wTGlrZWQiLCJmb3JtIiwibmV3Q291cnNlIiwiY291cnNlTmFtZSIsImNvdXJzZU5hbWVFeCIsImNvdXJzZURlc2NyaXB0aW9uIiwiY291cnNlVXJsIiwidGFncyIsInRhZ3NFeCIsImNsb3NlQnV0dG9uIiwiY3JlYXRlQnV0dG9uIiwidG9hc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGxhY2Vob2xkZXIiLCJmaWx0ZXJDb3Vyc2UiLCJmaWx0ZXJNYXRlcmlhbCIsImZpbHRlckluc3RpdHV0aW9ucyIsInJlc3VsdHMiLCJjb3Vyc2VQYWdlIiwidG9wU3VtbWFyaWVzIiwibGF0ZXN0U3VtbWFyaWVzIiwibmV3TWF0ZXJpYWwiLCJuYW1lIiwibmFtZUV4IiwiaW1hZ2VVUkwiLCJpbWFnZVVSTEV4IiwibWF0ZXJpYWxMaW5rIiwibWF0ZXJpYWxMaW5rRXgiLCJwYWdlNDA0IiwidGFiTWVzc2FnZSIsIm1lc3NhZ2UiLCJtYXRlcmlhbExpc3QiLCJ0aHVtYkFsdCIsImxpa2UiLCJub0xpa2VzIiwiY291cnNlTGlzdCIsIm1hbnlTdW1tYXJpZXMiLCJub1N1bW1hcnkiLCJzaWduSW5CdXR0b24iLCJjb25maXJtYXRpb25zIiwiY29uZmlybWF0aW9uQnV0dG9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLDhDQUFlO0FBQ2JBLFNBQU8sRUFBRTtBQUNQQyxVQUFNLEVBQUUsUUFERDtBQUVQQyxhQUFTLEVBQUUsV0FGSjtBQUlQQyxvQkFBZ0IsRUFBRSxxQkFKWDtBQUtQQyxVQUFNLEVBQUU7QUFMRCxHQURJO0FBU2JDLFVBQVEsRUFBRTtBQUNSQSxZQUFRLEVBQUUsVUFERjtBQUVSQyxZQUFRLEVBQUUsWUFGRjtBQUdSQyxXQUFPLEVBQUUseUJBSEQ7QUFJUkMsWUFBUSxFQUFFLGlCQUpGO0FBS1JDLE1BQUUsRUFBRSw0RkFMSTtBQU1SQyxVQUFNLEVBQUUsb0NBTkE7QUFPUkMsZUFBVyxFQUFFLG1CQVBMO0FBUVJDLG1CQUFlLEVBQUU7QUFSVCxHQVRHO0FBb0JiQyxPQUFLLEVBQUU7QUFDTEEsU0FBSyxFQUFFLGtCQURGO0FBR0xDLE1BQUUsRUFBRSwrQkFIQztBQUlMUCxXQUFPLEVBQUUscUJBSko7QUFLTEcsVUFBTSxFQUFFLHlDQUxIO0FBT0xLLFNBQUssRUFBRSx3Q0FQRjtBQVFMQyxnQkFBWSxFQUFFLHFCQVJUO0FBVUxDLGNBQVUsbU5BVkw7QUFXTEMsY0FBVSwyRUFYTDtBQVlMQyxtQkFBZSxFQUFFLDREQVpaO0FBY0xDLFlBQVEsRUFBRSxnREFkTDtBQWVMQyxjQUFVLEVBQ1IscUlBaEJHO0FBa0JMQyxjQUFVLEVBQUUsZUFsQlA7QUFvQkxDLHNCQUFrQixFQUFFLHVCQXBCZjtBQXFCTEMscUJBQWlCLEVBQUUsbUJBckJkO0FBc0JMQyxzQkFBa0IsRUFBRSxTQXRCZjtBQXdCTEMsZ0JBQVksK0JBeEJQO0FBeUJMQyxxQkFBaUIsRUFBRSxnQkF6QmQ7QUEyQkxDLGdCQUFZLEVBQUUsNENBM0JUO0FBNEJMQyxxQkFBaUIsRUFBRTtBQTVCZCxHQXBCTTtBQW1EYkMsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRSxJQUROO0FBRUpDLGVBQVcsRUFBRSxjQUZUO0FBSUpDLGdCQUFZLEVBQUUsZUFKVjtBQUtKQyxrQkFBYyxFQUFFO0FBTFosR0FuRE87QUEyRGJDLGVBQWEsRUFBRTtBQUNiakMsYUFBUyxFQUFFLFdBREU7QUFFYmtDLGlCQUFhLEVBQUUsc0JBRkY7QUFHYkMsWUFBUSxFQUFFLGtCQUhHO0FBS2JDLFFBQUksRUFBRTtBQUNKQyxlQUFTLEVBQUUsa0JBRFA7QUFFSkMsZ0JBQVUsRUFBRSxhQUZSO0FBR0pDLGtCQUFZLEVBQUUsbURBSFY7QUFJSkMsdUJBQWlCLEVBQUUsb0JBSmY7QUFLSkMsZUFBUyxFQUFFLDBCQUxQO0FBTUpDLFVBQUksRUFBRSxNQU5GO0FBT0pDLFlBQU0sRUFBRSxrREFQSjtBQVNKQyxpQkFBVyxFQUFFLE9BVFQ7QUFVSkMsa0JBQVksRUFBRTtBQVZWLEtBTE87QUFrQmJDLFNBQUssRUFBRTtBQUNMQyxXQUFLLEVBQUUsdUJBREY7QUFFTEMsaUJBQVcsRUFBRTtBQUZSO0FBbEJNLEdBM0RGO0FBbUZiakQsUUFBTSxFQUFFO0FBQ05BLFVBQU0sRUFBRSxtQkFERjtBQUdOa0QsZUFBVyxFQUFFLG1CQUhQO0FBS05DLGdCQUFZLEVBQUUsU0FMUjtBQU1OQyxrQkFBYyxFQUFFLFdBTlY7QUFPTkMsc0JBQWtCLEVBQUUscUJBUGQ7QUFTTkMsV0FBTyxFQUFFO0FBVEgsR0FuRks7QUErRmJDLFlBQVUsRUFBRTtBQUNWQyxnQkFBWSxFQUFFLGVBREo7QUFFVkMsbUJBQWUsRUFBRSxrQkFGUDtBQUlWcEIsUUFBSSxFQUFFO0FBQ0pxQixpQkFBVyxFQUFFLGNBRFQ7QUFFSkMsVUFBSSxFQUFFLE1BRkY7QUFHSkMsWUFBTSxxREFIRjtBQUlKWCxpQkFBVyxFQUFFLGFBSlQ7QUFLSlksY0FBUSxFQUFFLFdBTE47QUFNSkMsZ0JBQVUsRUFBRSxZQU5SO0FBT0pDLGtCQUFZLEVBQUUsZUFQVjtBQVFKQyxvQkFBYyxFQUFFLDJCQVJaO0FBU0pyQixVQUFJLEVBQUUsTUFURjtBQVVKQyxZQUFNLEVBQUUsaURBVko7QUFZSkMsaUJBQVcsRUFBRSxPQVpUO0FBYUpDLGtCQUFZLEVBQUU7QUFiVixLQUpJO0FBb0JWQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFLCtCQURGO0FBRUxDLGlCQUFXLEVBQUU7QUFGUjtBQXBCRyxHQS9GQztBQXlIYmdCLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUUscUJBREw7QUFFUEMsV0FBTyxFQUFFO0FBRkYsR0F6SEk7QUE4SGJDLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUUsb0JBREU7QUFHWkMsUUFBSSxFQUFFLE1BSE07QUFJWkMsV0FBTyxFQUFFO0FBSkcsR0E5SEQ7QUFxSWJDLFlBQVUsRUFBRTtBQUNWSCxZQUFRLEVBQUUsa0JBREE7QUFHVkMsUUFBSSxFQUFFLE1BSEk7QUFJVkMsV0FBTyxFQUFFLFVBSkM7QUFNVkUsaUJBQWEsRUFBRSxXQU5MO0FBT1ZDLGFBQVMsRUFBRTtBQVBELEdBcklDO0FBK0liQyxjQUFZLEVBQUU7QUFDWkMsaUJBQWEsRUFBRSxpQ0FESDtBQUVaQyxzQkFBa0IsRUFBRTtBQUZSO0FBL0lELENBQWYiLCJmaWxlIjoiLi9zcmMvbG9jYWxlcy9lbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgaGVhZGVyczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgY29tbXVuaXR5OiAnQ29tbXVuaXR5JyxcblxuICAgIHNpZ25JbldpdGhHb29nbGU6ICdTaWduIEluIHdpdGggR29vZ2xlJyxcbiAgICBzaWduSW46ICdTaWduSW4nLFxuICB9LFxuXG4gIG1haW5QYWdlOiB7XG4gICAgbWFpblBhZ2U6ICdQZWVyTm90ZScsXG4gICAgaDFfcGFydDE6ICdMZWFybiBmcm9tJyxcbiAgICBoMV9zcGFuOiAndGhlIFxcbnNtYXJ0ZXN0IHN0dWRlbnRzJyxcbiAgICBoMV9wYXJ0MjogJ1xcbmluIHlvdXIgY2xhc3MnLFxuICAgIGgyOiAnUGVlck5vdGUgaXMgdGhlIG1vc3QgY29udmVuaWVudCB3YXkgdG8gYWNjZXNzIFxcbmFuZCBzaGFyZSBjbGFzcyByZXNvdXJjZXMgd2l0aCB5b3VyIHBlZXJzIScsXG4gICAgc3Ryb25nOiAnU2hhcmUga25vd2xlZGdlIGFuZCBncm93IHRvZ2V0aGVyIScsXG4gICAgYWJvdXRidXR0b246ICdXaGF0IGlzIFBlZXJOb3RlPycsXG4gICAgY29tbXVuaXR5QnV0dG9uOiAnVmlldyBDbGFzc2VzJyxcbiAgfSxcblxuICBhYm91dDoge1xuICAgIGFib3V0OiAnQWJvdXQgfCBQZWVyTm90ZScsXG5cbiAgICBoMTogJ0ltYWdpbmUgYSBMaWJyYXJ5IE1hZGUgQnkgVGhlJyxcbiAgICBoMV9zcGFuOiAnV29ybGR3aWRlIENvbW11bml0eScsXG4gICAgc3Ryb25nOiAnSnVzdCBsaWtlIGEgXCJZb3V0dWJlXCIgZm9yIHdyaXR0ZW4gZmlsZXMnLFxuXG4gICAgcXVvdGU6ICdcIk5vbmUgb2YgdXMgaXMgYXMgc21hcnQgYXMgYWxsIG9mIHVzLlwiJyxcbiAgICBxdW90ZV9hdXRob3I6ICctIEtlbm5ldGggQmxhbmNoYXJkJyxcblxuICAgIHBhcmFncmFwaDE6IGBJdCBoYXMgYmVlbiBwcm92ZW4gdGhhdCBvbmUgb2YgdGhlIGJlc3Qgd2F5cyB0byB1bmRlcnN0YW5kIGEgdG9waWMgaXMgdG8gbGVhcm4gYWJvdXQgaXQgZnJvbSB5b3VyIHBlZXJzLiBUZWFjaGVycyBhcmUgZ3JlYXQgYXMgcHJpbWFyeSBzb3VyY2VzIG9mIGtub3dsZWRnZSBidXQgeW91ciBjbGFzc21hdGUncyBhbHNvIGhhdmUgbG90cyBvZiB1c2VmdWwgaW5mby5gLFxuICAgIHBhcmFncmFwaDI6IGBTdHVkZW50cyBhbHJlYWR5IHRha2Ugbm90ZXMsIHNvIHdoeSBub3Qgc2hhcmUgdGhlbT8gWW91ciBub3RlcyBjb3VsZCBiZWAsXG4gICAgcGFyYWdyYXBoMl9zcGFuOiAndGhlIG1pc3NpbmcgaW5ncmVkaWVudCBpbiB5b3VyIGNsYXNzbWF0ZVxcJ3MgdW5kZXJzdGFuZGluZy4nLFxuXG4gICAgc3VidGl0bGU6ICdUaGlzIGlzIHdoZXJlIFBlZXJOb3RlIGNvbWVzIGludG8gdGhlIHBpY3R1cmUhJyxcbiAgICBwYXJhZ3JhcGgzOlxuICAgICAgJ1dlIGFyZSBhIHBsYXRmb3JtIHdoZXJlIHN0dWRlbnRzIGFsbCBvdmVyIHRoZSB3b3JsZCBjYW4gc2hhcmUgYW5kIGxlYXZlIHRoZWlyIGtub3dsZWRnZSB0byBiZSBhcHByZWNpYXRlZCBieSB0aGUgZnV0dXJlIGdlbmVyYXRpb25zJyxcblxuICAgIGhvd0l0V29ya3M6ICdIb3cgaXQgd29ya3M6JyxcblxuICAgIGJ1bGxldFBvaW50MV9wYXJ0MTogJy0gU2lnbiBJbiB0byBDcmVhdGUgYScsXG4gICAgYnVsbGV0UG9pbnQxX3NwYW46ICdDb3Vyc2Ugb3IgYSBUb3BpYycsXG4gICAgYnVsbGV0UG9pbnQxX3BhcnQyOiAnVGhyZWFkLicsXG5cbiAgICBidWxsZXRQb2ludDI6IGAtIE9uIFwiVGhyZWFkJ3MgUGFnZVwiIGxpbmtgLFxuICAgIGJ1bGxldFBvaW50Ml9zcGFuOiAneW91ciByZXNvdXJjZS4nLFxuXG4gICAgYnVsbGV0UG9pbnQzOiAnLSBUaGVuIHNoYXJlIHlvdXIgXCJSZXNvdXJjZSBMaW5rXCIgd2l0aCBvdXInLFxuICAgIGJ1bGxldFBvaW50M19zcGFuOiAnQ29tbXVuaXR5IScsXG4gIH0sXG5cbiAgaG9tZToge1xuICAgIGdyZWV0aW5nOiAnSGknLFxuICAgIHlvdXJMaWJyYXJ5OiAnWW91ciBMaWJyYXJ5JyxcblxuICAgIGxpa2VkQ291cnNlczogJ2xpa2VkIENvdXJzZXMnLFxuICAgIGxpa2VkTWF0ZXJpYWxzOiAnbGlrZWQgTWF0ZXJpYWxzJyxcbiAgfSxcblxuICBjb21tdW5pdHlQYWdlOiB7XG4gICAgY29tbXVuaXR5OiAnQ29tbXVuaXR5JyxcbiAgICBsYXRlc3RDb3Vyc2VzOiAnTGF0ZXN0IENvdXJzZSBUb3BpY3MnLFxuICAgIHRvcExpa2VkOiAnVG9wIExpa2VkIFRvcGljcycsXG5cbiAgICBmb3JtOiB7XG4gICAgICBuZXdDb3Vyc2U6ICdOZXcgVG9waWMvQ291cnNlJyxcbiAgICAgIGNvdXJzZU5hbWU6ICdDb3Vyc2UgTmFtZScsXG4gICAgICBjb3Vyc2VOYW1lRXg6ICdFeDogTUlUIHwgVW5kZXJncmFkdWF0ZSBEZWdyZWUgfCBDb21wdXRlciBTY2llbmNlJyxcbiAgICAgIGNvdXJzZURlc2NyaXB0aW9uOiAnQ291cnNlIERlc2NyaXB0aW9uJyxcbiAgICAgIGNvdXJzZVVybDogJ1Bhc3RlIGhlcmUgdGhlIGltYWdlIFVSTCcsXG4gICAgICB0YWdzOiAnVGFncycsXG4gICAgICB0YWdzRXg6ICdFeDogbWl0LCBpbmRlcmdyYXR1YXRlIGRlZ3JlZSAsIGNvbXB1dGVyIHNjaWVuY2UnLFxuXG4gICAgICBjbG9zZUJ1dHRvbjogJ0Nsb3NlJyxcbiAgICAgIGNyZWF0ZUJ1dHRvbjogJ0NyZWF0ZScsXG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICB0aXRsZTogJ0NvdXJzZSBUaHJlYWQgY3JlYXRlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1JlZGlyZWN0aW5nIHRvIENvdXJzZSBQYWdlLi4uJyxcbiAgICB9LFxuICB9LFxuXG4gIHNlYXJjaDoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCB8IFBlZXJOb3RlJyxcblxuICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5IE5hbWUuLi4nLFxuXG4gICAgZmlsdGVyQ291cnNlOiAnQ291cnNlcycsXG4gICAgZmlsdGVyTWF0ZXJpYWw6ICdSZXNvdXJjZXMnLFxuICAgIGZpbHRlckluc3RpdHV0aW9uczogJ0luc3RpdHV0aW9ucyAoc29vbiknLFxuXG4gICAgcmVzdWx0czogJ1Jlc3VsdHM6JyxcbiAgfSxcblxuICBjb3Vyc2VQYWdlOiB7XG4gICAgdG9wU3VtbWFyaWVzOiAnVG9wIFJlc291cmNlcycsXG4gICAgbGF0ZXN0U3VtbWFyaWVzOiAnTGF0ZXN0IFJlc291cmNlcycsXG5cbiAgICBmb3JtOiB7XG4gICAgICBuZXdNYXRlcmlhbDogJ05ldyBNYXRlcmlhbCcsXG4gICAgICBuYW1lOiAnTmFtZScsXG4gICAgICBuYW1lRXg6IGBFeDogV2hhdCBJIGxlYXJudCBvbiAnQ29tcHV0ZXIgU2NpZW5jZScgYXQgTUlULi4uYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24nLFxuICAgICAgaW1hZ2VVUkw6ICdJbWFnZSBVUkwnLFxuICAgICAgaW1hZ2VVUkxFeDogJyhvcHRpb25hbCknLFxuICAgICAgbWF0ZXJpYWxMaW5rOiAnTWF0ZXJpYWwgTGluaycsXG4gICAgICBtYXRlcmlhbExpbmtFeDogJ0V4OiBHRHJpdmUsIE5vdGlvbiBldGMuLi4nLFxuICAgICAgdGFnczogJ1RhZ3MnLFxuICAgICAgdGFnc0V4OiAnRXg6IG1pdCwgdW5kZXJncmFkdWF0ZSBkZWdyZWUsIGNvbXB1dGVyIHNjaWVuY2UnLFxuXG4gICAgICBjbG9zZUJ1dHRvbjogJ0Nsb3NlJyxcbiAgICAgIGNyZWF0ZUJ1dHRvbjogJ0NyZWF0ZScsXG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICB0aXRsZTogJ1Jlc291cmNlIENyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmVkaXJlY3RpbmcgdG8gUmVzb3VyY2UgUGFnZS4uLicsXG4gICAgfSxcbiAgfSxcblxuICBwYWdlNDA0OiB7XG4gICAgdGFiTWVzc2FnZTogJzQwNDogUGFnZSBub3QgZm91bmQnLFxuICAgIG1lc3NhZ2U6ICdPb3BzLCBub3RoaW5nIGhlcmUgeWV0Li4uJyxcbiAgfSxcblxuICBtYXRlcmlhbExpc3Q6IHtcbiAgICB0aHVtYkFsdDogJ1Jlc291cmNlIFRodW1ibmFpbCcsXG5cbiAgICBsaWtlOiAnTGlrZScsXG4gICAgbm9MaWtlczogJ05vIExpa2VzJyxcbiAgfSxcblxuICBjb3Vyc2VMaXN0OiB7XG4gICAgdGh1bWJBbHQ6ICdDb3Vyc2UgVGh1bWJuYWlsJyxcblxuICAgIGxpa2U6ICdMaWtlJyxcbiAgICBub0xpa2VzOiAnTm8gTGlrZXMnLFxuXG4gICAgbWFueVN1bW1hcmllczogJ1Jlc291cmNlcycsXG4gICAgbm9TdW1tYXJ5OiAnTm8gcmVzb3VyY2VzIHlldCcsXG4gIH0sXG5cbiAgc2lnbkluQnV0dG9uOiB7XG4gICAgY29uZmlybWF0aW9uczogJ0RvIHlvdSByZWFsbHkgd2FudCB0byBzaWduIG91dD8nLFxuICAgIGNvbmZpcm1hdGlvbkJ1dHRvbjogJ1llcCwgU2lnbiBPdXQhJyxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/locales/en.js\n");

/***/ })

})