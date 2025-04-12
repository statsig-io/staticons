
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","d":"M9.465 1.724c-.424-.234-.91-.35-1.465-.35-.554-.001-1.04.116-1.465.35a3.026 3.026 0 0 0-1.012.937c-.499.71-.82 1.664-1.133 2.599l-.018.054c-.663 1.972-1.403 4.14-3.598 5.63a.625.625 0 1 0 .702 1.034c2.56-1.74 3.411-4.274 4.063-6.216l.017-.05c.339-1.01.607-1.79.99-2.333.18-.258.374-.44.592-.56.216-.12.49-.197.862-.197s.646.077.862.196c.218.12.412.303.593.561.382.544.65 1.324.99 2.332l.016.05c.652 1.943 1.504 4.478 4.063 6.217a.625.625 0 0 0 .703-1.034c-2.195-1.49-2.936-3.658-3.598-5.63l-.018-.054c-.314-.935-.635-1.889-1.134-2.599a3.026 3.026 0 0 0-1.012-.937Zm-8.34 11.654a.625.625 0 1 0 0 1.25h13.75a.625.625 0 0 0 0-1.25H1.125Z"}]]

/**
 * @component @name Distribution
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTkuNDY1IDEuNzI0Yy0uNDI0LS4yMzQtLjkxLS4zNS0xLjQ2NS0uMzUtLjU1NC0uMDAxLTEuMDQuMTE2LTEuNDY1LjM1YTMuMDI2IDMuMDI2IDAgMCAwLTEuMDEyLjkzN2MtLjQ5OS43MS0uODIgMS42NjQtMS4xMzMgMi41OTlsLS4wMTguMDU0Yy0uNjYzIDEuOTcyLTEuNDAzIDQuMTQtMy41OTggNS42M2EuNjI1LjYyNSAwIDEgMCAuNzAyIDEuMDM0YzIuNTYtMS43NCAzLjQxMS00LjI3NCA0LjA2My02LjIxNmwuMDE3LS4wNWMuMzM5LTEuMDEuNjA3LTEuNzkuOTktMi4zMzMuMTgtLjI1OC4zNzQtLjQ0LjU5Mi0uNTYuMjE2LS4xMi40OS0uMTk3Ljg2Mi0uMTk3cy42NDYuMDc3Ljg2Mi4xOTZjLjIxOC4xMi40MTIuMzAzLjU5My41NjEuMzgyLjU0NC42NSAxLjMyNC45OSAyLjMzMmwuMDE2LjA1Yy42NTIgMS45NDMgMS41MDQgNC40NzggNC4wNjMgNi4yMTdhLjYyNS42MjUgMCAwIDAgLjcwMy0xLjAzNGMtMi4xOTUtMS40OS0yLjkzNi0zLjY1OC0zLjU5OC01LjYzbC0uMDE4LS4wNTRjLS4zMTQtLjkzNS0uNjM1LTEuODg5LTEuMTM0LTIuNTk5YTMuMDI2IDMuMDI2IDAgMCAwLTEuMDEyLS45MzdabS04LjM0IDExLjY1NGEuNjI1LjYyNSAwIDEgMCAwIDEuMjVoMTMuNzVhLjYyNS42MjUgMCAwIDAgMC0xLjI1SDEuMTI1WiIvPgo8L3N2Zz4K)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Distribution = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-distribution',
        'staticon-Distribution',
        className
      ),
      ...props,
    })
);
Distribution.displayName = 'Distribution'

export default Distribution;
