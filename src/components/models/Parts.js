import * as THREE from 'three'

export default class PARTS {
  constructor(width, depth, height, glue, g_slope, plug, p_slope, flap, colors, radius, lockHeight_Fix, slopet, sloped) {
    this.width = width
    this.depth = depth
    this.height = height
    this.glue = glue
    this.plug = plug
    this.flap = flap
    this.color = colors
    this.plugs_slope = p_slope
    this.glue_slope = g_slope
    this.radius = radius
    this.lockHeight_Fix = lockHeight_Fix
    this.slopet = slopet
    this.sloped = sloped
  }

  planeSideAGeometry() {
    this.planeA = new THREE.Mesh(new THREE.PlaneGeometry(this.width, this.height), this.color.cr_lays)
    this.planeA.position.x = this.width / 2
    this.planeA.position.y = this.height / 2
    this.planeA.position.z = -1
    return this.planeA
  }
  planeSideAGeometryInvert() {
    this.planeA = new THREE.Mesh(new THREE.PlaneGeometry(this.width, this.height), this.color.cr_lays)
    this.planeA.position.x = this.width / 2
    this.planeA.position.y = this.height / 2
    this.planeA.position.z = 3
    return this.planeA
  }

  planeSideBGeometry() {
    this.planeB = new THREE.Mesh(new THREE.PlaneGeometry(this.depth, this.height), this.color.cr_lays)
    this.planeB.position.x = this.depth / 2
    this.planeB.position.y = this.height / 2
    this.planeB.position.z = -1
    return this.planeB
  }
  planeSideBGeometryInvert() {
    this.planeB = new THREE.Mesh(new THREE.PlaneGeometry(this.depth, this.height), this.color.cr_lays)
    this.planeB.position.x = this.depth / 2
    this.planeB.position.y = this.height / 2
    this.planeB.position.z = 3
    return this.planeB
  }


  boxCoverTypeA() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.green_group1 = []
    this.green_group2 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(0, this.depth))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.depth))
    this.red_group1.push(new THREE.Vector2(this.plugs_slope, this.depth - 0.5))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(this.red_group1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(this.width, 0))
    this.red_group2.push(new THREE.Vector2(this.width, this.depth))
    this.red_group2.push(new THREE.Vector2(this.width - this.plugs_slope, this.depth))
    this.red_group2.push(new THREE.Vector2(this.width - this.plugs_slope, this.depth - 0.5))

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(this.red_group2)
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    this.topFlap = new THREE.Shape()
    this.topFlap.moveTo(0, this.depth)
    this.topFlap.bezierCurveTo(
        0, (this.depth + (this.plug - 5)),
        0, (this.depth + this.plug),
        5, (this.depth + this.plug),
    )
    this.topFlap.lineTo(5, (this.depth + this.plug))
    this.topFlap.lineTo(this.width - 5, (this.depth + this.plug))
    this.topFlap.bezierCurveTo(
        this.width - 5, (this.depth + this.plug),
        this.width, (this.depth + this.plug),
        this.width, (this.depth + (this.plug - 5)),
    )
    this.topFlap.lineTo(this.width , this.depth)

    this.flapGeometry = new THREE.ShapeGeometry(this.topFlap)
    this.topFlaps = new THREE.Line(this.flapGeometry, this.color.cr_red)


    this.vectorGreenLine = new THREE.Shape()
    this.vectorGreenLine.moveTo(this.plugs_slope, this.depth - 0.5)
    this.vectorGreenLine.lineTo(this.width - this.plugs_slope, this.depth - 0.5)

    this.greenGeometry = new THREE.ShapeGeometry(this.vectorGreenLine)
    this.greenLines = new THREE.Line(this.greenGeometry, this.color.cr_green)
    this.greenLines.computeLineDistances()

    this.vectorGreenLine2 = new THREE.Shape()
    this.vectorGreenLine2.moveTo(0, 0)
    this.vectorGreenLine2.lineTo(this.width, 0)

    this.greenGeometry2 = new THREE.ShapeGeometry(this.vectorGreenLine2)
    this.greenLines2 = new THREE.Line(this.greenGeometry2, this.color.cr_green)
    this.greenLines2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.topFlaps,
      this.greenLines,
      this.greenLines2
    )

    return this.scene
  }
  boxCoverGeometryTypeA() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(0, this.depth, -3, this.depth + this.plug + 4, this.plugs_slope + 5, this.depth + this.plug)

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  boxCoverGeometryTypeAInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, this.depth)

    this.cover.bezierCurveTo(0, this.depth, -3, this.depth + this.plug + 4, this.plugs_slope + 5, this.depth + this.plug)

    this.cover.moveTo(this.plugs_slope + 5, this.depth + this.plug)
    this.cover.moveTo(this.width - this.plugs_slope - 5, this.depth + this.plug)

    this.cover.bezierCurveTo(
      this.width - (this.plugs_slope + 5),
      this.depth + this.plug,
      this.width + 3,
      this.depth + this.plug + 4,
      this.width,
      this.depth
    )

    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 3

    return this.coverShape
  }

  boxCoverTypeB() {
    this.scene = new THREE.Scene()
    this.red_group1 = []
    this.red_group2 = []
    this.red_group3 = []
    this.red_group4 = []
    this.green_group1 = []
    this.green_group2 = []
    this.green_group3 = []
    this.green_group4 = []

    //! Red line.
    //! Red line g1.
    this.red_group1.push(new THREE.Vector2(0, 0))
    this.red_group1.push(new THREE.Vector2(5, this.depth - 10))

    this.red_geometry_g1 = new THREE.BufferGeometry().setFromPoints(this.red_group1)
    this.red_lines_g1 = new THREE.Line(this.red_geometry_g1, this.color.cr_red)

    //! Red line g2.
    this.red_group2.push(new THREE.Vector2(20, this.depth - 2))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 10, this.depth + 5))
    this.red_group2.push(new THREE.Vector2(this.width / 2 - 20, this.depth + 5))

    this.red_geometry_g2 = new THREE.BufferGeometry().setFromPoints(this.red_group2)
    this.red_lines_g2 = new THREE.Line(this.red_geometry_g2, this.color.cr_red)

    //! Red line g3.
    this.red_group3.push(new THREE.Vector2(this.width - 20, this.depth - 2))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 10, this.depth + 5))
    this.red_group3.push(new THREE.Vector2(this.width / 2 + 20, this.depth + 5))

    //! Red line g4.
    this.red_group4.push(new THREE.Vector2(this.width, 0))
    this.red_group4.push(new THREE.Vector2(this.width - 5, this.depth - 10))

    this.red_geometry_g4 = new THREE.BufferGeometry().setFromPoints(this.red_group4)
    this.red_lines_g4 = new THREE.Line(this.red_geometry_g4, this.color.cr_red)

    this.red_geometry_g3 = new THREE.BufferGeometry().setFromPoints(this.red_group3)
    this.red_lines_g3 = new THREE.Line(this.red_geometry_g3, this.color.cr_red)

    //! Red curve left.
    this.red_cruve_left1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(5, this.depth - 10),
          new THREE.Vector2(8, this.depth - 4),
          new THREE.Vector2(20, this.depth - 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_left2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 - 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 - 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //! Red curve right.
    this.red_cruve_right1 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width - 5, this.depth - 10),
          new THREE.Vector2(this.width - 8, this.depth - 4),
          new THREE.Vector2(this.width - 20, this.depth - 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_cruve_right2 = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.width / 2 + 20, this.depth + 5),
          new THREE.Vector2(this.width / 2 + 18, this.depth + 15 - 1),
          new THREE.Vector2(this.width / 2, this.depth + 15),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    //* Green line.
    //* Green line g1.
    this.green_group1.push(new THREE.Vector2(this.width / 2 - 10, this.depth))
    this.green_group1.push(new THREE.Vector2(this.width / 2 + 10, this.depth))

    this.green_geometry_g1 = new THREE.BufferGeometry().setFromPoints(this.green_group1)
    // this.green_lines_g1 = new THREE.Line( this.green_geometry_g1, this.color.cr_green );
    this.green_lines_g1 = new THREE.Line(
      this.green_geometry_g1,
      new THREE.LineDashedMaterial({
        color: '#33FF00',
        dashSize: 3,
        gapSize: 2,
      })
    )
    this.green_lines_g1.computeLineDistances()

    //* Green line g2.
    this.green_group2.push(new THREE.Vector2(0, 0))
    this.green_group2.push(new THREE.Vector2(this.width, 0))

    this.green_geometry_g2 = new THREE.BufferGeometry().setFromPoints(this.green_group2)
    this.green_lines_g2 = new THREE.Line(this.green_geometry_g2, this.color.cr_green)
    this.green_lines_g2.computeLineDistances()

    this.scene.add(
      this.red_lines_g1,
      this.red_lines_g2,
      this.red_lines_g3,
      this.red_lines_g4,

      this.red_cruve_left1,
      this.red_cruve_left2,
      this.red_cruve_right1,
      this.red_cruve_right2,

      this.green_lines_g1,
      this.green_lines_g2
    )

    return this.scene
  }
  boxCoverGeometryTypeB() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(5, this.depth - 10)
    this.cover.bezierCurveTo(5, this.depth - 10, 5, this.depth - 1, 20, this.depth - 2)

    this.cover.lineTo(20, this.depth - 2)
    this.cover.lineTo(this.width / 2 - 10, this.depth)
    this.cover.lineTo(this.width / 2 - 10, this.depth + 5)
    this.cover.lineTo(this.width / 2 - 20, this.depth + 5)

    this.cover.bezierCurveTo(this.width / 2 - 20, this.depth + 5, this.width / 2 - 23, this.depth + 15 + 3, this.width / 2 - 10, this.depth + 15)

    this.cover.moveTo(this.width / 2 - 5, this.depth + 15)
    this.cover.moveTo(this.width / 2 + 5, this.depth + 15)

    this.cover.bezierCurveTo(this.width / 2 + 10, this.depth + 15, this.width / 2 + 23, this.depth + 15 + 3, this.width / 2 + 20, this.depth + 5)

    this.cover.lineTo(this.width / 2 + 20, this.depth + 5)
    this.cover.lineTo(this.width / 2 + 10, this.depth + 5)
    this.cover.lineTo(this.width / 2 + 10, this.depth)
    this.cover.lineTo(this.width - 20, this.depth - 2)

    this.cover.bezierCurveTo(this.width - 20, this.depth - 2, this.width - 5, this.depth - 1, this.width - 5, this.depth - 10)

    this.cover.lineTo(this.width - 5, this.depth - 10)
    this.cover.lineTo(this.width, 0)
    this.cover.lineTo(0, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }

  boxCoverTypeC() {
    this.scene = new THREE.Scene()

    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.vectors = []
    this.vectors.push(new THREE.Vector2(0, 0))
    this.vectors.push(new THREE.Vector2(0, -((this.depth / 2) + this.tonguePlug)))
    this.vectors.push(new THREE.Vector2(this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug)))
    this.vectors.push(new THREE.Vector2(this.tonguePlugLockIn, -(this.depth / 2)))
    this.vectors.push(new THREE.Vector2((this.width - this.tonguePlugLockIn), -(this.depth / 2)))
    this.vectors.push(new THREE.Vector2((this.width - this.tonguePlugLockOut), -((this.depth / 2) + this.tonguePlug)))
    this.vectors.push(new THREE.Vector2(this.width, -((this.depth / 2) + this.tonguePlug)))
    this.vectors.push(new THREE.Vector2(this.width, 0))

    this.geometry = new THREE.BufferGeometry().setFromPoints(this.vectors)
    this.redLine = new THREE.Line(this.geometry, this.color.cr_red)

    return this.scene.add(this.redLine)
  }
  boxCoverGeometryTypeC() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo((this.width - this.tonguePlugLockIn), -(this.depth / 2))
    this.cover.lineTo((this.width - this.tonguePlugLockOut), -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.width, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1
    return this.coverShape
  }
  boxCoverGeometryTypeCInvert() {
    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(0, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo((this.width - this.tonguePlugLockIn), -(this.depth / 2))
    this.cover.lineTo((this.width - this.tonguePlugLockOut), -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.width, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1
    return this.coverShape
  }

  boxCoverTypeD() {
    this.scene = new THREE.Scene()

    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.redLine = new THREE.Shape()
    this.redLine.moveTo(0, 0)
    this.redLine.lineTo(this.tonguePlugLockIn, -(this.depth / 2))
    this.redLine.bezierCurveTo(
        this.tonguePlugLockIn, -((this.depth / 2) + (this.tonguePlug - 5)),
        this.tonguePlugLockIn, -((this.depth / 2) + this.tonguePlug),
        this.tonguePlugLockIn + 5, -((this.depth / 2) + this.tonguePlug),
    )
    this.redLine.lineTo((this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug))
    this.redLine.bezierCurveTo(
        (this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + (this.tonguePlug - 5)),
    )
    this.redLine.lineTo((this.width - this.tonguePlugLockIn), -(this.depth / 2))
    this.redLine.lineTo(this.width, 0)

    this.geometry = new THREE.ShapeGeometry(this.redLine)
    this.redlines = new THREE.Line(this.geometry, this.color.cr_red)

    return this.scene.add(this.redlines)
  }
  boxCoverGeometryTypeD() {
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.bezierCurveTo(
        this.tonguePlugLockIn, -((this.depth / 2) + (this.tonguePlug - 5)),
        this.tonguePlugLockIn, -((this.depth / 2) + this.tonguePlug),
        this.tonguePlugLockIn + 5, -((this.depth / 2) + this.tonguePlug),
    )
    this.cover.lineTo((this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug))
    this.cover.bezierCurveTo(
        (this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + (this.tonguePlug - 5)),
    )
    this.cover.lineTo((this.width - this.tonguePlugLockIn), -(this.depth / 2))
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  boxCoverGeometryTypeDInvert() {
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.bezierCurveTo(
        this.tonguePlugLockIn, -((this.depth / 2) + (this.tonguePlug - 5)),
        this.tonguePlugLockIn, -((this.depth / 2) + this.tonguePlug),
        this.tonguePlugLockIn + 5, -((this.depth / 2) + this.tonguePlug),
    )
    this.cover.lineTo((this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug))
    this.cover.bezierCurveTo(
        (this.width - (this.tonguePlugLockIn + 5)), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + this.tonguePlug),
        (this.width - this.tonguePlugLockIn), -((this.depth / 2) + (this.tonguePlug - 5)),
    )
    this.cover.lineTo((this.width - this.tonguePlugLockIn), -(this.depth / 2))
    this.cover.lineTo(this.width, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }

  boxCoverTypeE() {
    this.scene = new THREE.Scene()

    this.red_line = []
    this.green_line = []
    this.red_line1 = []
    this.red_line_g1 = new THREE.Shape()
    this.red_line_g2 = new THREE.Shape()
    this.red_line_g3 = new THREE.Shape()
    this.red_line_g4 = new THREE.Shape()

    //! Red line.
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, 33))
    this.red_lines = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.red_line), this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 33))
    this.green_line.push(new THREE.Vector2(120, 33))
    this.green_lines = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.green_line), this.color.cr_green)
    this.green_lines.computeLineDistances()

    //! red_lines_g1.
    this.red_line1.push(new THREE.Vector2(120, 33))
    this.red_line1.push(new THREE.Vector2(120, 0))
    this.red_lines1 = new THREE.Line(new THREE.BufferGeometry().setFromPoints(this.red_line1), this.color.cr_red)
    this.red_line_g1.moveTo(0, 33)
    this.red_line_g1.lineTo(0, 55)
    this.red_line_g1.bezierCurveTo(1, 68, 8, 68, 11, 68)
    this.red_line_g1.lineTo(11, 68)
    this.red_line_g1.bezierCurveTo(13, 68, 20, 68, 21, 55)
    this.red_line_g1.lineTo(24, 55)
    this.red_lines_g1 = new THREE.Line(new THREE.ShapeGeometry(this.red_line_g1), this.color.cr_red)

    //! red_lines_g2.
    this.red_line_g2.moveTo(24, 55)
    this.red_line_g2.lineTo(26, 78)
    this.red_line_g2.bezierCurveTo(26, 78, 28, 83, 31, 83)
    this.red_line_g2.lineTo(89, 83)
    this.red_line_g2.bezierCurveTo(90, 83, 92, 83, 94, 78)
    this.red_line_g2.lineTo(96, 55)
    this.red_line_g2.lineTo(99, 55)
    this.red_lines_g2 = new THREE.Line(new THREE.ShapeGeometry(this.red_line_g2), this.color.cr_red)

    this.red_line_g3.moveTo(99, 55)
    this.red_line_g3.lineTo(99, 55)
    this.red_line_g3.bezierCurveTo(100, 68, 107, 68, 110, 68)
    this.red_line_g3.lineTo(110, 68)
    this.red_line_g3.bezierCurveTo(112, 68, 119, 68, 120, 55)
    this.red_line_g3.lineTo(120, 33)
    this.red_lines_g3 = new THREE.Line(new THREE.ShapeGeometry(this.red_line_g3), this.color.cr_red)

    this.red_line_g4.moveTo(40, 43)
    this.red_line_g4.lineTo(40, 43)
    this.red_line_g4.bezierCurveTo(40, 43, 39, 44, 39, 46)
    this.red_line_g4.lineTo(41, 60)
    this.red_line_g4.bezierCurveTo(41, 60, 42, 62, 44, 62)
    this.red_line_g4.lineTo(80, 62)
    this.red_line_g4.bezierCurveTo(80, 62, 81, 62, 83, 60)
    this.red_line_g4.lineTo(83, 60)
    this.red_line_g4.lineTo(86, 46)
    this.red_line_g4.bezierCurveTo(86, 46, 87, 45, 85, 43)
    this.red_line_g4.lineTo(85, 43)
    this.red_line_g4.lineTo(40, 42.9)
    this.red_line_g4 = new THREE.Line(new THREE.ShapeGeometry(this.red_line_g4), this.color.cr_red)

    this.scene.add(this.red_lines, this.green_lines, this.red_lines1, this.red_lines_g1, this.red_lines_g2, this.red_lines_g3, this.red_line_g4)

    return this.scene
  }


  dustFlapTypeA() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0) //0,0
    this.red_line.lineTo(0, (((this.flap) / 100) * 15) | 0) //0,4
    this.red_line.lineTo(((this.depth / 100) * 6) | 0, (((this.flap) / 100) * 25) | 0) //2,6
    this.red_line.lineTo(((this.depth / 100) * 13) | 0, (((this.flap) / 100) * 63) | 0) //5,15

    //5, 15, 7, 24, 13, 24
    this.red_line.bezierCurveTo(
        ((this.depth / 100) * 13) | 0,
        (((this.flap) / 100) * 63) | 0,
        ((this.depth / 100) * 18) | 0,
        (((this.flap) / 100) * 100) | 0,
        ((this.depth / 100) * 33) | 0,
        (((this.flap) / 100) * 100) | 0
    )

    this.red_line.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 100) | 0)

    this.red_line.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 16) | 0)

    this.red_line.lineTo(this.depth, 0)

    this.red_geometry = new THREE.ShapeGeometry(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.scene.add(this.red_lines)

    return this.scene
  }
  dustFlapGeometryTypeA() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0) //0,0
    this.flaps.lineTo(0, (((this.flap) / 100) * 15) | 0) //0,4
    this.flaps.lineTo(((this.depth / 100) * 6) | 0, (((this.flap) / 100) * 25) | 0) //2,6
    this.flaps.lineTo(((this.depth / 100) * 13) | 0, (((this.flap) / 100) * 63) | 0) //5,15

    //5, 15, 7, 24, 13, 24
    this.flaps.bezierCurveTo(
        ((this.depth / 100) * 13) | 0,
        (((this.flap) / 100) * 63) | 0,
        ((this.depth / 100) * 18) | 0,
        (((this.flap) / 100) * 100) | 0,
        ((this.depth / 100) * 33) | 0,
        (((this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 100) | 0)

    this.flaps.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 16) | 0)

    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }
  dustFlapGeometryTypeAInvert() {
    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0) //0,0
    this.flaps.lineTo(0, (((this.flap) / 100) * 15) | 0) //0,4
    this.flaps.lineTo(((this.depth / 100) * 6) | 0, (((this.flap) / 100) * 25) | 0) //2,6
    this.flaps.lineTo(((this.depth / 100) * 13) | 0, (((this.flap) / 100) * 63) | 0) //5,15

    //5, 15, 7, 24, 13, 24
    this.flaps.bezierCurveTo(
        ((this.depth / 100) * 13) | 0,
        (((this.flap) / 100) * 63) | 0,
        ((this.depth / 100) * 18) | 0,
        (((this.flap) / 100) * 100) | 0,
        ((this.depth / 100) * 33) | 0,
        (((this.flap) / 100) * 100) | 0
    )

    this.flaps.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 100) | 0)

    this.flaps.lineTo(((this.depth / 100) * 97) | 0, (((this.flap) / 100) * 16) | 0)

    this.flaps.lineTo(this.depth, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = 1

    return this.flapShape
  }

  dustFlapTypeB() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.red_line2 = []
    this.green_line = []

    //! Red line.
    //! Red curve left.
    this.red_cruve_left = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(2, this.width / 2),
          new THREE.Vector2(5, this.width / 2 + this.plug - 2),
          new THREE.Vector2(this.depth / 2, this.width / 2 + this.plug),
        ]).getPoints(50)
      ),
      this.color.cr_red
    )

    // //! Red curve right.
    this.red_cruve_right = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(
        new THREE.SplineCurve([
          new THREE.Vector2(this.depth / 2, this.width / 2 + this.plug),
          new THREE.Vector2(this.depth - 8, this.width / 2 + this.plug - 2),
          new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2),
        ]).getPoints(200)
      ),
      this.color.cr_red
    )

    this.red_line.push(new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2))
    this.red_line.push(new THREE.Vector2(this.depth / 2, this.width / 2))
    this.red_line.push(new THREE.Vector2(this.depth - this.plugs_slope, this.width / 2 - 3))
    this.red_line.push(new THREE.Vector2(this.depth, 0))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    this.red_line2.push(new THREE.Vector2(0, 0))
    this.red_line2.push(new THREE.Vector2(2, this.width / 2))

    this.red_geometry2 = new THREE.BufferGeometry().setFromPoints(this.red_line2)
    this.red_lines2 = new THREE.Line(this.red_geometry2, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(0, 0))
    this.green_line.push(new THREE.Vector2(this.depth, 0))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_cruve_left, this.red_cruve_right, this.red_lines, this.red_lines2)

    return this.scene
  }
  dustFlapGeometryTypeB() {
    this.flaps = new THREE.Shape()
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, 0)
    this.flaps.lineTo(2, this.width / 2)
    this.flaps.bezierCurveTo(2, this.width / 2, -1, this.width / 2 + this.plug - 4, 7, this.width / 2 + this.plug)

    this.flaps.bezierCurveTo(
      this.depth - this.plugs_slope - 2,
      this.width / 2 + this.plug,
      this.depth - 4,
      this.width / 2 + this.plug + 3,
      this.depth - this.plugs_slope,
      this.width / 2
    )

    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2)
    this.flaps.lineTo(this.depth / 2, this.width / 2)
    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2 - 3)
    this.flaps.lineTo(this.depth - this.plugs_slope, this.width / 2)
    this.flaps.lineTo(this.depth, 0)
    this.flaps.lineTo(0, 0)

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

  dustFlapTypeC() {
    this.scene = new THREE.Scene()
    this.red_line = new THREE.Shape()
    this.red_line2 = new THREE.Shape()

    //! Red line.
    this.red_line.moveTo(0, 0) //0,0
    this.red_line.lineTo(24, 45) //0,4
    this.red_line.bezierCurveTo(25, 46, 26, 48, 28, 49)
    this.red_line.lineTo(29, 49)
    this.red_line.lineTo(45, 49)
    this.red_line.bezierCurveTo(46, 49, 48, 48, 50, 45)
    this.red_line.lineTo(50, 45)
    this.red_line.lineTo(75, 0)
    this.red_lines = new THREE.Line(new THREE.ShapeGeometry(this.red_line), this.color.cr_red)

    this.red_line2.moveTo(35, 0)
    this.red_line2.lineTo(35, 29)
    this.red_line2.bezierCurveTo(35, 30, 36, 31, 36.6, 31)
    this.red_line2.lineTo(36.6, 31)
    this.red_line2.bezierCurveTo(36.6, 31, 38, 31, 38.3, 29.1)
    this.red_line2.lineTo(38.3, 29)
    this.red_line2.lineTo(38.3, 0)
    this.red_line2.lineTo(35, 0.001)

    this.red_lines2 = new THREE.Line(new THREE.ShapeGeometry(this.red_line2), this.color.cr_red)

    this.scene.add(this.red_lines, this.red_lines2)

    return this.scene
  }

  dustFlapBottomTypeA() {
    this.scene = new THREE.Scene()

    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 3.2

    this.vectorRedLine = new THREE.Shape()
    this.vectorRedLine.moveTo(0, 0)
    this.vectorRedLine.lineTo(this.depth / 2, -(this.tonguePlugLockIn))
    this.vectorRedLine.lineTo((this.depth / 2) - this.tonguePlugLockOut, -(this.tonguePlugLockIn + this.tonguePlug))
    this.vectorRedLine.lineTo(this.depth, -(this.tonguePlugLockIn + this.tonguePlug))
    this.vectorRedLine.lineTo(this.depth, 0)

    this.geometry = new THREE.ShapeGeometry(this.vectorRedLine)
    this.redLines = new THREE.Line(this.geometry, this.color.cr_red)

    this.scene.add(this.redLines)

    return this.scene
  }
  dustFlapBottomGeometryTypeA1() {
    this.cover = new THREE.Shape()
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth - this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo(this.depth - this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }
  dustFlapBottomGeometryTypeAInvert1() {
    this.cover = new THREE.Shape()
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth - this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo(this.depth - this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  dustFlapBottomGeometryTypeA2() {
    this.cover = new THREE.Shape()
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth - this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo(this.depth - this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = -1

    return this.coverShape
  }
  dustFlapBottomGeometryTypeAInvert2() {
    this.cover = new THREE.Shape()
    this.tonguePlug = 12
    this.tonguePlugLockIn = 25
    this.tonguePlugLockOut = 28.2

    this.cover = new THREE.Shape()
    this.cover.moveTo(0, 0)
    this.cover.lineTo(this.depth - this.tonguePlugLockIn, -(this.depth / 2))
    this.cover.lineTo(this.depth - this.tonguePlugLockOut, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, -((this.depth / 2) + this.tonguePlug))
    this.cover.lineTo(this.depth, 0)

    this.coverGeomety = new THREE.ShapeGeometry(this.cover)
    this.coverShape = new THREE.Mesh(this.coverGeomety, this.color.cr_lays)
    this.coverShape.position.z = 1

    return this.coverShape
  }


  glueFlapTypeA() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //! Red line.
    this.red_line.push(new THREE.Vector2(this.glue, 0))
    this.red_line.push(new THREE.Vector2(0, this.glue_slope))
    this.red_line.push(new THREE.Vector2(0, this.height - this.glue_slope))
    this.red_line.push(new THREE.Vector2(this.glue, this.height))

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    //* Green line.
    this.green_line.push(new THREE.Vector2(this.glue, 0))
    this.green_line.push(new THREE.Vector2(this.glue, this.height))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  glueFlapGeometryTypeA() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = -1
    return this.glueMesh
  }
  glueFlapGeometryTypeAInvert() {
    this.glueLid = new THREE.Shape()
    this.glueLid.moveTo(this.glue, 0)
    this.glueLid.lineTo(0, this.glue_slope)
    this.glueLid.lineTo(0, this.height - this.glue_slope)
    this.glueLid.lineTo(this.glue, this.height)
    this.glueLid.lineTo(this.glue, 0)

    this.plane = new THREE.PlaneGeometry(14, 75)

    this.glueShape = new THREE.ShapeGeometry(this.glueLid)
    this.glueMesh = new THREE.Mesh(this.glueShape, this.color.cr_lays)
    this.glueMesh.position.z = 3
    return this.glueMesh
  }


  lockOnBoxCream() {
    this.scene = new THREE.Scene()
    this.red_line = []
    this.green_line = []

    //  this.lockHeight_Fix = 20;
    // this.slopet = 5;
    // this.sloped = 10;

    this.circle = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.CircleGeometry((this.radius - 10) / 2, 128)), this.color.cr_red)

    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    this.circle.position.x = this.widthhSpace + this.radius / 2
    this.circle.position.y = this.lockHeight_Fix + this.depthSpace + this.radius / 2

    this.scene.add(this.circle)

    /* #region  red line */
    this.red_line.push(new THREE.Vector2(0, 0))
    this.red_line.push(new THREE.Vector2(0, this.lockHeight_Fix))
    this.red_line.push(new THREE.Vector2(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped))

    this.red_line.push(new THREE.Vector2(-this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet))

    this.red_line.push(new THREE.Vector2(0, this.lockHeight_Fix + this.depth))

    this.red_line.push(new THREE.Vector2(this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix))

    this.red_line.push(new THREE.Vector2(this.width - this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix))
    this.red_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix + this.depth))
    this.red_line.push(new THREE.Vector2(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet))
    this.red_line.push(new THREE.Vector2(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.sloped))
    this.red_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix))
    this.red_line.push(new THREE.Vector2(this.width - 1, 0))

    /* #endregion */

    this.red_geometry = new THREE.BufferGeometry().setFromPoints(this.red_line)
    this.red_lines = new THREE.Line(this.red_geometry, this.color.cr_red)

    /* #region green_line */
    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix))
    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix + this.depth))

    this.green_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix + this.depth))

    this.green_line.push(new THREE.Vector2(this.width - 1, this.lockHeight_Fix))

    this.green_line.push(new THREE.Vector2(0, this.lockHeight_Fix))

    this.green_geometry = new THREE.BufferGeometry().setFromPoints(this.green_line)
    this.green_lines = new THREE.Line(this.green_geometry, this.color.cr_green)
    this.green_lines.computeLineDistances()
    /* #endregion */

    this.scene.add(this.red_lines, this.green_lines)

    return this.scene
  }
  lockOnBoxCream_Geometry() {
    this.flaps = new THREE.Shape()

    /* #region  circle */
    this.radius = this.depth - 10 / 2 //พทวงกลม

    //! Validate Position
    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    //* New Circle
    var points = []

    for (let i = 0; i <= 360; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * ((this.radius - 10) / 2) + this.widthhSpace + this.radius / 2,
          Math.cos(i * (Math.PI / 180)) * ((this.radius - 10) / 2) + this.lockHeight_Fix + this.depthSpace + this.radius / 2
        )
      )
    }
    /* #endregion */
    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.lockHeight_Fix)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet)
    this.flaps.lineTo(0, this.lockHeight_Fix + this.depth)
    this.flaps.lineTo(this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix)
    this.flaps.lineTo(this.width - this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix + this.depth)

    this.flaps.lineTo(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet)
    this.flaps.lineTo(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points)) //วงกลม

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)

    this.flapShape.position.z = 1

    return this.flapShape
  }
  lockOnBoxCream_GeometryInvert() {
    this.radius = this.depth - 10 / 2 //พทวงกลม

    //! Validate Position
    this.depthSpace = ((this.depth - this.radius) / 2) | 0
    this.widthhSpace = ((this.width - this.radius) / 2) | 0

    //* New Circle
    var points = []

    for (let i = 0; i <= 360; i++) {
      points.push(
        new THREE.Vector2(
          Math.sin(i * (Math.PI / 180)) * ((this.radius - 10) / 2) + this.widthhSpace + this.radius / 2,
          Math.cos(i * (Math.PI / 180)) * ((this.radius - 10) / 2) + this.lockHeight_Fix + this.depthSpace + this.radius / 2
        )
      )
    }

    this.flaps = new THREE.Shape()

    this.flaps.moveTo(0, 0)
    this.flaps.lineTo(0, this.lockHeight_Fix)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(-this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet)
    this.flaps.lineTo(0, this.lockHeight_Fix + this.depth)
    this.flaps.lineTo(this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix)
    this.flaps.lineTo(this.width - this.slopet, this.lockHeight_Fix + this.depth + this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix + this.depth)

    this.flaps.lineTo(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.depth - this.slopet)
    this.flaps.lineTo(this.width + this.lockHeight_Fix, this.lockHeight_Fix + this.sloped)
    this.flaps.lineTo(this.width - 1, this.lockHeight_Fix)
    this.flaps.lineTo(this.width - 1, 0)

    this.flaps.holes.push(new THREE.Path().setFromPoints(points))

    this.flapGeomety = new THREE.ShapeGeometry(this.flaps)

    this.flapShape = new THREE.Mesh(this.flapGeomety, this.color.cr_lays)
    this.flapShape.position.z = -1

    return this.flapShape
  }

}
