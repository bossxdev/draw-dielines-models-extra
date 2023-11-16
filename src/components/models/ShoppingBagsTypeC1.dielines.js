import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius
  const bottomBagSlope = 3

  const A1Line1 = []
  A1Line1.push(new THREE.Vector2(0, 0))
  A1Line1.push(new THREE.Vector2(0, height))
  A1Line1.push(new THREE.Vector2((length / 4) - (radius / 2), height))
  const A1Line1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line1), colors.cr_green)
  A1Line1Geometry.computeLineDistances()

  const A1Line2 = []
  A1Line2.push(new THREE.Vector2((length / 4) + (radius / 2), height))
  A1Line2.push(new THREE.Vector2(((length / 4) * 3) - (radius / 2), height))
  const A1Line2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line2), colors.cr_green)
  A1Line2Geometry.computeLineDistances()

  const A1Line3 = []
  A1Line3.push(new THREE.Vector2(((length / 4) * 3) + (radius / 2), height))
  A1Line3.push(new THREE.Vector2(length, height))
  const A1Line3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line3), colors.cr_green)
  A1Line3Geometry.computeLineDistances()

  const A1Line4 = []
  A1Line4.push(new THREE.Vector2(0, width / 2))
  A1Line4.push(new THREE.Vector2(length, width / 2))
  const A1Line4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line4), colors.cr_green)
  A1Line4Geometry.computeLineDistances()


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


  const D1 = []
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  const D1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D1), colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = []
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D2), colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = []
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D3), colors.cr_green)
  D3_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(width / 2 + length, 0))
  E2.push(new THREE.Vector2(width / 2 + length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, width + bottomGlue))
  G2.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, E + height))
  G3.push(new THREE.Vector2(glueFlap, E + height))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()


  const Red_Line = []
  Red_Line.push(new THREE.Vector2(glueFlap, E))
  Red_Line.push(new THREE.Vector2(0, glueFlap + E))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, E))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width + bottomBagSlope) + glueFlap), 0))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width + bottomBagSlope) + glueFlap), (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap), E))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(glueFlap, E))
  const Red_Line_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Red_Line), colors.cr_red)
  Red_Line_Geometry.computeLineDistances()


  const ribbonLeft1 = []
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft1), colors.cr_red)

  const ribbonLeft2 = []
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft2), colors.cr_red)

  const ribbonRight1 = []
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) - (radius / 2), (E + height) - 1))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) + (radius / 2), (E + height) - 1))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonRight1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonRight1), colors.cr_red)

  const ribbonRight2 = []
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) - (radius / 2), (E + height) - 1))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) + (radius / 2), (E + height) - 1))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonRight2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonRight2), colors.cr_red)

  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1Line1Geometry, A1Line2Geometry, A1Line3Geometry, A1Line4Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_D = new THREE.Object3D()
  Group_D.position.set(glueFlap,  height + ((width / 2) + bottomGlue), 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry)

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(Red_Line_Geometry)

  const ribbonGroupsLeft = new THREE.Object3D()
  ribbonGroupsLeft.add(ribbonLeft1Geometry,  ribbonLeft2Geometry)

  const ribbonGroupsRight = new THREE.Object3D()
  ribbonGroupsRight.add(ribbonRight1Geometry,  ribbonRight2Geometry)

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
  const meshCircle = new THREE.Mesh(
      geometry.clone(),
    new THREE.MeshBasicMaterial({ map: loader.load('./images/f.png') })
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

  const lineMarkCircle = new THREE.Object3D()
  lineMarkCircle.position.set(glueFlap + (length / 2), E + (height / 1.08), 2)
  lineMarkCircle.add(meshCircle)

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
  heightDimensionLabel.position.set(-glueFlap, E / 2 + height / 2 + D / 2, 2)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(glueFlap + length + width, E + height + D + 20, 2)

  const circleLabel = new THREE.Object3D()
  circleLabel.position.set(glueFlap + (length / 2), E + (height / 1.2), 2)

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
        ? (length / defaultUnit[labelUnits]).toFixed(2)
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

    const message = `${labelUnits === 'inch' ? ((E + height + D) / defaultUnit[labelUnits]).toFixed(2) : ((E + height + D) / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}`
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

  const loaderTextCircle = new THREE.FontLoader()
  loaderTextCircle.load('./fonts/Prompt_Regular.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `F รูร้อยเชือกริบบิ้น ${R / defaultUnit[labelUnits]} ${labelUnits}`
    const shapes = font.generateShapes(message, 7)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.4 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    circleLabel.add(text.clone())
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
  heightDimensionArrow.position.set(-(glueFlap / 2), E + height + D, 2)
  heightDimensionArrow.add(
      arrows(E + height + D).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(E + height + D, 0, E + height + D, 10).clone()
  )
  
  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0, E + height + D + 10, 2)
  widthDimensionArrow.add(
      arrows(glueFlap + (length * 2) + (width * 2)).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(glueFlap + (length * 2) + (width * 2), 0, glueFlap + (length * 2) + (width * 2), -10).clone()
  )
  
  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(length + width, 0, 0)
  PlaneGroupClone.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_D.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
    Group_A_Top,
    Group_B_Top,
    Group_B_Top2,
    Group_D,
    Group_E,
    Group_G,
    PlaneGroupClone,
    Group_RedLine,
    ribbonGroupsLeft,
    ribbonGroupsRight,

    lineMarkLength,
    lineMarkLength2,
    lineMarkWidth,
    lineMarkWidth2,
    lineMarkHeight,
    lineMarkCircle,
    lineMarkGlue,

    lengthLabel,
    lengthLabel2,
    widthLabel,
    widthLabel2,
    heightLabel,
    glueLabel,
    heightDimensionLabel,
    widthDimensionLabel,
    circleLabel,

    lengthArrow,
    lengthArrow2,
    widthArrow,
    widthArrow2,
    heightArrow,
    heightDimensionArrow,
    widthDimensionArrow,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + D) / 2), 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue } = options;
  const scene = new THREE.Scene()
  const bottomBagSlope = 3

  const shapePlane = new THREE.Shape()
  shapePlane.moveTo(glueFlap, E)
  shapePlane.lineTo(0, glueFlap + E)
  shapePlane.lineTo(0, D + height + E)
  shapePlane.lineTo(length * 2 + width * 2 + glueFlap, D + height + E)
  shapePlane.lineTo((length * 2) + (width * 2) + glueFlap, E)
  shapePlane.lineTo(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo(((length * 2) + (width + bottomBagSlope) + glueFlap), 0)
  shapePlane.lineTo(((length * 2) + (width + bottomBagSlope) + glueFlap), (E - bottomBagSlope))
  shapePlane.lineTo(((length * 2) + width + glueFlap), E)
  shapePlane.lineTo(((length * 2) + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo(((length * 2) + width + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo((length + width + glueFlap) + bottomBagSlope, 0)
  shapePlane.lineTo((length + width + glueFlap) + bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + width + glueFlap), E)
  shapePlane.lineTo((length + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + width + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo((length + glueFlap) + bottomBagSlope, 0)
  shapePlane.lineTo((length + glueFlap) + bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + glueFlap), E)
  shapePlane.lineTo((length + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo(glueFlap + bottomBagSlope, 0)
  shapePlane.lineTo(glueFlap + bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo(glueFlap, E)

  const shapePlaneGeometry = new THREE.Mesh(new THREE.ShapeGeometry(shapePlane), colors.cr_lays)

  const A1Line1 = []
  A1Line1.push(new THREE.Vector2(0, 0))
  A1Line1.push(new THREE.Vector2(0, height))
  A1Line1.push(new THREE.Vector2((length / 4) - (radius / 2), height))
  const A1Line1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line1), colors.cr_green)
  A1Line1Geometry.computeLineDistances()

  const A1Line2 = []
  A1Line2.push(new THREE.Vector2((length / 4) + (radius / 2), height))
  A1Line2.push(new THREE.Vector2(((length / 4) * 3) - (radius / 2), height))
  const A1Line2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line2), colors.cr_green)
  A1Line2Geometry.computeLineDistances()

  const A1Line3 = []
  A1Line3.push(new THREE.Vector2(((length / 4) * 3) + (radius / 2), height))
  A1Line3.push(new THREE.Vector2(length, height))
  const A1Line3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line3), colors.cr_green)
  A1Line3Geometry.computeLineDistances()

  const A1Line4 = []
  A1Line4.push(new THREE.Vector2(0, width / 2))
  A1Line4.push(new THREE.Vector2(length, width / 2))
  const A1Line4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line4), colors.cr_green)
  A1Line4Geometry.computeLineDistances()

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

  const D1 = []
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  const D1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D1), colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = []
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D2), colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = []
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D3), colors.cr_green)
  D3_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(width / 2 + length, 0))
  E2.push(new THREE.Vector2(width / 2 + length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, width + bottomGlue))
  G2.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, E + height))
  G3.push(new THREE.Vector2(glueFlap, E + height))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  //! - - Red Line
  const Red_Line = []
  Red_Line.push(new THREE.Vector2(glueFlap, E))
  Red_Line.push(new THREE.Vector2(0, glueFlap + E))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2((length * 2) + (width * 2) + glueFlap, E))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width * 2) + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width + bottomBagSlope) + glueFlap), 0))
  Red_Line.push(new THREE.Vector2(((length * 2) + (width + bottomBagSlope) + glueFlap), (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap), E))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(((length * 2) + width + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(glueFlap, E))
  const Red_Line_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Red_Line), colors.cr_red)
  Red_Line_Geometry.computeLineDistances()


  const ribbonLeft1 = []
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft1), colors.cr_red)

  const ribbonLeft2 = []
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft2), colors.cr_red)

  const ribbonRight1 = []
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) - (radius / 2), (E + height) - 1))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) + (radius / 2), (E + height) - 1))
  ribbonRight1.push(new THREE.Vector2((glueFlap + length + width + (length / 4)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonRight1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonRight1), colors.cr_red)

  const ribbonRight2 = []
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) - (radius / 2), (E + height) - 1))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) + (radius / 2), (E + height) - 1))
  ribbonRight2.push(new THREE.Vector2((glueFlap + length + width + ((length / 4) * 3)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonRight2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonRight2), colors.cr_red)


  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1Line1Geometry, A1Line2Geometry, A1Line3Geometry, A1Line4Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_D = new THREE.Object3D()
  Group_D.position.set(glueFlap,  height + ((width / 2) + bottomGlue), 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry)

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(Red_Line_Geometry)


  const ribbonGroupsLeft = new THREE.Object3D()
  ribbonGroupsLeft.add(ribbonLeft1Geometry,  ribbonLeft2Geometry)

  const ribbonGroupsRight = new THREE.Object3D()
  ribbonGroupsRight.add(ribbonRight1Geometry,  ribbonRight2Geometry)

  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, -1)
  Group_Blue.add(shapePlaneGeometry)

  const PlaneGroupClone = new THREE.Object3D()
  PlaneGroupClone.position.set(length + width, 0, 0)
  PlaneGroupClone.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_D.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, PlaneGroupClone, Group_RedLine, ribbonGroupsLeft, ribbonGroupsRight, Group_Blue )

  const PositionCenter = new THREE.Object3D()
  // PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + D) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}
const MainLays_Half = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue } = options;
  const scene = new THREE.Scene()
  const bottomBagSlope = 3

  const shapePlane = new THREE.Shape()
  shapePlane.moveTo(glueFlap, E)
  shapePlane.lineTo(0, glueFlap + E)
  shapePlane.lineTo(0, D + height + E)
  shapePlane.lineTo(length + width + glueFlap, D + height + E)
  shapePlane.lineTo((length + width + glueFlap), E)
  shapePlane.lineTo((length + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + width + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo((length + glueFlap) + bottomBagSlope, 0)
  shapePlane.lineTo((length + glueFlap) + bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + glueFlap), E)
  shapePlane.lineTo((length + glueFlap) - bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo((length + glueFlap) - bottomBagSlope, 0)
  shapePlane.lineTo(glueFlap + bottomBagSlope, 0)
  shapePlane.lineTo(glueFlap + bottomBagSlope, (E - bottomBagSlope))
  shapePlane.lineTo(glueFlap, E)

  const A1Plane_setPoint = new THREE.ShapeGeometry(shapePlane)
  const shapePlaneGeometry = new THREE.Mesh(A1Plane_setPoint, colors.cr_lays)

  const A1Line1 = []
  A1Line1.push(new THREE.Vector2(0, 0))
  A1Line1.push(new THREE.Vector2(0, height))
  A1Line1.push(new THREE.Vector2((length / 4) - (radius / 2), height))
  const A1Line1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line1), colors.cr_green)
  A1Line1Geometry.computeLineDistances()

  const A1Line2 = []
  A1Line2.push(new THREE.Vector2((length / 4) + (radius / 2), height))
  A1Line2.push(new THREE.Vector2(((length / 4) * 3) - (radius / 2), height))
  const A1Line2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line2), colors.cr_green)
  A1Line2Geometry.computeLineDistances()

  const A1Line3 = []
  A1Line3.push(new THREE.Vector2(((length / 4) * 3) + (radius / 2), height))
  A1Line3.push(new THREE.Vector2(length, height))
  const A1Line3Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line3), colors.cr_green)
  A1Line3Geometry.computeLineDistances()

  const A1Line4 = []
  A1Line4.push(new THREE.Vector2(0, width / 2))
  A1Line4.push(new THREE.Vector2(length, width / 2))
  const A1Line4Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1Line4), colors.cr_green)
  A1Line4Geometry.computeLineDistances()


  const B1 = []
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_setPoint = new THREE.BufferGeometry().setFromPoints(B1)
  const B1_Geometry = new THREE.Line(B1_setPoint, colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = []
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_setPoint = new THREE.BufferGeometry().setFromPoints(B2)
  const B2_Geometry = new THREE.Line(B2_setPoint, colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = []
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_setPoint = new THREE.BufferGeometry().setFromPoints(B3)
  const B3_Geometry = new THREE.Line(B3_setPoint, colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = []
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_setPoint = new THREE.BufferGeometry().setFromPoints(B4)
  const B4_Geometry = new THREE.Line(B4_setPoint, colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = []
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_setPoint = new THREE.BufferGeometry().setFromPoints(B5)
  const B5_Geometry = new THREE.Line(B5_setPoint, colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = []
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_setPoint = new THREE.BufferGeometry().setFromPoints(B6)
  const B6_Geometry = new THREE.Line(B6_setPoint, colors.cr_green)
  B6_Geometry.computeLineDistances()

  const D1 = []
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  const D1_setPoint = new THREE.BufferGeometry().setFromPoints(D1)
  const D1_Geometry = new THREE.Line(D1_setPoint, colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = []
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_setPoint = new THREE.BufferGeometry().setFromPoints(D2)
  const D2_Geometry = new THREE.Line(D2_setPoint, colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = []
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_setPoint = new THREE.BufferGeometry().setFromPoints(D3)
  const D3_Geometry = new THREE.Line(D3_setPoint, colors.cr_green)
  D3_Geometry.computeLineDistances()

  const E1 = []
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = []
  E2.push(new THREE.Vector2(width / 2 + length, 0))
  E2.push(new THREE.Vector2(width / 2 + length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const G1 = []
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = []
  G2.push(new THREE.Vector2(0, width + bottomGlue))
  G2.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = []
  G3.push(new THREE.Vector2(0, E + height))
  G3.push(new THREE.Vector2(glueFlap, E + height))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const Red_Line = []
  Red_Line.push(new THREE.Vector2(glueFlap, E))
  Red_Line.push(new THREE.Vector2(0, glueFlap + E))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length + width + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + width + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2((length + glueFlap) + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap), E))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2((length + glueFlap) - bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, 0))
  Red_Line.push(new THREE.Vector2(glueFlap + bottomBagSlope, (E - bottomBagSlope)))
  Red_Line.push(new THREE.Vector2(glueFlap, E))

  const Red_Line_setPoint = new THREE.BufferGeometry().setFromPoints(Red_Line)
  const Red_Line_Geometry = new THREE.Line(Red_Line_setPoint, colors.cr_red)
  Red_Line_Geometry.computeLineDistances()


  const ribbonLeft1 = []
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) - (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + (radius / 2), (E + height) - 1))
  ribbonLeft1.push(new THREE.Vector2((glueFlap + (length / 4)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft1Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft1), colors.cr_red)

  const ribbonLeft2 = []
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - ((radius / 2) + 3), (E + height + 2)))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) - (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + (radius / 2), (E + height) - 1))
  ribbonLeft2.push(new THREE.Vector2((glueFlap + ((length / 4) * 3)) + ((radius / 2) + 3), (E + height + 2)))
  const ribbonLeft2Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(ribbonLeft2), colors.cr_red)


  const Group_A_Top = new THREE.Object3D()
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1Line1Geometry, A1Line2Geometry, A1Line3Geometry, A1Line4Geometry)

  const Group_B_Top = new THREE.Object3D()
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)

  const Group_B_Top2 = new THREE.Object3D()
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)

  const Group_D = new THREE.Object3D()
  Group_D.position.set(glueFlap, height + ((width / 2) + bottomGlue), 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)

  const Group_E = new THREE.Object3D()
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry)

  const Group_G = new THREE.Object3D()
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry)

  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(Red_Line_Geometry)

  const ribbonGroupsLeft = new THREE.Object3D()
  ribbonGroupsLeft.add(ribbonLeft1Geometry, ribbonLeft2Geometry)

  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, -1)
  Group_Blue.add(shapePlaneGeometry)

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, Group_RedLine, ribbonGroupsLeft, Group_Blue )

  const PositionCenter = new THREE.Object3D()
  // PositionCenter.position.set(-(glueFlap + length + width) / 2, -((E + height + D) / 2), 0)
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Half }
