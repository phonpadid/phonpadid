const moduleRouter = {
    path: '/event',
    component: () => import(/* webpackChunkName: "Event" */'@/views/Pages/Event/Event.vue'),
    children: [
        {
            component: () => import(/* webpackChunkName: "Event Index" */ '@/views/Pages/Event/Index.vue'),
            path: '',
            name: 'event.index',
            meta: {
                title: "Event",
                name: "Event",
                layout: "admin",
            }
        },
        {
            component: () => import(/* webpackChunkName: "Event Manage" */ '@/views/Pages/Event/TabItem/Manage.vue'),
            path: 'create',
            name: 'event.create',
            meta: {
                title: "Event",
                name: "Event",
                layout: "admin",
            }
        },
    ],
}


export default router => {
    router.addRoute(moduleRouter);
};
