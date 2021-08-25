import {types} from "mobx-state-tree";

const RootStore = types.model(
"mainStore",{
    isAuntificated:types.optional(types.boolean,false),
 }
);

export {
    RootStore,
}