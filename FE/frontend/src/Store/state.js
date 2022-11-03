import { atom, selector } from "recoil";

export const userState = atom({
  key: "userId",
  default: {},
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

export const questionPage = atom({
  key: "questionPage",
  default: 1,
});

export const campSiteState = atom({
  key: "campSite",
  default: {},
});

export const userReserveState = atom({
  key: "userReserve",
  default: {},
});
