/**
 * fills missing global types
 */
declare module '*.scss' {
  // https://github.com/s-panferov/awesome-typescript-loader/issues/146
  const content: any;
  export default content;
}
