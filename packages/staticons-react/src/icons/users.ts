
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M4.321 7.652a3.65 3.65 0 1 1 6.066 2.736c1.09.606 1.921 1.615 2.49 2.71a5.32 5.32 0 0 1 .653-.449 3.65 3.65 0 1 1 4.712-.008 5.655 5.655 0 0 1 1.437 1.211c.913 1.06 1.507 2.434 1.778 3.756.283 1.377-.882 2.39-2.076 2.39h-7c-1.137 0-2.25-.918-2.106-2.196H4.619c-1.194 0-2.36-1.012-2.076-2.39.274-1.324.87-2.7 1.786-3.762.388-.45.839-.848 1.349-1.158a3.643 3.643 0 0 1-1.357-2.84Zm3.65-2.15a2.15 2.15 0 1 0 0 4.3 2.15 2.15 0 0 0 0-4.3Zm2.71 10.8c.268-.72.631-1.42 1.09-2.04-.734-1.717-2.021-2.96-3.652-2.96-1.053 0-1.943.504-2.654 1.328-.718.833-1.22 1.962-1.453 3.085a.417.417 0 0 0 .111.385.679.679 0 0 0 .496.202h6.063Zm5.2-8.595a2.15 2.15 0 1 0 0 4.3 2.15 2.15 0 0 0 0-4.3Zm-2.647 7.126c-.72.831-1.226 1.958-1.46 3.079a.416.416 0 0 0 .111.384.679.679 0 0 0 .495.202h7a.68.68 0 0 0 .497-.202.417.417 0 0 0 .11-.386c-.23-1.122-.729-2.249-1.444-3.079-.708-.821-1.595-1.324-2.648-1.324-1.054 0-1.947.504-2.66 1.326Z","clip-rule":"evenodd"}]]

/**
 * @component @name Users
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4zMjEgNy42NTJhMy42NSAzLjY1IDAgMSAxIDYuMDY2IDIuNzM2YzEuMDkuNjA2IDEuOTIxIDEuNjE1IDIuNDkgMi43MWE1LjMyIDUuMzIgMCAwIDEgLjY1My0uNDQ5IDMuNjUgMy42NSAwIDEgMSA0LjcxMi0uMDA4IDUuNjU1IDUuNjU1IDAgMCAxIDEuNDM3IDEuMjExYy45MTMgMS4wNiAxLjUwNyAyLjQzNCAxLjc3OCAzLjc1Ni4yODMgMS4zNzctLjg4MiAyLjM5LTIuMDc2IDIuMzloLTdjLTEuMTM3IDAtMi4yNS0uOTE4LTIuMTA2LTIuMTk2SDQuNjE5Yy0xLjE5NCAwLTIuMzYtMS4wMTItMi4wNzYtMi4zOS4yNzQtMS4zMjQuODctMi43IDEuNzg2LTMuNzYyLjM4OC0uNDUuODM5LS44NDggMS4zNDktMS4xNThhMy42NDMgMy42NDMgMCAwIDEtMS4zNTctMi44NFptMy42NS0yLjE1YTIuMTUgMi4xNSAwIDEgMCAwIDQuMyAyLjE1IDIuMTUgMCAwIDAgMC00LjNabTIuNzEgMTAuOGMuMjY4LS43Mi42MzEtMS40MiAxLjA5LTIuMDQtLjczNC0xLjcxNy0yLjAyMS0yLjk2LTMuNjUyLTIuOTYtMS4wNTMgMC0xLjk0My41MDQtMi42NTQgMS4zMjgtLjcxOC44MzMtMS4yMiAxLjk2Mi0xLjQ1MyAzLjA4NWEuNDE3LjQxNyAwIDAgMCAuMTExLjM4NS42NzkuNjc5IDAgMCAwIC40OTYuMjAyaDYuMDYzWm01LjItOC41OTVhMi4xNSAyLjE1IDAgMSAwIDAgNC4zIDIuMTUgMi4xNSAwIDAgMCAwLTQuM1ptLTIuNjQ3IDcuMTI2Yy0uNzIuODMxLTEuMjI2IDEuOTU4LTEuNDYgMy4wNzlhLjQxNi40MTYgMCAwIDAgLjExMS4zODQuNjc5LjY3OSAwIDAgMCAuNDk1LjIwMmg3YS42OC42OCAwIDAgMCAuNDk3LS4yMDIuNDE3LjQxNyAwIDAgMCAuMTEtLjM4NmMtLjIzLTEuMTIyLS43MjktMi4yNDktMS40NDQtMy4wNzktLjcwOC0uODIxLTEuNTk1LTEuMzI0LTIuNjQ4LTEuMzI0LTEuMDU0IDAtMS45NDcuNTA0LTIuNjYgMS4zMjZaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
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
