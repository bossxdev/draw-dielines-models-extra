import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width,coverFlap, glueFlap, glueFlapSlope, colors, labelUnits } = options;
  const scene = new THREE.Scene()

  const sideAShape = []
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  const sideAShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideAShape), colors.cr_green)
  sideAShapeGeometry.computeLineDistances()




  const sideBCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    sideBCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveLeftShape = new THREE.Shape()
  sideBCurveLeftShape.holes.push(new THREE.Path().setFromPoints(sideBCurveLeftPoint))
  const sideBCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveLeftShape), colors.cr_red)

  const sideBCurveLeft = new THREE.Object3D()
  sideBCurveLeft.position.set(((glueFlap + (width *2)) - 10), ((glueFlap + length) - 10) ,0)
  sideBCurveLeft.add(sideBCurveLeftLine)

  const sideBCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    sideBCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveRightShape = new THREE.Shape()
  sideBCurveRightShape.holes.push(new THREE.Path().setFromPoints(sideBCurveRightPoint))
  const sideBCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveRightShape), colors.cr_red)

  const sideBCurveRight = new THREE.Object3D()
  sideBCurveRight.position.set(((glueFlap + (width *2)) - 10), (glueFlap + 10),0)
  sideBCurveRight.add(sideBCurveRightLine)

  const sideBShape1 = []
  sideBShape1.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  sideBShape1.push(new THREE.Vector2((glueFlap + width + glueFlap), ((glueFlap + length) - 5)))
  sideBShape1.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), ((glueFlap + length) - 5)))
  const sideBShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape1), colors.cr_red)
  sideBShapeGeometry1.computeLineDistances()

  const sideBShape2 = []
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), ((glueFlap + length) - 10)))
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), (glueFlap + 10)))
  const sideBShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape2), colors.cr_red)
  sideBShapeGeometry2.computeLineDistances()

  const sideBShape3 = []
  sideBShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  sideBShape3.push(new THREE.Vector2((glueFlap + width + glueFlap), (glueFlap + 5)))
  sideBShape3.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), (glueFlap + 5)))
  const sideBShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape3), colors.cr_red)
  sideBShapeGeometry3.computeLineDistances()



  const glueFlapLeftCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapLeftCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveLeftShape = new THREE.Shape()
  glueFlapLeftCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveLeftPoint))
  const glueFlapLeftCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveLeftShape), colors.cr_red)

  const glueFlapLeftCurveLeft = new THREE.Object3D()
  glueFlapLeftCurveLeft.position.set(5, (glueFlap + 10) ,0)
  glueFlapLeftCurveLeft.add(glueFlapLeftCurveLeftLine)

  const glueFlapLeftCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    glueFlapLeftCurveRightPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveRightShape = new THREE.Shape()
  glueFlapLeftCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveRightPoint))
  const glueFlapLeftCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveRightShape), colors.cr_red)

  const glueFlapLeftCurveRight = new THREE.Object3D()
  glueFlapLeftCurveRight.position.set(5, ((glueFlap + length) - 10) ,0)
  glueFlapLeftCurveRight.add(glueFlapLeftCurveRightLine)

  const glueFlapLeftShape1 = []
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlapSlope, (glueFlap + glueFlapSlope)))
  const glueFlapLeftShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape1), colors.cr_red)
  glueFlapLeftShapeGeometry1.computeLineDistances()

  const glueFlapLeftShape2 = []
  glueFlapLeftShape2.push(new THREE.Vector2(0, ((glueFlap + length) - 10)))
  glueFlapLeftShape2.push(new THREE.Vector2(0, (glueFlap + 10)))
  const glueFlapLeftShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape2), colors.cr_red)
  glueFlapLeftShapeGeometry2.computeLineDistances()

  const glueFlapLeftShape3 = []
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlapSlope, ((glueFlap + length) - glueFlapSlope)))
  const glueFlapLeftShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape3), colors.cr_red)
  glueFlapLeftShapeGeometry3.computeLineDistances()




  const glueFlapBottomCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveLeftShape = new THREE.Shape()
  glueFlapBottomCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveLeftPoint))
  const glueFlapBottomCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveLeftShape), colors.cr_red)

  const glueFlapBottomCurveLeft = new THREE.Object3D()
  glueFlapBottomCurveLeft.position.set((glueFlap + 10), 5 ,0)
  glueFlapBottomCurveLeft.add(glueFlapBottomCurveLeftLine)

  const glueFlapBottomCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveRightShape = new THREE.Shape()
  glueFlapBottomCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveRightPoint))
  const glueFlapBottomCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveRightShape), colors.cr_red)

  const glueFlapBottomCurveRight = new THREE.Object3D()
  glueFlapBottomCurveRight.position.set(((glueFlap + width) - 10), 5 ,0)
  glueFlapBottomCurveRight.add(glueFlapBottomCurveRightLine)

  const glueFlapBottomShape1 = []
  glueFlapBottomShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapBottomShape1.push(new THREE.Vector2((glueFlap + glueFlapSlope), 5))
  const glueFlapBottomShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape1), colors.cr_red)
  glueFlapBottomShapeGeometry1.computeLineDistances()

  const glueFlapBottomShape2 = []
  glueFlapBottomShape2.push(new THREE.Vector2((glueFlap + 10), 0))
  glueFlapBottomShape2.push(new THREE.Vector2(((glueFlap + width) - 10), 0))
  const glueFlapBottomShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape2), colors.cr_red)
  glueFlapBottomShapeGeometry2.computeLineDistances()

  const glueFlapBottomShape3 = []
  glueFlapBottomShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  glueFlapBottomShape3.push(new THREE.Vector2(((glueFlap + width) - 5), 5))
  const glueFlapBottomShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape3), colors.cr_red)
  glueFlapBottomShapeGeometry3.computeLineDistances()





  const coverFlapCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const coverFlapCurveLeftShape = new THREE.Shape()
  coverFlapCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveLeftPoint))
  const coverFlapCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveLeftShape), colors.cr_red)

  const coverFlapCurveLeft = new THREE.Object3D()
  coverFlapCurveLeft.position.set((glueFlap + 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveLeft.add(coverFlapCurveLeftLine)

  const coverFlapCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const coverFlapCurveRightShape = new THREE.Shape()
  coverFlapCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveRightPoint))
  const coverFlapCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveRightShape), colors.cr_red)

  const coverFlapCurveRight = new THREE.Object3D()
  coverFlapCurveRight.position.set(((glueFlap + width) - 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveRight.add(coverFlapCurveRightLine)

  const coverFlapShape1 = []
  coverFlapShape1.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  coverFlapShape1.push(new THREE.Vector2((glueFlap + 10), ((glueFlap + length + coverFlap) - 5)))
  const coverFlapShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape1), colors.cr_red)
  coverFlapShapeGeometry1.computeLineDistances()

  const coverFlapShape2 = []
  coverFlapShape2.push(new THREE.Vector2((glueFlap + 15), (glueFlap + length + coverFlap)))
  coverFlapShape2.push(new THREE.Vector2(((glueFlap + width) - 15), (glueFlap + length + coverFlap)))
  const coverFlapShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape2), colors.cr_red)
  coverFlapShapeGeometry2.computeLineDistances()

  const coverFlapShape3 = []
  coverFlapShape3.push(new THREE.Vector2(((glueFlap + width) - 10), ((glueFlap + length + coverFlap) - 5)))
  coverFlapShape3.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  const coverFlapShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape3), colors.cr_red)
  coverFlapShapeGeometry3.computeLineDistances()





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
  const meshCoverFlap = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/c.png') })
  )
  const meshSideGlueFlap = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/g.png') })
  )

  const lineMarkLength = new THREE.Object3D()
  lineMarkLength.position.set((glueFlap + (width - 50)), (glueFlap + (length / 2)), 0)
  lineMarkLength.add(meshLength)

  const lineMarkWidth = new THREE.Object3D()
  lineMarkWidth.position.set((glueFlap + (width / 2)), (glueFlap + 50), 0)
  lineMarkWidth.add(meshWidth)

  const lineMarkCoverFlap = new THREE.Object3D()
  lineMarkCoverFlap.position.set((glueFlap + (width / 2)), (glueFlap + length + (coverFlap / 2)), 0)
  lineMarkCoverFlap.add(meshCoverFlap)

  const lineMarkGlueFlapLeft = new THREE.Object3D()
  lineMarkGlueFlapLeft.position.set((glueFlap / 2), (glueFlap + (length / 2) + 15), 0)
  lineMarkGlueFlapLeft.add(meshSideGlueFlap)

  const lineMarkGlueFlapBottom = new THREE.Object3D()
  lineMarkGlueFlapBottom.position.set((glueFlap + (width / 2)), (glueFlap / 2), 0)
  lineMarkGlueFlapBottom.add(meshSideGlueFlap.clone())




  const lengthLabel = new THREE.Object3D()
  lengthLabel.rotation.z = Math.PI / 2
  lengthLabel.position.set((glueFlap + (width - 25)), (glueFlap + (length / 2)), 0)

  const widthLabel = new THREE.Object3D()
  widthLabel.position.set((glueFlap + (width / 2)), (glueFlap + 25), 0)

  const glueFlapBottomLabel = new THREE.Object3D()
  glueFlapBottomLabel.position.set((glueFlap + 50), (glueFlap / 2.8), 0)

  const coverFlapLabel = new THREE.Object3D()
  coverFlapLabel.position.set((glueFlap + 50), (glueFlap + length + (coverFlap / 2.8)), 0)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.rotation.z = Math.PI / 2
  heightDimensionLabel.position.set(-28, (glueFlap + length + coverFlap) / 2, 0)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(((glueFlap + (width * 2)) - 5) / 2, (glueFlap + length + coverFlap + 28), 0)

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

  const loaderTextGlueFlapBottom = new THREE.FontLoader()
  loaderTextGlueFlapBottom.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (glueFlap / defaultUnit[labelUnits]).toFixed(2) : (glueFlap / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}.`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    glueFlapBottomLabel.add(text)
  })

  const loaderTextCoverFlap = new THREE.FontLoader()
  loaderTextCoverFlap.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${labelUnits === 'inch' ? (coverFlap / defaultUnit[labelUnits]).toFixed(2) : (coverFlap / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}.`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    coverFlapLabel.add(text)
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

    const message = `${labelUnits === 'inch' ? ((glueFlap + length + coverFlap) / defaultUnit[labelUnits]).toFixed(2) : ((glueFlap + length + coverFlap) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
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

    const message = `${labelUnits === 'inch' ? (((glueFlap + (width * 2)) - 5) / defaultUnit[labelUnits]).toFixed(2) : (((glueFlap + (width * 2)) - 5) / defaultUnit[labelUnits]).toFixed(2)} ${labelUnits}`
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
  lengthArrow.rotation.z = -Math.PI / 2
  lengthArrow.position.set(((glueFlap + width) - 20), (glueFlap + length), 0)
  lengthArrow.add(arrows(length).clone())

  const widthArrow = new THREE.Object3D()
  widthArrow.position.set(glueFlap, (glueFlap + 20), 0)
  widthArrow.add(arrows(width).clone())

  const coverArrow = new THREE.Object3D()
  coverArrow.rotation.z = -Math.PI / 2
  coverArrow.position.set((glueFlap + 20), (glueFlap + length + coverFlap), 0)
  coverArrow.add(arrows(coverFlap).clone())

  const glueFlapLeftArrow = new THREE.Object3D()
  glueFlapLeftArrow.position.set(0, (glueFlap + (length / 2)), 0)
  glueFlapLeftArrow.add(arrows(glueFlap).clone())

  const glueFlapBottomArrow = new THREE.Object3D()
  glueFlapBottomArrow.rotation.z = -Math.PI / 2
  glueFlapBottomArrow.position.set((glueFlap + 20), (glueFlap), 0)
  glueFlapBottomArrow.add(arrows(glueFlap).clone())

  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-20, (glueFlap + length + coverFlap), 0)
  heightDimensionArrow.add(
      arrows((glueFlap + length + coverFlap)).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet((glueFlap + length + coverFlap), 0, (glueFlap + length + coverFlap), 10).clone()
  )

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0, (glueFlap + length + coverFlap + 20), 0)
  widthDimensionArrow.add(
      arrows((glueFlap + (width * 2) - 5)).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet((glueFlap + (width * 2) - 5), 0, ((glueFlap + (width * 2)) - 5), -10).clone()
  )

  const coverFlapGroup = new THREE.Object3D()
  coverFlapGroup.position.set(0, 0, 0)
  coverFlapGroup.add(
    coverFlapShapeGeometry1,
    coverFlapCurveLeft,
    coverFlapShapeGeometry2,
    coverFlapCurveRight,
    coverFlapShapeGeometry3
  )

  const glueFlapLeftGroup = new THREE.Object3D()
  glueFlapLeftGroup.position.set(0, 0, 0)
  glueFlapLeftGroup.add(
    glueFlapLeftShapeGeometry1,
    glueFlapLeftCurveLeft,
    glueFlapLeftShapeGeometry2,
    glueFlapLeftCurveRight,
    glueFlapLeftShapeGeometry3,
  )

  const glueFlapBottomGroup = new THREE.Object3D()
  glueFlapBottomGroup.position.set(0, 0, 0)
  glueFlapBottomGroup.add(
    glueFlapBottomShapeGeometry1,
    glueFlapBottomCurveLeft,
    glueFlapBottomShapeGeometry2,
    glueFlapBottomCurveRight,
    glueFlapBottomShapeGeometry3,
  )

  const sideBGroup = new THREE.Object3D()
  sideBGroup.position.set(0, 0, 0)
  sideBGroup.add(
    sideBShapeGeometry1,
    sideBCurveLeft,
    sideBShapeGeometry2,
    sideBCurveRight,
    sideBShapeGeometry3,
  )

  const allGroup = new THREE.Object3D()
  allGroup.position.set(0, 0, 0)
  allGroup.add(
    sideAShapeGeometry,
    sideBGroup,
    coverFlapGroup,
    glueFlapLeftGroup,
    glueFlapBottomGroup
  )


  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
    sideAShapeGeometry,
    sideBGroup,
    coverFlapGroup,
    glueFlapLeftGroup,
    glueFlapBottomGroup,

    lineMarkLength,
    lineMarkWidth,
    lineMarkCoverFlap,
    lineMarkGlueFlapLeft,
    lineMarkGlueFlapBottom,

    lengthLabel,
    widthLabel,
    glueFlapBottomLabel,
    coverFlapLabel,
    heightDimensionLabel,
    widthDimensionLabel,

    lengthArrow,
    widthArrow,
    coverArrow,
    glueFlapLeftArrow,
    glueFlapBottomArrow,
    heightDimensionArrow,
    widthDimensionArrow
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-((glueFlap + (width * 2)) / 2), -((glueFlap + length + coverFlap) / 2), 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}
const MainLays = (options) => {
  const { length, width,coverFlap, glueFlap, glueFlapSlope, colors } = options;
  const scene = new THREE.Scene()

  const sideAShape = []
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  const sideAShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideAShape), colors.cr_green)
  sideAShapeGeometry.computeLineDistances()




  const sideBCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    sideBCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveLeftShape = new THREE.Shape()
  sideBCurveLeftShape.holes.push(new THREE.Path().setFromPoints(sideBCurveLeftPoint))
  const sideBCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveLeftShape), colors.cr_red)

  const sideBCurveLeft = new THREE.Object3D()
  sideBCurveLeft.position.set(((glueFlap + (width *2)) - 10), ((glueFlap + length) - 10) ,0)
  sideBCurveLeft.add(sideBCurveLeftLine)

  const sideBCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    sideBCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveRightShape = new THREE.Shape()
  sideBCurveRightShape.holes.push(new THREE.Path().setFromPoints(sideBCurveRightPoint))
  const sideBCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveRightShape), colors.cr_red)

  const sideBCurveRight = new THREE.Object3D()
  sideBCurveRight.position.set(((glueFlap + (width *2)) - 10), (glueFlap + 10),0)
  sideBCurveRight.add(sideBCurveRightLine)

  const sideBShape1 = []
  sideBShape1.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  sideBShape1.push(new THREE.Vector2((glueFlap + width + glueFlap), ((glueFlap + length) - 5)))
  sideBShape1.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), ((glueFlap + length) - 5)))
  const sideBShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape1), colors.cr_red)
  sideBShapeGeometry1.computeLineDistances()

  const sideBShape2 = []
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), ((glueFlap + length) - 10)))
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), (glueFlap + 10)))
  const sideBShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape2), colors.cr_red)
  sideBShapeGeometry2.computeLineDistances()

  const sideBShape3 = []
  sideBShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  sideBShape3.push(new THREE.Vector2((glueFlap + width + glueFlap), (glueFlap + 5)))
  sideBShape3.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), (glueFlap + 5)))
  const sideBShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape3), colors.cr_red)
  sideBShapeGeometry3.computeLineDistances()



  const glueFlapLeftCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapLeftCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveLeftShape = new THREE.Shape()
  glueFlapLeftCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveLeftPoint))
  const glueFlapLeftCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveLeftShape), colors.cr_red)

  const glueFlapLeftCurveLeft = new THREE.Object3D()
  glueFlapLeftCurveLeft.position.set(5, (glueFlap + 10) ,0)
  glueFlapLeftCurveLeft.add(glueFlapLeftCurveLeftLine)

  const glueFlapLeftCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    glueFlapLeftCurveRightPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveRightShape = new THREE.Shape()
  glueFlapLeftCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveRightPoint))
  const glueFlapLeftCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveRightShape), colors.cr_red)

  const glueFlapLeftCurveRight = new THREE.Object3D()
  glueFlapLeftCurveRight.position.set(5, ((glueFlap + length) - 10) ,0)
  glueFlapLeftCurveRight.add(glueFlapLeftCurveRightLine)

  const glueFlapLeftShape1 = []
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlapSlope, (glueFlap + glueFlapSlope)))
  const glueFlapLeftShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape1), colors.cr_red)
  glueFlapLeftShapeGeometry1.computeLineDistances()

  const glueFlapLeftShape2 = []
  glueFlapLeftShape2.push(new THREE.Vector2(0, ((glueFlap + length) - 10)))
  glueFlapLeftShape2.push(new THREE.Vector2(0, (glueFlap + 10)))
  const glueFlapLeftShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape2), colors.cr_red)
  glueFlapLeftShapeGeometry2.computeLineDistances()

  const glueFlapLeftShape3 = []
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlapSlope, ((glueFlap + length) - glueFlapSlope)))
  const glueFlapLeftShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape3), colors.cr_red)
  glueFlapLeftShapeGeometry3.computeLineDistances()




  const glueFlapBottomCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveLeftShape = new THREE.Shape()
  glueFlapBottomCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveLeftPoint))
  const glueFlapBottomCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveLeftShape), colors.cr_red)

  const glueFlapBottomCurveLeft = new THREE.Object3D()
  glueFlapBottomCurveLeft.position.set((glueFlap + 10), 5 ,0)
  glueFlapBottomCurveLeft.add(glueFlapBottomCurveLeftLine)

  const glueFlapBottomCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveRightShape = new THREE.Shape()
  glueFlapBottomCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveRightPoint))
  const glueFlapBottomCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveRightShape), colors.cr_red)

  const glueFlapBottomCurveRight = new THREE.Object3D()
  glueFlapBottomCurveRight.position.set(((glueFlap + width) - 10), 5 ,0)
  glueFlapBottomCurveRight.add(glueFlapBottomCurveRightLine)

  const glueFlapBottomShape1 = []
  glueFlapBottomShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapBottomShape1.push(new THREE.Vector2((glueFlap + glueFlapSlope), 5))
  const glueFlapBottomShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape1), colors.cr_red)
  glueFlapBottomShapeGeometry1.computeLineDistances()

  const glueFlapBottomShape2 = []
  glueFlapBottomShape2.push(new THREE.Vector2((glueFlap + 10), 0))
  glueFlapBottomShape2.push(new THREE.Vector2(((glueFlap + width) - 10), 0))
  const glueFlapBottomShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape2), colors.cr_red)
  glueFlapBottomShapeGeometry2.computeLineDistances()

  const glueFlapBottomShape3 = []
  glueFlapBottomShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  glueFlapBottomShape3.push(new THREE.Vector2(((glueFlap + width) - 5), 5))
  const glueFlapBottomShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape3), colors.cr_red)
  glueFlapBottomShapeGeometry3.computeLineDistances()





  const coverFlapCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const coverFlapCurveLeftShape = new THREE.Shape()
  coverFlapCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveLeftPoint))
  const coverFlapCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveLeftShape), colors.cr_red)

  const coverFlapCurveLeft = new THREE.Object3D()
  coverFlapCurveLeft.position.set((glueFlap + 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveLeft.add(coverFlapCurveLeftLine)

  const coverFlapCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const coverFlapCurveRightShape = new THREE.Shape()
  coverFlapCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveRightPoint))
  const coverFlapCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveRightShape), colors.cr_red)

  const coverFlapCurveRight = new THREE.Object3D()
  coverFlapCurveRight.position.set(((glueFlap + width) - 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveRight.add(coverFlapCurveRightLine)

  const coverFlapShape1 = []
  coverFlapShape1.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  coverFlapShape1.push(new THREE.Vector2((glueFlap + 10), ((glueFlap + length + coverFlap) - 5)))
  const coverFlapShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape1), colors.cr_red)
  coverFlapShapeGeometry1.computeLineDistances()

  const coverFlapShape2 = []
  coverFlapShape2.push(new THREE.Vector2((glueFlap + 15), (glueFlap + length + coverFlap)))
  coverFlapShape2.push(new THREE.Vector2(((glueFlap + width) - 15), (glueFlap + length + coverFlap)))
  const coverFlapShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape2), colors.cr_red)
  coverFlapShapeGeometry2.computeLineDistances()

  const coverFlapShape3 = []
  coverFlapShape3.push(new THREE.Vector2(((glueFlap + width) - 10), ((glueFlap + length + coverFlap) - 5)))
  coverFlapShape3.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  const coverFlapShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape3), colors.cr_red)
  coverFlapShapeGeometry3.computeLineDistances()


  const coverFlapGroup = new THREE.Object3D()
  coverFlapGroup.position.set(0, 0, 0)
  coverFlapGroup.add(
      coverFlapShapeGeometry1,
      coverFlapCurveLeft,
      coverFlapShapeGeometry2,
      coverFlapCurveRight,
      coverFlapShapeGeometry3
  )

  const glueFlapLeftGroup = new THREE.Object3D()
  glueFlapLeftGroup.position.set(0, 0, 0)
  glueFlapLeftGroup.add(
      glueFlapLeftShapeGeometry1,
      glueFlapLeftCurveLeft,
      glueFlapLeftShapeGeometry2,
      glueFlapLeftCurveRight,
      glueFlapLeftShapeGeometry3,
  )

  const glueFlapBottomGroup = new THREE.Object3D()
  glueFlapBottomGroup.position.set(0, 0, 0)
  glueFlapBottomGroup.add(
      glueFlapBottomShapeGeometry1,
      glueFlapBottomCurveLeft,
      glueFlapBottomShapeGeometry2,
      glueFlapBottomCurveRight,
      glueFlapBottomShapeGeometry3,
  )

  const sideBGroup = new THREE.Object3D()
  sideBGroup.position.set(0, 0, 0)
  sideBGroup.add(
      sideBShapeGeometry1,
      sideBCurveLeft,
      sideBShapeGeometry2,
      sideBCurveRight,
      sideBShapeGeometry3,
  )

  const allGroup = new THREE.Object3D()
  allGroup.position.set(0, 0, 0)
  allGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup
  )


  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}
const MainLays_Invert = (options) => {
  const { length, width,coverFlap, glueFlap, glueFlapSlope, colors } = options;
  const scene = new THREE.Scene()

  const sideAShape = []
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  const sideAShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideAShape), colors.cr_green)
  sideAShapeGeometry.computeLineDistances()




  const sideBCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    sideBCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveLeftShape = new THREE.Shape()
  sideBCurveLeftShape.holes.push(new THREE.Path().setFromPoints(sideBCurveLeftPoint))
  const sideBCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveLeftShape), colors.cr_red)

  const sideBCurveLeft = new THREE.Object3D()
  sideBCurveLeft.position.set(((glueFlap + (width *2)) - 10), ((glueFlap + length) - 10) ,0)
  sideBCurveLeft.add(sideBCurveLeftLine)

  const sideBCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    sideBCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveRightShape = new THREE.Shape()
  sideBCurveRightShape.holes.push(new THREE.Path().setFromPoints(sideBCurveRightPoint))
  const sideBCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveRightShape), colors.cr_red)

  const sideBCurveRight = new THREE.Object3D()
  sideBCurveRight.position.set(((glueFlap + (width *2)) - 10), (glueFlap + 10),0)
  sideBCurveRight.add(sideBCurveRightLine)

  const sideBShape1 = []
  sideBShape1.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  sideBShape1.push(new THREE.Vector2((glueFlap + width + glueFlap), ((glueFlap + length) - 5)))
  sideBShape1.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), ((glueFlap + length) - 5)))
  const sideBShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape1), colors.cr_red)
  sideBShapeGeometry1.computeLineDistances()

  const sideBShape2 = []
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), ((glueFlap + length) - 10)))
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), (glueFlap + 10)))
  const sideBShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape2), colors.cr_red)
  sideBShapeGeometry2.computeLineDistances()

  const sideBShape3 = []
  sideBShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  sideBShape3.push(new THREE.Vector2((glueFlap + width + glueFlap), (glueFlap + 5)))
  sideBShape3.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), (glueFlap + 5)))
  const sideBShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape3), colors.cr_red)
  sideBShapeGeometry3.computeLineDistances()



  const glueFlapLeftCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapLeftCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveLeftShape = new THREE.Shape()
  glueFlapLeftCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveLeftPoint))
  const glueFlapLeftCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveLeftShape), colors.cr_red)

  const glueFlapLeftCurveLeft = new THREE.Object3D()
  glueFlapLeftCurveLeft.position.set(5, (glueFlap + 10) ,0)
  glueFlapLeftCurveLeft.add(glueFlapLeftCurveLeftLine)

  const glueFlapLeftCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    glueFlapLeftCurveRightPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveRightShape = new THREE.Shape()
  glueFlapLeftCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveRightPoint))
  const glueFlapLeftCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveRightShape), colors.cr_red)

  const glueFlapLeftCurveRight = new THREE.Object3D()
  glueFlapLeftCurveRight.position.set(5, ((glueFlap + length) - 10) ,0)
  glueFlapLeftCurveRight.add(glueFlapLeftCurveRightLine)

  const glueFlapLeftShape1 = []
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlapSlope, (glueFlap + glueFlapSlope)))
  const glueFlapLeftShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape1), colors.cr_red)
  glueFlapLeftShapeGeometry1.computeLineDistances()

  const glueFlapLeftShape2 = []
  glueFlapLeftShape2.push(new THREE.Vector2(0, ((glueFlap + length) - 10)))
  glueFlapLeftShape2.push(new THREE.Vector2(0, (glueFlap + 10)))
  const glueFlapLeftShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape2), colors.cr_red)
  glueFlapLeftShapeGeometry2.computeLineDistances()

  const glueFlapLeftShape3 = []
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlapSlope, ((glueFlap + length) - glueFlapSlope)))
  const glueFlapLeftShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape3), colors.cr_red)
  glueFlapLeftShapeGeometry3.computeLineDistances()




  const glueFlapBottomCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveLeftShape = new THREE.Shape()
  glueFlapBottomCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveLeftPoint))
  const glueFlapBottomCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveLeftShape), colors.cr_red)

  const glueFlapBottomCurveLeft = new THREE.Object3D()
  glueFlapBottomCurveLeft.position.set((glueFlap + 10), 5 ,0)
  glueFlapBottomCurveLeft.add(glueFlapBottomCurveLeftLine)

  const glueFlapBottomCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveRightShape = new THREE.Shape()
  glueFlapBottomCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveRightPoint))
  const glueFlapBottomCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveRightShape), colors.cr_red)

  const glueFlapBottomCurveRight = new THREE.Object3D()
  glueFlapBottomCurveRight.position.set(((glueFlap + width) - 10), 5 ,0)
  glueFlapBottomCurveRight.add(glueFlapBottomCurveRightLine)

  const glueFlapBottomShape1 = []
  glueFlapBottomShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapBottomShape1.push(new THREE.Vector2((glueFlap + glueFlapSlope), 5))
  const glueFlapBottomShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape1), colors.cr_red)
  glueFlapBottomShapeGeometry1.computeLineDistances()

  const glueFlapBottomShape2 = []
  glueFlapBottomShape2.push(new THREE.Vector2((glueFlap + 10), 0))
  glueFlapBottomShape2.push(new THREE.Vector2(((glueFlap + width) - 10), 0))
  const glueFlapBottomShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape2), colors.cr_red)
  glueFlapBottomShapeGeometry2.computeLineDistances()

  const glueFlapBottomShape3 = []
  glueFlapBottomShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  glueFlapBottomShape3.push(new THREE.Vector2(((glueFlap + width) - 5), 5))
  const glueFlapBottomShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape3), colors.cr_red)
  glueFlapBottomShapeGeometry3.computeLineDistances()





  const coverFlapCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const coverFlapCurveLeftShape = new THREE.Shape()
  coverFlapCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveLeftPoint))
  const coverFlapCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveLeftShape), colors.cr_red)

  const coverFlapCurveLeft = new THREE.Object3D()
  coverFlapCurveLeft.position.set((glueFlap + 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveLeft.add(coverFlapCurveLeftLine)

  const coverFlapCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const coverFlapCurveRightShape = new THREE.Shape()
  coverFlapCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveRightPoint))
  const coverFlapCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveRightShape), colors.cr_red)

  const coverFlapCurveRight = new THREE.Object3D()
  coverFlapCurveRight.position.set(((glueFlap + width) - 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveRight.add(coverFlapCurveRightLine)

  const coverFlapShape1 = []
  coverFlapShape1.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  coverFlapShape1.push(new THREE.Vector2((glueFlap + 10), ((glueFlap + length + coverFlap) - 5)))
  const coverFlapShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape1), colors.cr_red)
  coverFlapShapeGeometry1.computeLineDistances()

  const coverFlapShape2 = []
  coverFlapShape2.push(new THREE.Vector2((glueFlap + 15), (glueFlap + length + coverFlap)))
  coverFlapShape2.push(new THREE.Vector2(((glueFlap + width) - 15), (glueFlap + length + coverFlap)))
  const coverFlapShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape2), colors.cr_red)
  coverFlapShapeGeometry2.computeLineDistances()

  const coverFlapShape3 = []
  coverFlapShape3.push(new THREE.Vector2(((glueFlap + width) - 10), ((glueFlap + length + coverFlap) - 5)))
  coverFlapShape3.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  const coverFlapShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape3), colors.cr_red)
  coverFlapShapeGeometry3.computeLineDistances()


  const coverFlapGroup = new THREE.Object3D()
  coverFlapGroup.position.set(0, 0, 0)
  coverFlapGroup.add(
      coverFlapShapeGeometry1,
      coverFlapCurveLeft,
      coverFlapShapeGeometry2,
      coverFlapCurveRight,
      coverFlapShapeGeometry3
  )

  const glueFlapLeftGroup = new THREE.Object3D()
  glueFlapLeftGroup.position.set(0, 0, 0)
  glueFlapLeftGroup.add(
      glueFlapLeftShapeGeometry1,
      glueFlapLeftCurveLeft,
      glueFlapLeftShapeGeometry2,
      glueFlapLeftCurveRight,
      glueFlapLeftShapeGeometry3,
  )

  const glueFlapBottomGroup = new THREE.Object3D()
  glueFlapBottomGroup.position.set(0, 0, 0)
  glueFlapBottomGroup.add(
      glueFlapBottomShapeGeometry1,
      glueFlapBottomCurveLeft,
      glueFlapBottomShapeGeometry2,
      glueFlapBottomCurveRight,
      glueFlapBottomShapeGeometry3,
  )

  const sideBGroup = new THREE.Object3D()
  sideBGroup.position.set(0, 0, 0)
  sideBGroup.add(
      sideBShapeGeometry1,
      sideBCurveLeft,
      sideBShapeGeometry2,
      sideBCurveRight,
      sideBShapeGeometry3,
  )

  const allGroup = new THREE.Object3D()
  allGroup.position.set(0, 0, 0)
  allGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup
  )


  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.rotation.y = Math.PI
  PositionCenter.position.set((glueFlap + (width * 2)) - 5, 0, 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}
const MainLays_Invert2 = (options) => {
  const { length, width,coverFlap, glueFlap, glueFlapSlope, colors } = options;
  const scene = new THREE.Scene()

  const sideAShape = []
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), (length + glueFlap)))
  sideAShape.push(new THREE.Vector2((width + glueFlap), glueFlap))
  sideAShape.push(new THREE.Vector2(glueFlap, glueFlap))
  const sideAShapeGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideAShape), colors.cr_green)
  sideAShapeGeometry.computeLineDistances()




  const sideBCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    sideBCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveLeftShape = new THREE.Shape()
  sideBCurveLeftShape.holes.push(new THREE.Path().setFromPoints(sideBCurveLeftPoint))
  const sideBCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveLeftShape), colors.cr_red)

  const sideBCurveLeft = new THREE.Object3D()
  sideBCurveLeft.position.set(((glueFlap + (width *2)) - 10), ((glueFlap + length) - 10) ,0)
  sideBCurveLeft.add(sideBCurveLeftLine)

  const sideBCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    sideBCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const sideBCurveRightShape = new THREE.Shape()
  sideBCurveRightShape.holes.push(new THREE.Path().setFromPoints(sideBCurveRightPoint))
  const sideBCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(sideBCurveRightShape), colors.cr_red)

  const sideBCurveRight = new THREE.Object3D()
  sideBCurveRight.position.set(((glueFlap + (width *2)) - 10), (glueFlap + 10),0)
  sideBCurveRight.add(sideBCurveRightLine)

  const sideBShape1 = []
  sideBShape1.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  sideBShape1.push(new THREE.Vector2((glueFlap + width + glueFlap), ((glueFlap + length) - 5)))
  sideBShape1.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), ((glueFlap + length) - 5)))
  const sideBShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape1), colors.cr_red)
  sideBShapeGeometry1.computeLineDistances()

  const sideBShape2 = []
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), ((glueFlap + length) - 10)))
  sideBShape2.push(new THREE.Vector2((glueFlap + ((width * 2) - 5)), (glueFlap + 10)))
  const sideBShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape2), colors.cr_red)
  sideBShapeGeometry2.computeLineDistances()

  const sideBShape3 = []
  sideBShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  sideBShape3.push(new THREE.Vector2((glueFlap + width + glueFlap), (glueFlap + 5)))
  sideBShape3.push(new THREE.Vector2((glueFlap + ((width * 2) - 10)), (glueFlap + 5)))
  const sideBShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sideBShape3), colors.cr_red)
  sideBShapeGeometry3.computeLineDistances()



  const glueFlapLeftCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapLeftCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveLeftShape = new THREE.Shape()
  glueFlapLeftCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveLeftPoint))
  const glueFlapLeftCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveLeftShape), colors.cr_red)

  const glueFlapLeftCurveLeft = new THREE.Object3D()
  glueFlapLeftCurveLeft.position.set(5, (glueFlap + 10) ,0)
  glueFlapLeftCurveLeft.add(glueFlapLeftCurveLeftLine)

  const glueFlapLeftCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    glueFlapLeftCurveRightPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapLeftCurveRightShape = new THREE.Shape()
  glueFlapLeftCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapLeftCurveRightPoint))
  const glueFlapLeftCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapLeftCurveRightShape), colors.cr_red)

  const glueFlapLeftCurveRight = new THREE.Object3D()
  glueFlapLeftCurveRight.position.set(5, ((glueFlap + length) - 10) ,0)
  glueFlapLeftCurveRight.add(glueFlapLeftCurveRightLine)

  const glueFlapLeftShape1 = []
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapLeftShape1.push(new THREE.Vector2(glueFlapSlope, (glueFlap + glueFlapSlope)))
  const glueFlapLeftShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape1), colors.cr_red)
  glueFlapLeftShapeGeometry1.computeLineDistances()

  const glueFlapLeftShape2 = []
  glueFlapLeftShape2.push(new THREE.Vector2(0, ((glueFlap + length) - 10)))
  glueFlapLeftShape2.push(new THREE.Vector2(0, (glueFlap + 10)))
  const glueFlapLeftShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape2), colors.cr_red)
  glueFlapLeftShapeGeometry2.computeLineDistances()

  const glueFlapLeftShape3 = []
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  glueFlapLeftShape3.push(new THREE.Vector2(glueFlapSlope, ((glueFlap + length) - glueFlapSlope)))
  const glueFlapLeftShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapLeftShape3), colors.cr_red)
  glueFlapLeftShapeGeometry3.computeLineDistances()




  const glueFlapBottomCurveLeftPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveLeftShape = new THREE.Shape()
  glueFlapBottomCurveLeftShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveLeftPoint))
  const glueFlapBottomCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveLeftShape), colors.cr_red)

  const glueFlapBottomCurveLeft = new THREE.Object3D()
  glueFlapBottomCurveLeft.position.set((glueFlap + 10), 5 ,0)
  glueFlapBottomCurveLeft.add(glueFlapBottomCurveLeftLine)

  const glueFlapBottomCurveRightPoint = []
  for (let i = 90; i <= 180; i++) {
    glueFlapBottomCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const glueFlapBottomCurveRightShape = new THREE.Shape()
  glueFlapBottomCurveRightShape.holes.push(new THREE.Path().setFromPoints(glueFlapBottomCurveRightPoint))
  const glueFlapBottomCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(glueFlapBottomCurveRightShape), colors.cr_red)

  const glueFlapBottomCurveRight = new THREE.Object3D()
  glueFlapBottomCurveRight.position.set(((glueFlap + width) - 10), 5 ,0)
  glueFlapBottomCurveRight.add(glueFlapBottomCurveRightLine)

  const glueFlapBottomShape1 = []
  glueFlapBottomShape1.push(new THREE.Vector2(glueFlap, glueFlap))
  glueFlapBottomShape1.push(new THREE.Vector2((glueFlap + glueFlapSlope), 5))
  const glueFlapBottomShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape1), colors.cr_red)
  glueFlapBottomShapeGeometry1.computeLineDistances()

  const glueFlapBottomShape2 = []
  glueFlapBottomShape2.push(new THREE.Vector2((glueFlap + 10), 0))
  glueFlapBottomShape2.push(new THREE.Vector2(((glueFlap + width) - 10), 0))
  const glueFlapBottomShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape2), colors.cr_red)
  glueFlapBottomShapeGeometry2.computeLineDistances()

  const glueFlapBottomShape3 = []
  glueFlapBottomShape3.push(new THREE.Vector2((glueFlap + width), glueFlap))
  glueFlapBottomShape3.push(new THREE.Vector2(((glueFlap + width) - 5), 5))
  const glueFlapBottomShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(glueFlapBottomShape3), colors.cr_red)
  glueFlapBottomShapeGeometry3.computeLineDistances()





  const coverFlapCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * 5, Math.cos(i * -(Math.PI / 180)) * 5))
  }

  const coverFlapCurveLeftShape = new THREE.Shape()
  coverFlapCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveLeftPoint))
  const coverFlapCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveLeftShape), colors.cr_red)

  const coverFlapCurveLeft = new THREE.Object3D()
  coverFlapCurveLeft.position.set((glueFlap + 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveLeft.add(coverFlapCurveLeftLine)

  const coverFlapCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverFlapCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * 5, Math.cos(i * (Math.PI / 180)) * 5))
  }

  const coverFlapCurveRightShape = new THREE.Shape()
  coverFlapCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverFlapCurveRightPoint))
  const coverFlapCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverFlapCurveRightShape), colors.cr_red)

  const coverFlapCurveRight = new THREE.Object3D()
  coverFlapCurveRight.position.set(((glueFlap + width) - 15), ((glueFlap + length + coverFlap) - 5) ,0)
  coverFlapCurveRight.add(coverFlapCurveRightLine)

  const coverFlapShape1 = []
  coverFlapShape1.push(new THREE.Vector2(glueFlap, (glueFlap + length)))
  coverFlapShape1.push(new THREE.Vector2((glueFlap + 10), ((glueFlap + length + coverFlap) - 5)))
  const coverFlapShapeGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape1), colors.cr_red)
  coverFlapShapeGeometry1.computeLineDistances()

  const coverFlapShape2 = []
  coverFlapShape2.push(new THREE.Vector2((glueFlap + 15), (glueFlap + length + coverFlap)))
  coverFlapShape2.push(new THREE.Vector2(((glueFlap + width) - 15), (glueFlap + length + coverFlap)))
  const coverFlapShapeGeometry2 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape2), colors.cr_red)
  coverFlapShapeGeometry2.computeLineDistances()

  const coverFlapShape3 = []
  coverFlapShape3.push(new THREE.Vector2(((glueFlap + width) - 10), ((glueFlap + length + coverFlap) - 5)))
  coverFlapShape3.push(new THREE.Vector2((glueFlap + width), (glueFlap + length)))
  const coverFlapShapeGeometry3 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverFlapShape3), colors.cr_red)
  coverFlapShapeGeometry3.computeLineDistances()


  const coverFlapGroup = new THREE.Object3D()
  coverFlapGroup.position.set(0, 0, 0)
  coverFlapGroup.add(
      coverFlapShapeGeometry1,
      coverFlapCurveLeft,
      coverFlapShapeGeometry2,
      coverFlapCurveRight,
      coverFlapShapeGeometry3
  )

  const glueFlapLeftGroup = new THREE.Object3D()
  glueFlapLeftGroup.position.set(0, 0, 0)
  glueFlapLeftGroup.add(
      glueFlapLeftShapeGeometry1,
      glueFlapLeftCurveLeft,
      glueFlapLeftShapeGeometry2,
      glueFlapLeftCurveRight,
      glueFlapLeftShapeGeometry3,
  )

  const glueFlapBottomGroup = new THREE.Object3D()
  glueFlapBottomGroup.position.set(0, 0, 0)
  glueFlapBottomGroup.add(
      glueFlapBottomShapeGeometry1,
      glueFlapBottomCurveLeft,
      glueFlapBottomShapeGeometry2,
      glueFlapBottomCurveRight,
      glueFlapBottomShapeGeometry3,
  )

  const sideBGroup = new THREE.Object3D()
  sideBGroup.position.set(0, 0, 0)
  sideBGroup.add(
      sideBShapeGeometry1,
      sideBCurveLeft,
      sideBShapeGeometry2,
      sideBCurveRight,
      sideBShapeGeometry3,
  )

  const allGroup = new THREE.Object3D()
  allGroup.position.set(0, 0, 0)
  allGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup
  )


  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      sideAShapeGeometry,
      sideBGroup,
      coverFlapGroup,
      glueFlapLeftGroup,
      glueFlapBottomGroup,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.rotation.y = Math.PI
  PositionCenter.rotation.x = Math.PI
  PositionCenter.position.set((glueFlap + (width * 2)) - 5, (glueFlap + length + coverFlap), 0)
  PositionCenter.add(PlaneGroup)

  scene.add(PositionCenter)

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Invert, MainLays_Invert2 }
