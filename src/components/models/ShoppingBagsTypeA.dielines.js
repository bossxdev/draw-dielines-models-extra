import * as THREE from 'three'
const MainDiecuts = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius

  const A1 = [] //* Box A1
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = [] //* Box A2
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  //! - - กล่อง width
  const B1 = [] ///* Box B1
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = [] //* เส้นเฉียง
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = [] //*เส้นตรง
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = [] //*กล่องB2
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = [] //* เส้นเฉียง
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = [] //*เส้นตรง
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  //! - - เส้นตรง ทั้งหมดของส่วนบนสุด
  const D1 = [] //*ส่วนบน
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  const D1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D1), colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = [] //*ส่วนตรงด้านบน
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D2), colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = [] //*ส่วนตรงด้านบน
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D3), colors.cr_green)
  D3_Geometry.computeLineDistances()

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

  //! - - กาวด้านข้าง
  const G1 = [] //*กาว
  G1.push(new THREE.Vector2(0, 0))
  G1.push(new THREE.Vector2(0, E + height + D))
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = [] //*เส้นแนวนอนล่าง
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = [] //*เส้นแนวนอนกลาง
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = [] //*เส้นแนวนอนกลาง
  G4.push(new THREE.Vector2(0, E + height))
  G4.push(new THREE.Vector2(glueFlap, E + height))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()

  const G5 = [] //*เส้นแนวนอนกลาง
  G5.push(new THREE.Vector2(glueFlap, E))
  G5.push(new THREE.Vector2(0, glueFlap + E))
  const G5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G5), colors.cr_green)
  G5_Geometry.computeLineDistances()

  //! - - Red Line
  const Red_Line = []
  Red_Line.push(new THREE.Vector2(0, 0))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, 0))
  Red_Line.push(new THREE.Vector2(0, 0))
  const Red_Line_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Red_Line), colors.cr_red)
  Red_Line_Geometry.computeLineDistances()

  //! - - วงกลมทั้งหมด
  const points = [];
  for (let i = 0; i <= 360; i++) {
    points.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), colors.cr_red)

  const points1 = [];
  for (let i = 0; i <= 360; i++) {
    points1.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points1), colors.cr_red)

  //* - - - Group - - - *//
  //? Group length
  const Group_A_Top = new THREE.Object3D() //*length
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)
  //? Group B1
  const Group_B_Top = new THREE.Object3D() //*B1
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)
  //? Group B2
  const Group_B_Top2 = new THREE.Object3D() //* B2
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)
  //? Group D
  const Group_D = new THREE.Object3D() //* D
  Group_D.position.set(glueFlap, E + height, 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)
  //? Group E
  const Group_E = new THREE.Object3D() //* E
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)
  //? Group glueFlap
  const Group_G = new THREE.Object3D() //* glueFlap
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry, G5_Geometry)
  //? Group Red Line
  const Group_RedLine = new THREE.Object3D() //*length
  Group_RedLine.add(Red_Line_Geometry)


  //? Group วงกลม
  //! วงกลมซ้าย
  const circleLeft1 = new THREE.Object3D()
  circleLeft1.position.set(length / 4 + glueFlap, (D / 2) + height + E, 0)
  circleLeft1.add(lineGeometry)

  const circleLeft2 = new THREE.Object3D()
  circleLeft2.position.set(length / 4 + glueFlap, (height + E) - (D / 2), 0)
  circleLeft2.add(lineGeometry.clone())

  const circleLeft3 = new THREE.Object3D()
  circleLeft3.position.set((length / 4) * 3 + glueFlap, (D / 2) + height + E, 0)
  circleLeft3.add(lineGeometry.clone())

  const circleLeft4 = new THREE.Object3D()
  circleLeft4.position.set((length / 4) * 3 + glueFlap, (height + E) - (D / 2), 0)
  circleLeft4.add(lineGeometry.clone())

  const circleGroup = new THREE.Object3D()
  circleGroup.add(circleLeft1, circleLeft2, circleLeft3, circleLeft4)

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

    const message = `F รูร้อยเชือกเส้นผ่านศูนย์กลาง ${R / defaultUnit[labelUnits]} ${labelUnits}`
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

  const planeLeftGroup = new THREE.Object3D()
  planeLeftGroup.position.set(0, 0, 0)
  planeLeftGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, circleGroup)

  const planeRightGroup = new THREE.Object3D()
  planeRightGroup.position.set(length + width, 0, 0)
  planeRightGroup.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_D.clone(), Group_E.clone(), circleGroup.clone())

  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(
    planeLeftGroup,
    planeRightGroup,
    Group_RedLine,

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

  const PositionCenter = new THREE.Object3D() //* set center
  PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + D) / 2), 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

const MainLays = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius

  //กล่องสีฟ้า / สร้างตำแหน่งของวงกลม
  //* เจาะรูฝั่งซ้าย
  const points_x = []
  for (let i = 0; i <= 360; i++) {
    points_x.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + (length / 4)), Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x2 = []
  for (let i = 0; i <= 360; i++) {
    points_x2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + (length / 4)), Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_x3 = []
  for (let i = 0; i <= 360; i++) {
    points_x3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + ((length / 4) * 3)), Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x4 = []
  for (let i = 0; i <= 360; i++) {
    points_x4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + ((length / 4) * 3)), Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  //* เจาะรูขวา
  const points_xr = []
  for (let i = 0; i <= 360; i++) {
    points_xr.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + length + width + (length / 4)), Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_xr2 = []
  for (let i = 0; i <= 360; i++) {
    points_xr2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + length + width + (length / 4)), Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_xr3 = []
  for (let i = 0; i <= 360; i++) {
    points_xr3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + length + width + ((length / 4) * 3)), Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_xr4 = []
  for (let i = 0; i <= 360; i++) {
    points_xr4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (glueFlap + length + width + ((length / 4) * 3)), Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  //? สร้างตำแหน่งของรูปทรง
  const A1_Plane = new THREE.Shape()
  A1_Plane.moveTo(0, 0)
  A1_Plane.lineTo(0, D + height + E)
  A1_Plane.lineTo(length * 2 + width * 2 + glueFlap, D + height + E)
  A1_Plane.lineTo(length * 2 + width * 2 + glueFlap, 0)
  A1_Plane.lineTo(0, 0)

  //! ใส่ตำแหน่งของวงกลมเข้าไปในรูปทรง
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x4))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr4))

  //* รวมตำแหน่งของรูปทรงให้กลางเป็นรูปทรงเรขาคณิต
  const A1Plane_Geometry = new THREE.Mesh(new THREE.ShapeGeometry(A1_Plane), colors.cr_lays)

  const A1 = [] //กล่องA1
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A1), colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = [] //กล่องA1
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(A2), colors.cr_green)
  A2_Geometry.computeLineDistances()

  const B1 = [] //กล่องB1
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B1), colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = [] //เส้นเฉียง
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B2), colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = [] //เส้นตรง
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B3), colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = [] //กล่องB2
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B4), colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = [] //เส้นเฉียง
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B5), colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = [] //เส้นตรง
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(B6), colors.cr_green)
  B6_Geometry.computeLineDistances()

  //! - - เส้นตรง ทั้งหมดของส่วนบนสุด
  const D1 = [] //ส่วนบน
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  const D1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D1), colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = [] //ส่วนตรงด้านบน
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D2), colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = [] //ส่วนตรงด้านบน
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(D3), colors.cr_green)
  D3_Geometry.computeLineDistances()

  // กล่องล่างสุด E
  const E1 = [] //กล่องล่างสุด
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  const E1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E1), colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = [] //กล่องล่างสุด เส้นตรง
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E2), colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = [] //กล่องล่างสุด เส้นตรง
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E3), colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = [] //กล่องล่างสุด เส้นเฉียง
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(E4), colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = [] //กล่องล่างสุด เส้นเฉียง
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

  //! - - กาวด้านข้าง
  const G1 = [] //กาว
  G1.push(new THREE.Vector2(0, 0))
  G1.push(new THREE.Vector2(0, E + height + D))
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G1), colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = [] //เส้นแนวนอนล่าง
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G2), colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = [] //เส้นแนวนอนกลาง
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G3), colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = [] //เส้นแนวนอนกลาง
  G4.push(new THREE.Vector2(0, E + height))
  G4.push(new THREE.Vector2(glueFlap, E + height))
  const G4_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G4), colors.cr_green)
  G4_Geometry.computeLineDistances()

  const G5 = [] //เส้นแนวนอนกลาง
  G5.push(new THREE.Vector2(glueFlap, E))
  G5.push(new THREE.Vector2(0, glueFlap + E))
  const G5_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(G5), colors.cr_green)
  G5_Geometry.computeLineDistances()

  // Red Line
  const Red_Line = []
  Red_Line.push(new THREE.Vector2(0, 0))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, 0))
  Red_Line.push(new THREE.Vector2(0, 0))
  const Red_Line_Geometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(Red_Line), colors.cr_red)
  Red_Line_Geometry.computeLineDistances()

  //วงกลมทั้งหมด
  const points = []
  for (let i = 0; i <= 360; i++) {
    points.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), colors.cr_red)

  const points1 = []
  for (let i = 0; i <= 360; i++) {
    points1.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points1), colors.cr_red)

  //- - - Group - - - *//
  // Group length
  const Group_A_Top = new THREE.Object3D() //*length
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)
  // Group B1
  const Group_B_Top = new THREE.Object3D() //*B1
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)
  // Group B2
  const Group_B_Top2 = new THREE.Object3D() //* B2
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)
  // Group D
  const Group_D = new THREE.Object3D() //* D
  Group_D.position.set(glueFlap,  height + ((width / 2) + bottomGlue), 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)
  // Group E
  const Group_E = new THREE.Object3D() //* E
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)
  // Group glueFlap
  const Group_G = new THREE.Object3D() //* glueFlap
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry, G5_Geometry)
  // Group Red Line
  const Group_RedLine = new THREE.Object3D() //*length
  Group_RedLine.add(Red_Line_Geometry)
  // Group วงกลม
  const circleLeft1 = new THREE.Object3D() //*cicle left
  circleLeft1.position.set(length / 4 + glueFlap, D / 2 + height + E, 0)
  circleLeft1.add(lineGeometry)
  const circleLeft2 = new THREE.Object3D()
  circleLeft2.position.set(length / 4 + glueFlap, height + E - D / 2, 0)
  circleLeft2.add(lineGeometry.clone())
  const circleLeft3 = new THREE.Object3D()
  circleLeft3.position.set((length / 4) * 3 + glueFlap, D / 2 + height + E, 0)
  circleLeft3.add(lineGeometry.clone())
  const circleLeft4 = new THREE.Object3D()
  circleLeft4.position.set((length / 4) * 3 + glueFlap, height + E - D / 2, 0)
  circleLeft4.add(lineGeometry.clone())

  const circleRight1 = new THREE.Object3D()
  circleRight1.position.set(glueFlap + length + width + (length / 4), (D / 2) + height + E, 0)
  circleRight1.add(lineGeometry1)
  const circleRight2 = new THREE.Object3D()
  circleRight2.position.set(glueFlap + length + width + (length / 4), height + E - (D / 2), 0)
  circleRight2.add(lineGeometry1.clone())
  const circleRight3 = new THREE.Object3D()
  circleRight3.position.set(glueFlap + length + width + ((length / 4) * 3), (D / 2) + height + E, 0)
  circleRight3.add(lineGeometry1.clone())
  const circleRight4 = new THREE.Object3D()
  circleRight4.position.set(glueFlap + length + width + ((length / 4) * 3), height + E - (D / 2), 0)
  circleRight4.add(lineGeometry1.clone())

  const circleGroup = new THREE.Object3D() //* รวมทั้งหมด
  circleGroup.add(circleLeft1, circleLeft2, circleLeft3, circleLeft4)
  const circleRightGroup = new THREE.Object3D()
  circleRightGroup.add(circleRight1, circleRight2, circleRight3, circleRight4)
  //? Group Blue Plane
  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, -1)
  Group_Blue.add(A1Plane_Geometry)

  //! - - - Group All - - - *//
  const planeRightGroup = new THREE.Object3D() //* clone group
  planeRightGroup.position.set(length + width, 0, 0)
  planeRightGroup.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_D.clone(), Group_E.clone())

  const PlaneGroup = new THREE.Object3D() //* group all
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, planeRightGroup, Group_RedLine, circleGroup, circleRightGroup, Group_Blue)

  const PositionCenter = new THREE.Object3D()
  // PositionCenter.position.set(-(glueFlap + length * 2 + width * 2) / 2, -((E + height + D) / 2), 0)
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

const MainLays_Invert = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius

  //TODO : กล่องสีฟ้า / สร้างตำแหน่งของวงกลม
  /* #region  กล่องสีฟ้า / สร้างตำแหน่งของวงกลม */
  /* #region เจาะรูฝั่งซ้าย */
  const points_x = []
  for (let i = 0; i <= 360; i++) {
    points_x.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap,
        Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E //* รัศมี + กับตำแหน่งของจุดที่เราทำไว้แต่ละจุด
      )
    )
  }

  const points_x2 = []
  for (let i = 0; i <= 360; i++) {
    points_x2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_x3 = []
  for (let i = 0; i <= 360; i++) {
    points_x3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x4 = []
  for (let i = 0; i <= 360; i++) {
    points_x4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }
  /* #endregion */
  /* #region เจาะรูขวา */
  const points_xr = [] //* Right
  for (let i = 0; i <= 360; i++) {
    points_xr.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length + glueFlap + (width / 2) * 2 + length / 4, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_xr2 = []
  for (let i = 0; i <= 360; i++) {
    points_xr2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length + glueFlap + (width / 2) * 2 + length / 4, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_xr3 = []
  for (let i = 0; i <= 360; i++) {
    points_xr3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap + (width / 2) * 2 + width / 2 + (length / 4) * 3, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_xr4 = []
  for (let i = 0; i <= 360; i++) {
    points_xr4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap + (width / 2) * 2 + width / 2 + (length / 4) * 3, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  /* #endregion */

  //? สร้างตำแหน่งของรูปทรง
  const A1_Plane = new THREE.Shape()
  A1_Plane.moveTo(0, 0)
  A1_Plane.lineTo(0, D + height + E)
  A1_Plane.lineTo(length * 2 + width * 2 + glueFlap, D + height + E)
  A1_Plane.lineTo(length * 2 + width * 2 + glueFlap, 0)
  A1_Plane.lineTo(0, 0)

  //! ใส่ตำแหน่งของวงกลมเข้าไปในรูปทรง
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x4))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_xr4))

  //* รวมตำแหน่งของรูปทรงให้กลางเป็นรูปทรงเรขาคณิต
  const A1Plane_setPoint = new THREE.ShapeGeometry(A1_Plane)
  const A1Plane_Geometry = new THREE.Mesh(A1Plane_setPoint, colors.cr_lays)
  /* #endregion */
  //! - - กล่อง length
  /* #region กล่อง length */
  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  // A1.push(new THREE.Vector2(length, 0));
  const A1_setPoint = new THREE.BufferGeometry().setFromPoints(A1)
  const A1_Geometry = new THREE.Line(A1_setPoint, colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_setPoint = new THREE.BufferGeometry().setFromPoints(A2)
  const A2_Geometry = new THREE.Line(A2_setPoint, colors.cr_green)
  A2_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่อง width
  /* #region กล่อง width */
  const B1 = [] //*กล่องB1
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  //B1.push(new THREE.Vector2(width / 2, 0));
  const B1_setPoint = new THREE.BufferGeometry().setFromPoints(B1)
  const B1_Geometry = new THREE.Line(B1_setPoint, colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = [] //*เส้นเฉียง
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_setPoint = new THREE.BufferGeometry().setFromPoints(B2)
  const B2_Geometry = new THREE.Line(B2_setPoint, colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = [] //*เส้นตรง
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_setPoint = new THREE.BufferGeometry().setFromPoints(B3)
  const B3_Geometry = new THREE.Line(B3_setPoint, colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = [] //*กล่องB2
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  // B4.push(new THREE.Vector2(width / 2, 0));
  const B4_setPoint = new THREE.BufferGeometry().setFromPoints(B4)
  const B4_Geometry = new THREE.Line(B4_setPoint, colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = [] //*กเฉียง
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_setPoint = new THREE.BufferGeometry().setFromPoints(B5)
  const B5_Geometry = new THREE.Line(B5_setPoint, colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = [] //*เส้นตรง
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_setPoint = new THREE.BufferGeometry().setFromPoints(B6)
  const B6_Geometry = new THREE.Line(B6_setPoint, colors.cr_green)
  B6_Geometry.computeLineDistances()
  /* #endregion */
  //! - - เส้นตรง ทั้งหมดของส่วนบนสุด
  /* #region เส้นตรง ทั้งหมดของส่วนบนสุด  */
  const D1 = [] //*ส่วนบน
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  //  D1.push(new THREE.Vector2(length + width, 0));
  const D1_setPoint = new THREE.BufferGeometry().setFromPoints(D1)
  const D1_Geometry = new THREE.Line(D1_setPoint, colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = [] //*ส่วนตรงด้านบน
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_setPoint = new THREE.BufferGeometry().setFromPoints(D2)
  const D2_Geometry = new THREE.Line(D2_setPoint, colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = [] //*ส่วนตรงด้านบน
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_setPoint = new THREE.BufferGeometry().setFromPoints(D3)
  const D3_Geometry = new THREE.Line(D3_setPoint, colors.cr_green)
  D3_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่องล่างสุด E
  /* #region กล่องล่างสุด  */
  const E1 = [] //*กล่องล่างสุด
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  E1.push(new THREE.Vector2(length + width, 0))
  //E1.push(new THREE.Vector2(0, 0));
  const E1_setPoint = new THREE.BufferGeometry().setFromPoints(E1)
  const E1_Geometry = new THREE.Line(E1_setPoint, colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = [] //*กล่องล่างสุด เส้นตรง
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_setPoint = new THREE.BufferGeometry().setFromPoints(E2)
  const E2_Geometry = new THREE.Line(E2_setPoint, colors.cr_greenl)
  E2_Geometry.computeLineDistances()

  const E3 = [] //*กล่องล่างสุด เส้นตรง
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_setPoint = new THREE.BufferGeometry().setFromPoints(E3)
  const E3_Geometry = new THREE.Line(E3_setPoint, colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = [] //*กล่องล่างสุด เส้นเฉียง
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2(length - E, 0))
  const E4_setPoint = new THREE.BufferGeometry().setFromPoints(E4)
  const E4_Geometry = new THREE.Line(E4_setPoint, colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = [] //*กล่องล่างสุด เส้นเฉียง
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E, 0))
  const E5_setPoint = new THREE.BufferGeometry().setFromPoints(E5)
  const E5_Geometry = new THREE.Line(E5_setPoint, colors.cr_green)
  E5_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กาวด้านข้าง
  /* #region กาวด้านข้าง */
  const G1 = [] //*กาว
  // G1.push(new THREE.Vector2(glueFlap, 0));
  G1.push(new THREE.Vector2(0, 0))
  G1.push(new THREE.Vector2(0, E + height + D))
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_setPoint = new THREE.BufferGeometry().setFromPoints(G1)
  const G1_Geometry = new THREE.Line(G1_setPoint, colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = [] //*เส้นแนวนอนล่าง
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_setPoint = new THREE.BufferGeometry().setFromPoints(G2)
  const G2_Geometry = new THREE.Line(G2_setPoint, colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = [] //*เส้นแนวนอนกลาง
  G3.push(new THREE.Vector2(0, width + 1.5))
  G3.push(new THREE.Vector2(glueFlap, width + 1.5))
  const G3_setPoint = new THREE.BufferGeometry().setFromPoints(G3)
  const G3_Geometry = new THREE.Line(G3_setPoint, colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = [] //*เส้นแนวนอนกลาง
  G4.push(new THREE.Vector2(0, E + height))
  G4.push(new THREE.Vector2(glueFlap, E + height))
  const G4_setPoint = new THREE.BufferGeometry().setFromPoints(G4)
  const G4_Geometry = new THREE.Line(G4_setPoint, colors.cr_green)
  G4_Geometry.computeLineDistances()

  const G5 = [] //*เส้นแนวนอนกลาง
  G5.push(new THREE.Vector2(glueFlap, E))
  G5.push(new THREE.Vector2(0, glueFlap + E))
  const G5_setPoint = new THREE.BufferGeometry().setFromPoints(G5)
  const G5_Geometry = new THREE.Line(G5_setPoint, colors.cr_green)
  G5_Geometry.computeLineDistances()
  /* #endregion */
  //! - - Red Line
  /* #region Red_Line  */
  const Red_Line = [] //*
  Red_Line.push(new THREE.Vector2(0, 0))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2(length * 2 + width * 2 + glueFlap, 0))
  Red_Line.push(new THREE.Vector2(0, 0))
  const Red_Line_setPoint = new THREE.BufferGeometry().setFromPoints(Red_Line)
  const Red_Line_Geometry = new THREE.Line(Red_Line_setPoint, colors.cr_red)
  Red_Line_Geometry.computeLineDistances()
  /* #endregion */
  //! - - วงกลมทั้งหมด
  /* #region วงกลมทั้งหมด */
  const points = []
  // 360 full circle will be drawn clockwise
  for (let i = 0; i <= 360; i++) {
    points.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), colors.cr_red)
  //--
  const points1 = []
  // 360 full circle will be drawn clockwise
  for (let i = 0; i <= 360; i++) {
    points1.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points1), colors.cr_red)

  /* #endregion */

  //* - - - Group - - - *//
  //? Group length
  /* #region length */
  const Group_A_Top = new THREE.Object3D() //*length
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  /* #endregion */
  //? Group B1
  /* #region B1 */
  const Group_B_Top = new THREE.Object3D() //*B1
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)
  /* #endregion */
  //? Group B2
  /* #region B2 */
  const Group_B_Top2 = new THREE.Object3D() //* B2
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)
  /* #endregion */
  //? Group D
  /* #region D */
  const Group_D = new THREE.Object3D() //* D
  Group_D.position.set(glueFlap, width / 2 + height + 1.5, 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)
  /* #endregion */
  //? Group E
  /* #region E */
  const Group_E = new THREE.Object3D() //* E
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry)
  /* #endregion */
  //? Group glueFlap
  /* #region glueFlap */
  const Group_G = new THREE.Object3D() //* glueFlap
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry, G5_Geometry)
  /* #endregion */
  //? Group Red Line
  /* #region RedLine  */
  const Group_RedLine = new THREE.Object3D() //*length
  // Group_A_Top.position.set(glueFlap, E, 0);
  Group_RedLine.add(Red_Line_Geometry)
  /* #endregion */
  //? Group วงกลม
  /* #region เส้นวงกลม*/
  /* #region วงกลมซ้าย */
  const circleLeft1 = new THREE.Object3D()
  circleLeft1.position.set(length / 4 + glueFlap, D / 2 + height + E, 0)
  circleLeft1.add(lineGeometry)

  const circleLeft2 = new THREE.Object3D()
  circleLeft2.position.set(length / 4 + glueFlap, height + E - D / 2, 0) //
  circleLeft2.add(lineGeometry.clone())

  const circleLeft3 = new THREE.Object3D()
  circleLeft3.position.set((length / 4) * 3 + glueFlap, D / 2 + height + E, 0)
  circleLeft3.add(lineGeometry.clone())

  const circleLeft4 = new THREE.Object3D()
  circleLeft4.position.set((length / 4) * 3 + glueFlap, height + E - D / 2, 0)
  circleLeft4.add(lineGeometry.clone())
  /* #endregion */
  /* #region วงกลมขวา */
  const circleRight1 = new THREE.Object3D()
  circleRight1.position.set(length + glueFlap + (width / 2) * 2 + length / 4, D / 2 + height + E, 0)
  circleRight1.add(lineGeometry1)

  const circleRight2 = new THREE.Object3D()
  circleRight2.position.set(length + glueFlap + (width / 2) * 2 + length / 4, height + E - D / 2, 0) //
  circleRight2.add(lineGeometry1.clone())

  const circleRight3 = new THREE.Object3D()
  circleRight3.position.set((length / 4) * 3 + glueFlap + (width / 2) * 2 + width / 2 + (length / 4) * 3, D / 2 + height + E, 0)
  circleRight3.add(lineGeometry1.clone())

  const circleRight4 = new THREE.Object3D()
  circleRight4.position.set((length / 4) * 3 + glueFlap + (width / 2) * 2 + width / 2 + (length / 4) * 3, height + E - D / 2, 0) //
  circleRight4.add(lineGeometry1.clone())

  /* #endregion */
  //รวมทั้งหมด
  const circleGroup = new THREE.Object3D()
  circleGroup.add(circleLeft1, circleLeft2, circleLeft3, circleLeft4)

  const circleRightGroup = new THREE.Object3D()
  circleRightGroup.add(circleRight1, circleRight2, circleRight3, circleRight4)
  /* #endregion */
  //? Group Blue Plane
  /* #region Group กล่องสีฟ้า */
  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, 1)
  Group_Blue.add(A1Plane_Geometry)
  /* #endregion */

  //! - - - Group All - - - *//
  /* #region Clone Group */
  const planeRightGroup = new THREE.Object3D()
  planeRightGroup.position.set(length + width, 0, 0)
  planeRightGroup.add(Group_A_Top.clone(), Group_B_Top.clone(), Group_B_Top2.clone(), Group_D.clone(), Group_E.clone())
  /* #endregion */

  /* #region Group All */
  const PlaneGroup = new THREE.Object3D()
  //scene.add(PlaneGroup);
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, planeRightGroup, Group_RedLine, circleGroup, circleRightGroup, Group_Blue)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

const MainLays_Half = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, bottomGlue, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius

  //กล่องสีฟ้า / สร้างตำแหน่งของวงกลม
  const points_x = []
  for (let i = 0; i <= 360; i++) {
    points_x.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x2 = []
  for (let i = 0; i <= 360; i++) {
    points_x2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_x3 = []
  for (let i = 0; i <= 360; i++) {
    points_x3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x4 = []
  for (let i = 0; i <= 360; i++) {
    points_x4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }
  /* #endregion */
  //? สร้างตำแหน่งของรูปทรง
  const A1_Plane = new THREE.Shape()
  A1_Plane.moveTo(0, 0)
  A1_Plane.lineTo(0, D + height + E)
  A1_Plane.lineTo(length + width + glueFlap, D + height + E)
  A1_Plane.lineTo(length + width + glueFlap, 0)
  A1_Plane.lineTo(0, 0)

  //! ใส่ตำแหน่งของวงกลมเข้าไปในรูปทรง
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x4))

  //* รวมตำแหน่งของรูปทรงให้กลางเป็นรูปทรงเรขาคณิต
  const A1Plane_setPoint = new THREE.ShapeGeometry(A1_Plane)
  const A1Plane_Geometry = new THREE.Mesh(A1Plane_setPoint, colors.cr_lays)
  /* #endregion */
  //! - - กล่อง length
  /* #region กล่อง length */
  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_setPoint = new THREE.BufferGeometry().setFromPoints(A1)
  const A1_Geometry = new THREE.Line(A1_setPoint, colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_setPoint = new THREE.BufferGeometry().setFromPoints(A2)
  const A2_Geometry = new THREE.Line(A2_setPoint, colors.cr_green)
  A2_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่อง width
  /* #region กล่อง width */
  const B1 = [] //*กล่องB1
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_setPoint = new THREE.BufferGeometry().setFromPoints(B1)
  const B1_Geometry = new THREE.Line(B1_setPoint, colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = [] //*เส้นเฉียง
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_setPoint = new THREE.BufferGeometry().setFromPoints(B2)
  const B2_Geometry = new THREE.Line(B2_setPoint, colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = [] //*เส้นตรง
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_setPoint = new THREE.BufferGeometry().setFromPoints(B3)
  const B3_Geometry = new THREE.Line(B3_setPoint, colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = [] //*กล่องB2
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_setPoint = new THREE.BufferGeometry().setFromPoints(B4)
  const B4_Geometry = new THREE.Line(B4_setPoint, colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = [] //*กเฉียง
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_setPoint = new THREE.BufferGeometry().setFromPoints(B5)
  const B5_Geometry = new THREE.Line(B5_setPoint, colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = [] //*เส้นตรง
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_setPoint = new THREE.BufferGeometry().setFromPoints(B6)
  const B6_Geometry = new THREE.Line(B6_setPoint, colors.cr_green)
  B6_Geometry.computeLineDistances()
  /* #endregion */
  //! - - เส้นตรง ทั้งหมดของส่วนบนสุด
  /* #region เส้นตรง ทั้งหมดของส่วนบนสุด  */
  const D1 = [] //*ส่วนบน
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  const D1_setPoint = new THREE.BufferGeometry().setFromPoints(D1)
  const D1_Geometry = new THREE.Line(D1_setPoint, colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = [] //*ส่วนตรงด้านบน
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_setPoint = new THREE.BufferGeometry().setFromPoints(D2)
  const D2_Geometry = new THREE.Line(D2_setPoint, colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = [] //*ส่วนตรงด้านบน
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_setPoint = new THREE.BufferGeometry().setFromPoints(D3)
  const D3_Geometry = new THREE.Line(D3_setPoint, colors.cr_green)
  D3_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่องล่างสุด E
  /* #region กล่องล่างสุด  */
  const E1 = [] //*กล่องล่างสุด
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  E1.push(new THREE.Vector2(length + width, 0))
  const E1_setPoint = new THREE.BufferGeometry().setFromPoints(E1)
  const E1_Geometry = new THREE.Line(E1_setPoint, colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = [] //*กล่องล่างสุด เส้นตรง
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_setPoint = new THREE.BufferGeometry().setFromPoints(E2)
  const E2_Geometry = new THREE.Line(E2_setPoint, colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = [] //*กล่องล่างสุด เส้นตรง
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_setPoint = new THREE.BufferGeometry().setFromPoints(E3)
  const E3_Geometry = new THREE.Line(E3_setPoint, colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = [] //*กล่องล่างสุด เส้นเฉียง
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2((length - E) + 20, 20))
  const E4_setPoint = new THREE.BufferGeometry().setFromPoints(E4)
  const E4_Geometry = new THREE.Line(E4_setPoint, colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = [] //*กล่องล่างสุด เส้นเฉียง
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E - 20, 20))
  const E5_setPoint = new THREE.BufferGeometry().setFromPoints(E5)
  const E5_Geometry = new THREE.Line(E5_setPoint, colors.cr_green)
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
  /* #endregion */
  //! - - กาวด้านข้าง
  /* #region กาวด้านข้าง */
  const G1 = [] //*กาว
  // G1.push(new THREE.Vector2(glueFlap, 0));
  G1.push(new THREE.Vector2(0, 0))
  G1.push(new THREE.Vector2(0, E + height + D))
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_setPoint = new THREE.BufferGeometry().setFromPoints(G1)
  const G1_Geometry = new THREE.Line(G1_setPoint, colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = [] //*เส้นแนวนอนล่าง
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_setPoint = new THREE.BufferGeometry().setFromPoints(G2)
  const G2_Geometry = new THREE.Line(G2_setPoint, colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = [] //*เส้นแนวนอนกลาง
  G3.push(new THREE.Vector2(0, width + bottomGlue))
  G3.push(new THREE.Vector2(glueFlap, width + bottomGlue))
  const G3_setPoint = new THREE.BufferGeometry().setFromPoints(G3)
  const G3_Geometry = new THREE.Line(G3_setPoint, colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = [] //*เส้นแนวนอนกลาง
  G4.push(new THREE.Vector2(0, E + height))
  G4.push(new THREE.Vector2(glueFlap, E + height))
  const G4_setPoint = new THREE.BufferGeometry().setFromPoints(G4)
  const G4_Geometry = new THREE.Line(G4_setPoint, colors.cr_green)
  G4_Geometry.computeLineDistances()

  const G5 = [] //*เส้นแนวนอนกลาง
  G5.push(new THREE.Vector2(glueFlap, E))
  G5.push(new THREE.Vector2(0, glueFlap + E))
  const G5_setPoint = new THREE.BufferGeometry().setFromPoints(G5)
  const G5_Geometry = new THREE.Line(G5_setPoint, colors.cr_green)
  G5_Geometry.computeLineDistances()
  /* #endregion */
  //! - - Red Line
  /* #region Red_Line  */
  const Red_Line = [] //*
  Red_Line.push(new THREE.Vector2(0, 0))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length + width + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2(length + width + glueFlap, 0))
  Red_Line.push(new THREE.Vector2(0, 0))
  const Red_Line_setPoint = new THREE.BufferGeometry().setFromPoints(Red_Line)
  const Red_Line_Geometry = new THREE.Line(Red_Line_setPoint, colors.cr_red)
  Red_Line_Geometry.computeLineDistances()
  /* #endregion */
  //! - - วงกลมทั้งหมด
  /* #region วงกลมทั้งหมด */
  const points = []
  // 360 full circle will be drawn clockwise
  for (let i = 0; i <= 360; i++) {
    points.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), colors.cr_red)

  /* #endregion */

  //* - - - Group - - - *//
  //? Group length
  /* #region length */
  const Group_A_Top = new THREE.Object3D() //*length
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  /* #endregion */
  //? Group B1
  /* #region B1 */
  const Group_B_Top = new THREE.Object3D() //*B1
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)
  /* #endregion */
  //? Group B2
  /* #region B2 */
  const Group_B_Top2 = new THREE.Object3D() //* B2
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)
  /* #endregion */
  //? Group D
  /* #region D */
  const Group_D = new THREE.Object3D() //* D
  Group_D.position.set(glueFlap, height + ((width / 2) + bottomGlue), 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)
  /* #endregion */
  //? Group E
  /* #region E */
  const Group_E = new THREE.Object3D() //* E
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry, E6_Geometry, E7_Geometry)
  /* #endregion */
  //? Group glueFlap
  /* #region glueFlap */
  const Group_G = new THREE.Object3D() //* glueFlap
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry, G5_Geometry)
  /* #endregion */
  //? Group Red Line
  /* #region RedLine  */
  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(Red_Line_Geometry)
  /* #endregion */
  //? Group วงกลม
  /* #region เส้นวงกลม*/
  /* #region วงกลมซ้าย */
  const circleLeft1 = new THREE.Object3D()
  circleLeft1.position.set(length / 4 + glueFlap, D / 2 + height + E, 0)
  circleLeft1.add(lineGeometry)

  const circleLeft2 = new THREE.Object3D()
  circleLeft2.position.set(length / 4 + glueFlap, height + E - D / 2, 0) //
  circleLeft2.add(lineGeometry.clone())

  const circleLeft3 = new THREE.Object3D()
  circleLeft3.position.set((length / 4) * 3 + glueFlap, D / 2 + height + E, 0)
  circleLeft3.add(lineGeometry.clone())

  const circleLeft4 = new THREE.Object3D()
  circleLeft4.position.set((length / 4) * 3 + glueFlap, height + E - D / 2, 0)
  circleLeft4.add(lineGeometry.clone())
  /* #endregion */

  //รวมทั้งหมด
  const circleGroup = new THREE.Object3D()
  circleGroup.add(circleLeft1, circleLeft2, circleLeft3, circleLeft4)
  /* #endregion */
  //? Group Blue Plane
  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, -1)
  Group_Blue.add(A1Plane_Geometry)

  //! - - - Group All - - - *//
  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, Group_RedLine, circleGroup, Group_Blue)

  const PositionCenter = new THREE.Object3D()
  // PositionCenter.position.set(-(glueFlap + length + width) / 2, -((E + height + D) / 2), 0)
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

const MainLays_HalfInvert = (options) => {
  const { length, width, height, glueFlap, colors, radius, D, E, labelUnits } = options;
  const scene = new THREE.Scene()
  const R = radius

  //TODO : กล่องสีฟ้า / สร้างตำแหน่งของวงกลม
  /* #region  กล่องสีฟ้า / สร้างตำแหน่งของวงกลม */
  /* #region เจาะรูฝั่งซ้าย */
  const points_x = []
  for (let i = 0; i <= 360; i++) {
    points_x.push(
      new THREE.Vector2(
        Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap,
        Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E //* รัศมี + กับตำแหน่งของจุดที่เราทำไว้แต่ละจุด
      )
    )
  }

  const points_x2 = []
  for (let i = 0; i <= 360; i++) {
    points_x2.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + length / 4 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }

  const points_x3 = []
  for (let i = 0; i <= 360; i++) {
    points_x3.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + D / 2 + height + E))
  }

  const points_x4 = []
  for (let i = 0; i <= 360; i++) {
    points_x4.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R + (length / 4) * 3 + glueFlap, Math.cos(i * (Math.PI / 180)) * R + height + E - D / 2))
  }
  /* #endregion */
  //? สร้างตำแหน่งของรูปทรง
  const A1_Plane = new THREE.Shape()
  A1_Plane.moveTo(0, 0)
  A1_Plane.lineTo(0, D + height + E)
  A1_Plane.lineTo(length + width + glueFlap, D + height + E)
  A1_Plane.lineTo(length + width + glueFlap, 0)
  A1_Plane.lineTo(0, 0)

  //! ใส่ตำแหน่งของวงกลมเข้าไปในรูปทรง
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x2))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x3))
  A1_Plane.holes.push(new THREE.Path().setFromPoints(points_x4))

  //* รวมตำแหน่งของรูปทรงให้กลางเป็นรูปทรงเรขาคณิต
  const A1Plane_setPoint = new THREE.ShapeGeometry(A1_Plane)
  const A1Plane_Geometry = new THREE.Mesh(A1Plane_setPoint, colors.cr_lays)
  /* #endregion */
  //! - - กล่อง length
  /* #region กล่อง length */
  const A1 = []
  A1.push(new THREE.Vector2(0, 0))
  A1.push(new THREE.Vector2(0, height))
  A1.push(new THREE.Vector2(length, height))
  const A1_setPoint = new THREE.BufferGeometry().setFromPoints(A1)
  const A1_Geometry = new THREE.Line(A1_setPoint, colors.cr_green)
  A1_Geometry.computeLineDistances()

  const A2 = []
  A2.push(new THREE.Vector2(0, width / 2))
  A2.push(new THREE.Vector2(length, width / 2))
  const A2_setPoint = new THREE.BufferGeometry().setFromPoints(A2)
  const A2_Geometry = new THREE.Line(A2_setPoint, colors.cr_green)
  A2_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่อง width
  /* #region กล่อง width */
  const B1 = [] //*กล่องB1
  B1.push(new THREE.Vector2(0, 0))
  B1.push(new THREE.Vector2(0, height))
  B1.push(new THREE.Vector2(width / 2, height))
  const B1_setPoint = new THREE.BufferGeometry().setFromPoints(B1)
  const B1_Geometry = new THREE.Line(B1_setPoint, colors.cr_green)
  B1_Geometry.computeLineDistances()

  const B2 = [] //*เส้นเฉียง
  B2.push(new THREE.Vector2(0, 0))
  B2.push(new THREE.Vector2(width / 2, width / 2))
  const B2_setPoint = new THREE.BufferGeometry().setFromPoints(B2)
  const B2_Geometry = new THREE.Line(B2_setPoint, colors.cr_green)
  B2_Geometry.computeLineDistances()

  const B3 = [] //*เส้นตรง
  B3.push(new THREE.Vector2(0, width / 2))
  B3.push(new THREE.Vector2(width / 2, width / 2))
  const B3_setPoint = new THREE.BufferGeometry().setFromPoints(B3)
  const B3_Geometry = new THREE.Line(B3_setPoint, colors.cr_green)
  B3_Geometry.computeLineDistances()

  const B4 = [] //*กล่องB2
  B4.push(new THREE.Vector2(0, 0))
  B4.push(new THREE.Vector2(0, height))
  B4.push(new THREE.Vector2(width / 2, height))
  const B4_setPoint = new THREE.BufferGeometry().setFromPoints(B4)
  const B4_Geometry = new THREE.Line(B4_setPoint, colors.cr_green)
  B4_Geometry.computeLineDistances()

  const B5 = [] //*กเฉียง
  B5.push(new THREE.Vector2(width / 2, 0))
  B5.push(new THREE.Vector2(0, width / 2))
  const B5_setPoint = new THREE.BufferGeometry().setFromPoints(B5)
  const B5_Geometry = new THREE.Line(B5_setPoint, colors.cr_green)
  B5_Geometry.computeLineDistances()

  const B6 = [] //*เส้นตรง
  B6.push(new THREE.Vector2(0, width / 2))
  B6.push(new THREE.Vector2(width / 2, width / 2))
  const B6_setPoint = new THREE.BufferGeometry().setFromPoints(B6)
  const B6_Geometry = new THREE.Line(B6_setPoint, colors.cr_green)
  B6_Geometry.computeLineDistances()
  /* #endregion */
  //! - - เส้นตรง ทั้งหมดของส่วนบนสุด
  /* #region เส้นตรง ทั้งหมดของส่วนบนสุด  */
  const D1 = [] //*ส่วนบน
  D1.push(new THREE.Vector2(0, 0))
  D1.push(new THREE.Vector2(0, D))
  D1.push(new THREE.Vector2(length + width, D))
  const D1_setPoint = new THREE.BufferGeometry().setFromPoints(D1)
  const D1_Geometry = new THREE.Line(D1_setPoint, colors.cr_green)
  D1_Geometry.computeLineDistances()

  const D2 = [] //*ส่วนตรงด้านบน
  D2.push(new THREE.Vector2(length, 0))
  D2.push(new THREE.Vector2(length, D))
  const D2_setPoint = new THREE.BufferGeometry().setFromPoints(D2)
  const D2_Geometry = new THREE.Line(D2_setPoint, colors.cr_green)
  D2_Geometry.computeLineDistances()

  const D3 = [] //*ส่วนตรงด้านบน
  D3.push(new THREE.Vector2(width / 2 + length, 0))
  D3.push(new THREE.Vector2(width / 2 + length, D))
  const D3_setPoint = new THREE.BufferGeometry().setFromPoints(D3)
  const D3_Geometry = new THREE.Line(D3_setPoint, colors.cr_green)
  D3_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กล่องล่างสุด E
  /* #region กล่องล่างสุด  */
  const E1 = [] //*กล่องล่างสุด
  E1.push(new THREE.Vector2(0, 0))
  E1.push(new THREE.Vector2(0, E))
  E1.push(new THREE.Vector2(length + width, E))
  E1.push(new THREE.Vector2(length + width, 0))
  const E1_setPoint = new THREE.BufferGeometry().setFromPoints(E1)
  const E1_Geometry = new THREE.Line(E1_setPoint, colors.cr_green)
  E1_Geometry.computeLineDistances()

  const E2 = [] //*กล่องล่างสุด เส้นตรง
  E2.push(new THREE.Vector2(length, 0))
  E2.push(new THREE.Vector2(length, E))
  const E2_setPoint = new THREE.BufferGeometry().setFromPoints(E2)
  const E2_Geometry = new THREE.Line(E2_setPoint, colors.cr_green)
  E2_Geometry.computeLineDistances()

  const E3 = [] //*กล่องล่างสุด เส้นตรง
  E3.push(new THREE.Vector2(width / 2 + length, 0))
  E3.push(new THREE.Vector2(width / 2 + length, E))
  const E3_setPoint = new THREE.BufferGeometry().setFromPoints(E3)
  const E3_Geometry = new THREE.Line(E3_setPoint, colors.cr_green)
  E3_Geometry.computeLineDistances()

  const E4 = [] //*กล่องล่างสุด เส้นเฉียง
  E4.push(new THREE.Vector2(length, E))
  E4.push(new THREE.Vector2(length - E, 0))
  const E4_setPoint = new THREE.BufferGeometry().setFromPoints(E4)
  const E4_Geometry = new THREE.Line(E4_setPoint, colors.cr_green)
  E4_Geometry.computeLineDistances()

  const E5 = [] //*กล่องล่างสุด เส้นเฉียง
  E5.push(new THREE.Vector2(0, E))
  E5.push(new THREE.Vector2(E, 0))
  const E5_setPoint = new THREE.BufferGeometry().setFromPoints(E5)
  const E5_Geometry = new THREE.Line(E5_setPoint, colors.cr_green)
  E5_Geometry.computeLineDistances()
  /* #endregion */
  //! - - กาวด้านข้าง
  /* #region กาวด้านข้าง */
  const G1 = [] //*กาว
  // G1.push(new THREE.Vector2(glueFlap, 0));
  G1.push(new THREE.Vector2(0, 0))
  G1.push(new THREE.Vector2(0, E + height + D))
  G1.push(new THREE.Vector2(glueFlap, E + height + D))
  const G1_setPoint = new THREE.BufferGeometry().setFromPoints(G1)
  const G1_Geometry = new THREE.Line(G1_setPoint, colors.cr_green)
  G1_Geometry.computeLineDistances()

  const G2 = [] //*เส้นแนวนอนล่าง
  G2.push(new THREE.Vector2(0, E))
  G2.push(new THREE.Vector2(glueFlap, E))
  const G2_setPoint = new THREE.BufferGeometry().setFromPoints(G2)
  const G2_Geometry = new THREE.Line(G2_setPoint, colors.cr_green)
  G2_Geometry.computeLineDistances()

  const G3 = [] //*เส้นแนวนอนกลาง
  G3.push(new THREE.Vector2(0, width + 1.5))
  G3.push(new THREE.Vector2(glueFlap, width + 1.5))
  const G3_setPoint = new THREE.BufferGeometry().setFromPoints(G3)
  const G3_Geometry = new THREE.Line(G3_setPoint, colors.cr_green)
  G3_Geometry.computeLineDistances()

  const G4 = [] //*เส้นแนวนอนกลาง
  G4.push(new THREE.Vector2(0, E + height))
  G4.push(new THREE.Vector2(glueFlap, E + height))
  const G4_setPoint = new THREE.BufferGeometry().setFromPoints(G4)
  const G4_Geometry = new THREE.Line(G4_setPoint, colors.cr_green)
  G4_Geometry.computeLineDistances()

  const G5 = [] //*เส้นแนวนอนกลาง
  G5.push(new THREE.Vector2(glueFlap, E))
  G5.push(new THREE.Vector2(0, glueFlap + E))
  const G5_setPoint = new THREE.BufferGeometry().setFromPoints(G5)
  const G5_Geometry = new THREE.Line(G5_setPoint, colors.cr_green)
  G5_Geometry.computeLineDistances()
  /* #endregion */
  //! - - Red Line
  /* #region Red_Line  */
  const Red_Line = [] //*
  Red_Line.push(new THREE.Vector2(0, 0))
  Red_Line.push(new THREE.Vector2(0, D + height + E))
  Red_Line.push(new THREE.Vector2(length + width + glueFlap, D + height + E))
  Red_Line.push(new THREE.Vector2(length + width + glueFlap, 0))
  Red_Line.push(new THREE.Vector2(0, 0))
  const Red_Line_setPoint = new THREE.BufferGeometry().setFromPoints(Red_Line)
  const Red_Line_Geometry = new THREE.Line(Red_Line_setPoint, colors.cr_red)
  Red_Line_Geometry.computeLineDistances()
  /* #endregion */
  //! - - วงกลมทั้งหมด
  /* #region วงกลมทั้งหมด */
  const points = []
  // 360 full circle will be drawn clockwise
  for (let i = 0; i <= 360; i++) {
    points.push(new THREE.Vector2(Math.sin(i * (Math.PI / 180)) * R, Math.cos(i * (Math.PI / 180)) * R, 0))
  }
  const lineGeometry = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), colors.cr_red)

  /* #endregion */

  //* - - - Group - - - *//
  //? Group length
  /* #region length */
  const Group_A_Top = new THREE.Object3D() //*length
  Group_A_Top.position.set(glueFlap, E, 0)
  Group_A_Top.add(A1_Geometry, A2_Geometry)

  /* #endregion */
  //? Group B1
  /* #region B1 */
  const Group_B_Top = new THREE.Object3D() //*B1
  Group_B_Top.position.set(glueFlap + length, E, 0)
  Group_B_Top.add(B1_Geometry, B2_Geometry, B3_Geometry)
  /* #endregion */
  //? Group B2
  /* #region B2 */
  const Group_B_Top2 = new THREE.Object3D() //* B2
  Group_B_Top2.position.set(glueFlap + width / 2 + length, E, 0)
  Group_B_Top2.add(B4_Geometry, B5_Geometry, B6_Geometry)
  /* #endregion */
  //? Group D
  /* #region D */
  const Group_D = new THREE.Object3D() //* D
  Group_D.position.set(glueFlap, width / 2 + height + 1.5, 0)
  Group_D.add(D1_Geometry, D2_Geometry, D3_Geometry)
  /* #endregion */
  //? Group E
  /* #region E */
  const Group_E = new THREE.Object3D() //* E
  Group_E.position.set(glueFlap, 0, 0)
  Group_E.add(E1_Geometry, E2_Geometry, E3_Geometry, E4_Geometry, E5_Geometry)
  /* #endregion */
  //? Group glueFlap
  /* #region glueFlap */
  const Group_G = new THREE.Object3D() //* glueFlap
  Group_G.position.set(0, 0, 0)
  Group_G.add(G1_Geometry, G2_Geometry, G3_Geometry, G4_Geometry, G5_Geometry)
  /* #endregion */
  //? Group Red Line
  /* #region RedLine  */
  const Group_RedLine = new THREE.Object3D()
  Group_RedLine.add(Red_Line_Geometry)
  /* #endregion */
  //? Group วงกลม
  /* #region เส้นวงกลม*/
  /* #region วงกลมซ้าย */
  const circleLeft1 = new THREE.Object3D()
  circleLeft1.position.set(length / 4 + glueFlap, D / 2 + height + E, 0)
  circleLeft1.add(lineGeometry)

  const circleLeft2 = new THREE.Object3D()
  circleLeft2.position.set(length / 4 + glueFlap, height + E - D / 2, 0) //
  circleLeft2.add(lineGeometry.clone())

  const circleLeft3 = new THREE.Object3D()
  circleLeft3.position.set((length / 4) * 3 + glueFlap, D / 2 + height + E, 0)
  circleLeft3.add(lineGeometry.clone())

  const circleLeft4 = new THREE.Object3D()
  circleLeft4.position.set((length / 4) * 3 + glueFlap, height + E - D / 2, 0)
  circleLeft4.add(lineGeometry.clone())
  /* #endregion */

  const circleGroup = new THREE.Object3D()
  circleGroup.add(circleLeft1, circleLeft2, circleLeft3, circleLeft4)
  //? Group Blue Plane
  const Group_Blue = new THREE.Object3D()
  Group_Blue.position.set(0, 0, 1)
  Group_Blue.add(A1Plane_Geometry)

  //! - - - Group All - - - *//
  const PlaneGroup = new THREE.Object3D()
  PlaneGroup.add(Group_A_Top, Group_B_Top, Group_B_Top2, Group_D, Group_E, Group_G, Group_RedLine, circleGroup, Group_Blue)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)
  scene.add(PositionCenter)
  PositionCenter.add(PlaneGroup)

  return scene
}

export default { MainDiecuts, MainLays, MainLays_Invert, MainLays_Half, MainLays_HalfInvert }
