import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
} from "react";
import jwt_decode from "jwt-decode";

import { JwtPayload } from "../types/JwtPayload";
import useRouter from "use-react-router";

interface State extends JwtPayload {
  isAuth: boolean | null;
}

interface Action {
  type: string;
  payload?: State;
}

interface Decoded extends JwtPayload {
  exp: number;
}

interface DispatchContext {
  dispatch: ({ type, payload }: Action) => void;
}

const AuthStateContext = createContext<State>({} as State);
const AuthDispatchContext = createContext<DispatchContext>(
  {} as DispatchContext
);

const initState: State = {
  isAuth: null,
  userId: "",
  username: "",
  roles: [],
};

const authReducer: React.Reducer<State, Action> = (_, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      if (!payload) throw Error("Payload for SET_USER action is empty");

      return {
        isAuth: !!payload,
        ...payload,
      };

    case "LOGOUT_USER":
      return {
        isAuth: false,
        userId: "",
        username: "",
        roles: [],
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

interface ProviderProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    authReducer,
    initState
  );

  useEffect(() => {
    if (localStorage.jwtToken) {
      const { exp, ...rest }: Decoded = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;

      if (exp < currentTime) {
        dispatch({ type: "LOGOUT_USER" });
        localStorage.removeItem("jwtToken");
        window.location.href = "/signin";
      } else {
        dispatch({
          type: "SET_USER",
          payload: { ...rest, isAuth: !!rest.userId },
        });
      }
    } else {
      dispatch({ type: "LOGOUT_USER" });
    }
  }, []);

  // const getCurrentUser = async () => {
  //   try {
  //     const { data } = await client({ url: "/auth" });
  //     dispatch({ type: "SET_USER", payload: data });
  //   } catch (err) {
  //     dispatch({
  //       type: "SET_USER",
  //       payload: {
  //         isAuth: false,
  //         userId: "",
  //         username: "",
  //         roles: [],
  //       },
  //     });
  //   }
  // };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={{ dispatch }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  return useContext<State>(AuthStateContext);
};

const useAuthDispatch = () => {
  const { history } = useRouter();
  const { dispatch } = useContext(AuthDispatchContext);

  const logout = useCallback(() => {
    localStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT_USER" });
    history.push("/");
  }, [dispatch, history]);

  const login = useCallback(
    (token: string) => {
      localStorage.setItem("jwtToken", `Bearer ${token}`);
      const { exp, ...userData }: Decoded = jwt_decode(`Bearer ${token}`);

      history.push("/");
      dispatch({
        type: "SET_USER",
        payload: { ...userData, isAuth: !!userData.userId },
      });
    },
    [history, dispatch]
  );

  return { logout, login };
};

export { AuthProvider, useAuthState, useAuthDispatch };
