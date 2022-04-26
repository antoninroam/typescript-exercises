/* Create a generic type that would extract route parameters from a url string and return a valid type with those parameters.
Example: 

`type GetPostRouteParams = ExtractRouteParams<'/users/:userId/posts/:postId'>;`
should be same as: type GetPostRouteParams { userId: string; postId: string; }
*/
