import { atom, selector } from "recoil";

export const userState = atom({
  key: "userId",
  default: "temp",
});

export const userCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(userState);
    return text.length;
  },
});

export const questionPage = atom({
  key: "questionPage",
  default: 1,
})