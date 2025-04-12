
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M8 13.875A5.875 5.875 0 1 0 2.125 8c0 1.332.578 2.498 1.385 3.284l-.873.895A5.858 5.858 0 0 1 .875 8 7.125 7.125 0 1 1 8 15.125H2.445c-1.13 0-1.613-1.422-.744-2.113l.002-.002.04-.03.396-.29.488-.358a.1.1 0 0 0 .01-.153l.873-.895a1.35 1.35 0 0 1-.144 2.056l-.73.535H8Zm.002-8.591c-.797 0-1.313.55-1.372 1.098a.625.625 0 0 1-1.243-.133c.13-1.218 1.215-2.215 2.615-2.215.662 0 1.296.187 1.783.577.497.399.804.983.83 1.682a2.19 2.19 0 0 1-.397 1.385c-.254.359-.593.618-.902.824-.468.31-.69.669-.69 1.082a.625.625 0 0 1-1.25 0c0-.965.56-1.666 1.248-2.123.268-.179.454-.336.574-.505a.945.945 0 0 0 .168-.617.964.964 0 0 0-.363-.753c-.224-.179-.565-.302-1.001-.302Zm.633 6.04a.634.634 0 1 0-1.268 0 .634.634 0 0 0 1.268 0Z","clip-rule":"evenodd"}]]

/**
 * @component @name Hypothesis
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMy44NzVBNS44NzUgNS44NzUgMCAxIDAgMi4xMjUgOGMwIDEuMzMyLjU3OCAyLjQ5OCAxLjM4NSAzLjI4NGwtLjg3My44OTVBNS44NTggNS44NTggMCAwIDEgLjg3NSA4IDcuMTI1IDcuMTI1IDAgMSAxIDggMTUuMTI1SDIuNDQ1Yy0xLjEzIDAtMS42MTMtMS40MjItLjc0NC0yLjExM2wuMDAyLS4wMDIuMDQtLjAzLjM5Ni0uMjkuNDg4LS4zNThhLjEuMSAwIDAgMCAuMDEtLjE1M2wuODczLS44OTVhMS4zNSAxLjM1IDAgMCAxLS4xNDQgMi4wNTZsLS43My41MzVIOFptLjAwMi04LjU5MWMtLjc5NyAwLTEuMzEzLjU1LTEuMzcyIDEuMDk4YS42MjUuNjI1IDAgMCAxLTEuMjQzLS4xMzNjLjEzLTEuMjE4IDEuMjE1LTIuMjE1IDIuNjE1LTIuMjE1LjY2MiAwIDEuMjk2LjE4NyAxLjc4My41NzcuNDk3LjM5OS44MDQuOTgzLjgzIDEuNjgyYTIuMTkgMi4xOSAwIDAgMS0uMzk3IDEuMzg1Yy0uMjU0LjM1OS0uNTkzLjYxOC0uOTAyLjgyNC0uNDY4LjMxLS42OS42NjktLjY5IDEuMDgyYS42MjUuNjI1IDAgMCAxLTEuMjUgMGMwLS45NjUuNTYtMS42NjYgMS4yNDgtMi4xMjMuMjY4LS4xNzkuNDU0LS4zMzYuNTc0LS41MDVhLjk0NS45NDUgMCAwIDAgLjE2OC0uNjE3Ljk2NC45NjQgMCAwIDAtLjM2My0uNzUzYy0uMjI0LS4xNzktLjU2NS0uMzAyLTEuMDAxLS4zMDJabS42MzMgNi4wNGEuNjM0LjYzNCAwIDEgMC0xLjI2OCAwIC42MzQuNjM0IDAgMCAwIDEuMjY4IDBaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Hypothesis = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-hypothesis',
        'staticon-Hypothesis',
        className
      ),
      ...props,
    })
);
Hypothesis.displayName = 'Hypothesis'

export default Hypothesis;
