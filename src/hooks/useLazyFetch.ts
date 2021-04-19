import { Reducer, useCallback, useReducer } from 'react';

import { AxiosRequestConfig } from 'axios';

import http from '../services/http';

enum LazyActions {
  data = 'fetch/data',
  error = 'throw/error',
  loading = 'lazy/loading',
}

interface StateProps<D = any, E = any> {
  data?: D;
  error?: E;
  loading: boolean;
}

interface ActionProps {
  type: LazyActions;
  value?: any;
}

const reducer: Reducer<StateProps, ActionProps> = (state, action) => {
  switch (action.type) {
    case LazyActions.data:
      return { ...state, data: action.value };

    case LazyActions.error:
      return { ...state, error: action.value };

    case LazyActions.loading:
      return {
        ...state,
        loading: action.value,
        error: state.error && action.value ? undefined : state.error,
      };

    default:
      return state;
  }
};

export default function useLazyFetch<Data = any, Error = any>(url: string, config?: AxiosRequestConfig) {
  const [state, dispatch] = useReducer<Reducer<StateProps<Data, Error>, ActionProps>>(reducer, {
    loading: false,
  });

  const getData = useCallback(
    async <T = any>(payload?: T) => {
      try {
        dispatch({ type: LazyActions.loading, value: true });
        const extended: AxiosRequestConfig = { method: 'GET', url, ...config };
        const transporter = /(GET)/i.test(extended.method as string) ? 'params' : 'data';
        const { data } = await http({ ...extended, [transporter]: payload });

        dispatch({ type: LazyActions.data, value: data });
      } catch (exception) {
        dispatch({
          type: LazyActions.error,
          value: exception.response.data?.error?.message ?? exception?.message,
        });
      } finally {
        dispatch({ type: LazyActions.loading, value: false });
      }
    },
    [config, url],
  );

  return [state, getData] as [typeof state, typeof getData];
}
