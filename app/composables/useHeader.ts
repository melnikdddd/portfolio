import { Routes } from '#shared/constants/routes';

export const useHeader = () => {
  const { t } = useI18n();
  const isMenuOpened = useState('header:menuOpened', () => false);

  const toggleMenu = () => {
    isMenuOpened.value = !isMenuOpened.value;
  };

  const closeMenu = () => {
    isMenuOpened.value = false;
  };

  const links = computed<NavLink[]>(() => [
    {
      text: t('header.links.resume'),
      href: Routes.resume.get(),
    },
    {
      text: t('header.links.skills'),
      href: Routes.skills.get(),
    },
    {
      text: t('header.links.contacts'),
      href: Routes.contacts.get(),
    },
  ]);

  return {
    isMenuOpened,
    toggleMenu,
    closeMenu,
    links,
  };
};
