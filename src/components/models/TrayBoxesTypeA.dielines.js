import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width, height, topFlap, dustFlap, sideTopFlap, colors, labelUnits } = options;
  const scene = new THREE.Scene()

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

  const sideFlapTopCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapTopCurveTopPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveTopShape = new THREE.Shape()
  sideFlapTopCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveTopPoint))
  const sideFlapTopCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveTopShape), colors.cr_red)

  const sideFlapTopCurveTop = new THREE.Object3D()
  sideFlapTopCurveTop.position.set((sideTopFlap - 5), (width - 6) ,0)
  sideFlapTopCurveTop.add(sideFlapTopCurveTopLine)


  const sideFlapTopCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapTopCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveBottomShape = new THREE.Shape()
  sideFlapTopCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveBottomPoint))
  const sideFlapTopCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveBottomShape), colors.cr_red)

  const sideFlapTopCurveBottom = new THREE.Object3D()
  sideFlapTopCurveBottom.position.set((sideTopFlap - 5), 6 ,0)
  sideFlapTopCurveBottom.add(sideFlapTopCurveBottomLine)

  const sideFlapTopRedLine1 = []
  sideFlapTopRedLine1.push(new THREE.Vector2(0, width))
  sideFlapTopRedLine1.push(new THREE.Vector2(2, (width - 1)))
  sideFlapTopRedLine1.push(new THREE.Vector2((sideTopFlap - 5), (width - 1)))
  const sideFlapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine1), colors.cr_red)
  sideFlapTopRedLine1Geometry.computeLineDistances()

  const sideFlapTopRedLine2 = []
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, (width - 6)))
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, 6))
  const sideFlapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine2), colors.cr_red)
  sideFlapTopRedLine2Geometry.computeLineDistances()

  const sideFlapTopRedLine3 = []
  sideFlapTopRedLine3.push(new THREE.Vector2(0, 0))
  sideFlapTopRedLine3.push(new THREE.Vector2(2, 1))
  sideFlapTopRedLine3.push(new THREE.Vector2((sideTopFlap - 5), 1))
  const sideFlapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine3), colors.cr_red)
  sideFlapTopRedLine3Geometry.computeLineDistances()


  const boxCoverGreenLine = []
  boxCoverGreenLine.push(new THREE.Vector2(-1, width))
  boxCoverGreenLine.push(new THREE.Vector2((length + 1), width))
  const boxCoverGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine), colors.cr_green)
  boxCoverGreenLineGeometry.computeLineDistances()

  const boxCoverRedLine1 = []
  boxCoverRedLine1.push(new THREE.Vector2(0, 0))
  boxCoverRedLine1.push(new THREE.Vector2(-1, 2))
  boxCoverRedLine1.push(new THREE.Vector2(-1, width))
  const boxCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine1), colors.cr_red)
  boxCoverRedLine1Geometry.computeLineDistances()

  const boxCoverRedLine2 = []
  boxCoverRedLine2.push(new THREE.Vector2(length, 0))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), 2))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), width))
  const boxCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine2), colors.cr_red)
  boxCoverRedLine2Geometry.computeLineDistances()


  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set((5), (topFlap - 5) ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set((length - 5), (topFlap - 5) ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(-1, 0))
  flapTopRedLine1.push(new THREE.Vector2(0, 2))
  flapTopRedLine1.push(new THREE.Vector2(0, (topFlap - 5)))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(5, topFlap))
  flapTopRedLine2.push(new THREE.Vector2((length - 5), topFlap))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2((length + 1), 0))
  flapTopRedLine3.push(new THREE.Vector2(length, 2))
  flapTopRedLine3.push(new THREE.Vector2(length, (topFlap - 5)))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

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
  lineMarkLength.position.set((sideTopFlap + height + (length / 3)), (height + (width / 6) + 20), 0)
  lineMarkLength.add(meshLength)

  const lineMarkWidth = new THREE.Object3D()
  lineMarkWidth.position.set((sideTopFlap + height + ((length / 8) * 5.5)), (height + (width / 2)), 0)
  lineMarkWidth.add(meshWidth)

  const lineMarkHeight = new THREE.Object3D()
  lineMarkHeight.position.set((sideTopFlap + (height / 2)), (height + (width / 6) + 20), 0)
  lineMarkHeight.add(meshHeight)

  const lineMarkSideTopFlap = new THREE.Object3D()
  lineMarkSideTopFlap.position.set((sideTopFlap + (height * 2) + length + (sideTopFlap / 2)), (height + (width / 6) + 20), 0)
  lineMarkSideTopFlap.add(meshSideTopFlap)

  const lineMarkTopFlap = new THREE.Object3D()
  lineMarkTopFlap.position.set((sideTopFlap + height + 10), ((height * 2) + (width * 2) + (topFlap / 2)), 0)
  lineMarkTopFlap.add(meshTopFlap)

  const lineMarkDustFlap = new THREE.Object3D()
  lineMarkDustFlap.position.set((sideTopFlap + height + length + (dustFlap / 2)), (height + width + (dustFlap / 6) + 20), 0)
  lineMarkDustFlap.add(meshDustFlap)


  const lengthLabel = new THREE.Object3D()
  lengthLabel.position.set((sideTopFlap + height + (length / 3)), (height + (width / 6) + 5), 0)

  const widthLabel = new THREE.Object3D()
  widthLabel.rotation.z = Math.PI / 2
  widthLabel.position.set((sideTopFlap + height + ((length / 8) * 6.8)), (height + (width / 2)), 0)

  const heightLabel = new THREE.Object3D()
  heightLabel.position.set((sideTopFlap + (height / 2)), (height + (width / 6) + 5), 0)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.rotation.z = Math.PI / 2
  heightDimensionLabel.position.set(-15, ((height * 2) + (width * 2) + topFlap) / 2, 0)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(((sideTopFlap * 2) + (height * 2) + length) / 2, ((height * 2) + (width * 2) + topFlap + 15), 0)

  const sideTopFlapLabel = new THREE.Object3D()
  sideTopFlapLabel.position.set((sideTopFlap + (height * 2) + length + (sideTopFlap / 2)), (height + (width / 6) + 5), 0)

  const dusFlapLabel = new THREE.Object3D()
  dusFlapLabel.position.set((sideTopFlap + height + length + (dustFlap / 2)), (height + width + (dustFlap / 6) + 5), 0)

  const topFlapLabel = new THREE.Object3D()
  topFlapLabel.position.set((sideTopFlap + height + ((length / 3))), ((height * 2) + (width * 2) + (topFlap / 3)), 0)



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

  const loaderTextSideTopFlap = new THREE.FontLoader()
  loaderTextSideTopFlap.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (sideTopFlap / defaultUnit[labelUnits]).toFixed(2)
            : (sideTopFlap / defaultUnit[labelUnits]).toFixed(2)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    sideTopFlapLabel.add(text)
  })

  const loaderTextTopFlap = new THREE.FontLoader()
  loaderTextTopFlap.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (topFlap / defaultUnit[labelUnits]).toFixed(2)
            : (topFlap / defaultUnit[labelUnits]).toFixed(2)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    topFlapLabel.add(text)
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

    const message = `${labelUnits === 'inch' ? (((height * 2) + (width * 2) + topFlap) / defaultUnit[labelUnits]).toFixed(2) : (((height * 2) + (width * 2) + topFlap) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
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

    const message = `${labelUnits === 'inch' ? (((sideTopFlap * 2) + (height * 2) + length) / defaultUnit[labelUnits]).toFixed(2) : (((sideTopFlap * 2) + (height * 2) + length) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
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
  lengthArrow.position.set((sideTopFlap + height), (height + (width / 6)), 0)
  lengthArrow.add(arrows(length).clone())

  const widthArrow = new THREE.Object3D()
  widthArrow.rotation.z = -Math.PI / 2
  widthArrow.position.set((sideTopFlap + height + ((length / 8) * 7)), (height + width), 0)
  widthArrow.add(arrows(width).clone())

  const heightArrow = new THREE.Object3D()
  heightArrow.position.set((sideTopFlap), (height + (width / 6)), 0)
  heightArrow.add(arrows(height).clone())

  const topFlapArrow = new THREE.Object3D()
  topFlapArrow.rotation.z = -Math.PI / 2
  topFlapArrow.position.set((sideTopFlap + height + ((length / 6))), ((height * 2) + (width * 2) + topFlap), 0)
  topFlapArrow.add(arrows(topFlap).clone())

  const dusFlapArrow = new THREE.Object3D()
  dusFlapArrow.position.set((sideTopFlap + height + length), (height + width + (height / 6)), 0)
  dusFlapArrow.add(arrows(dustFlap).clone())

  const sideTopFlapArrow = new THREE.Object3D()
  sideTopFlapArrow.position.set((sideTopFlap + (height * 2) + length), (height + (width / 6)), 0)
  sideTopFlapArrow.add(arrows(sideTopFlap).clone())



  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-10, ((height * 2) + (width * 2) + topFlap), 0)
  heightDimensionArrow.add(
      arrows(((height * 2) + (width * 2) + topFlap)).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(((height * 2) + (width * 2) + topFlap), 0, ((height * 2) + (width * 2) + topFlap), 10).clone()
  )

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0, ((height * 2) + (width * 2) + topFlap + 10), 0)
  widthDimensionArrow.add(
      arrows((sideTopFlap * 2) + (height * 2) + length).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(((sideTopFlap * 2) + (height * 2) + length), 0, (sideTopFlap * 2) + (height * 2) + length, -10).clone()
  )

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((sideTopFlap + height), height, 0)
  bottomShapeGroup.add(bottomShapeGeometry)

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((sideTopFlap), height, 0)
  heightWidthGroup1.add(
    heightWidthGreenLineGeometry,
    heightWidthRedLine1Geometry,
    heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set((sideTopFlap + (height * 2) + length), height, 0)
  heightWidthGroup2.add(
    heightWidthGreenLineGeometry.clone(),
    heightWidthRedLine1Geometry.clone(),
    heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((sideTopFlap + height), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((sideTopFlap + height), 0, 0)
  heightLengthGroup2.add(
    heightLengthRedLineGeometry,
    heightLengthGreenLine1Geometry,
    heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((sideTopFlap + height), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set((sideTopFlap + height + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((sideTopFlap + height), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set((sideTopFlap + height + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( sideTopFlap, height, 0)
  sideFlapLeftGroup.add(
      sideFlapTopCurveTop.clone(),
      sideFlapTopCurveBottom.clone(),
      sideFlapTopRedLine1Geometry.clone(),
      sideFlapTopRedLine2Geometry.clone(),
      sideFlapTopRedLine3Geometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set((sideTopFlap + (height * 2) + length), height, 0)
  sideFlapRightGroup.add(
    sideFlapTopCurveTop.clone(),
    sideFlapTopCurveBottom.clone(),
    sideFlapTopRedLine1Geometry.clone(),
    sideFlapTopRedLine2Geometry.clone(),
    sideFlapTopRedLine3Geometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
    flapTopCurveLeft,
    flapTopCurveRight,
    flapTopRedLine1Geometry,
    flapTopRedLine2Geometry,
    flapTopRedLine3Geometry,
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((sideTopFlap + height), ((height * 2) + width), 0)
  boxCoverGroup.add(
    boxCoverGreenLineGeometry,
    boxCoverRedLine1Geometry,
    boxCoverRedLine2Geometry,
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
    lineMarkSideTopFlap,

    lengthLabel,
    widthLabel,
    heightLabel,
    sideTopFlapLabel,
    dusFlapLabel,
    topFlapLabel,
    lineMarkTopFlap,
    lineMarkDustFlap,

    heightDimensionLabel,
    widthDimensionLabel,

    lengthArrow,
    widthArrow,
    heightArrow,
    dusFlapArrow,
    sideTopFlapArrow,
    topFlapArrow,
    heightDimensionArrow,
    widthDimensionArrow
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-(((length + (height * 2) + (sideTopFlap * 2)) - 20 ) / 2), -(((width * 2) + (height * 2) + topFlap + 20) / 2), 0)
  // PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays = (options) => {
  const { length, width, height, topFlap, dustFlap, sideTopFlap, colors, labelUnits } = options;
  const scene = new THREE.Scene()

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

  const sideFlapTopCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapTopCurveTopPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveTopShape = new THREE.Shape()
  sideFlapTopCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveTopPoint))
  const sideFlapTopCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveTopShape), colors.cr_red)

  const sideFlapTopCurveTop = new THREE.Object3D()
  sideFlapTopCurveTop.position.set((sideTopFlap - 5), (width - 6) ,0)
  sideFlapTopCurveTop.add(sideFlapTopCurveTopLine)


  const sideFlapTopCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapTopCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveBottomShape = new THREE.Shape()
  sideFlapTopCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveBottomPoint))
  const sideFlapTopCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveBottomShape), colors.cr_red)

  const sideFlapTopCurveBottom = new THREE.Object3D()
  sideFlapTopCurveBottom.position.set((sideTopFlap - 5), 6 ,0)
  sideFlapTopCurveBottom.add(sideFlapTopCurveBottomLine)

  const sideFlapTopRedLine1 = []
  sideFlapTopRedLine1.push(new THREE.Vector2(0, width))
  sideFlapTopRedLine1.push(new THREE.Vector2(2, (width - 1)))
  sideFlapTopRedLine1.push(new THREE.Vector2((sideTopFlap - 5), (width - 1)))
  const sideFlapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine1), colors.cr_red)
  sideFlapTopRedLine1Geometry.computeLineDistances()

  const sideFlapTopRedLine2 = []
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, (width - 6)))
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, 6))
  const sideFlapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine2), colors.cr_red)
  sideFlapTopRedLine2Geometry.computeLineDistances()

  const sideFlapTopRedLine3 = []
  sideFlapTopRedLine3.push(new THREE.Vector2(0, 0))
  sideFlapTopRedLine3.push(new THREE.Vector2(2, 1))
  sideFlapTopRedLine3.push(new THREE.Vector2((sideTopFlap - 5), 1))
  const sideFlapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine3), colors.cr_red)
  sideFlapTopRedLine3Geometry.computeLineDistances()


  const boxCoverGreenLine = []
  boxCoverGreenLine.push(new THREE.Vector2(-1, width))
  boxCoverGreenLine.push(new THREE.Vector2((length + 1), width))
  const boxCoverGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine), colors.cr_green)
  boxCoverGreenLineGeometry.computeLineDistances()

  const boxCoverRedLine1 = []
  boxCoverRedLine1.push(new THREE.Vector2(0, 0))
  boxCoverRedLine1.push(new THREE.Vector2(-1, 2))
  boxCoverRedLine1.push(new THREE.Vector2(-1, width))
  const boxCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine1), colors.cr_red)
  boxCoverRedLine1Geometry.computeLineDistances()

  const boxCoverRedLine2 = []
  boxCoverRedLine2.push(new THREE.Vector2(length, 0))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), 2))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), width))
  const boxCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine2), colors.cr_red)
  boxCoverRedLine2Geometry.computeLineDistances()


  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set((5), (topFlap - 5) ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set((length - 5), (topFlap - 5) ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(-1, 0))
  flapTopRedLine1.push(new THREE.Vector2(0, 2))
  flapTopRedLine1.push(new THREE.Vector2(0, (topFlap - 5)))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(5, topFlap))
  flapTopRedLine2.push(new THREE.Vector2((length - 5), topFlap))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2((length + 1), 0))
  flapTopRedLine3.push(new THREE.Vector2(length, 2))
  flapTopRedLine3.push(new THREE.Vector2(length, (topFlap - 5)))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((sideTopFlap + height), height, 0)
  bottomShapeGroup.add(bottomShapeGeometry)

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((sideTopFlap), height, 0)
  heightWidthGroup1.add(
      heightWidthGreenLineGeometry,
      heightWidthRedLine1Geometry,
      heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set((sideTopFlap + (height * 2) + length), height, 0)
  heightWidthGroup2.add(
      heightWidthGreenLineGeometry.clone(),
      heightWidthRedLine1Geometry.clone(),
      heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((sideTopFlap + height), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((sideTopFlap + height), 0, 0)
  heightLengthGroup2.add(
      heightLengthRedLineGeometry,
      heightLengthGreenLine1Geometry,
      heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((sideTopFlap + height), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set((sideTopFlap + height + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((sideTopFlap + height), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set((sideTopFlap + height + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( sideTopFlap, height, 0)
  sideFlapLeftGroup.add(
      sideFlapTopCurveTop.clone(),
      sideFlapTopCurveBottom.clone(),
      sideFlapTopRedLine1Geometry.clone(),
      sideFlapTopRedLine2Geometry.clone(),
      sideFlapTopRedLine3Geometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set((sideTopFlap + (height * 2) + length), height, 0)
  sideFlapRightGroup.add(
      sideFlapTopCurveTop.clone(),
      sideFlapTopCurveBottom.clone(),
      sideFlapTopRedLine1Geometry.clone(),
      sideFlapTopRedLine2Geometry.clone(),
      sideFlapTopRedLine3Geometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
      flapTopCurveLeft,
      flapTopCurveRight,
      flapTopRedLine1Geometry,
      flapTopRedLine2Geometry,
      flapTopRedLine3Geometry,
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((sideTopFlap + height), ((height * 2) + width), 0)
  boxCoverGroup.add(
      boxCoverGreenLineGeometry,
      boxCoverRedLine1Geometry,
      boxCoverRedLine2Geometry,
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
  // PositionCenter.position.set(-(((length + (height * 2) + (sideTopFlap * 2)) - 20 ) / 2), -(((width * 2) + (height * 2) + topFlap + 20) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays_Invert = (options) => {
  const { length, width, height, topFlap, dustFlap, sideTopFlap, colors, labelUnits } = options;
  const scene = new THREE.Scene()

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

  const sideFlapTopCurveTopPoint = []
  for (let i = 0; i <= 90; i++) {
    sideFlapTopCurveTopPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveTopShape = new THREE.Shape()
  sideFlapTopCurveTopShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveTopPoint))
  const sideFlapTopCurveTopLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveTopShape), colors.cr_red)

  const sideFlapTopCurveTop = new THREE.Object3D()
  sideFlapTopCurveTop.position.set((sideTopFlap - 5), (width - 6) ,0)
  sideFlapTopCurveTop.add(sideFlapTopCurveTopLine)


  const sideFlapTopCurveBottomPoint = []
  for (let i = 90; i <= 180; i++) {
    sideFlapTopCurveBottomPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideFlapTopCurveBottomShape = new THREE.Shape()
  sideFlapTopCurveBottomShape.holes.push(new THREE.Path().setFromPoints(sideFlapTopCurveBottomPoint))
  const sideFlapTopCurveBottomLine = new THREE.Line(new THREE.ShapeGeometry(sideFlapTopCurveBottomShape), colors.cr_red)

  const sideFlapTopCurveBottom = new THREE.Object3D()
  sideFlapTopCurveBottom.position.set((sideTopFlap - 5), 6 ,0)
  sideFlapTopCurveBottom.add(sideFlapTopCurveBottomLine)

  const sideFlapTopRedLine1 = []
  sideFlapTopRedLine1.push(new THREE.Vector2(0, width))
  sideFlapTopRedLine1.push(new THREE.Vector2(2, (width - 1)))
  sideFlapTopRedLine1.push(new THREE.Vector2((sideTopFlap - 5), (width - 1)))
  const sideFlapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine1), colors.cr_red)
  sideFlapTopRedLine1Geometry.computeLineDistances()

  const sideFlapTopRedLine2 = []
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, (width - 6)))
  sideFlapTopRedLine2.push(new THREE.Vector2(sideTopFlap, 6))
  const sideFlapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine2), colors.cr_red)
  sideFlapTopRedLine2Geometry.computeLineDistances()

  const sideFlapTopRedLine3 = []
  sideFlapTopRedLine3.push(new THREE.Vector2(0, 0))
  sideFlapTopRedLine3.push(new THREE.Vector2(2, 1))
  sideFlapTopRedLine3.push(new THREE.Vector2((sideTopFlap - 5), 1))
  const sideFlapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideFlapTopRedLine3), colors.cr_red)
  sideFlapTopRedLine3Geometry.computeLineDistances()


  const boxCoverGreenLine = []
  boxCoverGreenLine.push(new THREE.Vector2(-1, width))
  boxCoverGreenLine.push(new THREE.Vector2((length + 1), width))
  const boxCoverGreenLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverGreenLine), colors.cr_green)
  boxCoverGreenLineGeometry.computeLineDistances()

  const boxCoverRedLine1 = []
  boxCoverRedLine1.push(new THREE.Vector2(0, 0))
  boxCoverRedLine1.push(new THREE.Vector2(-1, 2))
  boxCoverRedLine1.push(new THREE.Vector2(-1, width))
  const boxCoverRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine1), colors.cr_red)
  boxCoverRedLine1Geometry.computeLineDistances()

  const boxCoverRedLine2 = []
  boxCoverRedLine2.push(new THREE.Vector2(length, 0))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), 2))
  boxCoverRedLine2.push(new THREE.Vector2((length + 1), width))
  const boxCoverRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(boxCoverRedLine2), colors.cr_red)
  boxCoverRedLine2Geometry.computeLineDistances()


  const flapTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const flapTopCurveLeftShape = new THREE.Shape()
  flapTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveLeftPoint))
  const flapTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveLeftShape), colors.cr_red)

  const flapTopCurveLeft = new THREE.Object3D()
  flapTopCurveLeft.position.set((5), (topFlap - 5) ,0)
  flapTopCurveLeft.add(flapTopCurveLeftLine)


  const flapTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    flapTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const flapTopCurveRightShape = new THREE.Shape()
  flapTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(flapTopCurveRightPoint))
  const flapTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(flapTopCurveRightShape), colors.cr_red)

  const flapTopCurveRight = new THREE.Object3D()
  flapTopCurveRight.position.set((length - 5), (topFlap - 5) ,0)
  flapTopCurveRight.add(flapTopCurveRightLine)

  const flapTopRedLine1 = []
  flapTopRedLine1.push(new THREE.Vector2(-1, 0))
  flapTopRedLine1.push(new THREE.Vector2(0, 2))
  flapTopRedLine1.push(new THREE.Vector2(0, (topFlap - 5)))
  const flapTopRedLine1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine1), colors.cr_red)
  flapTopRedLine1Geometry.computeLineDistances()

  const flapTopRedLine2 = []
  flapTopRedLine2.push(new THREE.Vector2(5, topFlap))
  flapTopRedLine2.push(new THREE.Vector2((length - 5), topFlap))
  const flapTopRedLine2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine2), colors.cr_red)
  flapTopRedLine2Geometry.computeLineDistances()

  const flapTopRedLine3 = []
  flapTopRedLine3.push(new THREE.Vector2((length + 1), 0))
  flapTopRedLine3.push(new THREE.Vector2(length, 2))
  flapTopRedLine3.push(new THREE.Vector2(length, (topFlap - 5)))
  const flapTopRedLine3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(flapTopRedLine3), colors.cr_red)
  flapTopRedLine3Geometry.computeLineDistances()

  const bottomShapeGroup = new THREE.Object3D()
  bottomShapeGroup.position.set((sideTopFlap + height), height, 0)
  bottomShapeGroup.add(bottomShapeGeometry)

  const heightWidthGroup1 = new THREE.Object3D()
  heightWidthGroup1.position.set((sideTopFlap), height, 0)
  heightWidthGroup1.add(
      heightWidthGreenLineGeometry,
      heightWidthRedLine1Geometry,
      heightWidthRedLine2Geometry
  )

  const heightWidthGroup2 = new THREE.Object3D()
  heightWidthGroup2.rotation.y = Math.PI
  heightWidthGroup2.position.set((sideTopFlap + (height * 2) + length), height, 0)
  heightWidthGroup2.add(
      heightWidthGreenLineGeometry.clone(),
      heightWidthRedLine1Geometry.clone(),
      heightWidthRedLine2Geometry.clone()
  )

  const heightLengthGroup1 = new THREE.Object3D()
  heightLengthGroup1.position.set((sideTopFlap + height), (height + width), 0)
  heightLengthGroup1.add(heightLengthShape1Geometry)

  const heightLengthGroup2 = new THREE.Object3D()
  heightLengthGroup2.position.set((sideTopFlap + height), 0, 0)
  heightLengthGroup2.add(
      heightLengthRedLineGeometry,
      heightLengthGreenLine1Geometry,
      heightLengthGreenLine2Geometry
  )

  const dustFlapBottomLeftGroup = new THREE.Object3D()
  dustFlapBottomLeftGroup.rotation.y = Math.PI
  dustFlapBottomLeftGroup.position.set((sideTopFlap + height), 0, 0)
  dustFlapBottomLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapBottomRightGroup = new THREE.Object3D()
  dustFlapBottomRightGroup.position.set((sideTopFlap + height + length), 0, 0)
  dustFlapBottomRightGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopLeftGroup = new THREE.Object3D()
  dustFlapTopLeftGroup.rotation.y = Math.PI
  dustFlapTopLeftGroup.rotation.x = Math.PI
  dustFlapTopLeftGroup.position.set((sideTopFlap + height), (width + (height * 2)), 0)
  dustFlapTopLeftGroup.add(dustFlapShapeGeometry.clone())

  const dustFlapTopRightGroup = new THREE.Object3D()
  dustFlapTopRightGroup.rotation.x = Math.PI
  dustFlapTopRightGroup.position.set((sideTopFlap + height + length), (width + (height * 2)), 0)
  dustFlapTopRightGroup.add(dustFlapShapeGeometry.clone())

  const sideFlapLeftGroup = new THREE.Object3D()
  sideFlapLeftGroup.rotation.y = Math.PI
  sideFlapLeftGroup.position.set( sideTopFlap, height, 0)
  sideFlapLeftGroup.add(
      sideFlapTopCurveTop.clone(),
      sideFlapTopCurveBottom.clone(),
      sideFlapTopRedLine1Geometry.clone(),
      sideFlapTopRedLine2Geometry.clone(),
      sideFlapTopRedLine3Geometry.clone(),
  )

  const sideFlapRightGroup = new THREE.Object3D()
  sideFlapRightGroup.position.set((sideTopFlap + (height * 2) + length), height, 0)
  sideFlapRightGroup.add(
      sideFlapTopCurveTop.clone(),
      sideFlapTopCurveBottom.clone(),
      sideFlapTopRedLine1Geometry.clone(),
      sideFlapTopRedLine2Geometry.clone(),
      sideFlapTopRedLine3Geometry.clone(),
  )

  const topFlapGroup = new THREE.Object3D()
  topFlapGroup.position.set(0, (width), 0)
  topFlapGroup.add(
      flapTopCurveLeft,
      flapTopCurveRight,
      flapTopRedLine1Geometry,
      flapTopRedLine2Geometry,
      flapTopRedLine3Geometry,
  )

  const boxCoverGroup = new THREE.Object3D()
  boxCoverGroup.position.set((sideTopFlap + height), ((height * 2) + width), 0)
  boxCoverGroup.add(
      boxCoverGreenLineGeometry,
      boxCoverRedLine1Geometry,
      boxCoverRedLine2Geometry,
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
  // PositionCenter.position.set(-(((length + (height * 2) + (sideTopFlap * 2)) - 20 ) / 2), -(((width * 2) + (height * 2) + topFlap + 20) / 2), 0)
  PositionCenter.position.set(0, ((width * 2) + (height * 2) + topFlap), 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)
  // scene.add( new THREE.AxesHelper( 500 ) );

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Invert }
