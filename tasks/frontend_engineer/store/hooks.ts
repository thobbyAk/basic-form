import { useDispatch,useSelector, TypedUseSelectorHook } from "react-redux";
import { AppDispatch } from ".";
import { IRootState } from "@/reducer";

export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>();
  
    return dispatch;
  };

  export const useAppStateSelector: TypedUseSelectorHook<IRootState> =
  useSelector;