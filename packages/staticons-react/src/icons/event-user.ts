
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M7.075 3.908V2.75a.75.75 0 0 0-1.5 0v1.158h-.823a2.75 2.75 0 0 0-2.75 2.75v8.689a2.75 2.75 0 0 0 2.75 2.75h5.7a5.956 5.956 0 0 0 11.545-2.05 5.953 5.953 0 0 0-3.216-5.289v-4.1a2.75 2.75 0 0 0-2.75-2.75h-.845V2.75a.75.75 0 0 0-1.5 0v1.158H7.075Zm10.206 6.314V9.079H3.502v6.268c0 .69.56 1.25 1.25 1.25h5.363a5.953 5.953 0 0 1 7.166-6.375Zm0-3.564v.921H3.502v-.92c0-.691.56-1.25 1.25-1.25H16.03c.69 0 1.25.559 1.25 1.25ZM16.044 20.5c.819 0 1.586-.221 2.246-.607-.402-.909-1.188-1.614-2.21-1.614-1.034 0-1.833.72-2.236 1.64.649.37 1.4.581 2.2.581Zm2.019-3.14c.603.392 1.07.945 1.401 1.539a4.453 4.453 0 1 0-6.804.043c.327-.597.792-1.155 1.391-1.555a2.68 2.68 0 1 1 4.011-.027Zm-3.197-1.763a1.18 1.18 0 1 1 2.358 0 1.18 1.18 0 0 1-2.358 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name EventUser
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjQgMjQiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy4wNzUgMy45MDhWMi43NWEuNzUuNzUgMCAwIDAtMS41IDB2MS4xNThoLS44MjNhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NXY4LjY4OWEyLjc1IDIuNzUgMCAwIDAgMi43NSAyLjc1aDUuN2E1Ljk1NiA1Ljk1NiAwIDAgMCAxMS41NDUtMi4wNSA1Ljk1MyA1Ljk1MyAwIDAgMC0zLjIxNi01LjI4OXYtNC4xYTIuNzUgMi43NSAwIDAgMC0yLjc1LTIuNzVoLS44NDVWMi43NWEuNzUuNzUgMCAwIDAtMS41IDB2MS4xNThINy4wNzVabTEwLjIwNiA2LjMxNFY5LjA3OUgzLjUwMnY2LjI2OGMwIC42OS41NiAxLjI1IDEuMjUgMS4yNWg1LjM2M2E1Ljk1MyA1Ljk1MyAwIDAgMSA3LjE2Ni02LjM3NVptMC0zLjU2NHYuOTIxSDMuNTAydi0uOTJjMC0uNjkxLjU2LTEuMjUgMS4yNS0xLjI1SDE2LjAzYy42OSAwIDEuMjUuNTU5IDEuMjUgMS4yNVpNMTYuMDQ0IDIwLjVjLjgxOSAwIDEuNTg2LS4yMjEgMi4yNDYtLjYwNy0uNDAyLS45MDktMS4xODgtMS42MTQtMi4yMS0xLjYxNC0xLjAzNCAwLTEuODMzLjcyLTIuMjM2IDEuNjQuNjQ5LjM3IDEuNC41ODEgMi4yLjU4MVptMi4wMTktMy4xNGMuNjAzLjM5MiAxLjA3Ljk0NSAxLjQwMSAxLjUzOWE0LjQ1MyA0LjQ1MyAwIDEgMC02LjgwNC4wNDNjLjMyNy0uNTk3Ljc5Mi0xLjE1NSAxLjM5MS0xLjU1NWEyLjY4IDIuNjggMCAxIDEgNC4wMTEtLjAyN1ptLTMuMTk3LTEuNzYzYTEuMTggMS4xOCAwIDEgMSAyLjM1OCAwIDEuMTggMS4xOCAwIDAgMS0yLjM1OCAwWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const EventUser = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-event-user',
        'staticon-EventUser',
        className
      ),
      ...props,
    })
);
EventUser.displayName = 'EventUser'

export default EventUser;
