---
editUrl: false
next: false
prev: false
title: "LineFactoryHandler"
---

Line Factory Handler

## Extends

- [`Handler`](/api-core/classes/handler/)

## Constructors

### new LineFactoryHandler()

> **new LineFactoryHandler**(`id`, `options`?): [`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)

#### Parameters

• **id**: `string`

• **options?**: `Partial`\<[`HandlerOptions`](/api-core/interfaces/handleroptions/)\>

#### Returns

[`LineFactoryHandler`](/api-core/namespaces/handlers/classes/linefactoryhandler/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`constructor`](/api-core/classes/handler/#constructors)

#### Source

[editor.ts:1179](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1179)

## Properties

### closed

> **closed**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:29](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L29)

***

### dragPoint

> **dragPoint**: `number`[]

#### Source

[handlers/line-handler.ts:27](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L27)

***

### dragStartPoint

> **dragStartPoint**: `number`[]

#### Source

[handlers/line-handler.ts:26](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L26)

***

### dragging

> **dragging**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:25](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L25)

***

### draggingMoved

> **draggingMoved**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:30](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L30)

***

### id

> **id**: `string`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`id`](/api-core/classes/handler/#id)

#### Source

[editor.ts:1176](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1176)

***

### multiPointMode

> **multiPointMode**: `boolean` = `false`

#### Source

[handlers/line-handler.ts:31](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L31)

***

### options

> **options**: [`HandlerOptions`](/api-core/interfaces/handleroptions/)

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`options`](/api-core/classes/handler/#options)

#### Source

[editor.ts:1177](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1177)

***

### points

> **points**: `number`[][] = `[]`

#### Source

[handlers/line-handler.ts:28](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L28)

***

### shape

> **shape**: `null` \| [`Line`](/api-core/classes/line/) = `null`

#### Source

[handlers/line-handler.ts:32](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L32)

## Methods

### activate()

> **activate**(`editor`): `void`

Activate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`activate`](/api-core/classes/handler/#activate)

#### Source

[editor.ts:1205](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1205)

***

### complete()

> **complete**(`editor`): `void`

Trigger when the handler action is complete

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`complete`](/api-core/classes/handler/#complete)

#### Source

[editor.ts:1196](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1196)

***

### deactivate()

> **deactivate**(`editor`): `void`

Deactivate the handler

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`deactivate`](/api-core/classes/handler/#deactivate)

#### Source

[editor.ts:1213](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1213)

***

### drawSelection()

> **drawSelection**(`editor`): `void`

Draw ghost for the selected shape

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`drawSelection`](/api-core/classes/handler/#drawselection)

#### Source

[editor.ts:1258](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1258)

***

### finalize()

> **finalize**(`editor`, `e`?): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e?**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:68](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L68)

***

### initialize()

> **initialize**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:45](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L45)

***

### keyDown()

> **keyDown**(`editor`, `e`): `boolean`

keyDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`boolean`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`keyDown`](/api-core/classes/handler/#keydown)

#### Source

[handlers/line-handler.ts:144](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L144)

***

### keyUp()

> **keyUp**(`editor`, `e`): `void`

keyUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: `KeyboardEvent`

#### Returns

`void`

#### Inherited from

[`Handler`](/api-core/classes/handler/).[`keyUp`](/api-core/classes/handler/#keyup)

#### Source

[editor.ts:1253](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/editor.ts#L1253)

***

### onActivate()

> **onActivate**(`editor`): `void`

Triggered when activated

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onActivate`](/api-core/classes/handler/#onactivate)

#### Source

[handlers/line-handler.ts:162](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L162)

***

### onDeactivate()

> **onDeactivate**(`editor`): `void`

Triggered when deactivate

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`onDeactivate`](/api-core/classes/handler/#ondeactivate)

#### Source

[handlers/line-handler.ts:167](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L167)

***

### pointerDown()

> **pointerDown**(`editor`, `e`): `void`

pointerDown

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerDown`](/api-core/classes/handler/#pointerdown)

#### Source

[handlers/line-handler.ts:84](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L84)

***

### pointerMove()

> **pointerMove**(`editor`, `e`): `void`

pointerMove

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerMove`](/api-core/classes/handler/#pointermove)

#### Source

[handlers/line-handler.ts:111](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L111)

***

### pointerUp()

> **pointerUp**(`editor`, `e`): `void`

pointerUp

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`pointerUp`](/api-core/classes/handler/#pointerup)

#### Source

[handlers/line-handler.ts:131](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L131)

***

### reset()

> **reset**(): `void`

Reset the states of handler

#### Returns

`void`

#### Overrides

[`Handler`](/api-core/classes/handler/).[`reset`](/api-core/classes/handler/#reset)

#### Source

[handlers/line-handler.ts:34](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L34)

***

### update()

> **update**(`editor`, `e`): `void`

#### Parameters

• **editor**: [`Editor`](/api-core/classes/editor/)

• **e**: [`CanvasPointerEvent`](/api-core/classes/canvaspointerevent/)

#### Returns

`void`

#### Source

[handlers/line-handler.ts:57](https://github.com/dgmjs/dgmjs/blob/main/packages/core/src/handlers/line-handler.ts#L57)