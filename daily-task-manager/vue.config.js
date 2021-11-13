module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "daily-task-manager",
        appId: "com.mochi.dailytaskmanager",
        win: {
          target: [
            {
              target: 'portable',
              arch: ['x64']
            }
          ]
        }
      }
    }
  },
  transpileDependencies: ["vuetify"],
};
