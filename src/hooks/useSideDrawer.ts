import { useState, useCallback } from "react";

const useSideDrawer = (initialVal: boolean = false) => {
  const [opened, setOpened] = useState<boolean>(initialVal);

  const onToggle = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const onClose = useCallback(() => {
    setOpened(false);
  }, []);

  const onOpen = useCallback(() => {
    setOpened(true);
  }, []);

  return { opened, onToggle, onClose, onOpen };
};

export { useSideDrawer };
