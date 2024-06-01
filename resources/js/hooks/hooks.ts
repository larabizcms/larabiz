import { useDispatch  } from 'react-redux';
import type { AppDispatch } from "../../../packages/core/resources/js/store";
export const useAppDispatch = () => useDispatch<AppDispatch>();
