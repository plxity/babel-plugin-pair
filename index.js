const babel = require('@babel/core');
const code = 'const car = pair(model , speed)';

console.log(code);

const { types } = babel;

const output = babel.transformSync(code, {
  plugins: [
    function pairPlugin() {
      return {
        visitor: {
          CallExpression(path) {
            const { node } = path;
            if (types.isIdentifier(node.callee, { name: 'pair' })) {
              if (node.arguments) {
                if (node.arguments.length !== 2) {
                  return 'Number of arguments passed in pair should be equal to 2';
                } else {
                  let first, second;
                  if (
                    node.arguments[0].type === 'StringLiteral' ||
                    node.arguments[1].type === 'Literal'
                  ) {
                    first = `'${node.arguments[0].extra.rawValue}'`;
                    console.log('hello');
                  } else {
                    first = node.arguments[0].name;
                  }

                  if (
                    node.arguments[1].type === 'StringLiteral' ||
                    node.arguments[1].type === 'Literal'
                  ) {
                    second = `'${node.arguments[1].extra.rawValue}'`;
                  } else {
                    second = node.arguments[1].name;
                  }
                  path.replaceWith(
                    babel.template.expression.ast(
                      `{first: ${first}, second: ${second}}`
                    )
                  );
                  path.skip();
                }
              }
            }
          },
        },
      };
    },
  ],
});

console.log(output.code);
