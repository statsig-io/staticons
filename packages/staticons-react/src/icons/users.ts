
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M2.025 4.694a2.819 2.819 0 1 1 4.743 2.058c.831.486 1.46 1.278 1.882 2.123.163-.138.336-.264.519-.375a2.819 2.819 0 1 1 3.76-.006c.413.25.775.577 1.082.945.702.84 1.148 1.924 1.336 2.954.184 1.002-.658 1.731-1.52 1.731H8.262c-.852 0-1.685-.712-1.526-1.695H2.173c-.863 0-1.705-.73-1.52-1.732.19-1.031.638-2.117 1.342-2.958.29-.348.63-.659 1.015-.904a2.812 2.812 0 0 1-.985-2.141Zm2.818-1.569a1.569 1.569 0 1 0 0 3.137 1.569 1.569 0 0 0 0-3.137Zm2.242 8.054c.173-.451.396-.89.667-1.29l-.016.005C7.2 8.513 6.209 7.512 4.955 7.512c-.794 0-1.466.388-2.002 1.029-.541.648-.913 1.524-1.071 2.382a.172.172 0 0 0 .049.16c.05.052.135.096.242.096h4.912Zm3.96-6.351a1.568 1.568 0 1 0 0 3.137 1.568 1.568 0 0 0 0-3.137Zm-1.996 5.414c-.544.647-.918 1.52-1.077 2.377a.171.171 0 0 0 .049.159.328.328 0 0 0 .242.096h5.563a.333.333 0 0 0 .243-.096.174.174 0 0 0 .049-.16c-.157-.858-.527-1.732-1.066-2.377-.533-.638-1.203-1.026-1.997-1.026s-1.469.388-2.006 1.027Z","clip-rule":"evenodd"}]]

/**
 * @component @name Users
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMi4wMjUgNC42OTRhMi44MTkgMi44MTkgMCAxIDEgNC43NDMgMi4wNThjLjgzMS40ODYgMS40NiAxLjI3OCAxLjg4MiAyLjEyMy4xNjMtLjEzOC4zMzYtLjI2NC41MTktLjM3NWEyLjgxOSAyLjgxOSAwIDEgMSAzLjc2LS4wMDZjLjQxMy4yNS43NzUuNTc3IDEuMDgyLjk0NS43MDIuODQgMS4xNDggMS45MjQgMS4zMzYgMi45NTQuMTg0IDEuMDAyLS42NTggMS43MzEtMS41MiAxLjczMUg4LjI2MmMtLjg1MiAwLTEuNjg1LS43MTItMS41MjYtMS42OTVIMi4xNzNjLS44NjMgMC0xLjcwNS0uNzMtMS41Mi0xLjczMi4xOS0xLjAzMS42MzgtMi4xMTcgMS4zNDItMi45NTguMjktLjM0OC42My0uNjU5IDEuMDE1LS45MDRhMi44MTIgMi44MTIgMCAwIDEtLjk4NS0yLjE0MVptMi44MTgtMS41NjlhMS41NjkgMS41NjkgMCAxIDAgMCAzLjEzNyAxLjU2OSAxLjU2OSAwIDAgMCAwLTMuMTM3Wm0yLjI0MiA4LjA1NGMuMTczLS40NTEuMzk2LS44OS42NjctMS4yOWwtLjAxNi4wMDVDNy4yIDguNTEzIDYuMjA5IDcuNTEyIDQuOTU1IDcuNTEyYy0uNzk0IDAtMS40NjYuMzg4LTIuMDAyIDEuMDI5LS41NDEuNjQ4LS45MTMgMS41MjQtMS4wNzEgMi4zODJhLjE3Mi4xNzIgMCAwIDAgLjA0OS4xNmMuMDUuMDUyLjEzNS4wOTYuMjQyLjA5Nmg0LjkxMlptMy45Ni02LjM1MWExLjU2OCAxLjU2OCAwIDEgMCAwIDMuMTM3IDEuNTY4IDEuNTY4IDAgMCAwIDAtMy4xMzdabS0xLjk5NiA1LjQxNGMtLjU0NC42NDctLjkxOCAxLjUyLTEuMDc3IDIuMzc3YS4xNzEuMTcxIDAgMCAwIC4wNDkuMTU5LjMyOC4zMjggMCAwIDAgLjI0Mi4wOTZoNS41NjNhLjMzMy4zMzMgMCAwIDAgLjI0My0uMDk2LjE3NC4xNzQgMCAwIDAgLjA0OS0uMTZjLS4xNTctLjg1OC0uNTI3LTEuNzMyLTEuMDY2LTIuMzc3LS41MzMtLjYzOC0xLjIwMy0xLjAyNi0xLjk5Ny0xLjAyNnMtMS40NjkuMzg4LTIuMDA2IDEuMDI3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Users = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-users',
        'staticon-Users',
        className
      ),
      ...props,
    })
);
Users.displayName = 'Users'

export default Users;
