import * as THREE from 'three'

const MainDielines = (options) => {
  const {length, width, colors, labelUnits} = options;
  const scene = new THREE.Scene()

  const shape = new main_box(length, width, colors).planeShape()
  
  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }
  
  const shapes = new THREE.Object3D()
  shapes.position.set(0, 0, 0)
  shapes.add(shape)
  
  const geometry = new THREE.PlaneBufferGeometry(length / 16, length / 16)
  const loader = new THREE.TextureLoader()

  const lengthImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/A.png') }))
  const widthImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/b.png') }))

  const lengthMark = new THREE.Object3D()
  lengthMark.position.set(length / 2,  width + 10, 2)
  lengthMark.add(lengthImg)

  const widthMark = new THREE.Object3D()
  widthMark.position.set(-10,  width / 2, 2)
  widthMark.add(widthImg)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.position.set(-20,  width / 2, 2)
  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(length / 2,  width + 20, 2)


  const loaderTextWidthDimension = new THREE.FontLoader()
  loaderTextWidthDimension.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch'
            ? (width / defaultUnit[labelUnits]).toFixed(2)
            : (width / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 6)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    widthDimensionLabel.add(text)
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

    const message = `${
        labelUnits === 'inch'
            ? (length / defaultUnit[labelUnits]).toFixed(2)
            : (length / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 6)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    heightDimensionLabel.add(text)
    heightDimensionLabel.rotation.z = Math.PI / 2
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

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(0,  width + 15, 2)
  widthDimensionArrow.add(
      arrows(length).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(length, 0, length, -10).clone()
  )

  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-15, width, 2)
  heightDimensionArrow.add(
      arrows(width).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(width, 0, width, 10).clone()
  )

  const geometryBoxGroup = new THREE.Object3D()
  geometryBoxGroup.position.set(0, 0, 0)
  geometryBoxGroup.add(
    shapes,

    lengthMark,
    widthMark,
    
    widthDimensionLabel,
    heightDimensionLabel,
    
    widthDimensionArrow,
    heightDimensionArrow
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-((length - 20) / 2), -(width / 2), 0)
  scene.add(PositionCenter)
  PositionCenter.add(geometryBoxGroup)

  return scene
}

const MainLays = (options) => {
  const {length, width, colors} = options;
  const scene = new THREE.Scene()
  const shape = new main_box(length, width, colors).planeShape()

  const shapes = new THREE.Object3D()
  shapes.position.set(0, 0, 0)
  shapes.add(shape)

  const group = new THREE.Object3D()
  group.position.set(0, 0, 0)
  scene.add(group)
  group.add(
    shapes,
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(group)

  return scene
}

class main_box {
  constructor(length, width, colors) {
    this.length = length
    this.width = width
    this.color = colors
  }

  planeShape() {
    this.scene = new THREE.Scene()
    this.red_line = []

    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, this.width))
    this.red_line.push(new THREE.Vector2(this.length, this.width))
    this.red_line.push(new THREE.Vector2(this.length, 0))
    this.red_line.push(new THREE.Vector2(0, 0))


    this.geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.geometry, this.color.cr_red)
    this.red_lines.computeLineDistances()

    this.scene.add(this.red_lines)

    return this.scene
  }
  
}
export default { MainDielines, MainLays }
