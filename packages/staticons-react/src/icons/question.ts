
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M14.25 8a6.25 6.25 0 1 0-12.5 0 6.25 6.25 0 0 0 12.5 0Zm1.25 0a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0ZM8.002 4.855c-.905 0-1.5.628-1.568 1.262a.625.625 0 1 1-1.243-.133c.14-1.305 1.303-2.379 2.81-2.379.717 0 1.4.203 1.92.621a2.37 2.37 0 0 1 .89 1.802 2.346 2.346 0 0 1-.425 1.483c-.272.385-.638.665-.975.89-.524.348-.786.759-.786 1.24a.625.625 0 0 1-1.25 0c0-1.034.6-1.787 1.344-2.282.297-.197.509-.374.647-.57.125-.178.207-.395.195-.716a1.12 1.12 0 0 0-.421-.872c-.259-.207-.648-.346-1.138-.346ZM8 10.985a.781.781 0 1 1 0 1.563.781.781 0 0 1 0-1.562Z","clip-rule":"evenodd"}]]

/**
 * @component @name Question
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQuMjUgOGE2LjI1IDYuMjUgMCAxIDAtMTIuNSAwIDYuMjUgNi4yNSAwIDAgMCAxMi41IDBabTEuMjUgMGE3LjUgNy41IDAgMSAwLTE1IDAgNy41IDcuNSAwIDAgMCAxNSAwWk04LjAwMiA0Ljg1NWMtLjkwNSAwLTEuNS42MjgtMS41NjggMS4yNjJhLjYyNS42MjUgMCAxIDEtMS4yNDMtLjEzM2MuMTQtMS4zMDUgMS4zMDMtMi4zNzkgMi44MS0yLjM3OS43MTcgMCAxLjQuMjAzIDEuOTIuNjIxYTIuMzcgMi4zNyAwIDAgMSAuODkgMS44MDIgMi4zNDYgMi4zNDYgMCAwIDEtLjQyNSAxLjQ4M2MtLjI3Mi4zODUtLjYzOC42NjUtLjk3NS44OS0uNTI0LjM0OC0uNzg2Ljc1OS0uNzg2IDEuMjRhLjYyNS42MjUgMCAwIDEtMS4yNSAwYzAtMS4wMzQuNi0xLjc4NyAxLjM0NC0yLjI4Mi4yOTctLjE5Ny41MDktLjM3NC42NDctLjU3LjEyNS0uMTc4LjIwNy0uMzk1LjE5NS0uNzE2YTEuMTIgMS4xMiAwIDAgMC0uNDIxLS44NzJjLS4yNTktLjIwNy0uNjQ4LS4zNDYtMS4xMzgtLjM0NlpNOCAxMC45ODVhLjc4MS43ODEgMCAxIDEgMCAxLjU2My43ODEuNzgxIDAgMCAxIDAtMS41NjJaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Question = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-question',
        'staticon-Question',
        className
      ),
      ...props,
    })
);
Question.displayName = 'Question'

export default Question;
