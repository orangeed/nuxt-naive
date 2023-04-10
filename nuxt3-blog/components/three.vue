<!-- three -->
<template>
  <div id="three" class="bg-black text-white"></div>
</template>

<script lang="ts" setup name="three">
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer"

import { onMounted } from "vue"

//创建标签元素
const handleCreateTag = (obj: any) => {
  const element = document.createElement("div")
  element.className = "tag"
  element.innerHTML = `<p>名称:${obj.name}</p><p>温度：22°</p><p>湿度：29%</p>`
  const object = new CSS3DObject(element)
  object.visible = true
  //缩放比例
  // object.scale.set(0.2, 0.2, 0.2)
  object.scale.set(1, 1, 1)
  //指定摆放位置
  object.position.copy(obj.position)
  return object
}

// 加载3d模型
const scene = new THREE.Scene()
const handleLoad3DModel = () => {
  const loader = new GLTFLoader()
  loader.load(
    "../assets/model/scene.gltf",
    (gltf: any) => {
      console.log("gltf", gltf)
      scene.add(gltf.scene)
      gltf.scene.traverse((child: any) => {
        console.log("child", child)
        //添加标签文字
        const tag = handleCreateTag(child)
        console.log('tag',tag);
        gltf.scene.add(tag) //添加到指定的场景里
      })
    },
    undefined,
    (error: any) => {
      console.log("error", error)
    }
  )
}

// 创建光源
const handleCreateLight = () => {
  // 环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.1) // 创建环境光
  scene.add(ambientLight) // 将环境光添加到场景
  const spotLight = new THREE.SpotLight(0xffffff) // 创建聚光灯
  spotLight.position.set(150, 150, 150)
  spotLight.castShadow = true
  scene.add(spotLight)
}

// 创建相机
let camera: any
const handleCreateCamera = () => {
  const element: any = document.getElementById("three")
  const width = element!.clientWidth // 窗口宽度
  const height = element!.clientHeight // 窗口高度
  const k = width / height // 窗口宽高比
  // PerspectiveCamera( fov, aspect, near, far )
  camera = new THREE.PerspectiveCamera(35, k, 0.1, 1000)
  camera.position.set(150, 150, 150) // 设置相机位置

  camera.lookAt(new THREE.Vector3(10, 40, 0)) // 设置相机方向
  scene.add(camera)
}

// 创建渲染器
let renderer: any
const handleCreateRender = () => {
  const element: any = document.getElementById("three")
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
  renderer.shadowMap.enabled = true // 显示阴影
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setClearColor(0x3f3f3f, 1) // 设置背景颜色
  //this.renderer.setClearColor(0xf5f5f5, 1); // 设置背景颜色
  element.appendChild(renderer.domElement)
}

let mesh: any
const render = () => {
  if (mesh) {
    mesh.rotation.z += 0.006
  }
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

// 创建控件对象
let controls: any
const handleCreateControls = () => {
  controls = new OrbitControls(camera, renderer.domElement)
}

onMounted(() => {
  handleLoad3DModel()
  handleCreateLight()
  handleCreateCamera()
  handleCreateRender()
  handleCreateControls()
  render()
})
</script>

<style lang="scss" scoped>
#three {
  height: 100vh;
  width: 100vw;
}
</style>
