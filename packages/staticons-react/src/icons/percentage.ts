
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.916 6.501a1.416 1.416 0 1 0 0 2.833 1.416 1.416 0 0 0 0-2.833ZM5 7.918a2.916 2.916 0 1 1 5.833 0 2.916 2.916 0 0 1-5.833 0Zm.545 10.874a.75.75 0 0 1-.027-1.06L17.395 5.237a.75.75 0 1 1 1.087 1.034L6.605 18.765a.75.75 0 0 1-1.06.027Zm9.122-2.714a1.416 1.416 0 1 1 2.833 0 1.416 1.416 0 0 1-2.833 0Zm1.416-2.917a2.916 2.916 0 1 0 0 5.833 2.916 2.916 0 0 0 0-5.833Z","clip-rule":"evenodd"}]]

/**
 * @component @name Percentage
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy45MTYgNi41MDFhMS40MTYgMS40MTYgMCAxIDAgMCAyLjgzMyAxLjQxNiAxLjQxNiAwIDAgMCAwLTIuODMzWk01IDcuOTE4YTIuOTE2IDIuOTE2IDAgMSAxIDUuODMzIDAgMi45MTYgMi45MTYgMCAwIDEtNS44MzMgMFptLjU0NSAxMC44NzRhLjc1Ljc1IDAgMCAxLS4wMjctMS4wNkwxNy4zOTUgNS4yMzdhLjc1Ljc1IDAgMSAxIDEuMDg3IDEuMDM0TDYuNjA1IDE4Ljc2NWEuNzUuNzUgMCAwIDEtMS4wNi4wMjdabTkuMTIyLTIuNzE0YTEuNDE2IDEuNDE2IDAgMSAxIDIuODMzIDAgMS40MTYgMS40MTYgMCAwIDEtMi44MzMgMFptMS40MTYtMi45MTdhMi45MTYgMi45MTYgMCAxIDAgMCA1LjgzMyAyLjkxNiAyLjkxNiAwIDAgMCAwLTUuODMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Percentage = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-percentage',
        'staticon-Percentage',
        className
      ),
      ...props,
    })
);
Percentage.displayName = 'Percentage'

export default Percentage;
