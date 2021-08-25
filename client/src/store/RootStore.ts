import {types} from "mobx-state-tree";

const RootStore = types.model(
"mainStore",{
    isAuthenticated:types.optional(types.boolean,false),
 }
);

export {
    RootStore,
}