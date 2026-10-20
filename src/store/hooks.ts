// oxlint-disable-next-line no-restricted-imports
import { useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDispatch, AppStore, RootState } from '@/store/store';

// Use this instead of 'useDispacth', it will include the thunk middleware types
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Use this instead of 'useSelector', it saves the need to type '(state: RootState)'
export const useAppSelector = useSelector.withTypes<RootState>();

// Use this instead of 'useStore' to get access to the Redux store
export const useAppStore = useStore.withTypes<AppStore>();
