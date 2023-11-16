import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width, height, glueFlap, glueFlapSlope, colors, E, bottomGlue, coverFlap, topTuckFlap, labelUnits } = options;
  const scene = new THREE.Scene()

  const cornerRadius = 15;

  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  const B1 = []
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = []
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = []
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = []
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = []
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = []
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  //! - - กล่องล่างสุด E
  const E1 = []
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = []
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E3), colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = []
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E4), colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = []
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E - 20, 20))
  const E5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E5), colors.cr_green)
  E5_Geometry.computeLineDistances()

  const E6 = []
  E6.push(new THREE.Vector2(E - 20, 20))
  E6.push(new THREE.Vector2(E - 20, 0))
  const E6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E6), colors.cr_red)
  E6_Geometry.computeLineDistances()

  const E7 = []
  E7.push(new THREE.Vector2((length - E) + 20, 20))
  E7.push(new THREE.Vector2((length - E) + 20, 0))
  const E7_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E7), colors.cr_red)
  E7_Geometry.computeLineDistances()


  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = []
  G4.push(new THREE.Vector2(glueFlap, E))
  G4.push(new THREE.Vector2(0, glueFlap + E))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()


  const redLine = []
  redLine.push(new THREE.Vector2(glueFlap + length, height + E))
  redLine.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, height + E))
  redLine.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, 0))
  redLine.push(new THREE.Vector2(0, 0))
  redLine.push(new THREE.Vector2(0, (height + E) - glueFlapSlope))
  redLine.push(new THREE.Vector2(glueFlap,  (height + E)))
  const redLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(redLine), colors.cr_red)
  redLineGeometry.computeLineDistances()

  const coverTopPoint1 = []
  coverTopPoint1.push(new THREE.Vector2(0, 0))
  coverTopPoint1.push(new THREE.Vector2(8, coverFlap - cornerRadius))
  const coverTop1GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint1), colors.cr_red)
  coverTop1GeometryLine.computeLineDistances()

  const coverTopPoint2 = []
  coverTopPoint2.push(new THREE.Vector2(8 + (topTuckFlap / 2), coverFlap))
  coverTopPoint2.push(new THREE.Vector2(length - (8 + (topTuckFlap / 2)), coverFlap))
  const coverTop2GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint2), colors.cr_red)
  coverTop2GeometryLine.computeLineDistances()

  const coverTopPoint3 = []
  coverTopPoint3.push(new THREE.Vector2(length - 8, coverFlap - cornerRadius))
  coverTopPoint3.push(new THREE.Vector2(length, 0))
  const coverTop3GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint3), colors.cr_red)
  coverTop3GeometryLine.computeLineDistances()

  const coverTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * cornerRadius, Math.cos(i * -(Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveLeftShape = new THREE.Shape()
  coverTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveLeftPoint))
  const coverTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveLeftShape), colors.cr_red)

  const coverTopCurveLeft = new THREE.Object3D()
  coverTopCurveLeft.position.set(8 + (topTuckFlap / 2), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveLeft.add(coverTopCurveLeftLine)

  const coverTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * cornerRadius, Math.cos(i * (Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveRightShape = new THREE.Shape()
  coverTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveRightPoint))
  const coverTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveRightShape), colors.cr_red)

  const coverTopCurveRight = new THREE.Object3D()
  coverTopCurveRight.position.set(length - (8 + (topTuckFlap / 2)), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveRight.add(coverTopCurveRightLine)

  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry )

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(redLineGeometry)

  const GroupCoverTop = new THREE.Object3D()
  // GroupCoverTop.rotation.x = Math.PI
  GroupCoverTop.position.set(glueFlap, E + height, 0)
  GroupCoverTop.add(coverTop1GeometryLine, coverTop2GeometryLine, coverTop3GeometryLine, coverTopCurveLeft, coverTopCurveRight)


  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }

  const geometry = new THREE.PlaneBufferGeometry(length / 12, length / 12)
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
  const meshGlue = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({ map: loader.load('./images/g.png') })
  )

  const lineMarkLength = new THREE.Object3D()
  lineMarkLength.position.set(glueFlap + length / 2, E + height / 2 + 30, 2)
  lineMarkLength.add(meshLength)

  const lineMarkLength2 = new THREE.Object3D()
  lineMarkLength2.position.set(length / 2 + glueFlap + length + width, E + height / 2 + 30, 2)
  lineMarkLength2.add(meshLength.clone())

  const lineMarkWidth = new THREE.Object3D()
  lineMarkWidth.position.set(glueFlap + length + width / 2, E + height / 2 + 30, 2)
  lineMarkWidth.add(meshWidth)

  const lineMarkWidth2 = new THREE.Object3D()
  lineMarkWidth2.position.set(width / 2 + glueFlap + length * 2 + width, E + height / 2 + 30, 2)
  lineMarkWidth2.add(meshWidth.clone())

  const lineMarkHeight = new THREE.Object3D()
  lineMarkHeight.position.set(glueFlap + (length * 2) + (width * 2) + 40, E + height / 2, 2)
  lineMarkHeight.add(meshHeight)

  const lineMarkGlue = new THREE.Object3D()
  lineMarkGlue.position.set(glueFlap / 2, E + height / 2 + 30, 2)
  lineMarkGlue.add(meshGlue)


  const lengthLabel = new THREE.Object3D()
  lengthLabel.position.set(glueFlap + length / 2, E + (height / 1.9), 2)

  const lengthLabel2 = new THREE.Object3D()
  lengthLabel2.position.set(length / 2 + glueFlap + length + width, E + (height / 1.9), 2)

  const widthLabel = new THREE.Object3D()
  widthLabel.position.set(glueFlap + length + width / 2, E + (height / 1.9), 2)

  const widthLabel2 = new THREE.Object3D()
  widthLabel2.position.set(glueFlap + length + width + length + width / 2, E + (height / 1.9), 2)

  const heightLabel = new THREE.Object3D()
  heightLabel.position.set(glueFlap + (length * 2) + (width * 2) + 20, E + (height / 2), 2)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.position.set(-glueFlap, (E + height + coverFlap) / 2 , 2)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(glueFlap + length + width, E + height + coverFlap + 20, 2)

  const glueLabel = new THREE.Object3D()
  glueLabel.position.set(glueFlap / 2, E + (height / 1.9), 2)


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
            ? (length / defaultUnit[labelUnits]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
            : (length / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    lengthLabel.add(text)
    lengthLabel2.add(text.clone())
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

    const message = `${labelUnits === 'inch' ? (width / defaultUnit[labelUnits]).toFixed(2) : (width / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}.`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    widthLabel.add(text) //! text
    widthLabel2.add(text.clone())
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

    const message = `${labelUnits === 'inch' ? (height / defaultUnit[labelUnits]).toFixed(2) : (height / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    heightLabel.add(text)
    heightLabel.rotation.z = Math.PI / 2
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

    const message = `${labelUnits === 'inch' ? ((E + height + coverFlap) / defaultUnit[labelUnits]).toFixed(2) : ((E + height + coverFlap) / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    heightDimensionLabel.add(text.clone())
    heightDimensionLabel.rotation.z = Math.PI / 2
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

    const message = `${labelUnits === 'inch' ? ((length * 2 + width * 2 + glueFlap) / defaultUnit[labelUnits]).toFixed(2) : ((length * 2 + width * 2 + glueFlap) / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    widthDimensionLabel.add(text)
  })

  const loaderTextGlue = new THREE.FontLoader()
  loaderTextGlue.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (glueFlap / defaultUnit[labelUnits]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
            : (glueFlap / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    glueLabel.add(text)
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
  lengthArrow.position.set(glueFlap, E + (height / 2), 2)
  lengthArrow.add(arrows(length).clone())

  const lengthArrow2 = new THREE.Object3D()
  lengthArrow2.position.set(glueFlap + length + width, E + (height / 2), 2)
  lengthArrow2.add(arrows(length).clone())

  const widthArrow = new THREE.Object3D()
  widthArrow.position.set(glueFlap + length, E + (height / 2), 2)
  widthArrow.add(arrows(width).clone())

  const widthArrow2 = new THREE.Object3D()
  widthArrow2.position.set(glueFlap + (length * 2) + width, E + (height / 2), 2)
  widthArrow2.add(arrows(width).clone())

  const heightArrow = new THREE.Object3D()
  heightArrow.rotation.z = -Math.PI / 2
  heightArrow.position.set(glueFlap + (length * 2) + (width * 2) + 10, E + height, 2)
  heightArrow.add(
      arrows(height).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(height, 0, height, -10).clone()
  )

  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-(glueFlap / 2), E + height + coverFlap, 2)
  heightDimensionArrow.add(
      arrows(E + height + coverFlap).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(E + height + coverFlap, 0, E + height + coverFlap, 10).clone()
  )

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0, E + height + coverFlap + 10, 2)
  widthDimensionArrow.add(
      arrows(glueFlap + (length * 2) + (width * 2)).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(glueFlap + (length * 2) + (width * 2), 0, glueFlap + (length * 2) + (width * 2), -10).clone()
  )

  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(length + width, 0, 0)
  PlaneGroupClone.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      Group_A_Top,
      Group_B_Top,
      Group_B_Top2,
      Group_E,
      Group_G,
      PlaneGroupClone,
      Group_RedLine,
      GroupCoverTop,

      lineMarkLength,
      lineMarkLength2,
      lineMarkWidth,
      lineMarkWidth2,
      lineMarkHeight,
      lineMarkGlue,

      lengthLabel,
      lengthLabel2,
      widthLabel,
      widthLabel2,
      heightLabel,
      glueLabel,
      heightDimensionLabel,
      widthDimensionLabel,

      lengthArrow,
      lengthArrow2,
      widthArrow,
      widthArrow2,
      heightArrow,
      heightDimensionArrow,
      widthDimensionArrow,
  )

  const PositionCenter = new THREE.Object3D() //* set center
  PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + coverFlap) / 2), 0)
  // PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays = (options) => {
  const { length, width, height, glueFlap, glueFlapSlope, colors, E, bottomGlue, handHoldingLength, handHoldingWidth, handHoldingMargin, coverFlap, topTuckFlap, lockMargin } = options;
  const scene = new THREE.Scene()

  const cornerRadius = 15;
  const lockWidth = 2;


  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  const B1 = []
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = []
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = []
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = []
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = []
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = []
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = []
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E3), colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = []
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E4), colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = []
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E - 20, 20))
  const E5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E5), colors.cr_green)
  E5_Geometry.computeLineDistances()

  const E6 = []
  E6.push(new THREE.Vector2(E - 20, 20))
  E6.push(new THREE.Vector2(E - 20, 0))
  const E6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E6), colors.cr_red)
  E6_Geometry.computeLineDistances()

  const E7 = []
  E7.push(new THREE.Vector2((length - E) + 20, 20))
  E7.push(new THREE.Vector2((length - E) + 20, 0))
  const E7_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E7), colors.cr_red)
  E7_Geometry.computeLineDistances()


  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = []
  G4.push(new THREE.Vector2(glueFlap, E))
  G4.push(new THREE.Vector2(0, glueFlap + E))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()

  const redLine = []
  redLine.push(new THREE.Vector2(glueFlap + length, height + E))
  redLine.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, height + E))
  redLine.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, 0))
  redLine.push(new THREE.Vector2(0, 0))
  redLine.push(new THREE.Vector2(0, (height + E) - glueFlapSlope))
  redLine.push(new THREE.Vector2(glueFlap,  (height + E)))
  const redLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(redLine), colors.cr_red)
  redLineGeometry.computeLineDistances()

  const coverTopPoint1 = []
  coverTopPoint1.push(new THREE.Vector2(0, 0))
  coverTopPoint1.push(new THREE.Vector2(8, coverFlap - cornerRadius))
  const coverTop1GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint1), colors.cr_red)
  coverTop1GeometryLine.computeLineDistances()

  const coverTopPoint2 = []
  coverTopPoint2.push(new THREE.Vector2(8 + (topTuckFlap / 2), coverFlap))
  coverTopPoint2.push(new THREE.Vector2(length - (8 + (topTuckFlap / 2)), coverFlap))
  const coverTop2GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint2), colors.cr_red)
  coverTop2GeometryLine.computeLineDistances()

  const coverTopPoint3 = []
  coverTopPoint3.push(new THREE.Vector2(length - 8, coverFlap - cornerRadius))
  coverTopPoint3.push(new THREE.Vector2(length, 0))
  const coverTop3GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint3), colors.cr_red)
  coverTop3GeometryLine.computeLineDistances()

  const coverTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * cornerRadius, Math.cos(i * -(Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveLeftShape = new THREE.Shape()
  coverTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveLeftPoint))
  const coverTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveLeftShape), colors.cr_red)

  const coverTopCurveLeft = new THREE.Object3D()
  coverTopCurveLeft.position.set(8 + (topTuckFlap / 2), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveLeft.add(coverTopCurveLeftLine)

  const coverTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * cornerRadius, Math.cos(i * (Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveRightShape = new THREE.Shape()
  coverTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveRightPoint))
  const coverTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveRightShape), colors.cr_red)

  const coverTopCurveRight = new THREE.Object3D()
  coverTopCurveRight.position.set(length - (8 + (topTuckFlap / 2)), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveRight.add(coverTopCurveRightLine)


  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry )

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(redLineGeometry)

  const GroupCoverTop = new THREE.Object3D()
  GroupCoverTop.position.set(glueFlap, E + height, 0)
  GroupCoverTop.add(coverTop1GeometryLine, coverTop2GeometryLine, coverTop3GeometryLine, coverTopCurveLeft, coverTopCurveRight)


  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(length + width, 0, 0)
  PlaneGroupClone.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      Group_A_Top,
      Group_B_Top,
      Group_B_Top2,
      Group_E,
      Group_G,
      PlaneGroupClone,
      Group_RedLine,
      GroupCoverTop,
  )

  const PositionCenter = new THREE.Object3D() //* set center
  // PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + coverFlap) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays_Half_A = (options) => {
  const { length, width, height, glueFlap, glueFlapSlope, colors, E, bottomGlue, coverFlap, topTuckFlap } = options;
  const scene = new THREE.Scene()

  const cornerRadius = 15;

  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  const B1 = []
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = []
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = []
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = []
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = []
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = []
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = []
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E3), colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = []
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E4), colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = []
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E - 20, 20))
  const E5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E5), colors.cr_green)
  E5_Geometry.computeLineDistances()

  const E6 = []
  E6.push(new THREE.Vector2(E - 20, 20))
  E6.push(new THREE.Vector2(E - 20, 0))
  const E6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E6), colors.cr_red)
  E6_Geometry.computeLineDistances()

  const E7 = []
  E7.push(new THREE.Vector2((length - E) + 20, 20))
  E7.push(new THREE.Vector2((length - E) + 20, 0))
  const E7_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E7), colors.cr_red)
  E7_Geometry.computeLineDistances()


  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = []
  G4.push(new THREE.Vector2(glueFlap, E))
  G4.push(new THREE.Vector2(0, glueFlap + E))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()


  const redLine = []
  redLine.push(new THREE.Vector2(glueFlap + length, height + E))
  redLine.push(new THREE.Vector2((glueFlap + length + width), height + E))
  redLine.push(new THREE.Vector2((glueFlap + length + width), 0))
  redLine.push(new THREE.Vector2(0, 0))
  redLine.push(new THREE.Vector2(0, (height + E) - glueFlapSlope))
  redLine.push(new THREE.Vector2(glueFlap,  (height + E)))
  const redLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(redLine), colors.cr_red)
  redLineGeometry.computeLineDistances()

  const coverTopPoint1 = []
  coverTopPoint1.push(new THREE.Vector2(0, 0))
  coverTopPoint1.push(new THREE.Vector2(8, coverFlap - cornerRadius))
  const coverTop1GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint1), colors.cr_red)
  coverTop1GeometryLine.computeLineDistances()

  const coverTopPoint2 = []
  coverTopPoint2.push(new THREE.Vector2(8 + (topTuckFlap / 2), coverFlap))
  coverTopPoint2.push(new THREE.Vector2(length - (8 + (topTuckFlap / 2)), coverFlap))
  const coverTop2GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint2), colors.cr_red)
  coverTop2GeometryLine.computeLineDistances()

  const coverTopPoint3 = []
  coverTopPoint3.push(new THREE.Vector2(length - 8, coverFlap - cornerRadius))
  coverTopPoint3.push(new THREE.Vector2(length, 0))
  const coverTop3GeometryLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(coverTopPoint3), colors.cr_red)
  coverTop3GeometryLine.computeLineDistances()

  const coverTopCurveLeftPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveLeftPoint.push(new THREE.Vector2( Math.sin(i * -(Math.PI / 180)) * cornerRadius, Math.cos(i * -(Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveLeftShape = new THREE.Shape()
  coverTopCurveLeftShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveLeftPoint))
  const coverTopCurveLeftLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveLeftShape), colors.cr_red)

  const coverTopCurveLeft = new THREE.Object3D()
  coverTopCurveLeft.position.set(8 + (topTuckFlap / 2), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveLeft.add(coverTopCurveLeftLine)

  const coverTopCurveRightPoint = []
  for (let i = 0; i <= 90; i++) {
    coverTopCurveRightPoint.push(new THREE.Vector2( Math.sin(i * (Math.PI / 180)) * cornerRadius, Math.cos(i * (Math.PI / 180)) * cornerRadius))
  }

  const coverTopCurveRightShape = new THREE.Shape()
  coverTopCurveRightShape.holes.push(new THREE.Path().setFromPoints(coverTopCurveRightPoint))
  const coverTopCurveRightLine = new THREE.Line(new THREE.ShapeGeometry(coverTopCurveRightShape), colors.cr_red)

  const coverTopCurveRight = new THREE.Object3D()
  coverTopCurveRight.position.set(length - (8 + (topTuckFlap / 2)), coverFlap - (topTuckFlap / 2), 0)
  coverTopCurveRight.add(coverTopCurveRightLine)


  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry )

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(redLineGeometry)

  const GroupCoverTop = new THREE.Object3D()
  GroupCoverTop.position.set(glueFlap, E + height, 0)
  GroupCoverTop.add(coverTop1GeometryLine, coverTop2GeometryLine, coverTop3GeometryLine, coverTopCurveLeft, coverTopCurveRight)


  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(length + width, 0, 0)
  PlaneGroupClone.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      Group_A_Top,
      Group_B_Top,
      Group_B_Top2,
      Group_E,
      Group_G,
      Group_RedLine,
      GroupCoverTop,
  )

  const PositionCenter = new THREE.Object3D() //* set center
  // PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + coverFlap) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays_Half_B = (options) => {
  const { length, width, height, glueFlap, glueFlapSlope, colors, E, bottomGlue, handHoldingLength, handHoldingWidth, handHoldingMargin, coverFlap, topTuckFlap, lockMargin } = options;
  const scene = new THREE.Scene()

  const cornerRadius = 15;
  const lockWidth = 2;


  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  const B1 = []
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = []
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = []
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = []
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = []
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = []
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = []
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E3), colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = []
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E4), colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = []
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E - 20, 20))
  const E5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E5), colors.cr_green)
  E5_Geometry.computeLineDistances()

  const E6 = []
  E6.push(new THREE.Vector2(E - 20, 20))
  E6.push(new THREE.Vector2(E - 20, 0))
  const E6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E6), colors.cr_red)
  E6_Geometry.computeLineDistances()

  const E7 = []
  E7.push(new THREE.Vector2((length - E) + 20, 20))
  E7.push(new THREE.Vector2((length - E) + 20, 0))
  const E7_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E7), colors.cr_red)
  E7_Geometry.computeLineDistances()


  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = []
  G4.push(new THREE.Vector2(glueFlap, E))
  G4.push(new THREE.Vector2(0, glueFlap + E))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()

  const redLine = []
  redLine.push(new THREE.Vector2(glueFlap, height + E))
  redLine.push(new THREE.Vector2((glueFlap + length + width), height + E))
  redLine.push(new THREE.Vector2((glueFlap + length + width), 0))
  redLine.push(new THREE.Vector2(0, 0))
  redLine.push(new THREE.Vector2(0, (height + E) - glueFlapSlope))
  redLine.push(new THREE.Vector2(glueFlap,  (height + E)))
  const redLineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(redLine), colors.cr_red)
  redLineGeometry.computeLineDistances()


  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry )

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(redLineGeometry)

  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(0, 0, 0)
  PlaneGroupClone.add(Group_A_Top, Group_B_Top.clone(), Group_B_Top2.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
      Group_G,
      PlaneGroupClone,
      Group_RedLine,
  )

  const PositionCenter = new THREE.Object3D() //* set center
  // PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + coverFlap) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Half_A, MainLays_Half_B }
