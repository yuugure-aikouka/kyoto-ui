'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Cookie from 'js-cookie';

import Interactable from '@/components/Interactable';

import { Moon, Sun } from 'react-feather';
import { LIGHT_COLORS, DARK_COLORS } from '@/const/COLORS';
import { ThemeContext } from '@/components/ThemeProvider';

const RotatingKeyframe = keyframes`
  0% {
    transform: rotate(0.25turn);
    filter: blur(1px);
  }
  50% {
    transform: rotate(-0.15turn);
  }
  100% {
    transform: rotate(0);
    filter: blur(0px);
  }
`;

type IconProps = {
  $hasSwitched: boolean;
};

const AnimatedSun = styled(Sun)<IconProps>`
  animation: ${RotatingKeyframe} both 500ms ease-in-out;
  animation-duration: ${(props) =>
    props.$hasSwitched ? '500ms' : '0ms'};
`;

const AnimatedMoon = styled(Moon)<IconProps>`
  animation: ${RotatingKeyframe} both 500ms ease-in-out;
  animation-duration: ${(props) =>
    props.$hasSwitched ? '500ms' : '0ms'};
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const handleClick = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme();

    Cookie.set('color-theme', nextTheme, {
      expires: 1000,
    });

    // HACK: we're interfering with element outside of react directly.
    // sadly, there's nothing we can do, it is what it is
    const root = document.documentElement;
    const colors = nextTheme === 'light' ? LIGHT_COLORS : DARK_COLORS;
    root.setAttribute('data-color-theme', nextTheme);

    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  const [hasSwitched, setHasSwitched] = React.useState(false);

  return (
    <Interactable
      onClick={() => {
        handleClick();
        setHasSwitched(true);
      }}>
      {theme === 'light' ? (
        <AnimatedSun $hasSwitched={hasSwitched} size="22px" />
      ) : (
        <AnimatedMoon $hasSwitched={hasSwitched} size="22px" />
      )}
    </Interactable>
  );
};

export default ThemeToggle;
