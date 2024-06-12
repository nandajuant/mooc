//import vue router
import { createRouter, createWebHistory } from 'vue-router'
//define a routes
const routes = [
{
path: '/program',
name: 'program',
component: () => import('@/components/DashboardLayout.vue'),
children:[
    {
        path: "/program",
        name: "siswa.program",
        component: () =>
        import('@/components/Siswa/ProgramPage.vue'),
    },
    {
        path: "/about",
        name: "siswa.about",
        component: () =>
        import('@/components/Siswa/AboutPage.vue'),
    },
    {
        path: "/profil",
        name: "siswa.profil",
        component: () =>
        import('@/components/Siswa/ProfilePage.vue'),
    },
    {
        path: "/basiclistening",
        name: "program.listening",
        component: () =>
        import('@/components/Siswa/Program/Listening/IndexPage.vue'),
    },
    {
        path: "/basiclistening/halaman1",
        name: "program.listening.part1",
        component: () =>
        import('@/components/Siswa/Program/Listening/VideoPage.vue'),
    },
    {
        path: "/basiclistening/halaman2",
        name: "program.listening.part2",
        component: () =>
        import('@/components/Siswa/Program/Listening/MateriPage.vue'),
    },
    {
        path: "/basiclistening/test",
        name: "program.listening.test",
        component: () =>
        import('@/components/Siswa/Program/Listening/TestPage.vue'),
    },
    {
        path: "/basiclistening/hasil",
        name: "program.listening.hasil",
        component: () =>
        import('@/components/Siswa/Program/Listening/HasilPage.vue'),
    },
    {
        path: "/basiclistening/detail",
        name: "program.listening.detail",
        component: () =>
        import('@/components/Siswa/Program/Listening/DetailPage.vue'),
    },
    {
        path: "/structure",
        name: "program.structure",
        component: () =>
        import('@/components/Siswa/Program/Structure/IndexPage.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/video",
        name: "program.structure.part1.video",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/VideoPage.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/materi",
        name: "program.structure.part1.materi",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/MateriPage.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/materi2",
        name: "program.structure.part1.materi2",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/MateriPage2.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/materi3",
        name: "program.structure.part1.materi3",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/MateriPage3.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/test",
        name: "program.structure.part1.test",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/TestPage.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/hasil",
        name: "program.structure.part1.hasil",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/HasilPage.vue'),
    },
    {
        path: "/structure/sentences_with_one_clause/detail",
        name: "program.structure.part1.detail",
        component: () =>
        import('@/components/Siswa/Program/Structure/1/DetailPage.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/video",
        name: "program.structure.part2.video",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/VideoPage.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/materi",
        name: "program.structure.part2.materi",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/MateriPage.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/materi2",
        name: "program.structure.part2.materi2",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/MateriPage2.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/materi3",
        name: "program.structure.part2.materi3",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/MateriPage3.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/test",
        name: "program.structure.part2.test",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/TestPage.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/hasil",
        name: "program.structure.part2.hasil",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/HasilPage.vue'),
    },
    {
        path: "/structure/sentences_with_multiple_clause/detail",
        name: "program.structure.part2.detail",
        component: () =>
        import('@/components/Siswa/Program/Structure/2/DetailPage.vue'),
    },
    {
        path: "/basicreading",
        name: "program.reading",
        component: () =>
        import('@/components/Siswa/Program/Reading/IndexPage.vue'),
    },
    {
        path: "/basicreading/halaman1",
        name: "program.reading.part1",
        component: () =>
        import('@/components/Siswa/Program/Reading/VideoPage.vue'),
    },
    {
        path: "/basicreading/halaman2",
        name: "program.reading.part2",
        component: () =>
        import('@/components/Siswa/Program/Reading/MateriPage.vue'),
    },
    {
        path: "/basicreading/test",
        name: "program.reading.test",
        component: () =>
        import('@/components/Siswa/Program/Reading/TestPage.vue'),
    },
    {
        path: "/basicreading/hasil",
        name: "program.reading.hasil",
        component: () =>
        import('@/components/Siswa/Program/Reading/HasilPage.vue'),
    },
    {
        path: "/basicreading/detail",
        name: "program.reading.detail",
        component: () =>
        import('@/components/Siswa/Program/Reading/DetailPage.vue'),
    },
],
},
{
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/DashboardLayoutAdmin.vue'),
    children:[
        {
            path: "/admin/program",
            name: "admin.program",
            component: () =>
            import('@/components/Admin/ProgramPage.vue'),
        },
        {
            path: "/admin/tambah",
            name: "admin.tambah",
            component: () =>
            import('@/components/Admin/TambahPage.vue'),
        },
        {
            path: "/admin/ubah",
            name: "admin.ubah",
            component: () =>
            import('@/components/Admin/UbahPage.vue'),
        },
        {
            path: "/admin/ubah/materi",
            name: "admin.ubahmateri",
            component: () =>
            import('@/components/Admin/UbahMateriPage.vue'),
        },
        {
            path: "/admin/about",
            name: "admin.about",
            component: () =>
            import('@/components/Admin/AboutPage.vue'),
        },
        {
            path: "/admin/profil",
            name: "admin.profil",
            component: () =>
            import('@/components/Admin/ProfilePage.vue'),
        },
    ],
},
{
    path: '/login',
    name: 'login',
    component: () => import('@/components/LogRegLayout.vue'),
    children:[
        // {
        //     path: "/",
        //     name: "login", 
        //     component: () =>
        //     import('@/components/LoginRegister/LoginPage.vue'),
        // },
        {
            path: "/login",
            name: "login",
            component: () =>
            import('@/components/LoginRegister/LoginPage.vue'),
        },
        {
            path: "/register",
            name: "register",
            component: () =>
            import('@/components/LoginRegister/RegisterPage.vue'),
        },
    ]
}
]
//create router
const router = createRouter({
history: createWebHistory(),
routes // config routes
})
export default router;