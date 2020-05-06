import { useCallback, useMemo, useState } from "react";

export const useModal = <T>() => {
  const [visibility, setVisibility] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const showModal = useCallback((additionalData?: T) => {
    setData(additionalData);
    setVisibility(true);
  }, []);

  const hideModal = useCallback(() => {
    setVisibility(false);
    setData(undefined);
  }, []);

  const toggleModal = useCallback(() => {
    setVisibility((prevState) => !prevState);
  }, []);

  return useMemo(
    () => ({ visibility, showModal, hideModal, toggleModal, data }),
    [visibility, showModal, hideModal, toggleModal, data]
  );
};
