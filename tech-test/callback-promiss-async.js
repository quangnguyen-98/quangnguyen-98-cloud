// Data

const data = {
  id: 1,
  name: "Quang",
};

// const data2 = {
//   id: 2,
//   name: "Tien",
// };

const data2 = new Error("Network err");

// Call back====================
const fecthDataCallback = (cb) => {
  let err;
  setTimeout(() => {
    if (data instanceof Error) {
      err = data;
    }
    cb(data, err);
  }, 2000);
};

// Excute

// fecthDataCallback((data, err) => {
//   if (err) {
//     console.log("Err: ", err);
//   } else {
//     console.log("Callback data:", data);
//   }
// });

// Promise =====================
const fecthDataPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data instanceof Error) {
        reject(data);
      }
      resolve(data);
    }, 2000);
  });

const fecthDataPromise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data2 instanceof Error) {
        reject(data2);
      }
      resolve(data2);
    }, 1000);
  });

// Excute

// fecthDataPromise()
//   .then((data) => {
//     console.log("promise data: ", data);
//   })
//   .catch((err) => {
//     console.log("promise err:", err);
//   });

// Async await =================
const fecthAsync = async () => {
  try {
    const data = await Promise.race([fecthDataPromise(), fecthDataPromise2()]);
    console.log("async data: ", data);
  } catch (err) {
    console.log("async err: ", err);
  }
};

// Excute

fecthAsync();
