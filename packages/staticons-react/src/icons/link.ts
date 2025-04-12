
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill":"#000","fill-rule":"evenodd","d":"M3.271 12.729a3.495 3.495 0 0 1 0-4.943l.768-.768a.625.625 0 1 0-.884-.883l-.767.768a4.744 4.744 0 1 0 6.71 6.71l.767-.768a.625.625 0 1 0-.883-.884l-.768.768a3.495 3.495 0 0 1-4.943 0Zm2.864-9.574a.625.625 0 0 0 .883.884l.768-.768a3.495 3.495 0 0 1 4.943 4.943l-.768.768a.625.625 0 0 0 .884.883l.767-.768a4.744 4.744 0 1 0-6.71-6.71l-.767.768Zm-.493 6.32a.625.625 0 0 0 .883.884l3.833-3.833a.625.625 0 1 0-.884-.883L5.642 9.475Z","clip-rule":"evenodd"}]]

/**
 * @component @name Link
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMTYgMTYiPiAgPHBhdGggZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy4yNzEgMTIuNzI5YTMuNDk1IDMuNDk1IDAgMCAxIDAtNC45NDNsLjc2OC0uNzY4YS42MjUuNjI1IDAgMSAwLS44ODQtLjg4M2wtLjc2Ny43NjhhNC43NDQgNC43NDQgMCAxIDAgNi43MSA2LjcxbC43NjctLjc2OGEuNjI1LjYyNSAwIDEgMC0uODgzLS44ODRsLS43NjguNzY4YTMuNDk1IDMuNDk1IDAgMCAxLTQuOTQzIDBabTIuODY0LTkuNTc0YS42MjUuNjI1IDAgMCAwIC44ODMuODg0bC43NjgtLjc2OGEzLjQ5NSAzLjQ5NSAwIDAgMSA0Ljk0MyA0Ljk0M2wtLjc2OC43NjhhLjYyNS42MjUgMCAwIDAgLjg4NC44ODNsLjc2Ny0uNzY4YTQuNzQ0IDQuNzQ0IDAgMSAwLTYuNzEtNi43MWwtLjc2Ny43NjhabS0uNDkzIDYuMzJhLjYyNS42MjUgMCAwIDAgLjg4My44ODRsMy44MzMtMy44MzNhLjYyNS42MjUgMCAxIDAtLjg4NC0uODgzTDUuNjQyIDkuNDc1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Link = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-link',
        'staticon-Link',
        className
      ),
      ...props,
    })
);
Link.displayName = 'Link'

export default Link;
