import { createRouter, createWebHistory } from 'vue-router'
import FormAnswer from '../pages/formAnswer.vue';



let routes = [
  {
    path: '/',
    name: 'home',
    component:FormAnswer
  },
  {
    path: '/formAnswer/',
    name: 'fA',
    component:FormAnswer
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/formAnswer/:id',
    name: 'formAnswer',
    component: FormAnswer,
  },
];

// Catch-all route for undefined routes
// routes.push({
//   path: '/:catchAll(.*)',
//   name: 'formAnswer',
//   component: FormAnswer
// });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     // Check if the user is authenticated (replace this with your own session check logic)
//     const isAuthenticated = checkSession(); // Implement your own checkSession function
//     if (!isAuthenticated) {
//       // User is not authenticated, redirect to the login page
//       next('/');
//     } else {
//       // User is authenticated, proceed to the next route
//       next();
//     }
//   } else {
//     // If the route doesn't require authentication, proceed to the next route
//     next();
//   }
// });

// function checkSession(){
//   if(JSON.parse(localStorage.getItem('user_cms'))!=null){
//     return true;
//   }else{
//     return false;
//   }
// }

export default router
