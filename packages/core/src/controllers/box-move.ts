/*
 * Copyright (c) 2022 MKLabs. All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the
 * property of MKLabs. The intellectual and technical concepts
 * contained herein are proprietary to MKLabs and may be covered
 * by Republic of Korea and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from MKLabs (niklaus.lee@gmail.com).
 */

import { CanvasPointerEvent } from "../graphics/graphics";
import { Shape, Box, Document, Movable, Line } from "../shapes";
import { Controller, Editor, Manipulator, manipulatorManager } from "../editor";
import { drawPolylineInLCS } from "../utils/guide";
import { Snap } from "../manipulators/snap";
import { Cursor } from "../graphics/const";

/**
 * BoxMoveController
 */
export class BoxMoveController extends Controller {
  /**
   * Snap support for controller
   */
  snap: Snap;

  constructor(manipulator: Manipulator) {
    super(manipulator);
    this.snap = new Snap();
  }

  /**
   * Indicates the controller is active or not
   */
  active(editor: Editor, shape: Shape): boolean {
    let value =
      editor.selection.size() === 1 &&
      editor.selection.isSelected(shape) &&
      !(shape as Box).anchored;
    return value;
  }

  /**
   * Returns mouse cursor for the controller
   * @returns cursor [type, angle]
   */
  mouseCursor(
    editor: Editor,
    shape: Shape,
    e: CanvasPointerEvent
  ): [string, number] {
    return [Cursor.MOVE, 0];
  }

  initialize(editor: Editor, shape: Shape): void {
    editor.transform.startTransaction("move");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    let targetShape: Shape | null = shape;
    if (targetShape.movable === Movable.PARENT)
      targetShape = targetShape.findParent(
        (s) => (s as Shape).movable !== Movable.PARENT
      ) as Shape;
    if (!targetShape || targetShape instanceof Document) return;
    if (
      targetShape.movable === Movable.VERT ||
      targetShape.movable === Movable.NONE
    )
      this.dx0 = 0;
    if (
      targetShape.movable === Movable.HORZ ||
      targetShape.movable === Movable.NONE
    )
      this.dy0 = 0;

    // determine container
    // (container shouldn't be itself of a descendant of target)
    const canvas = editor.canvas;
    let p2 = targetShape.localCoordTransform(canvas, this.dragPoint, false);
    let container = editor.doc?.getShapeAt(canvas, p2, [shape]);
    const r = targetShape.find((s) => s.id === container?.id);
    if (r) container = null;
    if (!(container && container.canContain(targetShape)))
      container = editor.doc;

    // update
    const tr = editor.transform;
    const doc = editor.doc as Document;
    tr.moveShapes(doc, [targetShape], this.dx0, this.dy0, container);
    tr.resolveAllConstraints(doc, canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Shape) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape): void {
    const canvas = editor.canvas;
    if (
      !(
        shape instanceof Line &&
        (shape.path.length === 2 || shape.pathEditable)
      )
    ) {
      drawPolylineInLCS(canvas, shape, shape.getEnclosure());
    }
  }

  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent): void {
    super.drawDragging(editor, shape, e);
    const canvas = editor.canvas;
    // hovering containable
    const dp = shape.localCoordTransform(canvas, this.dragPoint, true);
    const container = editor.doc?.getShapeAt(canvas, dp, [shape]);
    if (container && container !== shape && container.canContain(shape)) {
      const manipulator = manipulatorManager.get(container.type);
      if (manipulator) manipulator.drawHovering(editor, container, e);
    }
  }
}