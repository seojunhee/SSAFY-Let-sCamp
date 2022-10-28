import { atom, selector } from "recoil";

export const userState = atom({
  key: "userId",
  default: "temp",
});

export const pageNameState = atom({
  key: "pageName",
  default: "",
});

export const userCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(userState);
    return text.length;
  },
});
