
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M9.543 4.385c0-1.253-.716-2.112-1.62-2.333a1.762 1.762 0 0 0-1.32.184c-.413.246-.707.663-.819 1.195-.397 1.895-.998 2.896-1.58 3.865l-.207.348c-.328.557-.646 1.146-.878 1.899-.23.753-.367 1.643-.367 2.806 0 3.102 2.514 5.652 5.625 5.652h6.43a1.84 1.84 0 0 0 1.478-2.935 1.83 1.83 0 0 0 .57-1.33c0-.417-.138-.802-.372-1.11a1.83 1.83 0 0 0 .56-1.321 1.83 1.83 0 0 0-.364-1.098 1.84 1.84 0 0 0-1.27-3.169h-5.395a.55.55 0 0 1-.568-.583l.01-.169c.042-.626.087-1.328.087-1.9Zm2.38 5.081a.625.625 0 0 0 .02 1.25h3.282a.59.59 0 0 1-.021 1.178h-3.252a.625.625 0 1 0-.003 1.252h3.067a.59.59 0 0 1 0 1.178h-.128a1.924 1.924 0 0 0-.08-.001h-2.866a.625.625 0 1 0 .006 1.251h2.905a.59.59 0 0 1-.045 1.177H8.377c-2.412 0-4.375-1.981-4.375-4.402 0-1.063.124-1.826.312-2.44.189-.613.45-1.104.76-1.63l.203-.34c.595-.99 1.29-2.146 1.73-4.252.046-.218.146-.323.235-.376a.513.513 0 0 1 .385-.044c.279.068.666.372.666 1.118 0 .53-.043 1.19-.084 1.829l-.01.16c-.07 1.065.779 1.914 1.815 1.914h5.395a.59.59 0 0 1 0 1.178h-3.487Z","clip-rule":"evenodd"}]]

/**
 * @component @name ThumbsUp
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOS41NDMgNC4zODVjMC0xLjI1My0uNzE2LTIuMTEyLTEuNjItMi4zMzNhMS43NjIgMS43NjIgMCAwIDAtMS4zMi4xODRjLS40MTMuMjQ2LS43MDcuNjYzLS44MTkgMS4xOTUtLjM5NyAxLjg5NS0uOTk4IDIuODk2LTEuNTggMy44NjVsLS4yMDcuMzQ4Yy0uMzI4LjU1Ny0uNjQ2IDEuMTQ2LS44NzggMS44OTktLjIzLjc1My0uMzY3IDEuNjQzLS4zNjcgMi44MDYgMCAzLjEwMiAyLjUxNCA1LjY1MiA1LjYyNSA1LjY1Mmg2LjQzYTEuODQgMS44NCAwIDAgMCAxLjQ3OC0yLjkzNSAxLjgzIDEuODMgMCAwIDAgLjU3LTEuMzNjMC0uNDE3LS4xMzgtLjgwMi0uMzcyLTEuMTFhMS44MyAxLjgzIDAgMCAwIC41Ni0xLjMyMSAxLjgzIDEuODMgMCAwIDAtLjM2NC0xLjA5OCAxLjg0IDEuODQgMCAwIDAtMS4yNy0zLjE2OWgtNS4zOTVhLjU1LjU1IDAgMCAxLS41NjgtLjU4M2wuMDEtLjE2OWMuMDQyLS42MjYuMDg3LTEuMzI4LjA4Ny0xLjlabTIuMzggNS4wODFhLjYyNS42MjUgMCAwIDAgLjAyIDEuMjVoMy4yODJhLjU5LjU5IDAgMCAxLS4wMjEgMS4xNzhoLTMuMjUyYS42MjUuNjI1IDAgMSAwLS4wMDMgMS4yNTJoMy4wNjdhLjU5LjU5IDAgMCAxIDAgMS4xNzhoLS4xMjhhMS45MjQgMS45MjQgMCAwIDAtLjA4LS4wMDFoLTIuODY2YS42MjUuNjI1IDAgMSAwIC4wMDYgMS4yNTFoMi45MDVhLjU5LjU5IDAgMCAxLS4wNDUgMS4xNzdIOC4zNzdjLTIuNDEyIDAtNC4zNzUtMS45ODEtNC4zNzUtNC40MDIgMC0xLjA2My4xMjQtMS44MjYuMzEyLTIuNDQuMTg5LS42MTMuNDUtMS4xMDQuNzYtMS42M2wuMjAzLS4zNGMuNTk1LS45OSAxLjI5LTIuMTQ2IDEuNzMtNC4yNTIuMDQ2LS4yMTguMTQ2LS4zMjMuMjM1LS4zNzZhLjUxMy41MTMgMCAwIDEgLjM4NS0uMDQ0Yy4yNzkuMDY4LjY2Ni4zNzIuNjY2IDEuMTE4IDAgLjUzLS4wNDMgMS4xOS0uMDg0IDEuODI5bC0uMDEuMTZjLS4wNyAxLjA2NS43NzkgMS45MTQgMS44MTUgMS45MTRoNS4zOTVhLjU5LjU5IDAgMCAxIDAgMS4xNzhoLTMuNDg3WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ThumbsUp = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-thumbs-up',
        'staticon-ThumbsUp',
        className
      ),
      ...props,
    })
);
ThumbsUp.displayName = 'ThumbsUp'

export default ThumbsUp;
