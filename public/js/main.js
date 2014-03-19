require.config({
    paths: {
        angular: 'libs/angular',
        text: 'libs/require_text',
        jst: 'libs/require_jst',
        underscore: 'libs/underscore'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'underscore': {
            exports: '_'
        }
     },
    deps: ['./bootstrap']
});