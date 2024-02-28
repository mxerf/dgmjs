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

import type { Canvas, CanvasPointerEvent } from "../graphics/graphics";
import * as geometry from "../graphics/geometry";
import { Shape, Box, Line, Document } from "../shapes";
import { Controller, Editor, Manipulator } from "../editor";
import { Cursor, CONTROL_POINT_APOTHEM, ANGLE_STEP } from "../graphics/const";
import { lcs2ccs } from "../graphics/utils";
import * as guide from "../utils/guide";
import { Snap } from "../manipulators/snap";

/**
 * Box Rotate Controller
 */
export class BoxRotateController extends Controller {
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
      shape.rotatable;
    // don't allow rotating a single line
    if (shape instanceof Line && shape.path.length === 2) value = false;
    // don't allow resizing when path editable
    if (shape instanceof Line && shape.pathEditable) value = false;
    return value;
  }

  /**
   * Get coord of the control point in CCS
   */
  getControlPoint(canvas: Canvas, shape: Shape): number[] {
    const dist = (CONTROL_POINT_APOTHEM * 4) / canvas.scale;
    const enclosure = shape.getEnclosure();
    const mid = geometry.mid(enclosure[0], enclosure[1]);
    const cp = [mid[0], mid[1] - dist];
    return lcs2ccs(canvas, shape, cp);
  }

  /**
   * Returns true if mouse cursor is inside the controller
   */
  mouseIn(editor: Editor, shape: Shape, e: CanvasPointerEvent): boolean {
    if (this.dragging) return true;
    const canvas = editor.canvas;
    const p = [e.x, e.y];
    const cp = this.getControlPoint(canvas, shape);
    return guide.inControlPoint(canvas, p, cp, 0);
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
    return [Cursor.ROTATE, 0];
  }

  /**
   * Initialize ghost
   */
  initialize(editor: Editor, shape: Shape): void {
    editor.transform.startTransaction("rotate");
  }

  /**
   * Update ghost
   */
  update(editor: Editor, shape: Shape) {
    const enclosure = shape.getEnclosure();
    const center = geometry.mid(enclosure[0], enclosure[2]);
    const angle0 = geometry.angle(enclosure[2], enclosure[1]);
    const angle1 = geometry.angle(center, this.dragPoint);
    const d = geometry.normalizeAngle(angle1 - angle0);
    const delta = Math.round(d / ANGLE_STEP) * ANGLE_STEP;
    let angle = Math.round(geometry.normalizeAngle(shape.rotate + delta));
    // transform shapes
    const tr = editor.transform;
    const doc = editor.doc as Document;
    tr.atomicAssign(shape, "rotate", angle);
    tr.resolveAllConstraints(doc, editor.canvas);
  }

  /**
   * Finalize shape by ghost
   */
  finalize(editor: Editor, shape: Box) {
    editor.transform.endTransaction();
  }

  /**
   * Draw controller
   */
  draw(editor: Editor, shape: Shape) {
    const canvas = editor.canvas;
    const cp = this.getControlPoint(canvas, shape);
    guide.drawControlPoint(canvas, cp, 1, 0);
  }

  /**
   * Draw controller
   */
  drawDragging(editor: Editor, shape: Shape, e: CanvasPointerEvent) {
    const canvas = editor.canvas;
    // draw ghost
    const ghost = shape.getEnclosure();
    guide.drawPolylineInLCS(canvas, shape, ghost);
    // const cp = lcs2ccs(
    //   canvas,
    //   shape,
    //   geometry.mid(this.ghost[0], this.ghost[2])
    // );
    // const text =
    //   geometry
    //     .normalizeAngle(Math.round(shape.rotate + this.delta))
    //     .toString() + "°";
    // guide.drawText(canvas, cp, text);
    // draw snap
    // this.snap.draw(editor, shape, this.ghost);
  }
}