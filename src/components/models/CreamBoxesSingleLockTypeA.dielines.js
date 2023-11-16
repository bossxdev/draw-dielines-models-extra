import * as THREE from 'three'
import PARTS from './Parts'

const MainDiecuts = (options) => {
  const {length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, labelUnits, radius, lockHeight_Fix, slopet, sloped} = options;
  
  const scene = new THREE.Scene()
  const parts = new PARTS(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped)

  const side_a1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA1()

  const side_a2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA2()

  const side_b1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB1()

  const side_b2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB2()

  const defaultUnit = { mm: 1, cm: 10, inch: 25.4 }
  const cover = (width + topFlap)
  const sideLock = ((lockHeight_Fix * 2) + width)
  const sideBottom = cover > sideLock ? cover : sideLock
  const sideLeft = glueFlap > lockHeight_Fix ? glueFlap : lockHeight_Fix


  const sideB1 = new THREE.Object3D()
  sideB1.position.set(glueFlap + length, 0, 0)
  sideB1.add(side_b1)

  const sideB2 = new THREE.Object3D()
  sideB2.position.set(glueFlap + length + width + length, 0, 0)
  sideB2.add(side_b2)

  const sideA1 = new THREE.Object3D()
  sideA1.position.set(glueFlap, 0, 0)
  sideA1.add(side_a1)

  const sideA2 = new THREE.Object3D()
  sideA2.position.set(glueFlap + length + width, 0, 0)
  sideA2.add(side_a2)

  const cover_top = new THREE.Object3D()
  cover_top.position.set(glueFlap, height, 0)
  cover_top.add(parts.boxCoverTypeA())

  const cover_down = new THREE.Object3D()
  cover_down.rotation.z = Math.PI
  cover_down.position.set(glueFlap + length * 2 + width, 0, 0)
  cover_down.add(parts.boxCoverTypeA())

  const flap_right = new THREE.Object3D()
  flap_right.position.set(glueFlap + length + width + length, height, 0)
  flap_right.add(parts.dustFlapTypeA())

  const flap_left_d = new THREE.Object3D()
  flap_left_d.position.set(glueFlap + length, 0, 0)
  flap_left_d.rotation.x = Math.PI
  flap_left_d.add(parts.dustFlapTypeA())

  const flap_left = new THREE.Object3D()
  flap_left.position.set(glueFlap + length + width, height, 0)
  flap_left.rotation.y = Math.PI
  flap_left.add(parts.dustFlapTypeA())

  const flap_leftlock = new THREE.Object3D()
  flap_leftlock.position.set(glueFlap, 0, 0)
  flap_leftlock.rotation.x = Math.PI
  flap_leftlock.add(parts.lockOnBoxCream())

  const flap_right_d = new THREE.Object3D()
  flap_right_d.rotation.x = Math.PI
  flap_right_d.rotation.y = Math.PI
  flap_right_d.position.set(glueFlap + length * 2 + width * 2, 0, 0)
  flap_right_d.add(parts.dustFlapTypeA())

  const glue_lid = new THREE.Object3D()
  glue_lid.position.set(0, 0, 0)
  glue_lid.add(parts.glueFlapTypeA())

  // /* #endregion */
  //
  // //! Start line marker.
  // /* #region image position. */
  // const geometry = new THREE.PlaneBufferGeometry(length / 6, length / 6) //กล่องที่จะเอารูปมาใส่
  // const loader = new THREE.TextureLoader()
  // //* - - - image loader - - -
  // const meshA = new THREE.Mesh(
  //   geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load('./images/A.png') }) //pic length
  // )
  // const meshB = new THREE.Mesh(
  //   geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load('./images/b.png') }) //pic width
  // )
  // const meshC = new THREE.Mesh(
  //   geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load('./images/c.png') }) //pic height
  // )
  // const meshF = new THREE.Mesh(
  //   geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load('./images/f.png') }) //pic dustFlap
  // )
  // const meshP = new THREE.Mesh(
  //   geometry.clone(),
  //   new THREE.MeshBasicMaterial({ map: loader.load('./images/p.png') }) //pic topFlap
  // )
  // //* - - - line marker - - -
  // const lineMarkA = new THREE.Object3D() //ตำแหน่ง pic length
  // lineMarkA.position.set(glueFlap + length / 2, 0, 2)
  // lineMarkA.add(meshA)
  //
  // const lineMarkB = new THREE.Object3D()
  // lineMarkB.position.set(glueFlap + length + width / 2, 0, 2) //ตำแหน่ง pic width
  // lineMarkB.add(meshB)
  //
  // const lineMarkC = new THREE.Object3D()
  // lineMarkC.position.set(glueFlap + width + length * 2, height / 4, 2) //ตำแหน่ง pic height
  // lineMarkC.add(meshC)
  //
  // const lineMarkF = new THREE.Object3D()
  // lineMarkF.position.set(glueFlap + length + width / 2, height + 10, 2) //ตำแหน่ง pic dustFlap
  // lineMarkF.add(meshF)
  //
  // const lineMarkP = new THREE.Object3D()
  // lineMarkP.position.set(length / 2 + glueFlap, width + topFlap + height, 2) //ตำแหน่ง pic topFlap
  // lineMarkP.add(meshP)
  // /* #endregion */
  // //! End line marker.
  //
  // //! Start size lable.
  // /* #region size lable. */
  // //? - - - Position text ตำแหน่งของข้อความ - - -
  // const lableA = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ length
  // lableA.position.set(glueFlap + length / 2, height / 2, 2)
  //
  // const lableA2 = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ A2
  // lableA2.position.set(glueFlap + length + width + length / 2, height / 2, 2)
  //
  // const lableB = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ width
  // lableB.position.set(glueFlap + length + width / 2, height / 2, 2)
  //
  // const lableB2 = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ B2
  // lableB2.position.set(glueFlap + width + length * 2 + width / 2, height / 2, 2)
  //
  // const lableB3 = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ topFlap
  // lableB3.position.set(length / 2 + glueFlap, width / 2 + height, 2)
  //
  // const lableB4 = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ B4
  // lableB4.position.set(glueFlap + length + width + length / 2, -width / 2, 2)
  //
  // const lableC = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ height
  // lableC.position.set(glueFlap + length * 2 + width * 2 + 20, height / 2, 2)
  //
  // const lableD = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ D
  // lableD.position.set(-glueFlap + -10, height / 2, 2)
  //
  // const lableE = new THREE.Object3D() //ตำแหน่งขอความบอกขนาดของ E
  // lableE.position.set(glueFlap + length + width, height + width + topFlap + 25, 2)
  //
  // const loaderTextA = new THREE.FontLoader()
  // const loaderTextB = new THREE.FontLoader()
  // const loaderTextC = new THREE.FontLoader()
  // const loaderTextD = new THREE.FontLoader()
  // const loaderTextE = new THREE.FontLoader()
  //
  // //? - - - Start load text length. - - -
  // /* #region text length */
  // loaderTextA.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
  //   const color = 0x00000
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   })
  //
  //   const message = `${
  //     labelUnits === 'inch'
  //       ? (length / defaultUnit[labelUnits]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
  //       : (length / defaultUnit[labelUnits]).toFixed(1)
  //   } ${labelUnits}`
  //   const shapes = font.generateShapes(message, 4)
  //   const geometry = new THREE.ShapeBufferGeometry(shapes)
  //   geometry.computeBoundingBox()
  //
  //   const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
  //   geometry.translate(xMid, 0, 0)
  //
  //   const text = new THREE.Mesh(geometry, matLite)
  //   lableA.add(text)
  //   lableA2.add(text.clone())
  // })
  // /* #endregion */
  // //? End load text length.
  //
  // //? - - - Start load text width. - - -
  // /* #region text width */
  // loaderTextB.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
  //   const color = 0x00000
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   })
  //
  //   const message = `${labelUnits === 'inch' ? (width / defaultUnit[labelUnits]).toFixed(2) : (width / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}.`
  //   const shapes = font.generateShapes(message, 4)
  //   const geometry = new THREE.ShapeBufferGeometry(shapes)
  //   geometry.computeBoundingBox()
  //
  //   const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
  //   geometry.translate(xMid, 0, 0)
  //
  //   const text = new THREE.Mesh(geometry, matLite)
  //   lableB.add(text)
  //   lableB2.add(text.clone())
  //   lableB3.add(text.clone())
  //   lableB4.add(text.clone())
  // })
  // /* #endregion */
  // //? End load text width.
  //
  // //? - - - Start load text height. - - -
  // /* #region text height. */
  // loaderTextC.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
  //   const color = 0x00000
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   })
  //
  //   const message = `${labelUnits === 'inch' ? (height / defaultUnit[labelUnits]).toFixed(2) : (height / defaultUnit[labelUnits]).toFixed(1)} ${labelUnits}`
  //   const shapes = font.generateShapes(message, 4)
  //   const geometry = new THREE.ShapeBufferGeometry(shapes)
  //   geometry.computeBoundingBox()
  //
  //   const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
  //   geometry.translate(xMid, 0, 0)
  //
  //   const text = new THREE.Mesh(geometry, matLite)
  //   lableC.add(text)
  // })
  // /* #endregion */
  // //? End load text height.
  //
  // //? - - - Start load text height. - - -
  // /* #region text D */
  // loaderTextD.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
  //   const color = 0x00000
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   })
  //
  //   const message = `${
  //     labelUnits === 'inch'
  //       ? ((width * 2 + topFlap * 2 + height) / defaultUnit[labelUnits]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
  //       : ((width * 2 + topFlap * 2 + height) / defaultUnit[labelUnits]).toFixed(1)
  //   } ${labelUnits}`
  //   const shapes = font.generateShapes(message, 8)
  //   const geometry = new THREE.ShapeBufferGeometry(shapes)
  //   geometry.computeBoundingBox()
  //
  //   const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
  //   geometry.translate(xMid, 0, 0)
  //
  //   const text = new THREE.Mesh(geometry, matLite)
  //   lableD.add(text)
  //   lableD.rotation.z = Math.PI / 2
  // })
  // /* #endregion */
  // //? End load text D.
  //
  // //? - - - Start load text width. - - -
  // /* #region text E */
  // loaderTextE.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
  //   const color = 0x00000
  //   const matLite = new THREE.MeshBasicMaterial({
  //     color: color,
  //     transparent: true,
  //     opacity: 1,
  //     side: THREE.DoubleSide,
  //   })
  //
  //   const message = `${
  //     labelUnits === 'inch'
  //       ? ((length * 2 + width * 2 + glueFlap) / defaultUnit[labelUnits]).toFixed(2) // .toFixed(2) กำหนดให้ ทศนิยม 2 ตำแหน่ง ใช้แบบนี้จะเป็น str
  //       : ((length * 2 + width * 2 + glueFlap) / defaultUnit[labelUnits]).toFixed(1)
  //   } ${labelUnits}`
  //   const shapes = font.generateShapes(message, 8)
  //   const geometry = new THREE.ShapeBufferGeometry(shapes)
  //   geometry.computeBoundingBox()
  //
  //   const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
  //   geometry.translate(xMid, 0, 0)
  //
  //   const text = new THREE.Mesh(geometry, matLite)
  //   lableE.add(text)
  // })
  // /* #endregion */
  // //? End load text E.
  // //* End size lable.
  // /* #endregion */
  // //! Start arrow size.
  //
  // //! Start arrow lable.
  // /* #region arrow lable. */
  // //* arrow size.
  // const arrow_left = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrowHead = new THREE.Shape()
  //   arrowHead.moveTo(0, 0)
  //   arrowHead.lineTo(4, 2)
  //   arrowHead.lineTo(4, -2)
  //   arrowHead.lineTo(0, 0)
  //   const headMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHead), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   const arrow_line = []
  //   arrow_line.push(new THREE.Vector3(4, 0))
  //   arrow_line.push(new THREE.Vector3(size, 0))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_line), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(headMesh, arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_right = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrowHead = new THREE.Shape()
  //   arrowHead.moveTo(0, 0)
  //   arrowHead.lineTo(-4, 2)
  //   arrowHead.lineTo(-4, -2)
  //   arrowHead.lineTo(0, 0)
  //   const headMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHead), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   const arrow_line = []
  //   arrow_line.push(new THREE.Vector3(-4, 0))
  //   arrow_line.push(new THREE.Vector3(-size, 0))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_line), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(headMesh, arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_top = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrowHead = new THREE.Shape()
  //   arrowHead.moveTo(0, 0)
  //   arrowHead.lineTo(2, -4)
  //   arrowHead.lineTo(-2, -4)
  //   arrowHead.lineTo(0, 0)
  //   const headMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHead), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   const arrow_line = []
  //   arrow_line.push(new THREE.Vector3(0, -4))
  //   arrow_line.push(new THREE.Vector3(0, -size))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_line), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(headMesh, arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_down = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrowHead = new THREE.Shape()
  //   arrowHead.moveTo(0, 0)
  //   arrowHead.lineTo(2, 4)
  //   arrowHead.lineTo(-2, 4)
  //   arrowHead.lineTo(0, 0)
  //   const headMesh = new THREE.Mesh(new THREE.ShapeGeometry(arrowHead), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   const arrow_line = []
  //   arrow_line.push(new THREE.Vector3(0, 4))
  //   arrow_line.push(new THREE.Vector3(0, size))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_line), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(headMesh, arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_c = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrow_line = []
  //   arrow_line.push(new THREE.Vector3(0, 0))
  //   arrow_line.push(new THREE.Vector3(-size, 0))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_line), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_e = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrow_linee = [] //* เส้นตรงส่วนหัวของลูกศร D
  //   arrow_linee.push(new THREE.Vector3(0, 0))
  //   arrow_linee.push(new THREE.Vector3(0, -size))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_linee), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(arrow_mesh)
  //   return scene
  // }
  //
  // const arrow_d = size => {
  //   const scene = new THREE.Scene()
  //
  //   const arrow_lineD = []
  //   arrow_lineD.push(new THREE.Vector3(0, 0))
  //   arrow_lineD.push(new THREE.Vector3(size, 0))
  //   const arrow_mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints(arrow_lineD), new THREE.MeshBasicMaterial({ color: 0x00000 }))
  //
  //   scene.add(arrow_mesh)
  //   return scene
  // }
  //
  // const a_arrow_l = new THREE.Object3D() //! length Left
  // a_arrow_l.position.set(glueFlap, height / 2 - 2, 2)
  // a_arrow_l.add(arrow_left(length / 3))
  //
  // const a_arrow_l2 = new THREE.Object3D() //! length  Right
  // a_arrow_l2.position.set(glueFlap + length + width, height / 2 - 2, 2)
  // a_arrow_l2.add(arrow_left(length / 3).clone())
  //
  // const a_arrow_r = new THREE.Object3D()
  // a_arrow_r.position.set(glueFlap + length, height / 2 - 2, 2) //! length  Left
  // a_arrow_r.add(arrow_right(length / 3))
  //
  // const a_arrow_r2 = new THREE.Object3D()
  // a_arrow_r2.position.set(glueFlap + length * 2 + width, height / 2 - 2, 2) //! length  Right
  // a_arrow_r2.add(arrow_right(length / 3))
  //
  // const b_arrow_l = new THREE.Object3D() //! width  Left
  // b_arrow_l.position.set(glueFlap + length, height / 2 - 2, 2)
  // b_arrow_l.add(arrow_left(width / 3).clone())
  //
  // const b_arrow_l2 = new THREE.Object3D() //! width Right
  // b_arrow_l2.position.set(glueFlap + length * 2 + width, height / 2 - 2, 2)
  // b_arrow_l2.add(arrow_left(width / 3).clone())
  //
  // const b_arrow_r = new THREE.Object3D() //! width  Left
  // b_arrow_r.position.set(glueFlap + length + width, height / 2 - 2, 2)
  // b_arrow_r.add(arrow_right(width / 3).clone())
  //
  // const b_arrow_r2 = new THREE.Object3D() //! width Right
  // b_arrow_r2.position.set(glueFlap + length * 2 + width * 2, height / 2 - 2, 2)
  // b_arrow_r2.add(arrow_right(width / 3).clone())
  //
  // const b_arrow_t = new THREE.Object3D()
  // b_arrow_t.position.set(length / 2 + glueFlap, width + height, 2) //! topFlap Top
  // b_arrow_t.add(arrow_top(width / 3))
  //
  // const b_arrow_t2 = new THREE.Object3D()
  // b_arrow_t2.position.set(glueFlap + length + width + length / 2, 0, 2) //!topFlap Top
  // b_arrow_t2.add(arrow_top(width / 3))
  //
  // const b_arrow_d = new THREE.Object3D() //! topFlap Dr
  // b_arrow_d.position.set(length / 2 + glueFlap, height, 2)
  // b_arrow_d.add(arrow_down(width / 3))
  //
  // const b_arrow_d2 = new THREE.Object3D() //! topFlap Dr
  // b_arrow_d2.position.set(glueFlap + length + width + length / 2, -width, 2)
  // b_arrow_d2.add(arrow_down(width / 3))
  //
  // const c_arrow_t = new THREE.Object3D() //! Arrow เส้นข้างขวา Top
  // c_arrow_t.position.set(glueFlap + length * 2 + width * 2 + 20, height, 2)
  // c_arrow_t.add(arrow_top(height / 3), arrow_c(20))
  //
  // const c_arrow_d = new THREE.Object3D() //! Arrow เส้นข้างขวา Dr
  // c_arrow_d.position.set(glueFlap + length * 2 + width * 2 + 20, 0, 2)
  // c_arrow_d.add(arrow_down(height / 2.5), arrow_c(20).clone())
  //
  // const d_arrow_t = new THREE.Object3D() //!
  // d_arrow_t.position.set(-glueFlap, height + width + topFlap, 2)
  // d_arrow_t.add(arrow_top(width + height + topFlap), arrow_d(10))
  //
  // const d_arrow_d = new THREE.Object3D() //!
  // d_arrow_d.position.set(-glueFlap, -width + -lockHeight_Fix * 2, 2)
  // d_arrow_d.add(arrow_down(width + height + topFlap), arrow_d(10).clone())
  //
  // const e_arrow_el = new THREE.Object3D() //! E Arrow Left
  // e_arrow_el.position.set(0, height + width + topFlap + 15, 2)
  // e_arrow_el.add(arrow_left(length + glueFlap + width), arrow_e(10))
  //
  // const e_arrow_er = new THREE.Object3D() //! E Arrow Right
  // e_arrow_er.position.set(glueFlap + length + width + length + width, height + width + topFlap + 15, 2)
  // e_arrow_er.add(arrow_right(length + width).clone(), arrow_e(10).clone())

  const geometry = new THREE.PlaneBufferGeometry(length / 16, length / 16)
  const loader = new THREE.TextureLoader()

  const lengthImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/A.png') }))
  const widthImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/b.png') }))
  const heightImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/c.png') }))
  const dustFlapImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/f.png') }))
  const topFlapImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/p.png') }))
  const glueFlapImg = new THREE.Mesh(geometry.clone(), new THREE.MeshBasicMaterial({ map: loader.load('./images/g.png') }))

  const lineMarkA = new THREE.Object3D()
  lineMarkA.position.set(glueFlap + length / 2,  (height / 1.5), 2)
  lineMarkA.add(lengthImg)

  const lineMarkA2 = new THREE.Object3D()
  lineMarkA2.position.set(glueFlap + length + width + (length / 2),  (height / 1.5), 2)
  lineMarkA2.add(lengthImg.clone())

  const lineMarkB = new THREE.Object3D()
  lineMarkB.position.set(glueFlap + length + width / 2,  (height / 1.5), 2)
  lineMarkB.add(widthImg)

  const lineMarkB2 = new THREE.Object3D()
  lineMarkB2.position.set(glueFlap + (length * 2) + width + (width / 2),  (height / 1.5), 2)
  lineMarkB2.add(widthImg.clone())

  const lineMarkC = new THREE.Object3D()
  lineMarkC.position.set(glueFlap + (width * 2) + (length * 2) + 7,  (height / 2), 2)
  lineMarkC.add(heightImg)

  const lineMarkF = new THREE.Object3D()
  lineMarkF.position.set(glueFlap + length + (width / 3),  height + (dustFlap / 2), 2)
  lineMarkF.add(dustFlapImg)

  const lineMarkP = new THREE.Object3D()
  lineMarkP.position.set(glueFlap +  (length / 2.5),  height + width + (topFlap / 2), 2)
  lineMarkP.add(topFlapImg)

  const lineMarkG = new THREE.Object3D()
  lineMarkG.position.set(glueFlap / 2,  (height / 1.5), 2)
  lineMarkG.add(glueFlapImg)

  const labelLength = new THREE.Object3D()
  labelLength.position.set(glueFlap + length / 2,  (height / 1.8), 2)

  const labelLength1 = new THREE.Object3D()
  labelLength1.position.set(glueFlap + length + width + length / 2,  (height / 1.8), 2)

  const labelWidth = new THREE.Object3D()
  labelWidth.position.set(glueFlap + length + width / 2,  (height / 1.8), 2)

  const labelWidth2 = new THREE.Object3D()
  labelWidth2.position.set(glueFlap + width + length * 2 + width / 2,  (height / 1.8), 2)

  const labelWidth3 = new THREE.Object3D()
  labelWidth3.rotation.z = Math.PI / 2
  labelWidth3.position.set(glueFlap + (length / 2) + 5, width / 2 + height , 2)

  const labelHeight = new THREE.Object3D()
  labelHeight.rotation.z = Math.PI / 2
  labelHeight.position.set(glueFlap + (length * 2 )+ (width * 2) + 25,  (height / 2), 2)

  const labelGlueFlap = new THREE.Object3D()
  labelGlueFlap.position.set(glueFlap / 2,  (height / 1.8), 2)

  const labelTopFlap = new THREE.Object3D()
  labelTopFlap.rotation.z = Math.PI / 2
  labelTopFlap.position.set(glueFlap + (length / 2) + 7,  height + width + (topFlap / 2), 2)

  const labelDustFlap = new THREE.Object3D()
  labelDustFlap.rotation.z = Math.PI / 2
  labelDustFlap.position.set(glueFlap + length + (width / 2) + 7,  height + (dustFlap / 2), 2)

  const heightDimensionLabel = new THREE.Object3D()
  heightDimensionLabel.position.set(-(sideLeft + 5),  height / 2, 2)

  const widthDimensionLabel = new THREE.Object3D()
  widthDimensionLabel.position.set(glueFlap + length + width,  height + width + topFlap + 20, 2)


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
        labelUnits === 'inch' ? (length / defaultUnit[labelUnits]).toFixed(2) : (length / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelLength.add(text)
    labelLength1.add(text.clone())
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

    const message = `${
        labelUnits === 'inch' ? (width / defaultUnit[labelUnits]).toFixed(2) : (width / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelWidth.add(text)
    labelWidth2.add(text.clone())
    labelWidth3.add(text.clone())
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

    const message = `${
        labelUnits === 'inch' ? (height / defaultUnit[labelUnits]).toFixed(2) : (height / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelHeight.add(text)
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
        labelUnits === 'inch' ? (topFlap / defaultUnit[labelUnits]).toFixed(2) : (topFlap / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelTopFlap.add(text)
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
        labelUnits === 'inch' ? (dustFlap / defaultUnit[labelUnits]).toFixed(2) : (dustFlap / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelDustFlap.add(text)
  })

  const loaderTextGlueFlap = new THREE.FontLoader()
  loaderTextGlueFlap.load('./fonts/Mitr Medium_Regular.typeface.json', function (font) {
    const color = 0x00000
    const matLite = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    })

    const message = `${
        labelUnits === 'inch' ? (glueFlap / defaultUnit[labelUnits]).toFixed(2) : (glueFlap / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 4)
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    geometry.computeBoundingBox()

    const xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)

    const text = new THREE.Mesh(geometry, matLite)
    labelGlueFlap.add(text)
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
            ? (( width + height + topFlap + sideBottom) / defaultUnit[labelUnits]).toFixed(2)
            : (( width + height + topFlap + sideBottom) / defaultUnit[labelUnits]).toFixed(1)
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
            ? (((length * 2) + (width * 2) + glueFlap ) / defaultUnit[labelUnits]).toFixed(2)
            : (((length * 2) + (width * 2) + glueFlap ) / defaultUnit[labelUnits]).toFixed(1)
    } ${labelUnits}.`
    const shapes = font.generateShapes(message, 6)
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
  lengthArrow.position.set(glueFlap,  height / 2, 2)
  lengthArrow.add( arrows(length).clone())

  const lengthArrow2 = new THREE.Object3D()
  lengthArrow2.position.set(glueFlap + length + width,  height / 2, 2)
  lengthArrow2.add( arrows(length).clone())

  const widthArrow = new THREE.Object3D()
  widthArrow.position.set(glueFlap + length,  height / 2, 2)
  widthArrow.add( arrows(width).clone())

  const widthArrow2 = new THREE.Object3D()
  widthArrow2.position.set(glueFlap + length * 2 + width,  height / 2, 2)
  widthArrow2.add( arrows(width).clone())

  const widthArrow3 = new THREE.Object3D()
  widthArrow3.rotation.z = -Math.PI / 2
  widthArrow3.position.set(glueFlap + (length / 2),  height + width, 2)
  widthArrow3.add( arrows(width).clone())

  const heightArrow = new THREE.Object3D()
  heightArrow.rotation.z = -Math.PI / 2
  heightArrow.position.set((glueFlap + (length * 2) + (width * 2) + 20), ( height), 2)
  heightArrow.add(
      arrows(height).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(height, 0, height, -10).clone()
  )

  const topFlapArrow = new THREE.Object3D()
  topFlapArrow.rotation.z = -Math.PI / 2
  topFlapArrow.position.set(glueFlap + (length / 2),  height + width + topFlap, 2)
  topFlapArrow.add( arrows(topFlap).clone())

  const dustFlapArrow = new THREE.Object3D()
  dustFlapArrow.rotation.z = -Math.PI / 2
  dustFlapArrow.position.set(glueFlap + length + (width / 2),  height + dustFlap, 1)
  dustFlapArrow.add( arrows(dustFlap).clone())

  const glueFlapArrow = new THREE.Object3D()
  glueFlapArrow.position.set(0,  (height / 2), 1)
  glueFlapArrow.add( arrows(glueFlap).clone())

  const widthDimensionArrow = new THREE.Object3D()
  widthDimensionArrow.position.set(-(sideLeft - glueFlap),  height + width + topFlap + 15, 2)
  widthDimensionArrow.add(
      arrows((length * 2) + (width * 2) + sideLeft).clone(),
      lineSet(0, 0, 0, -10).clone(),
      lineSet(((length * 2) + (width * 2) + sideLeft), 0, ((length * 2) + (width * 2) + sideLeft), -10).clone()
  )

  const heightDimensionArrow = new THREE.Object3D()
  heightDimensionArrow.rotation.z = -Math.PI / 2
  heightDimensionArrow.position.set(-sideLeft, ( width + height + topFlap), 2)
  heightDimensionArrow.add(
      arrows(( width + height + topFlap + sideBottom)).clone(),
      lineSet(0, 0, 0, 10).clone(),
      lineSet(( width + height + topFlap + sideBottom), 0, ( width + height + topFlap + sideBottom), 10).clone()
  )

  const geometryBoxGroup = new THREE.Object3D()
  geometryBoxGroup.position.set(lockHeight_Fix - glueFlap, lockHeight_Fix * 2 + width, 0)
  geometryBoxGroup.add(
    sideA1,
    sideA2,
    sideB1,
    sideB2,
    cover_top,
    cover_down,
    flap_left,
    flap_left_d,
    flap_right,
    flap_right_d,
    glue_lid,
    flap_leftlock,

    lineMarkA,
    lineMarkA2,
    lineMarkB,
    lineMarkB2,
    lineMarkC,
    lineMarkF,
    lineMarkP,
    lineMarkG,

    labelLength,
    labelLength1,
    labelWidth,
    labelWidth2,
    labelWidth3,
    labelHeight,
    labelGlueFlap,
    labelTopFlap,
    labelDustFlap,

    widthDimensionLabel,
    heightDimensionLabel,

    lengthArrow,
    lengthArrow2,
    widthArrow,
    widthArrow2,
    widthArrow3,
    heightArrow,
    topFlapArrow,
    dustFlapArrow,
    glueFlapArrow,
    widthDimensionArrow,
    heightDimensionArrow
  )

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(-((length * 2 + width * 2 + lockHeight_Fix) / 2), -((topFlap + width * 2 + lockHeight_Fix * 2 + height) / 2), 0)
  scene.add(PositionCenter)
  PositionCenter.add(geometryBoxGroup)

  return scene
}
const MainLays = (options) => {
  const {length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, labelUnits, radius, lockHeight_Fix, slopet, sloped} = options;

  const scene = new THREE.Scene()
  const parts = new PARTS(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped)

  const side_a1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA1()

  const side_a2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA2()

  const side_b1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB1()

  const side_b2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB2()

  //! model [group]
  /* #region ส่วนประกอบของ model */
  const sideB1 = new THREE.Object3D()
  sideB1.position.set(glueFlap + length, 0, 0)
  sideB1.add(side_b1, parts.planeSideBGeometry())

  const sideB2 = new THREE.Object3D()
  sideB2.position.set(glueFlap + length + width + length, 0, 0)
  sideB2.add(side_b2, parts.planeSideBGeometry())

  const sideA1 = new THREE.Object3D()
  sideA1.position.set(glueFlap, 0, 0)
  sideA1.add(side_a1, parts.planeSideAGeometry())

  const sideA2 = new THREE.Object3D()
  sideA2.position.set(glueFlap + length + width, 0, 0)
  sideA2.add(side_a2, parts.planeSideAGeometry())

  const cover_top = new THREE.Object3D()
  cover_top.position.set(glueFlap, height, 0)
  cover_top.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeA())

  const cover_down = new THREE.Object3D()
  cover_down.rotation.z = Math.PI
  cover_down.position.set(glueFlap + length * 2 + width, 0, 0)
  cover_down.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeA())

  const flap_left = new THREE.Object3D()
  flap_left.position.set(glueFlap + length + width, height, 0)
  flap_left.rotation.y = Math.PI
  flap_left.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_left_d = new THREE.Object3D()
  flap_left_d.position.set(glueFlap + length, 0, 0)
  flap_left_d.rotation.x = Math.PI
  flap_left_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_right = new THREE.Object3D()
  flap_right.position.set(glueFlap + length + width + length, height, 0)
  flap_right.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_right_d = new THREE.Object3D()
  flap_right_d.rotation.x = Math.PI
  flap_right_d.rotation.y = Math.PI
  flap_right_d.position.set(glueFlap + length * 2 + width * 2, 0, 0)
  flap_right_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_leftlock = new THREE.Object3D()
  flap_leftlock.position.set(glueFlap, 0, 0)
  flap_leftlock.rotation.x = Math.PI
  flap_leftlock.add(parts.lockOnBoxCream(), parts.lockOnBoxCream_Geometry())

  const glue_lid = new THREE.Object3D()
  glue_lid.position.set(0, 0, 0)
  glue_lid.add(parts.glueFlapTypeA(), parts.glueFlapGeometryTypeA())
  /* #endregion */

  const grid_all = new THREE.Object3D()
  grid_all.position.set(lockHeight_Fix - glueFlap, lockHeight_Fix * 2 + width, 0)
  scene.add(grid_all)
  grid_all.add(sideA1, sideA2, sideB1, sideB2, cover_top, cover_down, flap_left, flap_left_d, flap_right, flap_right_d, glue_lid, flap_leftlock)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(grid_all)

  return scene
}
const MainLays_Invert = (options) => {
  const {length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, labelUnits, radius, lockHeight_Fix, slopet, sloped} = options;

  const scene = new THREE.Scene()
  const parts = new PARTS(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped)

  const side_a1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA1()

  const side_a2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA2()

  const side_b1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB1()

  const side_b2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB2()

  //! model [group]
  /* #region ส่วนประกอบของ model */
  const sideB1 = new THREE.Object3D()
  sideB1.position.set(glueFlap + length, 0, -1)
  sideB1.add(side_b1, parts.planeSideBGeometryInvert())

  const sideB2 = new THREE.Object3D()
  sideB2.position.set(glueFlap + length + width + length, 0, -1)
  sideB2.add(side_b2, parts.planeSideBGeometryInvert())

  const sideA1 = new THREE.Object3D()
  sideA1.position.set(glueFlap, 0, -1)
  sideA1.add(side_a1, parts.planeSideAGeometryInvert())

  const sideA2 = new THREE.Object3D()
  sideA2.position.set(glueFlap + length + width, 0, -1)
  sideA2.add(side_a2, parts.planeSideAGeometryInvert())

  const cover_top = new THREE.Object3D()
  cover_top.position.set(glueFlap, height, -1)
  cover_top.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeAInvert())

  const cover_down = new THREE.Object3D()
  cover_down.rotation.z = Math.PI
  cover_down.position.set(glueFlap + length * 2 + width, 0, -1)
  cover_down.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeAInvert())

  const flap_left = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_left.position.set(glueFlap + length + width, height, 0)
  flap_left.rotation.y = Math.PI
  flap_left.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_left_d = new THREE.Object3D()
  flap_left_d.position.set(glueFlap + length, 0, 0)
  flap_left_d.rotation.x = Math.PI
  flap_left_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_right = new THREE.Object3D()
  flap_right.position.set(glueFlap + length + width + length, height, 0)
  flap_right.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_right_d = new THREE.Object3D()
  flap_right_d.rotation.x = Math.PI
  flap_right_d.rotation.y = Math.PI
  flap_right_d.position.set(glueFlap + length * 2 + width * 2, 0, 0)
  flap_right_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_leftlock = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_leftlock.position.set(glueFlap, 0, 0)
  flap_leftlock.rotation.x = Math.PI
  flap_leftlock.add(parts.lockOnBoxCream(), parts.lockOnBoxCream_GeometryInvert())

  const glue_lid = new THREE.Object3D()
  glue_lid.position.set(0, 0, -1)
  glue_lid.add(parts.glueFlapTypeA(), parts.glueFlapGeometryTypeAInvert())

  /* #endregion */

  const grid_all = new THREE.Object3D()

  //lockHeight_Fix + length + width + length + width
  grid_all.position.set(glueFlap + length + width + length + width, lockHeight_Fix * 2 + width, 0)
  grid_all.rotation.y = Math.PI
  scene.add(grid_all)
  grid_all.add(sideA1, sideA2, sideB1, sideB2, cover_top, cover_down, flap_left, flap_left_d, flap_right, flap_right_d, glue_lid, flap_leftlock)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(grid_all)

  return scene
}
const MainLays_Invert2 = (options) => {
  const {length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, labelUnits, radius, lockHeight_Fix, slopet, sloped} = options;

  const scene = new THREE.Scene()
  const parts = new PARTS(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped)

  const side_a1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA1()

  const side_a2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA2()

  const side_b1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB1()

  const side_b2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB2()

  //! model [group]
  /* #region ส่วนประกอบของ model */
  const sideB1 = new THREE.Object3D()
  sideB1.position.set(glueFlap + length, 0, 0)
  sideB1.add(side_b1, parts.planeSideBGeometry())

  const sideB2 = new THREE.Object3D()
  sideB2.position.set(glueFlap + length + width + length, 0, 0)
  sideB2.add(side_b2, parts.planeSideBGeometry())

  const sideA1 = new THREE.Object3D()
  sideA1.position.set(glueFlap, 0, 0)
  sideA1.add(side_a1, parts.planeSideAGeometry())

  const sideA2 = new THREE.Object3D()
  sideA2.position.set(glueFlap + length + width, 0, 0)
  sideA2.add(side_a2, parts.planeSideAGeometry())

  const cover_top = new THREE.Object3D()
  cover_top.position.set(glueFlap, height, 0)
  cover_top.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeA())

  const cover_down = new THREE.Object3D()
  cover_down.rotation.z = Math.PI
  cover_down.position.set(glueFlap + length * 2 + width, 0, 0)
  cover_down.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeA())

  const flap_left = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_left.position.set(glueFlap + length + width, height, 0)
  flap_left.rotation.y = Math.PI
  flap_left.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_left_d = new THREE.Object3D()
  flap_left_d.position.set(glueFlap + length, 0, 0)
  flap_left_d.rotation.x = Math.PI
  flap_left_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_right = new THREE.Object3D()
  flap_right.position.set(glueFlap + length + width + length, height, 0)
  flap_right.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_right_d = new THREE.Object3D()
  flap_right_d.rotation.x = Math.PI
  flap_right_d.rotation.y = Math.PI
  flap_right_d.position.set(glueFlap + length * 2 + width * 2, 0, 0)
  flap_right_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_leftlock = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_leftlock.position.set(glueFlap, 0, 0)
  flap_leftlock.rotation.x = Math.PI
  flap_leftlock.add(parts.lockOnBoxCream(), parts.lockOnBoxCream_Geometry())

  const glue_lid = new THREE.Object3D()
  glue_lid.position.set(0, 0, 0)
  glue_lid.add(parts.glueFlapTypeA(), parts.glueFlapGeometryTypeA())

  /* #endregion */

  const grid_all = new THREE.Object3D()

  //lockHeight_Fix + length + width + length + width
  grid_all.position.set(glueFlap + length + width + length + width, height + width + topFlap, 0)
  grid_all.rotation.y = Math.PI
  grid_all.rotation.x = Math.PI
  scene.add(grid_all)
  grid_all.add(sideA1, sideA2, sideB1, sideB2, cover_top, cover_down, flap_left, flap_left_d, flap_right, flap_right_d, glue_lid, flap_leftlock)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 0)

  scene.add(PositionCenter)
  PositionCenter.add(grid_all)

  return scene
}
const MainLays_Invert3 = (options) => {
  const {length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, labelUnits, radius, lockHeight_Fix, slopet, sloped} = options;

  const scene = new THREE.Scene()
  const parts = new PARTS(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped)

  const side_a1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA1()

  const side_a2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeA2()

  const side_b1 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB1()

  const side_b2 = new main_box(length, width, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors, radius, lockHeight_Fix, slopet, sloped).planeB2()

  //! model [group]
  /* #region ส่วนประกอบของ model */
  const sideB1 = new THREE.Object3D()
  sideB1.position.set(glueFlap + length, 0, 0)
  sideB1.add(side_b1, parts.planeSideBGeometryInvert())

  const sideB2 = new THREE.Object3D()
  sideB2.position.set(glueFlap + length + width + length, 0, 0)
  sideB2.add(side_b2, parts.planeSideBGeometryInvert())

  const sideA1 = new THREE.Object3D()
  sideA1.position.set(glueFlap, 0, 0)
  sideA1.add(side_a1, parts.planeSideAGeometryInvert())

  const sideA2 = new THREE.Object3D()
  sideA2.position.set(glueFlap + length + width, 0, 0)
  sideA2.add(side_a2, parts.planeSideAGeometryInvert())

  const cover_top = new THREE.Object3D()
  cover_top.position.set(glueFlap, height, 0)
  cover_top.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeAInvert())

  const cover_down = new THREE.Object3D()
  cover_down.rotation.z = Math.PI
  cover_down.position.set(glueFlap + length * 2 + width, 0, 0)
  cover_down.add(parts.boxCoverTypeA(), parts.boxCoverGeometryTypeAInvert())

  const flap_left = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_left.position.set(glueFlap + length + width, height, 0)
  flap_left.rotation.y = Math.PI
  flap_left.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_left_d = new THREE.Object3D()
  flap_left_d.position.set(glueFlap + length, 0, 0)
  flap_left_d.rotation.x = Math.PI
  flap_left_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeA())

  const flap_right = new THREE.Object3D()
  flap_right.position.set(glueFlap + length + width + length, height, 0)
  flap_right.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_right_d = new THREE.Object3D()
  flap_right_d.rotation.x = Math.PI
  flap_right_d.rotation.y = Math.PI
  flap_right_d.position.set(glueFlap + length * 2 + width * 2, 0, 0)
  flap_right_d.add(parts.dustFlapTypeA(), parts.dustFlapGeometryTypeAInvert())

  const flap_leftlock = new THREE.Object3D() //ลิ้นกันฝุ่นบนซ้าย
  flap_leftlock.position.set(glueFlap, 0, 0)
  flap_leftlock.rotation.x = Math.PI
  flap_leftlock.add(parts.lockOnBoxCream(), parts.lockOnBoxCream_GeometryInvert())

  const glue_lid = new THREE.Object3D()
  glue_lid.position.set(0, 0, 0)
  glue_lid.add(parts.glueFlapTypeA(), parts.glueFlapGeometryTypeAInvert())

  /* #endregion */

  const grid_all = new THREE.Object3D()

  //lockHeight_Fix + length + width + length + width
  grid_all.position.set(0, height + width + topFlap, 0)
  // grid_all.rotation.y = Math.PI
  grid_all.rotation.x = Math.PI
  scene.add(grid_all)
  grid_all.add(sideA1, sideA2, sideB1, sideB2, cover_top, cover_down, flap_left, flap_left_d, flap_right, flap_right_d, glue_lid, flap_leftlock)

  const PositionCenter = new THREE.Object3D()
  PositionCenter.position.set(0, 0, 3)

  scene.add(PositionCenter)
  PositionCenter.add(grid_all)

  return scene
}
class main_box {
  constructor(width, depth, height, glueFlap, glueFlapSlope, topFlap, topFlapSlope, dustFlap, colors) {
    this.width = width
    this.depth = depth
    this.height = height
    this.glueFlap = glueFlap
    this.topFlap = topFlap
    this.dustFlap = dustFlap
    this.color = colors
    this.topFlapSlope = topFlapSlope
    this.glueFlapSlope = glueFlapSlope
  }

  planeA1() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(this.width, 0))
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.push(new THREE.Vector2(this.width, 0))
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(0, this.height))
    this.green_line.push(new THREE.Vector2(0, this.height))
    this.green_line.push(new THREE.Vector2(this.width, this.height))
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.green_lines)

    return this.scene
  }

  planeA2() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    this.red_line.push(new THREE.Vector2(this.width, this.height))
    this.red_line.push(new THREE.Vector2(0, this.height))

    this.red_lines = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.red_line), this.color.cr_red)

    this.green_line = []
    this.green_line.push(new THREE.Vector2(0, this.height))
    this.green_line.push(new THREE.Vector2(0, 0))
    // this.green_line.push(new THREE.Vector2(this.width, 0));

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.green_lines, this.red_lines)

    return this.scene
  }

  planeB1() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, this.height))
    this.red_line.push(new THREE.Vector2(this.depth, this.height))

    this.red_lines = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.red_line), this.color.cr_red)

    this.green_line.push(new THREE.Vector2(this.depth, this.height))
    this.green_line.push(new THREE.Vector2(0, this.height))
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))
    this.green_lines = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.green_line), this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.green_lines)

    return this.scene
  }

  planeB2() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    this.red_line.push(new THREE.Vector2(this.depth, 0))
    this.red_line.push(new THREE.Vector2(this.depth, this.height))
    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.green_line.push(new THREE.Vector2(this.depth, this.height))
    this.green_line.push(new THREE.Vector2(0, this.height))
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))
    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
}

export default { MainDiecuts, MainLays, MainLays_Invert, MainLays_Invert2, MainLays_Invert3 }
