
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M18.875 12.905a1.988 1.988 0 0 1-.317-.914l-.246-2.806C18.029 5.968 15.318 3.5 12.068 3.5A6.277 6.277 0 0 0 7.06 5.98L4.9 3.833a.758.758 0 0 0-1.067 0 .745.745 0 0 0 0 1.059l2.45 2.433a6.186 6.186 0 0 0-.46 1.86l-.245 2.786c-.03.335-.144.656-.331.935l-.827 1.23A2.46 2.46 0 0 0 4 15.508a2.48 2.48 0 0 0 2.49 2.472h1.862c.368 1.52 2.006 2.497 3.693 2.497 1.687 0 3.325-.977 3.693-2.497h1.272l2.317 2.302a.758.758 0 0 0 1.066 0 .746.746 0 0 0 0-1.06l-1.575-1.564a2.474 2.474 0 0 0 .866-3.515l-.808-1.237Zm-1.242 3.575a.99.99 0 0 0 .945-.986.982.982 0 0 0-.16-.537l-.808-1.237a3.48 3.48 0 0 1-.554-1.599l-.246-2.806c-.215-2.443-2.274-4.317-4.742-4.317a4.769 4.769 0 0 0-3.927 2.054l9.492 9.428Zm-2.132.001L7.47 8.503c-.07.262-.119.533-.143.812L7.08 12.1a3.48 3.48 0 0 1-.58 1.637l-.826 1.23a.968.968 0 0 0-.165.54c0 .538.438.973.98.973H15.5ZM9.976 17.98c.326.54 1.05.998 2.068.998s1.741-.458 2.068-.998H9.976Z","clip-rule":"evenodd"}]]

/**
 * @component @name NotificationOff
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTguODc1IDEyLjkwNWExLjk4OCAxLjk4OCAwIDAgMS0uMzE3LS45MTRsLS4yNDYtMi44MDZDMTguMDI5IDUuOTY4IDE1LjMxOCAzLjUgMTIuMDY4IDMuNUE2LjI3NyA2LjI3NyAwIDAgMCA3LjA2IDUuOThMNC45IDMuODMzYS43NTguNzU4IDAgMCAwLTEuMDY3IDAgLjc0NS43NDUgMCAwIDAgMCAxLjA1OWwyLjQ1IDIuNDMzYTYuMTg2IDYuMTg2IDAgMCAwLS40NiAxLjg2bC0uMjQ1IDIuNzg2Yy0uMDMuMzM1LS4xNDQuNjU2LS4zMzEuOTM1bC0uODI3IDEuMjNBMi40NiAyLjQ2IDAgMCAwIDQgMTUuNTA4YTIuNDggMi40OCAwIDAgMCAyLjQ5IDIuNDcyaDEuODYyYy4zNjggMS41MiAyLjAwNiAyLjQ5NyAzLjY5MyAyLjQ5NyAxLjY4NyAwIDMuMzI1LS45NzcgMy42OTMtMi40OTdoMS4yNzJsMi4zMTcgMi4zMDJhLjc1OC43NTggMCAwIDAgMS4wNjYgMCAuNzQ2Ljc0NiAwIDAgMCAwLTEuMDZsLTEuNTc1LTEuNTY0YTIuNDc0IDIuNDc0IDAgMCAwIC44NjYtMy41MTVsLS44MDgtMS4yMzdabS0xLjI0MiAzLjU3NWEuOTkuOTkgMCAwIDAgLjk0NS0uOTg2Ljk4Mi45ODIgMCAwIDAtLjE2LS41MzdsLS44MDgtMS4yMzdhMy40OCAzLjQ4IDAgMCAxLS41NTQtMS41OTlsLS4yNDYtMi44MDZjLS4yMTUtMi40NDMtMi4yNzQtNC4zMTctNC43NDItNC4zMTdhNC43NjkgNC43NjkgMCAwIDAtMy45MjcgMi4wNTRsOS40OTIgOS40MjhabS0yLjEzMi4wMDFMNy40NyA4LjUwM2MtLjA3LjI2Mi0uMTE5LjUzMy0uMTQzLjgxMkw3LjA4IDEyLjFhMy40OCAzLjQ4IDAgMCAxLS41OCAxLjYzN2wtLjgyNiAxLjIzYS45NjguOTY4IDAgMCAwLS4xNjUuNTRjMCAuNTM4LjQzOC45NzMuOTguOTczSDE1LjVaTTkuOTc2IDE3Ljk4Yy4zMjYuNTQgMS4wNS45OTggMi4wNjguOTk4czEuNzQxLS40NTggMi4wNjgtLjk5OEg5Ljk3NloiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const NotificationOff = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-notification-off',
        'staticon-NotificationOff',
        className
      ),
      ...props,
    })
);
NotificationOff.displayName = 'NotificationOff'

export default NotificationOff;
