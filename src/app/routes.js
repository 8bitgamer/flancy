import App from 'app/components/App';
import { Home, Overview, Detail } from 'app/components/modules';

export default [
    {
        component: App,
        childRoutes: [
            {
                component: Home,
                path: '/',
            },
            {
                component: Overview,
                path: '/overview/:query',
            },
            {
                component: Detail,
                path: '/detail/:id',
            }
        ],
    },
];
