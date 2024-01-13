import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk: any): [() => void, boolean, any] => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const thunkFunction = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk() as any)
      .unwrap()
      .catch((e: any) => {
        setError(e);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, thunk]);

  return [thunkFunction, isLoading, error];
};
