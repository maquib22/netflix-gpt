export const LOGO =
  "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg";
export const BG =
  "https://occ-0-1742-2773.1.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png";

export const PROFILE =
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmE1ZmQ0ZGE4MDU5N2ExYmNmYjVmZjg2NThkZDMzMiIsIm5iZiI6MTc4ODU5NDA5Ni4wMDQ5OTk5LCJzdWIiOiI2YTliYzdhZmMyNTAwMDNlOTNiNzk5ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.h_BL_aOEAEc0fkxwjjvpT1_2SpCpho2cWLbHARktTgI",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original/";

export const SUPPORTED_LANGUAGES = [
  { identifire: "en", name: "English" },
  { identifire: "hi", name: "Hindi" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
