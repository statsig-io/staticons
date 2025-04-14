
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M2.904 8.521c-.873-.349-.873-1.585 0-1.934l1.789-.715c.423-.17.759-.505.928-.929l.716-1.788c.349-.873 1.585-.873 1.934 0l.715 1.788c.17.424.505.76.929.929l1.788.715c.873.35.873 1.585 0 1.934l-1.788.716c-.424.17-.76.505-.929.928l-.715 1.789c-.35.873-1.585.873-1.934 0l-.716-1.789a1.667 1.667 0 0 0-.928-.928l.464-1.16A2.917 2.917 0 0 1 6.782 9.7l.522 1.305.522-1.305A2.917 2.917 0 0 1 9.45 8.076l1.304-.522-1.304-.522a2.917 2.917 0 0 1-1.625-1.625l-.522-1.304-.522 1.304a2.917 2.917 0 0 1-1.625 1.625l-1.305.522 1.305.522-.464 1.16-1.789-.715Zm12.583 7.063-.51 1.272c-.343.859-1.559.859-1.903 0l-.508-1.272a.625.625 0 0 0-.349-.348l-1.272-.51c-.859-.343-.859-1.559 0-1.903l1.272-.508a.625.625 0 0 0 .349-.349l.508-1.272c.344-.859 1.56-.859 1.904 0l.509 1.272c.063.16.189.285.348.349l1.272.508c.859.344.859 1.56 0 1.904l-1.272.509a.625.625 0 0 0-.348.348Zm-1.76-.464.3.75.3-.75c.19-.477.567-.854 1.044-1.045l.75-.3-.75-.3a1.875 1.875 0 0 1-1.045-1.044l-.3-.75-.3.75c-.19.476-.568.854-1.044 1.044l-.75.3.75.3c.476.19.854.568 1.044 1.045Z","clip-rule":"evenodd"}]]

/**
 * @component @name AutoAwesome
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi45MDQgOC41MjFjLS44NzMtLjM0OS0uODczLTEuNTg1IDAtMS45MzRsMS43ODktLjcxNWMuNDIzLS4xNy43NTktLjUwNS45MjgtLjkyOWwuNzE2LTEuNzg4Yy4zNDktLjg3MyAxLjU4NS0uODczIDEuOTM0IDBsLjcxNSAxLjc4OGMuMTcuNDI0LjUwNS43Ni45MjkuOTI5bDEuNzg4LjcxNWMuODczLjM1Ljg3MyAxLjU4NSAwIDEuOTM0bC0xLjc4OC43MTZjLS40MjQuMTctLjc2LjUwNS0uOTI5LjkyOGwtLjcxNSAxLjc4OWMtLjM1Ljg3My0xLjU4NS44NzMtMS45MzQgMGwtLjcxNi0xLjc4OWExLjY2NyAxLjY2NyAwIDAgMC0uOTI4LS45MjhsLjQ2NC0xLjE2QTIuOTE3IDIuOTE3IDAgMCAxIDYuNzgyIDkuN2wuNTIyIDEuMzA1LjUyMi0xLjMwNUEyLjkxNyAyLjkxNyAwIDAgMSA5LjQ1IDguMDc2bDEuMzA0LS41MjItMS4zMDQtLjUyMmEyLjkxNyAyLjkxNyAwIDAgMS0xLjYyNS0xLjYyNWwtLjUyMi0xLjMwNC0uNTIyIDEuMzA0YTIuOTE3IDIuOTE3IDAgMCAxLTEuNjI1IDEuNjI1bC0xLjMwNS41MjIgMS4zMDUuNTIyLS40NjQgMS4xNi0xLjc4OS0uNzE1Wm0xMi41ODMgNy4wNjMtLjUxIDEuMjcyYy0uMzQzLjg1OS0xLjU1OS44NTktMS45MDMgMGwtLjUwOC0xLjI3MmEuNjI1LjYyNSAwIDAgMC0uMzQ5LS4zNDhsLTEuMjcyLS41MWMtLjg1OS0uMzQzLS44NTktMS41NTkgMC0xLjkwM2wxLjI3Mi0uNTA4YS42MjUuNjI1IDAgMCAwIC4zNDktLjM0OWwuNTA4LTEuMjcyYy4zNDQtLjg1OSAxLjU2LS44NTkgMS45MDQgMGwuNTA5IDEuMjcyYy4wNjMuMTYuMTg5LjI4NS4zNDguMzQ5bDEuMjcyLjUwOGMuODU5LjM0NC44NTkgMS41NiAwIDEuOTA0bC0xLjI3Mi41MDlhLjYyNS42MjUgMCAwIDAtLjM0OC4zNDhabS0xLjc2LS40NjQuMy43NS4zLS43NWMuMTktLjQ3Ny41NjctLjg1NCAxLjA0NC0xLjA0NWwuNzUtLjMtLjc1LS4zYTEuODc1IDEuODc1IDAgMCAxLTEuMDQ1LTEuMDQ0bC0uMy0uNzUtLjMuNzVjLS4xOS40NzYtLjU2OC44NTQtMS4wNDQgMS4wNDRsLS43NS4zLjc1LjNjLjQ3Ni4xOS44NTQuNTY4IDEuMDQ0IDEuMDQ1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const AutoAwesome = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-auto-awesome',
        'staticon-AutoAwesome',
        className
      ),
      ...props,
    })
);
AutoAwesome.displayName = 'AutoAwesome'

export default AutoAwesome;
