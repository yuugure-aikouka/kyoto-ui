'use client';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Interactable from '@/components/Interactable';

import { Moon, Sun } from 'react-feather';

import { ThemeContext } from '@/contexts/ThemeProvider';

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
  const [hasSwitched, setHasSwitched] = React.useState(false);

  return (
    <Interactable
      onClick={() => {
        toggleTheme();
        setHasSwitched(true);
      }}>
      {theme === 'light' ? (
        <AnimatedSun
          $hasSwitched={hasSwitched}
          size={`${22 / 16}rem`}
        />
      ) : (
        <AnimatedMoon
          $hasSwitched={hasSwitched}
          size={`${22 / 16}rem`}
        />
      )}
    </Interactable>
  );
};

export default ThemeToggle;
