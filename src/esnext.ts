


//  I M P O R T

import path from "path";



//  E X P O R T

export = {
  extends: path.join(__dirname, "index.js"),
  rules: {
    "no-var": "error",
    "object-shorthand": [
      "error",
      "always"
    ],
    "prefer-arrow-callback": [
      "error", {
        allowNamedFunctions: true
      }
    ],
    "prefer-const": [
      "error", {
        destructuring: "all"
      }
    ],
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-destructuring": [
      "error", {
        AssignmentExpression: {
          array: false,
          object: false
        },
        VariableDeclarator: {
          array: false,
          object: true
        }
      }, {
        enforceForRenamedProperties: false
      }
    ]
  }
};
