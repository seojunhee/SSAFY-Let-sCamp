import { API_HOST_URL } from "../config/index";
const Host = API_HOST_URL;

const Camping = "camping";
const User = "user";
const Review = "review";
const Reservation = "reservation";
const NormalCamping = "normalCamping";
const Hate = "hate";
const Glamping = "glamping";
const Caraban = "caraban";
const CarCamping = "carCamping";

const letsCamp = {
  camping: {
    getAll: () => Host + Camping,
    getOne: (id) => Host + Camping + "/" + `${id}`,
    getRecomm: (category, animal, keywords) =>
      Host +
      Camping +
      "/" +
      "recomm/" +
      `${category}/` +
      `${animal}/` +
      `${keywords}/`,
  },
  user: {
    login: (id, pw) => Host + User + "/login/" + `${id}/` + `${pw}`,
    regist: () => Host + User + "/regist",
    update: () => Host + User + "/update",
    updateExp: (exp) => Host + User + "/update/" + `${exp}`,
    duCheck: (userId) => Host + User + "/check/" + `${userId}`,
    info: () => Host + User + "/myInfo",
  },
  review: {
    change: () => Host + Review,
    write: (campingId) => Host + Review + "/"`${campingId}`,
    get: (campingId) => Host + Review + "/"`${campingId}`,
    delete: (id) => Host + Review + "/"`${id}`,
    getUserReview: () => Host + Review + "/user",
  },
  reservation: {
    getReserve: () => Host + Reservation,
    reserve: (id) => Host + Reservation + "/" + `${id}`,
    delete: (id) => Host + Reservation + "/" + `${id}`,
  },
  hate: {
    getHate: () => Host + Hate,
    setHate: (id) => Host + Hate + "/" + `${id}`,
    deleteHate: (id) => Host + Hate + "/" + `${id}`,
  },
  normal: {
    change: () => Host + NormalCamping,
    getAll: (reservationId) => Host + NormalCamping + "/" + `${reservationId}`,
    add: (reservationId) => Host + NormalCamping + "/" + `${reservationId}`,
    delete: (reservationId) => Host + NormalCamping + "/" + `${reservationId}`,
    getByLevel: (reservationId, level) =>
      Host + NormalCamping + "/" + `${reservationId}/` + `${level}`,
  },
  glamping: {
    change: () => Host + Glamping,
    getAll: (reservationId) => Host + Glamping + "/" + `${reservationId}`,
    add: (reservationId) => Host + Glamping + "/" + `${reservationId}`,
    delete: (reservationId) => Host + Glamping + "/" + `${reservationId}`,
    getByLevel: (reservationId, level) =>
      Host + Glamping + "/" + `${reservationId}/` + `${level}`,
  },
  caraban: {
    change: () => Host + Caraban,
    getAll: (reservationId) => Host + Caraban + "/" + `${reservationId}`,
    add: (reservationId) => Host + Caraban + "/" + `${reservationId}`,
    delete: (reservationId) => Host + Caraban + "/" + `${reservationId}`,
    getByLevel: (reservationId, level) =>
      Host + Caraban + "/" + `${reservationId}/` + `${level}`,
  },
  carcamping: {
    change: () => Host + CarCamping,
    getAll: (reservationId) => Host + CarCamping + "/" + `${reservationId}`,
    add: (reservationId) => Host + CarCamping + "/" + `${reservationId}`,
    delete: (reservationId) => Host + CarCamping + "/" + `${reservationId}`,
    getByLevel: (reservationId, level) =>
      Host + CarCamping + "/" + `${reservationId}/` + `${level}`,
  },
};

export default letsCamp;
