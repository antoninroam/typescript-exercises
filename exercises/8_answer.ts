export type ExtractRouteParams<T extends string> =
  string extends T
  ? string
  : T extends `${infer Start}:${infer Param}/${infer Rest}`
  ? {[k in Param | keyof ExtractRouteParams<Rest>]: string}
  : T extends `${infer Start}:${infer Param}`
  ? {[k in Param]: string;}
  : {};

type params = ExtractRouteParams<'/users/:userId/posts/:postId'>;