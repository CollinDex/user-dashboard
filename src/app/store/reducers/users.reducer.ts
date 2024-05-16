import { createReducer, on } from "@ngrx/store";
import { Userdata } from "../../userdata";
import { setUser, clear} from "../../user.actions";


export const initialState:Userdata[] = [];

export const usersReducer = createReducer(
    initialState,
    on(setUser, (state, {users}) => (
        {
          ...state,
          users: users
        }
      )
      ),
      on(clear, state => initialState)
);