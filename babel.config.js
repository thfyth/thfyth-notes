 module.exports = {
  presets: ["@vue/app"],
   "presets": [
        ["env", {
          "modules": false,
          "targets": {
            "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
          }
        }],
        "stage-2"
      ],
};