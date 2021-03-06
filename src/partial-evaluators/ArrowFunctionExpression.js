/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */

import type { BabelNodeArrowFunctionExpression, BabelNodeStatement } from "babel-types";
import type { LexicalEnvironment } from "../environment.js";
import type { Realm } from "../realm.js";

import { AbruptCompletion } from "../completions.js";
import { Value } from "../values/index.js";

// ECMA262 14.2.16
export default function (
  ast: BabelNodeArrowFunctionExpression, strictCode: boolean, env: LexicalEnvironment, realm: Realm
): [AbruptCompletion | Value, BabelNodeArrowFunctionExpression, Array<BabelNodeStatement>] {
  let result = env.evaluateCompletionDeref(ast, strictCode);
  return [result, ast, []];
}
