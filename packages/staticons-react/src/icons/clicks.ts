
import { createElement, forwardRef } from "react";
import { IconNode, StaticonProps } from '../types';
import Icon from '../Icon';
import { mergeClasses } from '../mergeClasses';

export const __iconNode: IconNode = [["path",{"d":"M13.338 6.157a4.888 4.888 0 1 0-7.372 5.892.608.608 0 0 1-.717.98 6.104 6.104 0 1 1 9.204-7.356.608.608 0 1 1-1.115.484Z"}],["path",{"d":"M5.505 7.07a3.562 3.562 0 0 1 6.567-.51.608.608 0 0 1-1.084.548 2.347 2.347 0 1 0-3.632 2.835.607.607 0 1 1-.796.918A3.563 3.563 0 0 1 5.505 7.07Z"}],["path",{"fill-rule":"evenodd","d":"M16.602 12.476c1.228.915.602 2.866-.928 2.896l-1.623.032a.892.892 0 0 0-.746.431l-.839 1.389c-.791 1.31-2.794.877-2.972-.644l-.707-6.02c-.19-1.619 1.648-2.68 2.955-1.706l4.86 3.622Zm-.953 1.681a.392.392 0 0 0 .227-.707l-4.86-3.622a.642.642 0 0 0-1.022.59l.707 6.02a.392.392 0 0 0 .725.158l.84-1.39a2.108 2.108 0 0 1 1.761-1.016l1.622-.033Z","clip-rule":"evenodd"}]]

/**
 * @component @name Clicks
 * @description Staticon SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiAgPHBhdGggZD0iTTEzLjMzOCA2LjE1N2E0Ljg4OCA0Ljg4OCAwIDEgMC03LjM3MiA1Ljg5Mi42MDguNjA4IDAgMCAxLS43MTcuOTggNi4xMDQgNi4xMDQgMCAxIDEgOS4yMDQtNy4zNTYuNjA4LjYwOCAwIDEgMS0xLjExNS40ODRaIi8+CiAgPHBhdGggZD0iTTUuNTA1IDcuMDdhMy41NjIgMy41NjIgMCAwIDEgNi41NjctLjUxLjYwOC42MDggMCAwIDEtMS4wODQuNTQ4IDIuMzQ3IDIuMzQ3IDAgMSAwLTMuNjMyIDIuODM1LjYwNy42MDcgMCAxIDEtLjc5Ni45MThBMy41NjMgMy41NjMgMCAwIDEgNS41MDUgNy4wN1oiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi42MDIgMTIuNDc2YzEuMjI4LjkxNS42MDIgMi44NjYtLjkyOCAyLjg5NmwtMS42MjMuMDMyYS44OTIuODkyIDAgMCAwLS43NDYuNDMxbC0uODM5IDEuMzg5Yy0uNzkxIDEuMzEtMi43OTQuODc3LTIuOTcyLS42NDRsLS43MDctNi4wMmMtLjE5LTEuNjE5IDEuNjQ4LTIuNjggMi45NTUtMS43MDZsNC44NiAzLjYyMlptLS45NTMgMS42ODFhLjM5Mi4zOTIgMCAwIDAgLjIyNy0uNzA3bC00Ljg2LTMuNjIyYS42NDIuNjQyIDAgMCAwLTEuMDIyLjU5bC43MDcgNi4wMmEuMzkyLjM5MiAwIDAgMCAuNzI1LjE1OGwuODQtMS4zOWEyLjEwOCAyLjEwOCAwIDAgMSAxLjc2MS0xLjAxNmwxLjYyMi0uMDMzWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=)
 *
 * @param {Object} props - Staticons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
const Clicks = forwardRef<SVGSVGElement, StaticonProps>(
  ({ className, ...props }, ref) =>
    createElement(Icon, {
      ref,
      iconNode: __iconNode,
      className: mergeClasses(
        'staticon-clicks',
        'staticon-Clicks',
        className
      ),
      ...props,
    })
);
Clicks.displayName = 'Clicks'

export default Clicks;
