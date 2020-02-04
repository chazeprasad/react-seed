module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:flowtype/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
        'prettier/standard',
        'prettier/babel',
        'prettier/flowtype',
        'prettier/react',
    ],
    plugins: ['react', 'redux-saga', 'jest', 'flowtype', 'prettier', 'import'],
    env: {
        es6: true,
        browser: true,
        node: true,
        'jest/globals': true,
        'shared-node-browser': true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        jsx: true,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        'no-var': 2,
        'no-const-assign': 'error',
        radix: 'error',
        'prefer-template': 'error',
        'prefer-const': 'error',
        'prefer-spread': 'error',
        eqeqeq: ['error', 'always'],
        semi: [2, 'never'],
        'default-case': 2,
        'template-curly-spacing': 0, // Prettier.
        'arrow-parens': 0, // Does not work with Flow generic types
        'consistent-return': 0, // Flow.
        // Prefer new line before return
        // http://eslint.org/docs/rules/newline-before-return
        'newline-before-return': 'error',
        'no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: false },
        ],
        'import/no-extraneous-dependencies': 0,
        'import/extensions': 0,
        'import/no-unresolved': 1,
        'import/no-dynamic-require': 0,
        'no-return-await': 0,
        'no-restricted-syntax': 0,
        'no-underscore-dangle': 0,
        'import/first': 0,
        'no-restricted-globals': 1,
        'no-useless-escape': 1,
        //was not working when used with flow prop types
        'no-unused-vars': 0,
        'react/no-unused-prop-types': 1,
        'react/jsx-props-no-spreading': 0,
        // require or disallow Yoda conditions
        // https://eslint.org/docs/rules/yoda
        yoda: ['error', 'never', { exceptRange: true }],
        // Require modules with a single export to use a default export
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 0,

        // no longer defined
        'jsx-a11y/href-no-hash': 'off',

        'global-require': 0, // Used by webpack isomorphic tools and React Native.
        'no-console': 0, // we are enabling this in the scripts
        'no-debugger': 0, // we are enabling this in the scripts
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        quotes: ['error', 'single', { avoidEscape: true }],
        // React control override.
        'react/display-name': 0,
        'react/forbid-prop-types': 0, // using Flow types.
        'react/jsx-closing-bracket-location': 0, // Prettier.
        'react/jsx-filename-extension': 0, // JSX belongs to .js files.
        'react/jsx-indent': 0, // Prettier.
        'react/jsx-indent-props': 0, // Prettier.
        'react/jsx-wrap-multilines': 0, // Prettier.
        'react/no-danger': 0, // Control freaky.
        'react/no-unescaped-entities': 0, // Prettier.
        'react/no-unused-prop-types': 0, // Flow.
        'react/prop-types': 0, // Flow.
        'react/require-default-props': 0, // Flow.
        'react/jsx-no-bind': 2,
        'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
        'react/no-array-index-key': 0,
    },
    settings: {
        polyfills: ['promises'],
        flowtype: {
            onlyFilesWithFlowAnnotation: false,
        },
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'detect',
            flowVersion: '0.53',
        },
        propWrapperFunctions: [
            {
                property: 'freeze',
                object: 'Object',
            },
            {
                property: 'myFavoriteWrapper',
            },
        ],
    },
}
