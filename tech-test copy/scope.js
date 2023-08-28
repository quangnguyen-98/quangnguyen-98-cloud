let language = {
  name: "JavaScript",
  prtLangReg: function (id, language) {
    console.log(this);
  },
  prtLangArrow: (id, language) => {
    console.log(this);
  },
};
language.prtLangReg(); // ES5 Function Call
language.prtLangArrow(); // ES6 Function Call

// console.log("======");
// console.log(global);
