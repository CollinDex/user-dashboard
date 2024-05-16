import { createAction, props } from "@ngrx/store";
import { Userdata } from "./userdata";

export const setUser = createAction('[Home Component] SetUser', props<{ users: Userdata[] }>());
export const clear = createAction('[Home Component] Clear');