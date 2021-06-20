export const apiURL = () => {
    return window.location.hostname === "localhost"
      ? "http://localhost:3001"
      : "https://budgeting-app-backend-express.herokuapp.com/";
  };

//   export const apiURL = () => {
//     // development // production // test
//     if (
//       process.env.NODE_ENV === "development" ||
//       process.env.NODE_ENV === "test"
//     ) {
//       return "http://localhost:3001";
//     }
//     return null;
//   };