module.exports = {
    outputDir: 'docs',
    publicPath: '',
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = "Vue Study Reference";
            return args;
        });
    }
}
  