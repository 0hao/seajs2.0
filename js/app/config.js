/* seajs config */
seajs.config({
    // 激活 shim 插件
    plugins: ['shim'],

    // shim 配置项
    alias: {
        'jquery': {
            src: 'jquery/jquery',
            exports: '$'
        },
        'jquery-migrate': {
            src: 'jquery/jquery-migrate',
            deps: ['jquery']
        }
    },
    paths: {
        //app : '/js/app/'
    }
});