import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width, height, dustFlap, colors, labelUnits } = options;
  const scene = new THREE.Scene()
  const sideFlapLock = 20;

  const bottomBoxShapeGreenLineTop = []
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(0, width))
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(length, width))
  const bottomBoxShapeGreenLineTopGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineTop), colors.cr_green)
  bottomBoxShapeGreenLineTopGeometry.computeLineDistances()

  const bottomBoxShapeGreenLineBottom = []
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(0, 0))
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(length, 0))
  const bottomBoxShapeGreenLineBottomGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineBottom), colors.cr_green)
  bottomBoxShapeGreenLineBottomGeometry.computeLineDistances()

  const bottomBoxShapeSideLine1 = []
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, 0))
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine1), colors.cr_green)
  bottomBoxShapeSideLine1Geometry.computeLineDistances()

  const bottomBoxShapeSideLine2 = []
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  const bottomBoxShapeSideLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine2), colors.cr_red)
  bottomBoxShapeSideLine2Geometry.computeLineDistances()

  const bottomBoxShapeSideLine3 = []
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, ((width / 4) * 3) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine3), colors.cr_green)
  bottomBoxShapeSideLine3Geometry.computeLineDistances()

  const bottomBoxShapeSideLine4 = []
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) - (sideFlapLock / 2))))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) + (sideFlapLock / 2))))
  const bottomBoxShapeSideLine4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine4), colors.cr_red)
  bottomBoxShapeSideLine4Geometry.computeLineDistances()

  const bottomBoxShapeSideLine5 = []
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, ((width / 4) * 3) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, width))
  const bottomBoxShapeSideLine5Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine5), colors.cr_green)
  bottomBoxShapeSideLine5Geometry.computeLineDistances()

  const bottomBoxShape = []
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  bottomBoxShape.push(new THREE.Vector2(0, width))
  bottomBoxShape.push(new THREE.Vector2(length, width))
  bottomBoxShape.push(new THREE.Vector2(length, 0))
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  const bottomShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShape), colors.cr_green)
  bottomShapeGeometry.computeLineDistances()

  const heightWidthGreenLine = []
  heightWidthGreenLine.push(new THREE.Vector2(0, 0))
  heightWidthGreenLine.push(new THREE.Vector2(0, width))
  const heightWidthGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthGreenLine), colors.cr_green)
  heightWidthGreenLineGeometry.computeLineDistances()

  const heightWidthRedLine1 = []
  heightWidthRedLine1.push(new THREE.Vector2(0, width))
  heightWidthRedLine1.push(new THREE.Vector2(height, width))
  const heightWidthRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine1), colors.cr_red)
  heightWidthRedLine1Geometry.computeLineDistances()

  const heightWidthRedLine2 = []
  heightWidthRedLine2.push(new THREE.Vector2(0, 0))
  heightWidthRedLine2.push(new THREE.Vector2(height, 0))
  const heightWidthRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine2), colors.cr_red)
  heightWidthRedLine2Geometry.computeLineDistances()

  const heightLengthShape1 = []
  heightLengthShape1.push(new THREE.Vector2(0, 0))
  heightLengthShape1.push(new THREE.Vector2(0, height))
  heightLengthShape1.push(new THREE.Vector2(length, height))
  heightLengthShape1.push(new THREE.Vector2(length, 0))
  const heightLengthShape1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthShape1), colors.cr_green)
  heightLengthShape1Geometry.computeLineDistances()

  const heightLengthRedLine = []
  heightLengthRedLine.push(new THREE.Vector2(0, 0))
  heightLengthRedLine.push(new THREE.Vector2(length, 0))
  const heightLengthRedLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthRedLine), colors.cr_red)
  heightLengthRedLineGeometry.computeLineDistances()

  const heightLengthGreenLine1 = []
  heightLengthGreenLine1.push(new THREE.Vector2(0, 0))
  heightLengthGreenLine1.push(new THREE.Vector2(0, height))
  const heightLengthGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine1), colors.cr_green)
  heightLengthGreenLine1Geometry.computeLineDistances()

  const heightLengthGreenLine2 = []
  heightLengthGreenLine2.push(new THREE.Vector2(length, 0))
  heightLengthGreenLine2.push(new THREE.Vector2(length, height))
  const heightLengthGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine2), colors.cr_green)
  heightLengthGreenLine2Geometry.computeLineDistances()



  const dustFlapShape = []
  dustFlapShape.push(new THREE.Vector2(0, 0))
  dustFlapShape.push(new THREE.Vector2(2, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, height))
  const dustFlapShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(dustFlapShape), colors.cr_red)
  dustFlapShapeGeometry.computeLineDistances()


  const sideLockFlap = []
  sideLockFlap.push(new THREE.Vector2(0, 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), width))
  sideLockFlap.push(new THREE.Vector2(0, width))
  const sideLockFlapGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideLockFlap), colors.cr_red)
  sideLockFlapGeometry.computeLineDistances()


  const boxCoverGreenLine1 = []
  boxCoverGreenLine1.push(new THREE.Vector2(1, 0))
  boxCoverGreenLine1.push(new THREE.Vector2(1, width))
  const boxCoverGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine1), colors.cr_green)
  boxCoverGreenLine1Geometry.computeLineDistances()

  const boxCoverGreenLine2 = []
  boxCoverGreenLine2.push(new THREE.Vector2(+1, width))
  boxCoverGreenLine2.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine2), colors.cr_green)
  boxCoverGreenLine2Geometry.computeLineDistances()

  const boxCoverGreenLine3 = []
  boxCoverGreenLine3.push(new THREE.Vector2(length - 1, 0))
  boxCoverGreenLine3.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine3), colors.cr_green)
  boxCoverGreenLine3Geometry.computeLineDistances()




  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * height, Math.cos(i * -(Math.PI / 180)) * height))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set(0, 0 ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * height, Math.cos(i * (Math.PI / 180)) * height))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set(length, 0 ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(0, 0))
  flapTopRedLine1.push(new THREE.Vector2(-height, 0))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(0, height))
  flapTopRedLine2.push(new THREE.Vector2(length, height))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2(length, 0))
  flapTopRedLine3.push(new THREE.Vector2((length + height), 0))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

  const flapTopGreenLine1 = []
  flapTopGreenLine1.push(new THREE.Vector2(0, 0))
  flapTopGreenLine1.push(new THREE.Vector2(0, height))
  const flapTopGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine1), colors.cr_green)
  flapTopGreenLine1Geometry.computeLineDistances()

  const flapTopGreenLine2 = []
  flapTopGreenLine2.push(new THREE.Vector2(length, 0))
  flapTopGreenLine2.push(new THREE.Vector2(length, height))
  const flapTopGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine2), colors.cr_green)
  flapTopGreenLine2Geometry.computeLineDistances()



  const sideFlapCoverCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapCoverCurveTopPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveTopShape = new THREE.Shape()
  sideFlapCoverCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveTopPoint))
  const sideFlapCoverCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveTopShape), colors.cr_red)

  const sideFlapCoverCurveTop = new THREE.Object3D()
  sideFlapCoverCurveTop.position.set(-(height - 6), (width - 10) ,0)
  sideFlapCoverCurveTop.add(sideFlapCoverCurveTopLine)


  const sideFlapCoverCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapCoverCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveBottomShape = new THREE.Shape()
  sideFlapCoverCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveBottomPoint))
  const sideFlapCoverCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveBottomShape), colors.cr_red)

  const sideFlapCoverCurveBottom = new THREE.Object3D()
  sideFlapCoverCurveBottom.position.set(-(height - 6), 10 ,0)
  sideFlapCoverCurveBottom.add(sideFlapCoverCurveBottomLine)


  const sideFlapCoverRedLine1 = []
  sideFlapCoverRedLine1.push(new THREE.Vector2(0, 0))
  sideFlapCoverRedLine1.push(new THREE.Vector2(-(height - 6), 5))
  const sideFlapCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine1), colors.cr_red)
  sideFlapCoverRedLine1Geometry.computeLineDistances()

  const sideFlapCoverRedLine2 = []
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), 10))
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), (width - 10)))
  const sideFlapCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine2), colors.cr_red)
  sideFlapCoverRedLine2Geometry.computeLineDistances()

  const sideFlapCoverRedLine3 = []
  sideFlapCoverRedLine3.push(new THREE.Vector2(-(height - 6), (width - 5)))
  sideFlapCoverRedLine3.push(new THREE.Vector2(0, width))
  const sideFlapCoverRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine3), colors.cr_red)
  sideFlapCoverRedLine3Geometry.computeLineDistances()





  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }

  const geometry = new THREE.PlaneBufferGeometry(length / 22, length / 22)
  const loader = new THREE.TextureLoader()

  const meshLength = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/A.png') })
  )
  const meshWidth = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/b.png') })
  )
  const meshHeight = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/c.png') })
  )
  const meshSideTopFlap = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/g.png') })
  )
  const meshTopFlap = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/p.png') })
  )
  const meshDustFlap = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/f.png') })
  )

  const lineMarkLength = new THREE.Object3D()
  lineMarkLength.position.set(((height * 2) + (length / 3)), (height + (width / 6) + 20), 0)
  lineMarkLength.add(meshLength)

  const lineMarkWidth = new THREE.Object3D()
  lineMarkWidth.position.set(((height * 2) + ((length / 8) * 5.5)), (height + (width / 2)), 0)
  lineMarkWidth.add(meshWidth)

  const lineMarkHeight = new THREE.Object3D()
  lineMarkHeight.position.set((height + (height / 2)), (height + (width / 6) + 20), 0)
  lineMarkHeight.add(meshHeight)

  const lineMarkDustFlap = new THREE.Object3D()
  lineMarkDustFlap.position.set(((height * 2) + length + (dustFlap / 2)), (height + width + (dustFlap / 6) + 20), 0)
  lineMarkDustFlap.add(meshDustFlap)


  const lengthLabel = new THREE.Object3D()
  lengthLabel.position.set(((height * 2) + (length / 3)), (height + (width / 6) + 5), 0)

  const widthLabel = new THREE.Object3D()
  widthLabel.rotation.z = Math.PI / 2
  widthLabel.position.set(((height * 2) + ((length / 8) * 6.8)), (height + (width / 2)), 0)

  const heightLabel = new THREE.Object3D()
  heightLabel.position.set((height + (height / 2)), (height + (width / 6) + 5), 0)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.rotation.z = Math.PI / 2
  heightDimensionLabel.position.set(-15, ((height * 3) + (width * 2)) / 2, 0)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(((height * 4) + length) / 2, ((height * 3) + (width * 2) + 15), 0)

  const dusFlapLabel = new THREE.Object3D()
  dusFlapLabel.position.set(((height * 2) + length + (dustFlap / 2)), (height + width + (dustFlap / 6) + 5), 0)



  const loaderTextLength = new THREE.FontLoader()
  loaderTextLength.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (length / defaultUnit[labelUnits]).toFixed(2)
            : (length / defaultUnit[labelUnits]).toFixed(2)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    lengthLabel.add(text)
  })

  const loaderTextWidth = new THREE.FontLoader()
  loaderTextWidth.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (width / defaultUnit[labelUnits]).toFixed(2) : (width / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}.`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    widthLabel.add(text)
  })

  const loaderTextHeight = new THREE.FontLoader()
  loaderTextHeight.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (height / defaultUnit[labelUnits]).toFixed(2) : (height / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    heightLabel.add(text)
  })

  const loaderTextDustFlap = new THREE.FontLoader()
  loaderTextDustFlap.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (dustFlap / defaultUnit[labelUnits]).toFixed(2)
            : (dustFlap / defaultUnit[labelUnits]).toFixed(2)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    dusFlapLabel.add(text)
  })

  const loaderTextHeightDimension = new THREE.FontLoader()
  loaderTextHeightDimension.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (((height * 3) + (width * 2)) / defaultUnit[labelUnits]).toFixed(2) : (((height * 3) + (width * 2)) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    heightDimensionLabel.add(text.clone())
  })

  const loaderTextWidthDimension = new THREE.FontLoader()
  loaderTextWidthDimension.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (((height * 4) + length) / defaultUnit[labelUnits]).toFixed(2) : (((height * 4) + length) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    widthDimensionLabel.add(text)
  })


  const arrows = size => {
    const scene = new THREE.Scene()

    const arrowHeadWidth = 4;
    const arrowHeadHeight = 2;

    const arrowHeadLeft = new THREE.Shape()
    arrowHeadLeft.moveTo(0, 0)
    arrowHeadLeft.lineTo(arrowHeadWidth, arrowHeadHeight)
    arrowHeadLeft.lineTo(arrowHeadWidth, -arrowHeadHeight)
    arrowHeadLeft.lineTo(0, 0)
    const arrowLeftMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHeadLeft), new THREE.MeshBasicMaterial({ color: 0x00000 }))

    const arrowHeadRight = new THREE.Shape()
    arrowHeadRight.moveTo(size, 0)
    arrowHeadRight.lineTo(size - arrowHeadWidth, arrowHeadHeight)
    arrowHeadRight.lineTo(size - arrowHeadWidth, -arrowHeadHeight)
    arrowHeadRight.lineTo(size, 0)
    const arrowRightMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHeadRight), new THREE.MeshBasicMaterial({ color: 0x00000 }))

    const arrow_line = []
    arrow_line.push(new THREE.Vector3(arrowHeadWidth, 0))
    arrow_line.push(new THREE.Vector3(size - arrowHeadWidth, 0))
    const arrowLineMesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(arrow_line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
    )

    scene.add(arrowLeftMesh, arrowRightMesh, arrowLineMesh)
    return scene
  }
  const lineSet = (x1, y1, x2, y2) => {
    const scene = new THREE.Scene()

    const line = [];
    line.push(new THREE.Vector3(x1, y1))
    line.push(new THREE.Vector3(x2, y2))
    const mesh = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(line),
        new THREE.MeshBasicMaterial({ color: 0x00000 })
    )

    return scene.add(mesh)
  }

  const lengthArrow = new THREE.Object3D()
  lengthArrow.position.set((height * 2), (height + (width / 6)), 0)
  lengthArrow.add(arrows(length).clone())

  const widthArrow = new THREE.Object3D()
  widthArrow.rotation.z = -Math.PI / 2
  widthArrow.position.set(((height * 2) + ((length / 8) * 7)), (height + width), 0)
  widthArrow.add(arrows(width).clone())

  const heightArrow = new THREE.Object3D()
  heightArrow.position.set((height), (height + (width / 6)), 0)
  heightArrow.add(arrows(height).clone())

  const dusFlapArrow = new THREE.Object3D()
  dusFlapArrow.position.set(((height * 2) + length), (height + width + (height / 6)), 0)
  dusFlapArrow.add(arrows(dustFlap).clone())



  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-10, ((height * 3) + (width * 2)), 0)
  heightDimensionArrow.add(
      arrows(((height * 3) + (width * 2))).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(((height * 3) + (width * 2)), 0, ((height * 3) + (width * 2)), 10).clone()
  )

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0, ((height * 3) + (width * 2) + 10), 0)
  widthDimensionArrow.add(
      arrows((height * 4) + length).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(((height * 4) + length), 0, (height * 4) + length, -10).clone()
  )

  const bottomShapeSideLeftGroup = new THREE.Object3D()
  bottomShapeSideLeftGroup.position.set(0, 0, 0)
  bottomShapeSideLeftGroup.add(
      bottomBoxShapeSideLine1Geometry,
      bottomBoxShapeSideLine2Geometry,
      bottomBoxShapeSideLine3Geometry,
      bottomBoxShapeSideLine4Geometry,
      bottomBoxShapeSideLine5Geometry,
  )

  const bottomShapeSideRightGroup = new THREE.Object3D()
  bottomShapeSideRightGroup.rotation.y = -Math.PI
  bottomShapeSideRightGroup.position.set(length, 0, 0)
  bottomShapeSideRightGroup.add(
      bottomBoxShapeSideLine1Geometry.clone(),
      bottomBoxShapeSideLine2Geometry.clone(),
      bottomBoxShapeSideLine3Geometry.clone(),
      bottomBoxShapeSideLine4Geometry.clone(),
      bottomBoxShapeSideLine5Geometry.clone(),
  )

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((height * 2), height, 0)
  bottomShapeGroup.add(
      bottomBoxShapeGreenLineTopGeometry,
      bottomBoxShapeGreenLineBottomGeometry,
      bottomShapeSideLeftGroup,
      bottomShapeSideRightGroup
  )

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((height), height, 0)
  heightWidthGroup1.add(
    heightWidthGreenLineGeometry,
    heightWidthRedLine1Geometry,
    heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set(((height * 3) + length), height, 0)
  heightWidthGroup2.add(
    heightWidthGreenLineGeometry.clone(),
    heightWidthRedLine1Geometry.clone(),
    heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((height * 2), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((height * 2), 0, 0)
  heightLengthGroup2.add(
    heightLengthRedLineGeometry,
    heightLengthGreenLine1Geometry,
    heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((height * 2), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set(((height * 2) + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((height * 2), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set(((height * 2) + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( height, height, 0)
  sideFlapLeftGroup.add(
      sideLockFlapGeometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set(((height * 3) + length), height, 0)
  sideFlapRightGroup.add(
    sideLockFlapGeometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
    flapTopCurveLeft,
    flapTopCurveRight,
    flapTopRedLine1Geometry,
    flapTopRedLine2Geometry,
    flapTopRedLine3Geometry,
    flapTopGreenLine1Geometry,
    flapTopGreenLine2Geometry,
  )

  const sideFlapCoverLeftGroup = new THREE.Object3D()
  sideFlapCoverLeftGroup.position.set(0, 0, 0)
  sideFlapCoverLeftGroup.add(
    sideFlapCoverRedLine1Geometry,
    sideFlapCoverRedLine2Geometry,
    sideFlapCoverRedLine3Geometry,
    sideFlapCoverCurveTop,
    sideFlapCoverCurveBottom,
  )

  const sideFlapCoverRightGroup = new THREE.Object3D()
  sideFlapCoverRightGroup.rotation.y = Math.PI
  sideFlapCoverRightGroup.position.set(length, 0, 0)
  sideFlapCoverRightGroup.add(
    sideFlapCoverRedLine1Geometry.clone(),
    sideFlapCoverRedLine2Geometry.clone(),
    sideFlapCoverRedLine3Geometry.clone(),
    sideFlapCoverCurveTop.clone(),
    sideFlapCoverCurveBottom.clone()
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((height * 2), ((height * 2) + width), 0)
  boxCoverGroup.add(
    boxCoverGreenLine2Geometry,
    boxCoverGreenLine1Geometry,
    boxCoverGreenLine3Geometry,
    sideFlapCoverLeftGroup,
    sideFlapCoverRightGroup,
    topFlapGroup,
  )

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
    bottomShapeGroup,
    heightWidthGroup1,
    heightWidthGroup2,
    heightLengthGroup1,
    heightLengthGroup2,
    dustFlapBottomLeftGroup,
    dustFlapBottomRightGroup,
    dustFlapTopLeftGroup,
    dustFlapTopRightGroup,
    sideFlapLeftGroup,
    sideFlapRightGroup,
    boxCoverGroup,

    lineMarkLength,
    lineMarkWidth,
    lineMarkHeight,

    lengthLabel,
    widthLabel,
    heightLabel,
    dusFlapLabel,
    lineMarkDustFlap,

    heightDimensionLabel,
    widthDimensionLabel,

    lengthArrow,
    widthArrow,
    heightArrow,
    dusFlapArrow,
    heightDimensionArrow,
    widthDimensionArrow
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-(((length + (height * 4)) - 20 ) / 2), -(((width * 2) + (height * 3) + 20) / 2), 0)
  // PositionCenter.position.set(0, 0, 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}
const MainLays = (options) => {
  const { length, width, height, dustFlap, colors } = options;
  const scene = new THREE.Scene()
  const sideFlapLock = 20;

  const bottomBoxShapeGreenLineTop = []
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(0, width))
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(length, width))
  const bottomBoxShapeGreenLineTopGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineTop), colors.cr_green)
  bottomBoxShapeGreenLineTopGeometry.computeLineDistances()

  const bottomBoxShapeGreenLineBottom = []
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(0, 0))
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(length, 0))
  const bottomBoxShapeGreenLineBottomGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineBottom), colors.cr_green)
  bottomBoxShapeGreenLineBottomGeometry.computeLineDistances()

  const bottomBoxShapeSideLine1 = []
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, 0))
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine1), colors.cr_green)
  bottomBoxShapeSideLine1Geometry.computeLineDistances()

  const bottomBoxShapeSideLine2 = []
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  const bottomBoxShapeSideLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine2), colors.cr_red)
  bottomBoxShapeSideLine2Geometry.computeLineDistances()

  const bottomBoxShapeSideLine3 = []
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, ((width / 4) * 3) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine3), colors.cr_green)
  bottomBoxShapeSideLine3Geometry.computeLineDistances()

  const bottomBoxShapeSideLine4 = []
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) - (sideFlapLock / 2))))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) + (sideFlapLock / 2))))
  const bottomBoxShapeSideLine4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine4), colors.cr_red)
  bottomBoxShapeSideLine4Geometry.computeLineDistances()

  const bottomBoxShapeSideLine5 = []
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, ((width / 4) * 3) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, width))
  const bottomBoxShapeSideLine5Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine5), colors.cr_green)
  bottomBoxShapeSideLine5Geometry.computeLineDistances()

  const bottomBoxShape = []
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  bottomBoxShape.push(new THREE.Vector2(0, width))
  bottomBoxShape.push(new THREE.Vector2(length, width))
  bottomBoxShape.push(new THREE.Vector2(length, 0))
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  const bottomShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShape), colors.cr_green)
  bottomShapeGeometry.computeLineDistances()

  const heightWidthGreenLine = []
  heightWidthGreenLine.push(new THREE.Vector2(0, 0))
  heightWidthGreenLine.push(new THREE.Vector2(0, width))
  const heightWidthGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthGreenLine), colors.cr_green)
  heightWidthGreenLineGeometry.computeLineDistances()

  const heightWidthRedLine1 = []
  heightWidthRedLine1.push(new THREE.Vector2(0, width))
  heightWidthRedLine1.push(new THREE.Vector2(height, width))
  const heightWidthRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine1), colors.cr_red)
  heightWidthRedLine1Geometry.computeLineDistances()

  const heightWidthRedLine2 = []
  heightWidthRedLine2.push(new THREE.Vector2(0, 0))
  heightWidthRedLine2.push(new THREE.Vector2(height, 0))
  const heightWidthRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine2), colors.cr_red)
  heightWidthRedLine2Geometry.computeLineDistances()

  const heightLengthShape1 = []
  heightLengthShape1.push(new THREE.Vector2(0, 0))
  heightLengthShape1.push(new THREE.Vector2(0, height))
  heightLengthShape1.push(new THREE.Vector2(length, height))
  heightLengthShape1.push(new THREE.Vector2(length, 0))
  const heightLengthShape1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthShape1), colors.cr_green)
  heightLengthShape1Geometry.computeLineDistances()

  const heightLengthRedLine = []
  heightLengthRedLine.push(new THREE.Vector2(0, 0))
  heightLengthRedLine.push(new THREE.Vector2(length, 0))
  const heightLengthRedLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthRedLine), colors.cr_red)
  heightLengthRedLineGeometry.computeLineDistances()

  const heightLengthGreenLine1 = []
  heightLengthGreenLine1.push(new THREE.Vector2(0, 0))
  heightLengthGreenLine1.push(new THREE.Vector2(0, height))
  const heightLengthGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine1), colors.cr_green)
  heightLengthGreenLine1Geometry.computeLineDistances()

  const heightLengthGreenLine2 = []
  heightLengthGreenLine2.push(new THREE.Vector2(length, 0))
  heightLengthGreenLine2.push(new THREE.Vector2(length, height))
  const heightLengthGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine2), colors.cr_green)
  heightLengthGreenLine2Geometry.computeLineDistances()



  const dustFlapShape = []
  dustFlapShape.push(new THREE.Vector2(0, 0))
  dustFlapShape.push(new THREE.Vector2(2, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, height))
  const dustFlapShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(dustFlapShape), colors.cr_red)
  dustFlapShapeGeometry.computeLineDistances()


  const sideLockFlap = []
  sideLockFlap.push(new THREE.Vector2(0, 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), width))
  sideLockFlap.push(new THREE.Vector2(0, width))
  const sideLockFlapGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideLockFlap), colors.cr_red)
  sideLockFlapGeometry.computeLineDistances()


  const boxCoverGreenLine1 = []
  boxCoverGreenLine1.push(new THREE.Vector2(1, 0))
  boxCoverGreenLine1.push(new THREE.Vector2(1, width))
  const boxCoverGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine1), colors.cr_green)
  boxCoverGreenLine1Geometry.computeLineDistances()

  const boxCoverGreenLine2 = []
  boxCoverGreenLine2.push(new THREE.Vector2(+1, width))
  boxCoverGreenLine2.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine2), colors.cr_green)
  boxCoverGreenLine2Geometry.computeLineDistances()

  const boxCoverGreenLine3 = []
  boxCoverGreenLine3.push(new THREE.Vector2(length - 1, 0))
  boxCoverGreenLine3.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine3), colors.cr_green)
  boxCoverGreenLine3Geometry.computeLineDistances()




  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * height, Math.cos(i * -(Math.PI / 180)) * height))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set(0, 0 ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * height, Math.cos(i * (Math.PI / 180)) * height))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set(length, 0 ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(0, 0))
  flapTopRedLine1.push(new THREE.Vector2(-height, 0))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(0, height))
  flapTopRedLine2.push(new THREE.Vector2(length, height))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2(length, 0))
  flapTopRedLine3.push(new THREE.Vector2((length + height), 0))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

  const flapTopGreenLine1 = []
  flapTopGreenLine1.push(new THREE.Vector2(0, 0))
  flapTopGreenLine1.push(new THREE.Vector2(0, height))
  const flapTopGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine1), colors.cr_green)
  flapTopGreenLine1Geometry.computeLineDistances()

  const flapTopGreenLine2 = []
  flapTopGreenLine2.push(new THREE.Vector2(length, 0))
  flapTopGreenLine2.push(new THREE.Vector2(length, height))
  const flapTopGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine2), colors.cr_green)
  flapTopGreenLine2Geometry.computeLineDistances()



  const sideFlapCoverCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapCoverCurveTopPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveTopShape = new THREE.Shape()
  sideFlapCoverCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveTopPoint))
  const sideFlapCoverCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveTopShape), colors.cr_red)

  const sideFlapCoverCurveTop = new THREE.Object3D()
  sideFlapCoverCurveTop.position.set(-(height - 6), (width - 10) ,0)
  sideFlapCoverCurveTop.add(sideFlapCoverCurveTopLine)


  const sideFlapCoverCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapCoverCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveBottomShape = new THREE.Shape()
  sideFlapCoverCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveBottomPoint))
  const sideFlapCoverCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveBottomShape), colors.cr_red)

  const sideFlapCoverCurveBottom = new THREE.Object3D()
  sideFlapCoverCurveBottom.position.set(-(height - 6), 10 ,0)
  sideFlapCoverCurveBottom.add(sideFlapCoverCurveBottomLine)


  const sideFlapCoverRedLine1 = []
  sideFlapCoverRedLine1.push(new THREE.Vector2(0, 0))
  sideFlapCoverRedLine1.push(new THREE.Vector2(-(height - 6), 5))
  const sideFlapCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine1), colors.cr_red)
  sideFlapCoverRedLine1Geometry.computeLineDistances()

  const sideFlapCoverRedLine2 = []
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), 10))
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), (width - 10)))
  const sideFlapCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine2), colors.cr_red)
  sideFlapCoverRedLine2Geometry.computeLineDistances()

  const sideFlapCoverRedLine3 = []
  sideFlapCoverRedLine3.push(new THREE.Vector2(-(height - 6), (width - 5)))
  sideFlapCoverRedLine3.push(new THREE.Vector2(0, width))
  const sideFlapCoverRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine3), colors.cr_red)
  sideFlapCoverRedLine3Geometry.computeLineDistances()



  const bottomShapeSideLeftGroup = new THREE.Object3D()
  bottomShapeSideLeftGroup.position.set(0, 0, 0)
  bottomShapeSideLeftGroup.add(
      bottomBoxShapeSideLine1Geometry,
      bottomBoxShapeSideLine2Geometry,
      bottomBoxShapeSideLine3Geometry,
      bottomBoxShapeSideLine4Geometry,
      bottomBoxShapeSideLine5Geometry,
  )

  const bottomShapeSideRightGroup = new THREE.Object3D()
  bottomShapeSideRightGroup.rotation.y = -Math.PI
  bottomShapeSideRightGroup.position.set(length, 0, 0)
  bottomShapeSideRightGroup.add(
      bottomBoxShapeSideLine1Geometry.clone(),
      bottomBoxShapeSideLine2Geometry.clone(),
      bottomBoxShapeSideLine3Geometry.clone(),
      bottomBoxShapeSideLine4Geometry.clone(),
      bottomBoxShapeSideLine5Geometry.clone(),
  )

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((height * 2), height, 0)
  bottomShapeGroup.add(
      bottomBoxShapeGreenLineTopGeometry,
      bottomBoxShapeGreenLineBottomGeometry,
      bottomShapeSideLeftGroup,
      bottomShapeSideRightGroup
  )

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((height), height, 0)
  heightWidthGroup1.add(
      heightWidthGreenLineGeometry,
      heightWidthRedLine1Geometry,
      heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set(((height * 3) + length), height, 0)
  heightWidthGroup2.add(
      heightWidthGreenLineGeometry.clone(),
      heightWidthRedLine1Geometry.clone(),
      heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((height * 2), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((height * 2), 0, 0)
  heightLengthGroup2.add(
      heightLengthRedLineGeometry,
      heightLengthGreenLine1Geometry,
      heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((height * 2), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set(((height * 2) + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((height * 2), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set(((height * 2) + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( height, height, 0)
  sideFlapLeftGroup.add(
      sideLockFlapGeometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set(((height * 3) + length), height, 0)
  sideFlapRightGroup.add(
      sideLockFlapGeometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
      flapTopCurveLeft,
      flapTopCurveRight,
      flapTopRedLine1Geometry,
      flapTopRedLine2Geometry,
      flapTopRedLine3Geometry,
      flapTopGreenLine1Geometry,
      flapTopGreenLine2Geometry,
  )

  const sideFlapCoverLeftGroup = new THREE.Object3D()
  sideFlapCoverLeftGroup.position.set(0, 0, 0)
  sideFlapCoverLeftGroup.add(
      sideFlapCoverRedLine1Geometry,
      sideFlapCoverRedLine2Geometry,
      sideFlapCoverRedLine3Geometry,
      sideFlapCoverCurveTop,
      sideFlapCoverCurveBottom,
  )

  const sideFlapCoverRightGroup = new THREE.Object3D()
  sideFlapCoverRightGroup.rotation.y = Math.PI
  sideFlapCoverRightGroup.position.set(length, 0, 0)
  sideFlapCoverRightGroup.add(
      sideFlapCoverRedLine1Geometry.clone(),
      sideFlapCoverRedLine2Geometry.clone(),
      sideFlapCoverRedLine3Geometry.clone(),
      sideFlapCoverCurveTop.clone(),
      sideFlapCoverCurveBottom.clone()
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((height * 2), ((height * 2) + width), 0)
  boxCoverGroup.add(
      boxCoverGreenLine2Geometry,
      boxCoverGreenLine1Geometry,
      boxCoverGreenLine3Geometry,
      sideFlapCoverLeftGroup,
      sideFlapCoverRightGroup,
      topFlapGroup,
  )

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      bottomShapeGroup,
      heightWidthGroup1,
      heightWidthGroup2,
      heightLengthGroup1,
      heightLengthGroup2,
      dustFlapBottomLeftGroup,
      dustFlapBottomRightGroup,
      dustFlapTopLeftGroup,
      dustFlapTopRightGroup,
      sideFlapLeftGroup,
      sideFlapRightGroup,
      boxCoverGroup,
  )

  const PositionCenter = new THREE.Object3D()
  // PositionCenter.position.set(-(((length + (height * 4)) - 20 ) / 2), -(((width * 2) + (height * 3) + 20) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}
const MainLays_Invert = (options) => {
  const { length, width, height, topFlap, dustFlap, colors } = options;
  const scene = new THREE.Scene()
  const sideFlapLock = 20;

  const bottomBoxShapeGreenLineTop = []
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(0, width))
  bottomBoxShapeGreenLineTop.push(new THREE.Vector2(length, width))
  const bottomBoxShapeGreenLineTopGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineTop), colors.cr_green)
  bottomBoxShapeGreenLineTopGeometry.computeLineDistances()

  const bottomBoxShapeGreenLineBottom = []
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(0, 0))
  bottomBoxShapeGreenLineBottom.push(new THREE.Vector2(length, 0))
  const bottomBoxShapeGreenLineBottomGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeGreenLineBottom), colors.cr_green)
  bottomBoxShapeGreenLineBottomGeometry.computeLineDistances()

  const bottomBoxShapeSideLine1 = []
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, 0))
  bottomBoxShapeSideLine1.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine1), colors.cr_green)
  bottomBoxShapeSideLine1Geometry.computeLineDistances()

  const bottomBoxShapeSideLine2 = []
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) - (sideFlapLock / 2)))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(1, ((width / 4) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine2.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  const bottomBoxShapeSideLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine2), colors.cr_red)
  bottomBoxShapeSideLine2Geometry.computeLineDistances()

  const bottomBoxShapeSideLine3 = []
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, (width / 4) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine3.push(new THREE.Vector2(0, ((width / 4) * 3) - (sideFlapLock / 2)))
  const bottomBoxShapeSideLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine3), colors.cr_green)
  bottomBoxShapeSideLine3Geometry.computeLineDistances()

  const bottomBoxShapeSideLine4 = []
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) - (sideFlapLock / 2))))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(1, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  bottomBoxShapeSideLine4.push(new THREE.Vector2(0, (((width / 4) * 3) + (sideFlapLock / 2))))
  const bottomBoxShapeSideLine4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine4), colors.cr_red)
  bottomBoxShapeSideLine4Geometry.computeLineDistances()

  const bottomBoxShapeSideLine5 = []
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, ((width / 4) * 3) + (sideFlapLock / 2)))
  bottomBoxShapeSideLine5.push(new THREE.Vector2(0, width))
  const bottomBoxShapeSideLine5Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShapeSideLine5), colors.cr_green)
  bottomBoxShapeSideLine5Geometry.computeLineDistances()

  const bottomBoxShape = []
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  bottomBoxShape.push(new THREE.Vector2(0, width))
  bottomBoxShape.push(new THREE.Vector2(length, width))
  bottomBoxShape.push(new THREE.Vector2(length, 0))
  bottomBoxShape.push(new THREE.Vector2(0, 0))
  const bottomShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bottomBoxShape), colors.cr_green)
  bottomShapeGeometry.computeLineDistances()

  const heightWidthGreenLine = []
  heightWidthGreenLine.push(new THREE.Vector2(0, 0))
  heightWidthGreenLine.push(new THREE.Vector2(0, width))
  const heightWidthGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthGreenLine), colors.cr_green)
  heightWidthGreenLineGeometry.computeLineDistances()

  const heightWidthRedLine1 = []
  heightWidthRedLine1.push(new THREE.Vector2(0, width))
  heightWidthRedLine1.push(new THREE.Vector2(height, width))
  const heightWidthRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine1), colors.cr_red)
  heightWidthRedLine1Geometry.computeLineDistances()

  const heightWidthRedLine2 = []
  heightWidthRedLine2.push(new THREE.Vector2(0, 0))
  heightWidthRedLine2.push(new THREE.Vector2(height, 0))
  const heightWidthRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightWidthRedLine2), colors.cr_red)
  heightWidthRedLine2Geometry.computeLineDistances()

  const heightLengthShape1 = []
  heightLengthShape1.push(new THREE.Vector2(0, 0))
  heightLengthShape1.push(new THREE.Vector2(0, height))
  heightLengthShape1.push(new THREE.Vector2(length, height))
  heightLengthShape1.push(new THREE.Vector2(length, 0))
  const heightLengthShape1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthShape1), colors.cr_green)
  heightLengthShape1Geometry.computeLineDistances()

  const heightLengthRedLine = []
  heightLengthRedLine.push(new THREE.Vector2(0, 0))
  heightLengthRedLine.push(new THREE.Vector2(length, 0))
  const heightLengthRedLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthRedLine), colors.cr_red)
  heightLengthRedLineGeometry.computeLineDistances()

  const heightLengthGreenLine1 = []
  heightLengthGreenLine1.push(new THREE.Vector2(0, 0))
  heightLengthGreenLine1.push(new THREE.Vector2(0, height))
  const heightLengthGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine1), colors.cr_green)
  heightLengthGreenLine1Geometry.computeLineDistances()

  const heightLengthGreenLine2 = []
  heightLengthGreenLine2.push(new THREE.Vector2(length, 0))
  heightLengthGreenLine2.push(new THREE.Vector2(length, height))
  const heightLengthGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(heightLengthGreenLine2), colors.cr_green)
  heightLengthGreenLine2Geometry.computeLineDistances()



  const dustFlapShape = []
  dustFlapShape.push(new THREE.Vector2(0, 0))
  dustFlapShape.push(new THREE.Vector2(2, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, 1))
  dustFlapShape.push(new THREE.Vector2(dustFlap, height))
  const dustFlapShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(dustFlapShape), colors.cr_red)
  dustFlapShapeGeometry.computeLineDistances()

  const sideLockFlap = []
  sideLockFlap.push(new THREE.Vector2(0, 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), 0))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, ((width / 4) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), (width / 4) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) - (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) - (sideFlapLock / 2)) + 3))
  sideLockFlap.push(new THREE.Vector2(height, (((width / 4) * 3) + (sideFlapLock / 2)) - 3))
  sideLockFlap.push(new THREE.Vector2((height - 2), ((width / 4) * 3) + (sideFlapLock / 2)))
  sideLockFlap.push(new THREE.Vector2((height - 2), width))
  sideLockFlap.push(new THREE.Vector2(0, width))
  const sideLockFlapGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideLockFlap), colors.cr_red)
  sideLockFlapGeometry.computeLineDistances()



  const boxCoverGreenLine1 = []
  boxCoverGreenLine1.push(new THREE.Vector2(1, 0))
  boxCoverGreenLine1.push(new THREE.Vector2(1, width))
  const boxCoverGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine1), colors.cr_green)
  boxCoverGreenLine1Geometry.computeLineDistances()

  const boxCoverGreenLine2 = []
  boxCoverGreenLine2.push(new THREE.Vector2(+1, width))
  boxCoverGreenLine2.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine2), colors.cr_green)
  boxCoverGreenLine2Geometry.computeLineDistances()

  const boxCoverGreenLine3 = []
  boxCoverGreenLine3.push(new THREE.Vector2(length - 1, 0))
  boxCoverGreenLine3.push(new THREE.Vector2((length - 1), width))
  const boxCoverGreenLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine3), colors.cr_green)
  boxCoverGreenLine3Geometry.computeLineDistances()




  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * height, Math.cos(i * -(Math.PI / 180)) * height))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set(0, 0 ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * height, Math.cos(i * (Math.PI / 180)) * height))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set(length, 0 ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(0, 0))
  flapTopRedLine1.push(new THREE.Vector2(-height, 0))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(0, height))
  flapTopRedLine2.push(new THREE.Vector2(length, height))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2(length, 0))
  flapTopRedLine3.push(new THREE.Vector2((length + height), 0))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

  const flapTopGreenLine1 = []
  flapTopGreenLine1.push(new THREE.Vector2(0, 0))
  flapTopGreenLine1.push(new THREE.Vector2(0, height))
  const flapTopGreenLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine1), colors.cr_green)
  flapTopGreenLine1Geometry.computeLineDistances()

  const flapTopGreenLine2 = []
  flapTopGreenLine2.push(new THREE.Vector2(length, 0))
  flapTopGreenLine2.push(new THREE.Vector2(length, height))
  const flapTopGreenLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopGreenLine2), colors.cr_green)
  flapTopGreenLine2Geometry.computeLineDistances()



  const sideFlapCoverCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapCoverCurveTopPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveTopShape = new THREE.Shape()
  sideFlapCoverCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveTopPoint))
  const sideFlapCoverCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveTopShape), colors.cr_red)

  const sideFlapCoverCurveTop = new THREE.Object3D()
  sideFlapCoverCurveTop.position.set(-(height - 6), (width - 10) ,0)
  sideFlapCoverCurveTop.add(sideFlapCoverCurveTopLine)


  const sideFlapCoverCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapCoverCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const sideFlapCoverCurveBottomShape = new THREE.Shape()
  sideFlapCoverCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapCoverCurveBottomPoint))
  const sideFlapCoverCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapCoverCurveBottomShape), colors.cr_red)

  const sideFlapCoverCurveBottom = new THREE.Object3D()
  sideFlapCoverCurveBottom.position.set(-(height - 6), 10 ,0)
  sideFlapCoverCurveBottom.add(sideFlapCoverCurveBottomLine)


  const sideFlapCoverRedLine1 = []
  sideFlapCoverRedLine1.push(new THREE.Vector2(0, 0))
  sideFlapCoverRedLine1.push(new THREE.Vector2(-(height - 6), 5))
  const sideFlapCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine1), colors.cr_red)
  sideFlapCoverRedLine1Geometry.computeLineDistances()

  const sideFlapCoverRedLine2 = []
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), 10))
  sideFlapCoverRedLine2.push(new THREE.Vector2(-(height - 1), (width - 10)))
  const sideFlapCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine2), colors.cr_red)
  sideFlapCoverRedLine2Geometry.computeLineDistances()

  const sideFlapCoverRedLine3 = []
  sideFlapCoverRedLine3.push(new THREE.Vector2(-(height - 6), (width - 5)))
  sideFlapCoverRedLine3.push(new THREE.Vector2(0, width))
  const sideFlapCoverRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapCoverRedLine3), colors.cr_red)
  sideFlapCoverRedLine3Geometry.computeLineDistances()



  const bottomShapeSideLeftGroup = new THREE.Object3D()
  bottomShapeSideLeftGroup.position.set(0, 0, 0)
  bottomShapeSideLeftGroup.add(
      bottomBoxShapeSideLine1Geometry,
      bottomBoxShapeSideLine2Geometry,
      bottomBoxShapeSideLine3Geometry,
      bottomBoxShapeSideLine4Geometry,
      bottomBoxShapeSideLine5Geometry,
  )

  const bottomShapeSideRightGroup = new THREE.Object3D()
  bottomShapeSideRightGroup.rotation.y = -Math.PI
  bottomShapeSideRightGroup.position.set(length, 0, 0)
  bottomShapeSideRightGroup.add(
      bottomBoxShapeSideLine1Geometry.clone(),
      bottomBoxShapeSideLine2Geometry.clone(),
      bottomBoxShapeSideLine3Geometry.clone(),
      bottomBoxShapeSideLine4Geometry.clone(),
      bottomBoxShapeSideLine5Geometry.clone(),
  )

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((height * 2), height, 0)
  bottomShapeGroup.add(
      bottomBoxShapeGreenLineTopGeometry,
      bottomBoxShapeGreenLineBottomGeometry,
      bottomShapeSideLeftGroup,
      bottomShapeSideRightGroup
  )

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((height), height, 0)
  heightWidthGroup1.add(
      heightWidthGreenLineGeometry,
      heightWidthRedLine1Geometry,
      heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set(((height * 3) + length), height, 0)
  heightWidthGroup2.add(
      heightWidthGreenLineGeometry.clone(),
      heightWidthRedLine1Geometry.clone(),
      heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((height * 2), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((height * 2), 0, 0)
  heightLengthGroup2.add(
      heightLengthRedLineGeometry,
      heightLengthGreenLine1Geometry,
      heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((height * 2), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set(((height * 2) + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((height * 2), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set(((height * 2) + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( height, height, 0)
  sideFlapLeftGroup.add(
      sideLockFlapGeometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set(((height * 3) + length), height, 0)
  sideFlapRightGroup.add(
      sideLockFlapGeometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
      flapTopCurveLeft,
      flapTopCurveRight,
      flapTopRedLine1Geometry,
      flapTopRedLine2Geometry,
      flapTopRedLine3Geometry,
      flapTopGreenLine1Geometry,
      flapTopGreenLine2Geometry,
  )

  const sideFlapCoverLeftGroup = new THREE.Object3D()
  sideFlapCoverLeftGroup.position.set(0, 0, 0)
  sideFlapCoverLeftGroup.add(
      sideFlapCoverRedLine1Geometry,
      sideFlapCoverRedLine2Geometry,
      sideFlapCoverRedLine3Geometry,
      sideFlapCoverCurveTop,
      sideFlapCoverCurveBottom,
  )

  const sideFlapCoverRightGroup = new THREE.Object3D()
  sideFlapCoverRightGroup.rotation.y = Math.PI
  sideFlapCoverRightGroup.position.set(length, 0, 0)
  sideFlapCoverRightGroup.add(
      sideFlapCoverRedLine1Geometry.clone(),
      sideFlapCoverRedLine2Geometry.clone(),
      sideFlapCoverRedLine3Geometry.clone(),
      sideFlapCoverCurveTop.clone(),
      sideFlapCoverCurveBottom.clone()
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((height * 2), ((height * 2) + width), 0)
  boxCoverGroup.add(
      boxCoverGreenLine2Geometry,
      boxCoverGreenLine1Geometry,
      boxCoverGreenLine3Geometry,
      sideFlapCoverLeftGroup,
      sideFlapCoverRightGroup,
      topFlapGroup,
  )

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      bottomShapeGroup,
      heightWidthGroup1,
      heightWidthGroup2,
      heightLengthGroup1,
      heightLengthGroup2,
      dustFlapBottomLeftGroup,
      dustFlapBottomRightGroup,
      dustFlapTopLeftGroup,
      dustFlapTopRightGroup,
      sideFlapLeftGroup,
      sideFlapRightGroup,
      boxCoverGroup,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.rotation.x = Math.PI
  PositionCenter.position.set(0, ((width * 2) + (height * 3) + topFlap), 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Invert }
