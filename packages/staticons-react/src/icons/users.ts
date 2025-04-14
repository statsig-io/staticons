
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M3.635 6.408a3.032 3.032 0 1 1 5.041 2.27c.894.497 1.577 1.32 2.049 2.217.168-.135.345-.258.532-.367a3.032 3.032 0 1 1 3.92-.007c.452.263.85.608 1.189 1.002.757.878 1.25 2.018 1.477 3.114.236 1.149-.735 1.992-1.73 1.992h-5.8c-.936 0-1.854-.748-1.757-1.795H3.89c-.995 0-1.967-.843-1.729-1.992.228-1.098.724-2.24 1.484-3.12.32-.371.693-.7 1.115-.958a3.026 3.026 0 0 1-1.125-2.356Zm3.032-1.782a1.782 1.782 0 1 0 0 3.564 1.782 1.782 0 0 0 0-3.564Zm2.22 8.958c.223-.609.529-1.2.916-1.723-.61-1.407-1.672-2.421-3.013-2.421-.872 0-1.61.417-2.2 1.1-.595.69-1.012 1.625-1.205 2.556a.346.346 0 0 0 .092.32c.09.096.237.168.413.168h4.997Zm4.326-7.155a1.782 1.782 0 1 0 0 3.564 1.782 1.782 0 0 0 0-3.564Zm-2.193 5.912c-.598.688-1.017 1.622-1.21 2.55a.344.344 0 0 0 .09.32c.09.096.237.168.413.168h5.8a.566.566 0 0 0 .413-.168.347.347 0 0 0 .092-.321c-.192-.93-.606-1.863-1.2-2.551-.586-.68-1.321-1.096-2.193-1.096-.873 0-1.613.416-2.205 1.098Z","clip-rule":"evenodd"}]]

/**
 * @component @name Users
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy42MzUgNi40MDhhMy4wMzIgMy4wMzIgMCAxIDEgNS4wNDEgMi4yN2MuODk0LjQ5NyAxLjU3NyAxLjMyIDIuMDQ5IDIuMjE3LjE2OC0uMTM1LjM0NS0uMjU4LjUzMi0uMzY3YTMuMDMyIDMuMDMyIDAgMSAxIDMuOTItLjAwN2MuNDUyLjI2My44NS42MDggMS4xODkgMS4wMDIuNzU3Ljg3OCAxLjI1IDIuMDE4IDEuNDc3IDMuMTE0LjIzNiAxLjE0OS0uNzM1IDEuOTkyLTEuNzMgMS45OTJoLTUuOGMtLjkzNiAwLTEuODU0LS43NDgtMS43NTctMS43OTVIMy44OWMtLjk5NSAwLTEuOTY3LS44NDMtMS43MjktMS45OTIuMjI4LTEuMDk4LjcyNC0yLjI0IDEuNDg0LTMuMTIuMzItLjM3MS42OTMtLjcgMS4xMTUtLjk1OGEzLjAyNiAzLjAyNiAwIDAgMS0xLjEyNS0yLjM1NlptMy4wMzItMS43ODJhMS43ODIgMS43ODIgMCAxIDAgMCAzLjU2NCAxLjc4MiAxLjc4MiAwIDAgMCAwLTMuNTY0Wm0yLjIyIDguOTU4Yy4yMjMtLjYwOS41MjktMS4yLjkxNi0xLjcyMy0uNjEtMS40MDctMS42NzItMi40MjEtMy4wMTMtMi40MjEtLjg3MiAwLTEuNjEuNDE3LTIuMiAxLjEtLjU5NS42OS0xLjAxMiAxLjYyNS0xLjIwNSAyLjU1NmEuMzQ2LjM0NiAwIDAgMCAuMDkyLjMyYy4wOS4wOTYuMjM3LjE2OC40MTMuMTY4aDQuOTk3Wm00LjMyNi03LjE1NWExLjc4MiAxLjc4MiAwIDEgMCAwIDMuNTY0IDEuNzgyIDEuNzgyIDAgMCAwIDAtMy41NjRabS0yLjE5MyA1LjkxMmMtLjU5OC42ODgtMS4wMTcgMS42MjItMS4yMSAyLjU1YS4zNDQuMzQ0IDAgMCAwIC4wOS4zMmMuMDkuMDk2LjIzNy4xNjguNDEzLjE2OGg1LjhhLjU2Ni41NjYgMCAwIDAgLjQxMy0uMTY4LjM0Ny4zNDcgMCAwIDAgLjA5Mi0uMzIxYy0uMTkyLS45My0uNjA2LTEuODYzLTEuMi0yLjU1MS0uNTg2LS42OC0xLjMyMS0xLjA5Ni0yLjE5My0xLjA5Ni0uODczIDAtMS42MTMuNDE2LTIuMjA1IDEuMDk4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
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
