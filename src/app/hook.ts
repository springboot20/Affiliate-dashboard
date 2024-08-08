import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";

export const UseAppSelector: TypedUseSelectorHook<RootState> = () =>
  useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
