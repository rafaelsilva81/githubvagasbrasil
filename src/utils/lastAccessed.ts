import { atomWithStorage } from "jotai/utils";

const lastAccessedAtom = atomWithStorage<String[]>("lastAccessed", []);

export default lastAccessedAtom;
