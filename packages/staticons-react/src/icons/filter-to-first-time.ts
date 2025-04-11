
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M11.817 2.955c-.435.455-.987 1.073-1.085 1.807-.079.59.157 1.103.518 1.406v1.284H8.765a2.75 2.75 0 0 0-2.75 2.75v3.058a2.75 2.75 0 0 0-2.744 2.75v3.613H3.25a.75.75 0 0 0 0 1.5h17.503a.75.75 0 0 0 0-1.5h-.024V16.01a2.75 2.75 0 0 0-2.743-2.75v-3.058a2.75 2.75 0 0 0-2.75-2.75H12.75V6.167c.36-.303.595-.816.516-1.405-.097-.733-.655-1.354-1.085-1.806a.251.251 0 0 0-.364-.001Zm7.41 16.668H4.772V16.01c0-.69.56-1.25 1.25-1.25h11.957c.69 0 1.25.56 1.25 1.25v3.613ZM11.955 8.952a.761.761 0 0 0 .091 0h3.19c.69 0 1.25.56 1.25 1.25v3.058h-8.97v-3.058c0-.69.56-1.25 1.25-1.25h3.189Z","clip-rule":"evenodd"}]]

/**
 * @component @name FilterToFirstTime
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODE3IDIuOTU1Yy0uNDM1LjQ1NS0uOTg3IDEuMDczLTEuMDg1IDEuODA3LS4wNzkuNTkuMTU3IDEuMTAzLjUxOCAxLjQwNnYxLjI4NEg4Ljc2NWEyLjc1IDIuNzUgMCAwIDAtMi43NSAyLjc1djMuMDU4YTIuNzUgMi43NSAwIDAgMC0yLjc0NCAyLjc1djMuNjEzSDMuMjVhLjc1Ljc1IDAgMCAwIDAgMS41aDE3LjUwM2EuNzUuNzUgMCAwIDAgMC0xLjVoLS4wMjRWMTYuMDFhMi43NSAyLjc1IDAgMCAwLTIuNzQzLTIuNzV2LTMuMDU4YTIuNzUgMi43NSAwIDAgMC0yLjc1LTIuNzVIMTIuNzVWNi4xNjdjLjM2LS4zMDMuNTk1LS44MTYuNTE2LTEuNDA1LS4wOTctLjczMy0uNjU1LTEuMzU0LTEuMDg1LTEuODA2YS4yNTEuMjUxIDAgMCAwLS4zNjQtLjAwMVptNy40MSAxNi42NjhINC43NzJWMTYuMDFjMC0uNjkuNTYtMS4yNSAxLjI1LTEuMjVoMTEuOTU3Yy42OSAwIDEuMjUuNTYgMS4yNSAxLjI1djMuNjEzWk0xMS45NTUgOC45NTJhLjc2MS43NjEgMCAwIDAgLjA5MSAwaDMuMTljLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV2My4wNThoLTguOTd2LTMuMDU4YzAtLjY5LjU2LTEuMjUgMS4yNS0xLjI1aDMuMTg5WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const FilterToFirstTime = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-filter-to-first-time',
        'staticon-FilterToFirstTime',
        className
      ),
      ...props,
    })
);
FilterToFirstTime.displayName = 'FilterToFirstTime'

export default FilterToFirstTime;
