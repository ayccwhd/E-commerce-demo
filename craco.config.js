const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: {//支持装饰器
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": 'css' //设置为true即是less 这里用的是css
                }, "antd"
            ],
            [
              "import",
              {
                  "libraryName": "antd-mobile-v2",
                  "libraryDirectory": "lib"
              }, "antd-mobile-v2"
            ]
        ]
    },
    plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

