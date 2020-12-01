import { HomePage, PageOne, PageTwo } from '../pages';
import { Home, LooksOne, LooksTwo } from '@material-ui/icons';

export const PAGES = [
    {
        title: 'Home Page',
        route: '/',
        component: HomePage,
        icon: Home,
    },
    {
        title: 'Page One',
        route: '/page-one',
        component: PageOne,
        icon: LooksOne,
    },
    {
        title: 'Page Two',
        route: '/page-two',
        component: PageTwo,
        icon: LooksTwo,
    },
];
