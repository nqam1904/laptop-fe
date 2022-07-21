import React, { useState, useEffect } from 'react';
// hooks
import { useAppStore } from 'hooks';
// constants
import { screen } from 'constants/screen';
// utils
import useWindowSize from 'utils/resizeWindow';

export default function DeviceDetect() {
  const size = useWindowSize();
  // Stores
  const [, updateAppStore] = useAppStore();
  // states
  const [isFirstRender, setIsFirstRender] = useState(true);

  function onInitialDevice() {
    // Nhận biết thiết bị lần đầu render
    if (size.width < screen.mobile) {
      updateAppStore((draft) => {
        draft.isMobile = true;
      });
    }
    if (size.width >= screen.minTablet && size.width <= screen.maxTablet) {
      updateAppStore((draft) => {
        draft.isTablet = true;
      });
    }
    if (size.width > screen.desktop) {
      updateAppStore((draft) => {
        draft.isDesktop = true;
      });
    }
  }

  function onChangeDevice() {
    // Khi thay đổi width màn hình
    if (size.width < screen.mobile) {
      updateAppStore((draft) => {
        draft.isMobile = true;
        draft.isTablet = false;
        draft.isDesktop = false;
      });
    }
    if (size.width >= screen.minTablet && size.width <= screen.maxTablet) {
      updateAppStore((draft) => {
        draft.isMobile = false;
        draft.isTablet = true;
        draft.isDesktop = false;
      });
    }
    if (size.width > screen.desktop) {
      updateAppStore((draft) => {
        draft.isMobile = false;
        draft.isTablet = false;
        draft.isDesktop = true;
      });
    }
  }

  function onDetectDevice() {
    if (isFirstRender) {
      onInitialDevice();
      setIsFirstRender(false);
    } else {
      onChangeDevice();
    }
  }

  useEffect(() => {
    if (size.width) {
      onDetectDevice();
    }
  }, [size.width]); // eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
}
