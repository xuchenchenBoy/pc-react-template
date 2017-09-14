/**
 * 自动绑定函数，生成新的函数
 * @param  {Array} arrays   函数名的集合
 * @param  {Object} context 上下文
 * @return {Object}         新的上下文
 */
export function autoBind(arrays, context) {
  arrays.forEach((funName) => {
    context[funName] = context[funName].bind(context);
  });
  return context;
}
