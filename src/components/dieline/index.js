import React, {useEffect} from 'react'
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import {useSelector} from "react-redux";
import {dielineSelector} from "@/store/reducers/dielineSlice";
import {isUndefined} from "lodash";
import {Models} from "@/components/dieline/models";


function DieLineComponents() {
    const { sizeOptions, } = useSelector(dielineSelector);

    useEffect(() => {
        let layoutWidth, layoutHeight, models;
        const options = {
            length : 0,
            width: 0,
            height: 0,
            glueFlap: 0,
            dustFlap: 0,
            topFlap: 0,
            radius: 50,
            glueFlapSlope: 5,
            bottomGlue: 0,
            topFlapSlope: 5,
            D: 0,
            E: 0,
            handHoldingLength: 0,
            handHoldingWidth: 0,
            handHoldingMargin: 0,
            coverFlap: 0,
            topTuckFlap: 0,
            lockMargin: 0,
            sideTopFlap: 0,
            labelUnits: 'cm',
            lockHeight_Fix: 30,
            slopet: 5,
            sloped: 5,
            colors: {
                cr_green: new THREE.LineDashedMaterial({ color: '#45a033', dashSize: 3, gapSize: 2 }),
                cr_red: new THREE.LineBasicMaterial({ color: '#FF0B00', side: THREE.DoubleSide }),
                cr_gray: new THREE.LineBasicMaterial({ color: '#d3cfcf', side: THREE.DoubleSide }),
                // cr_lays: new THREE.LineBasicMaterial({ color: '#91d1ff', side: THREE.DoubleSide }),
                cr_lays: new THREE.LineBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide }),
                cr_black: new THREE.LineBasicMaterial({ color: 0x000000, side: THREE.DoubleSide }),
            },
        }

        const dieLineContainer = document.getElementById('die-line-container')
        if (dieLineContainer) {
            layoutWidth = dieLineContainer.offsetWidth
            layoutHeight = dieLineContainer.offsetHeight
        }

        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#F4F5F5')

        if(!isUndefined(sizeOptions.name) && !isUndefined(sizeOptions.size_options)) {
            const { name, size_options } = sizeOptions

            for (const option of size_options) {
                const { name, value } = option;
                options[name] = value * 10
            }

            options.D = options.height <= 300 ? 30 : 40;
            options.E = ((options.width / 2) + options.bottomGlue);

            const model = Models(name, options)
            scene.add(model)
        }

        const cameraRatio = () => {
            const { width, height, glueFlap, topFlap } = options;
            let ratio = 500
            const shape_Width = Number(length) * 2 + Number(width) * 2 + Number(glueFlap)
            const shape_Height = Number(topFlap) * 2 + Number(width) * 2 + Number(height)

            if (shape_Width < layoutWidth) {
                if (shape_Height < layoutHeight) {
                    if (shape_Width <= shape_Height) {
                        ratio = shape_Height
                    } else if (shape_Width >= shape_Height) {
                        ratio = shape_Width
                    }
                }
            } else {
                if (shape_Height < layoutHeight) {
                    if (shape_Width <= shape_Height) {
                        ratio = layoutHeight / 16
                    } else if (shape_Width >= shape_Height) {
                        ratio = layoutWidth / 16
                    }
                }
            }

            return ratio
        }

        const camera = new THREE.PerspectiveCamera(70,layoutWidth / layoutHeight, 1, 5000)
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = cameraRatio()

        const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true })
        renderer.setSize(layoutWidth, layoutHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        function onWindowResize() {
            const container = renderer.domElement.parentNode;

            if( container ) {
                const width = container.offsetWidth;
                const height = container.offsetHeight;

                renderer.setSize( width, height );
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        }

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }

        const element = document.getElementById('render-die-line')
        renderer.domElement.id = 'die-line'
        if(element !== null) {
            element.appendChild(renderer.domElement)
        }

        window.addEventListener('resize', onWindowResize)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minZoom = 0.1
        controls.maxZoom = 100
        controls.enableRotate = false
        controls.enablePan = false
        
        animate()

        return () => {
            element.removeChild(renderer.domElement)
        }

    }, [sizeOptions])

    return (
        <div  id="die-line-container" className="w-full h-full">
            <div id="render-die-line"/>
        </div>
    )
}

export default DieLineComponents