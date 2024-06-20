// import {
//   IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
// } from '@tabler/icons';

import { Aperture, Dashboard, Aperture as IconAperture, Copy as IconCopy, LayoutDashboard as IconLayoutDashboard, Login as IconLogin, MoodHappy as IconMoodHappy, Typography as IconTypography, UserPlus as IconUserPlus} from 'tabler-icons-react';

import { uniqueId } from 'lodash';
import { saveLocalStorage } from 'src/funAuth/localStorage';

const logout = () => {
  saveLocalStorage("loginStatus",false);
}

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Main',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: Dashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Notification',
    icon: IconLayoutDashboard,
    href: '/notification',
  },
  {
    navlabel: true,
    subheader: 'Request',
  },
  {
    id: uniqueId(),
    title: 'Club',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'TEF/FEI Athele',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'COACH',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Petition',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'FEI Evert',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'TEI/FEI Equine',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Ownership',
    icon: IconTypography,
    href: '/ui/typography',
  },

  {
    navlabel: true,
    subheader: 'Show',
  },
  {
    id: uniqueId(),
    title: 'Calender',
    icon: IconTypography,
    href: '/ui/typography',
  },
  {
    id: uniqueId(),
    title: 'Entry result',
    icon: IconCopy,
    href: '/ui/shadow',
  },
  {
    navlabel: true,
    subheader: 'ACADEMY',
  },
  {
    id: uniqueId(),
    title: 'Course',
    icon: IconLogin,
    href: '/auth/login',
  },
  // {
  //   navlabel: true,
  //   subheader: 'Auth',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Login',
  //   icon: IconLogin,
  //   href: '/auth/login',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Register',
  //   icon: IconUserPlus,
  //   href: '/auth/register',
  // },
  // {
  //   navlabel: true,
  //   subheader: 'Extra',
  // },
  // {
  //   id: uniqueId(),
  //   title: 'Icons',
  //   icon: IconMoodHappy,
  //   href: '/icons',
  // },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconAperture,
    href: '/sample-page',
  },
];

export default Menuitems;
