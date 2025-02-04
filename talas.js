const talas_desc =
    '<h1>TALAS-Toolkit</h1><b>T</b>rees and <b>A</b>groforestry to <b>L</b>everage <b>A</b>groecosystem <b>S</b>ervices<hr/>' +
    '<p>A collection of online tools for integrated natural resource management:</p>'
const genriver_desc =
    '<p>Generic River  Flow (GenRiver) is a semi-distributed, process-based model that extends a plot-level water balance to sub-catchment level. It was developed for data-scarce situations and is based on empirical equations. The model can be used to explore the basic changes of river flow characteristics across spatial scales: from patch, sub -catchment to catchment. GenRiver is a simple river flow model that can be used to explore our understanding of historical changes in river flow owing to land-use changes.</p>' +
    '<p>The <strong>online app</strong> is available at: <a href="https://genriver.agroforestri.id/">https://genriver.agroforestri.id/</a>.</p>' +
    '<blockquote><p>If the server is down due to memory or bandwidth limitations, run the app using RStudio by running the script below.</p>' +
    '<pre class="language-text">shiny::runGitHub("genriver", "degi")</pre></blockquote>' +
    '<p><strong>User manual and documentation</strong> are available at: <a href="https://degi.github.io/genriver/">https://degi.github.io/genriver/</a></p>' +
    '<p><strong>Source code</strong>: <a href="https://github.com/degi/genriver">https://github.com/degi/genriver</a></p>'

const rfallow_desc =
    "<p>R-FALLOW (Forest, Agroforest, Low-value Land Or Waste?) is a model of rural landscape dynamics and related economic-ecological trade-off developed using the R language. It has unique characteristics as compared to other rural landscape models mainly because it simulates landcover change at landscape (e.g., district or province) scale driven by smallholder farmers' decision on labour, financial and land allocation to land use options. Therefore, it considers smallholder farmers as the main agent of land use dynamics, along with possible land use change over State’s or concession lands or conversion of forest lands. Existing models of rural landscape dynamics usually create projection of future land uses using e.g., land use transition matrix.</p>" +
    '<p>The initial version of the FALLOW model was developed by van Noordwijk (2002) using the Stella programming platform, which was then translated into the PC Raster version (e.g., see Suyamto et al. 2009) to better handle the spatial input information. More recently, to better facilitate model’s parametrisation and a possibility for the model to ‘communicate’ with other models developed using the contemporary R or Java language, the FALLOW model is translated into the R programming language. The FALLOW model has been used as a supporting tool to assess projected impacts and analyse economic-ecological trade-off among land use scenarios in different countries especially in Southeast Asia such as Indonesia, the Philippines, and Vietnam (van Noordwijk et al. 2008, Lusiana et al. 2012, Mulia et al. 2013, Tata et al. 2013, Mulia et al. 2018).</p>' +
    '<p>The <strong>online app</strong> is available at: <a href="https://rfallow.agroforestri.id/">https://rfallow.agroforestri.id/</a>.</p>' +
    'The <strong>source code</strong> is available at: <a href="https://github.com/degi/rfallow">https://github.com/degi/rfallow</a>'

const wanulcas_desc =
    '<p>Water, Nutrient and Light Capture in Agroforestry Systems (WaNuLCAS) is a tree–crop–soil interactions model at plot level with daily time steps. The model simulates interactions between crops and trees in sharing and competing for aboveground resource, that is, light, and belowground resources, that is, nitrogen, phosphorous and water. The model can be used toassess the performance (production and profitability) of agroforestry systems under differentmanagement regimes with different spatial and temporal configurations</p>.'

const slim_desc =
    '<p>The purpose of the Simple Light Interception Model (SLIM) is to compute canopy closure at any height above the ground within a forest canopy. The forest canopy in SLIM is a 3D geometrical object modelled from measured tree properties. SLIM can be used for stand profile visualization.</p>'

const fba_desc =
    '<p>Functional Branch Analysis (FBA) is a tool to generate tree architecture and allometric scaling. It can be used as a non-destructive approach to develop allometric equations that are often used to estimate plot-level carbon stocks.</p>'

const funatic_desc =
    '<p>The ‘Tree functional attributes and ecological database’ (Tree FUNATIC) is an open access, web-based database, developed by ICRAF, that provides information about the ecological requirements, geographical distribution, functional attributes and traits of a variety of tree species. The database also stores tree entity information from observations, such as stem diameter, height and crown dimensions, as well as habitat information, including geographic information on soils and climate</p>'

const abacus_desc =
    '<p><b>REDD-Abacus</b> is a tool for calculating land-based carbon emissions from land cover changes. This application provides a simple estimation of future land cover area from the projection of the conversion rate. The projection is iterated within a constrained zonation area. The conversion rate modification is considered as a "<b>Land Use Planning</b>" scenario, in which the future impact on carbon emission can be estimated.</p>' +
    '<ul><li><strong>The minimum required data parameters</strong> are a pair of time series <strong>land cover maps (at 1 ha resolution)</strong> and land-based <strong>carbon stock (in tC ha<sup>-1</sup>)</strong> for each land cover class.</li><li>A zonation map can be added for your purposes. Notably, the projection of land cover changes will be based on each zonation area constrain.</li><li>Additional sources of land-based emissions can also be added.</li></ul>' +
    '<p>This REDD-Abacus-2 is an update to the previous standalone application of REDD-Abacus-SP version 1. You may refer to the same documentation of the tool.</p>' +
    '<p>This app is still under development. The draft version is available at: <a href="https://abacus.agroforestri.id/">https://abacus.agroforestri.id/</a></p>' +
    '<p><strong>Source code</strong>: <a href="https://github.com/degi/redd-abacus">https://github.com/degi/redd-abacus</a></p>' +
    '<p>The previous version of <b>REDD-Abacus-SP</b> is available at: <a href="https://sourceforge.net/projects/redd-abacus">https://sourceforge.net/projects/redd-abacus</a></p>'

const forcastree_desc =
    '<p>FORCASTREE (a model FOR simulating growth and CArbon of foreST and agroforest tREEs): a tree-tree growth and interaction model, formerly known as SExI-FS (Spatially Explicit Individual-based Forest Simulator), developed by the World Agroforestry (ICRAF).</p>' +
    '<p>FORCASTREE is a spatially explicit individual-based model that simulates the growth of individual trees in a mixed-species forest or agroforestry system. The model simulates the growth of individual trees in a mixed-species forest or agroforestry system. The model can be used to explore the growth of individual trees and the overall stand dynamics under different management scenarios.</p>' +
    'The original SExI-FS is available at: <a href="https://sourceforge.net/projects/sexifs.ecomodels.p/">https://sourceforge.net/projects/sexifs.ecomodels.p/</a>'

import * as THREE from 'three'
import { OrbitControls } from 'https://unpkg.com/three@0.172.0/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/GLTFLoader.js'
import { RGBELoader } from 'https://unpkg.com/three@0.172.0/examples/jsm/loaders/RGBELoader.js'
import {
    CSS2DRenderer,
    CSS2DObject,
} from 'https://unpkg.com/three@0.172.0/examples/jsm/renderers/CSS2DRenderer.js'

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let talas

let camera, scene, renderer, labelRenderer
let labels = [
    {
        id: 'forcastree',
        arrow: 'right',
        text: 'FORCAS<b>TREE</b>',
        desc: forcastree_desc,
        logo: 'fct_logo.svg',
    },
    {
        id: 'genriver',
        arrow: 'left',
        text: '<b>Gen</b>River<b>3</b>',
        desc: genriver_desc,
        logo: 'genriver_logo.svg',
    },
    {
        id: 'rfallow',
        arrow: 'right',
        text: '<b>R</b>Fallow',
        desc: rfallow_desc,
        logo: 'rfallow_logo.png',
    },
    { id: 'wanulcas', arrow: 'left', text: 'WaNuLCAS', desc: wanulcas_desc, logo: 'wanulcas_logo.svg' },
    {
        id: 'abacus',
        arrow: 'left',
        text: '<b>REDD</b>-Abacus-<b>2</b>',
        desc: abacus_desc,
        logo: 'abacus2_logo.svg',
    },
    { id: 'fba', arrow: 'left', text: 'FBA', desc: fba_desc, logo: '' },
    { id: 'slim', arrow: 'left', text: 'SLIM', desc: slim_desc, logo: '' },
    { id: 'funatic', arrow: 'left', text: 'Tree-FUNATIC DB', desc: funatic_desc, logo: '' },
]

init()

function init() {
    const container = document.createElement('div')
    document.body.appendChild(container)

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100)
    camera.position.set(-5, 5, 11)
    scene = new THREE.Scene()

    new RGBELoader().setPath('./').load('sky_half.hdr', function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.background = texture
        scene.environment = texture
        render()

        // model
        const loader = new GLTFLoader()
        loader.load('talas.glb', async function (gltf) {
            const model = gltf.scene
            // wait until the model can be added to the scene without blocking due to shader compilation
            await renderer.compileAsync(model, camera, scene)
            model.translateY(-1)
            scene.add(model)
            for (let i = 0; i < labels.length; i++) {
                addLabel(model, labels[i])
            }
            talas = model.getObjectByName('talas')
            render()
        })
    })

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
    document.body.appendChild(renderer.domElement)

    labelRenderer = new CSS2DRenderer()
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.domElement.style.position = 'absolute'
    labelRenderer.domElement.style.top = '0px'
    document.body.appendChild(labelRenderer.domElement)

    const controls = new OrbitControls(camera, labelRenderer.domElement)
    controls.addEventListener('change', render) // use if there is no animation loop
    controls.minDistance = 8
    controls.maxDistance = 20
    controls.target.set(0, 0, 0)
    controls.update()

    window.addEventListener('resize', onWindowResize)
    document.body.addEventListener('click', function () {
        hideDesc()
    })
    document.getElementById('desc').addEventListener('click', function () {
        clickCount = 0
    })
    document.getElementById('footer_text').addEventListener('click', show_talas_desc)
    document.getElementById('about').addEventListener('click', show_about)
}

function addLabel(model, label) {
    const object = model.getObjectByName(label.id)
    if (!object) return
    const earthDiv = document.createElement('div')
    earthDiv.className = 'box_label box_label_' + label.arrow
    if (label.logo == '') {
        earthDiv.innerHTML = label.text
    } else {
        earthDiv.innerHTML =
            '<img src="images/' +
            label.logo +
            '" height=20 style="margin-right:5px"><span style="">' +
            label.text +
            '</span>'
    }
    earthDiv.addEventListener('pointerdown', function () {
        // showDesc(label.desc)
        show_page(label)
    })
    const earthLabel = new CSS2DObject(earthDiv)
    var x = 0
    if (label.arrow == 'right') {
        x = 1.2
    }
    earthLabel.center.set(x, 1)
    object.add(earthLabel)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    labelRenderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function render() {
    renderer.render(scene, camera)
    labelRenderer.render(scene, camera)
}

let clickCount = 0

function hideDesc() {
    var x = document.getElementById('desc')
    if ((clickCount == 0) & (x.style.visibility != 'hidden')) {
        clickCount++
        return
    }
    x.style.visibility = 'hidden'
    x.style.opacity = 0
    clickCount = 0
}

window.addEventListener('pointermove', (e) => {
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
    raycaster.setFromCamera(mouse, camera)
    let intersects = raycaster.intersectObject(talas)
    if (intersects.length > 0) {
        document.body.style.cursor = 'pointer'
        talas.material.color.setHex(0xb2ff9e)
    } else {
        document.body.style.cursor = 'default'
        talas.material.color.setHex(0xffffff)
    }
    render()
})

window.addEventListener('click', (e) => {
    mouse.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
    raycaster.setFromCamera(mouse, camera)
    let intersects = raycaster.intersectObject(talas)
    if (intersects.length > 0) {
        show_talas_desc()
        clickCount = 1
    }
})

function show_talas_desc() {
    var x = document.getElementById('desc')
    x.style.visibility = 'visible'
    x.style.opacity = 1
    x.textContent = ''

    const d = document.createElement('div')
    d.innerHTML = talas_desc
    x.appendChild(d)
    const d1 = document.createElement('div')
    d1.innerHTML = 'Available'
    d1.className = 'section_label'
    x.appendChild(d1)
    x.appendChild(click_item('genriver'))
    x.appendChild(click_item('rfallow'))
    const d2 = document.createElement('div')
    d2.innerHTML = 'Under Development'
    d2.className = 'section_label'
    x.appendChild(d2)
    x.appendChild(click_item('abacus'))
    x.appendChild(click_item('wanulcas'))
    const d3 = document.createElement('div')
    d3.innerHTML = 'Future Development'
    d3.className = 'section_label'
    x.appendChild(d3)
    x.appendChild(click_item('fba'))
    x.appendChild(click_item('forcastree'))
    x.appendChild(click_item('slim'))
    x.appendChild(click_item('funatic'))
}

function click_item(id) {
    const label = labels.find((x) => x.id == id)
    const d = document.createElement('span')
    d.className = 'box_link'
    if (label.logo == '') {
        d.innerHTML = label.text
    } else {
        d.innerHTML =
            '<img src="images/' +
            label.logo +
            '" height=18 style="margin-right:5px"><span style="">' +
            label.text +
            '</span>'
    }
    // d.innerHTML = label.text
    d.addEventListener('click', function () {
        // showDesc(label.desc)
        show_page(label)
    })
    return d
}

function show_page(label) {
    let d = document.createElement('div')
    d.className = 'box_header'
    let s1 = document.createElement('span')
    s1.className = 'page_title'
    if (label.logo == '') {
        s1.innerHTML = label.text
    } else {
        s1.innerHTML =
            '<img src="images/' +
            label.logo +
            '" height=30 style="margin-right:10px"><span style="">' +
            label.text +
            '</span>'
    }
    d.appendChild(s1)
    let s2 = document.createElement('span')
    s2.innerHTML = 'TALAS-Toolkit'
    s2.className = 'talas_link'
    s2.addEventListener('click', show_talas_desc)
    d.appendChild(s2)
    let s3 = document.createElement('div')
    s3.className = 'clear'
    d.appendChild(s3)

    let d2 = document.createElement('div')
    d2.innerHTML = label.desc
    d2.className = 'page_desc'

    var x = document.getElementById('desc')
    x.textContent = ''
    x.appendChild(d)
    x.appendChild(document.createElement('hr'))
    x.appendChild(d2)
    x.style.visibility = 'visible'
    x.style.opacity = 1

    clickCount = 0
}

function show_about() {
    var x = document.getElementById('desc')
    x.style.visibility = 'visible'
    x.style.opacity = 1
    x.innerHTML =
        '<h1>About</h1>' +
        '<hr/><p>The model and tools in this <b>TALAS-Toolkit</b> collection are free to use. The work is based on publicly funded research and may be used for non-commercial research purposes.</p>' +
        'Contact: <a href="mailto:degiharja@gmail.com">Degi Harja Asmara</a>, <a href="mailto:R.Mulia@cifor-icraf.org">Rachmat Mulia</a>' +
        '<p><b>Contributor of the model and tools:</b></p>' +
        'Ai Farida, Andree Ekadinata, Betha Lusiana, Degi Harja Asmara, Desi Suyamto, Feri Johana, Grégoire Vincent, Grace Ann Reynoso, Lisa Tanika, Meine van Noordwijk, Ni’matul Khasanah, Rachmat Mulia, Rudy Harto Widodo, Sonya Dewi, Yusi Septriandi' +
        '<p><b>The 3D graphics work is based on:</b></p>' +
        '<ul><li><a href="https://skfb.ly/opsGN">"Low Poly Flying Island"</a> by Mohamed Fsili licensed under Creative Commons Attribution.</li>' +
        '<li><a href="https://skfb.ly/o69Lt">"Viking Carrot Farm"</a> by Tom Verbeeck licensed under Creative Commons Attribution.</li>' +
        '<li><a href="https://skfb.ly/6uXNR">"The Mill"</a> by cotman sam licensed under Creative Commons Attribution-NonCommercial.</li>' +
        '<li><a href="https://skfb.ly/CJIr">"Low poly character (rigged)"</a> by Sebastian Lague licensed under Creative Commons Attribution.</li>' +
        '<li><a href="https://skfb.ly/opLRZ">"LowPoly Trees Set"</a> by Tarun_xx licensed under Creative Commons Attribution.</li>' +
        '<li><a href="https://skfb.ly/69Q6E">"Woman 02 - Mythical Beasts Jousting Assets"</a> by ikapoura licensed under Creative Commons Attribution.</li>' +
        '<li><a href="https://polyhaven.com/a/syferfontein_1d_clear">Background image</a> by Greg Zaal licensed under CC0</li></ul>'
}
