const babel = require('@babel/core');
const code = 'const car = pair(model , speed)';

console.log(code);
console.log();
console.log();

const { types } = babel;

const output = babel.transformSync(code, {
  plugins: [
    function customPlugin() {
      return {
        visitor: {
          CallExpression(path) {
            const { node } = path;
            if (
              node.callee.type === 'Identifier' &&
              node.callee.name === 'pair'
            ) {
              if (node.arguments) {
                if (node.arguments.length !== 2) {
                  return 'No valid arguments';
                }
                let first, second;
                first = node.arguments[0].name;
                second = node.arguments[1].name;
                path.replaceWith(
                  babel.template.expression.ast(
                    `{first: ${first}, second: ${second}}`
                  )
                );
                path.skip();
              }
            }
          },
        },
      };
    },
  ],
});

console.log(output.code);
