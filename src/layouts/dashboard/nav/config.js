// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'patients',
    path: '/dashboard/patients',
    icon: icon('ic_user'),
  },
  {
    title: 'appointments',
    path: '/dashboard/appointments',
    icon: icon('ic_appointments'),
  },
  {
    title: 'chats',
    path: '/dashboard/chats',
    icon: icon('ic_chats'),
  },

];

export default navConfig;
