
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"fill-rule":"evenodd","d":"M4.078 6.535a1.329 1.329 0 1 0-.001-2.657 1.329 1.329 0 0 0 .001 2.657Zm1.338 3.458c0 .734-.596 1.33-1.332 1.33a1.331 1.331 0 0 1-1.332-1.33c0-.735.596-1.33 1.332-1.33.736 0 1.333.595 1.333 1.33Zm2.558-.624a.625.625 0 0 0 0 1.25h8.65a.625.625 0 1 0 0-1.25h-8.65Zm-2.568 5.425a1.329 1.329 0 1 1-2.657.002 1.329 1.329 0 0 1 2.657-.002ZM7.35 5.207c0-.346.28-.625.625-.625h8.65a.625.625 0 1 1 0 1.25h-8.65a.625.625 0 0 1-.625-.625Zm.625 8.963a.625.625 0 1 0 0 1.25h8.65a.625.625 0 1 0 0-1.25h-8.65Z","clip-rule":"evenodd"}]]

/**
 * @component @name ListView
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC4wNzggNi41MzVhMS4zMjkgMS4zMjkgMCAxIDAtLjAwMS0yLjY1NyAxLjMyOSAxLjMyOSAwIDAgMCAuMDAxIDIuNjU3Wm0xLjMzOCAzLjQ1OGMwIC43MzQtLjU5NiAxLjMzLTEuMzMyIDEuMzNhMS4zMzEgMS4zMzEgMCAwIDEtMS4zMzItMS4zM2MwLS43MzUuNTk2LTEuMzMgMS4zMzItMS4zMy43MzYgMCAxLjMzMy41OTUgMS4zMzMgMS4zM1ptMi41NTgtLjYyNGEuNjI1LjYyNSAwIDAgMCAwIDEuMjVoOC42NWEuNjI1LjYyNSAwIDEgMCAwLTEuMjVoLTguNjVabS0yLjU2OCA1LjQyNWExLjMyOSAxLjMyOSAwIDEgMS0yLjY1Ny4wMDIgMS4zMjkgMS4zMjkgMCAwIDEgMi42NTctLjAwMlpNNy4zNSA1LjIwN2MwLS4zNDYuMjgtLjYyNS42MjUtLjYyNWg4LjY1YS42MjUuNjI1IDAgMSAxIDAgMS4yNWgtOC42NWEuNjI1LjYyNSAwIDAgMS0uNjI1LS42MjVabS42MjUgOC45NjNhLjYyNS42MjUgMCAxIDAgMCAxLjI1aDguNjVhLjYyNS42MjUgMCAxIDAgMC0xLjI1aC04LjY1WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const ListView = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-list-view',
        'staticon-ListView',
        className
      ),
      ...props,
    })
);
ListView.displayName = 'ListView'

export default ListView;
