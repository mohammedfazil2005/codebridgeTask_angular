import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest=req.clone({
    url:'https://api.spaceflightnewsapi.net/v4'
  })
  return next(clonedRequest);
};
