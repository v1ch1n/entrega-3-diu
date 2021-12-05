import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import { Cog as CogIcon } from '../icons/cog';
import { Logo } from './logo';
import { NavItem } from './nav-item';
import {Chat,Home,Help,Cloud,Group,QueryStats} from '@mui/icons-material';

const items = [
  {
    href: '/',
    icon: (<Home fontSize="large"></Home>),
    title: 'Home'
  },
  {
    href: '/projects',
    icon: (<Cloud fontSize="small" />),
    title: 'Proyectos'
  },
  {
    href: '/stats',
    icon: (<QueryStats fontSize="small" />),
    title: 'Estadísticas'
  },
  {
    href: '/members',
    icon: (<Group fontSize="small" />),
    title: 'Miembros'
  },
  {
    href: '/404',
    icon: (<Chat fontSize="small" />),
    title: 'Chat'
  },
  {
    href: '/404',
    icon: (<CogIcon fontSize="small" />),
    title: 'Configuración'
  },
  {
    href: '/help',
    icon: (<Help fontSize="small" />),
    title: 'Ayuda'
  }
  
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#FFFFFF',
            color: '#FFFFFF',
            width: 200
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 200
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
