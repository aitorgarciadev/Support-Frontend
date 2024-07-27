import { createRouter, createWebHistory } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");
const SupportView = () => import("../views/SupportView.vue");
const ModifyView = () => import("../views/ModifyView.vue");
const RequestsView = () => import("../views/RequestsView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: { title: "SupportApp" },
    },

    {
      path: "/new-request",
      name: "NewRequest",
      component: SupportView,
      meta: { title: "New Request" },
    },
    {
      path: "/edit-request/:id",
      name: "EditRequest",
      component: ModifyView,
      props: true,
      meta: { title: "Edit Request" },
    },
    {
      path: "/request-list",
      name: "RequestList",
      component: RequestsView,
      meta: { title: "Request List" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "SupportApp";
  next();
});

export default router;
