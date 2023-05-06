<!-- three -->
<template>
  <div id="three" class="bg-black text-white"></div>
  <n-button strong secondary class="absolute top-4 right-4 bg-black text-white" @click.stop="handleSelectFlat"> 平面 </n-button>
  <!-- 文章 -->
  <n-modal
    v-model:show="isShowArticle"
    preset="dialog"
    title=""
    size="huge"
    role="dialog"
    aria-modal="true"
    style="width: 70%; margin: 40px auto"
    @click="handleClickModel"
  >
    <Article />
  </n-modal>
</template>

<script lang="ts" setup name="three">
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { onMounted } from "vue"
import TWEEN from "@tweenjs/tween.js"
import { emitter } from "../utils/mitt"
import { Ref, ref } from "vue"
import Article from "./article.vue"

// 创建渲染器
let renderer: any
const handleCreateRender = () => {
  const element: any = document.getElementById("three")
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: "highp" })
  renderer.setSize(element.clientWidth, element.clientHeight) // 设置渲染区域尺寸
  renderer.shadowMap.enabled = true // 显示阴影
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  // renderer.setClearColor(0x000000, 1) // 设置背景颜色
  element.appendChild(renderer.domElement)
}

// 加载3d模型
const scene = new THREE.Scene()
const handleLoad3DModel = () => {
  const loader = new GLTFLoader()
  loader.load(
    "../assets/model/house.glb",
    (gltf: any) => {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          switch (child.name) {
            case "floor":
              child.material = new THREE.MeshBasicMaterial({ color: 0xcd6a15 })
              break

            default:
              break
          }
        }
      })
      scene.add(gltf.scene)
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
  spotLight.position.set(150, 200, -200)
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
  camera = new THREE.PerspectiveCamera(4, k, 1, 1000)
  camera.position.set(150, 200, -200) // 设置相机位置
  camera.lookAt(new THREE.Vector3(14, 40, 0)) // 设置相机方向
  scene.add(camera)
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

// 点击模型
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const onMouseClick = (event: any) => {
  //通过鼠标点击的位置计算出raycaster所需要的点的位置，以屏幕中心为原点，值的范围为-1到1.
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  console.log("intersects", intersects)
  if (intersects.length > 0) {
    intersects.forEach((v) => {
      switch (v.object.name) {
        case "pc01":
          handleAnimateCamera(camera, { x: 100, y: 10, z: 0 }, 1600)
          if (!isShowArticle.value) {
            hanleOpenArticle()
          }
          break
        case "pc02":
          handleAnimateCamera(camera, { x: 100, y: 10, z: 0 }, 1600)
          if (!isShowArticle.value) {
            hanleOpenArticle()
          }
          break
        case "board":
          // 将相机定位到点击的位置
          handleAnimateCamera(camera, { x: 50, y: 5, z: -10 }, 1600)
          break
        default:
          break
      }
    })
  }
}

// 切换视角
const handleAnimateCamera = (camera: any, newP: any, time: any) => {
  new TWEEN.Tween(camera.position)
    .to(
      {
        x: newP.x,
        y: newP.y,
        z: newP.z
      },
      time
    )
    .easing(TWEEN.Easing.Quadratic.InOut) //.easing(TWEEN.Easing.Cubic.InOut);
    .onUpdate(() => {
      // onUpdate会在镜头移动到指定位置期间不停的循环调用
      // 使用lookAt，让镜头移动时始终看向场景
      camera.lookAt(scene.position)
    })
    .start()
  animate()
  function animate() {
    // mesh.rotation.x += 0.01
    requestAnimationFrame(animate)
    TWEEN.update()
  }
}

// 返回平面
const handleSelectFlat = () => {
  console.log("返回平面")
  emitter.emit("3DMODEL", false)
}

/**
 * 文章相关
 */
const isShowArticle: Ref<boolean> = ref(false)
const hanleOpenArticle = () => {
  setTimeout(() => {
    isShowArticle.value = true
  }, 1400)
}

const handleClickModel = (event: any) => {
  event.stopPropagation()
}

onMounted(() => {
  handleLoad3DModel()
  handleCreateLight()
  handleCreateCamera()
  handleCreateRender()
  handleCreateControls()
  render()
  window.addEventListener("click", onMouseClick, false)
})
</script>

<style lang="scss" scoped>
#three {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgb(0, 0, 1), rgb(119, 119, 237));
  .ccard > #artCard::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 2px;
    height: 60px;
    background-color: #fd5800;
    top: 50%;
    transform: translate(0, -50%);
    opacity: 0;
  }
  .ccard > #artCard:hover::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 2px;
    height: 60px;
    background-color: #fd5800;
    top: 50%;
    transform: translate(0, -50%);
    transition: all 0.7s;
    opacity: 1;
  }
}
</style>
<style>
.n-dialog__title {
  display: none !important;
}
</style>
