import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { baseRingModelData, weddrings } from './productdata';
import * as THREE from 'three';
import * as WEBGI from 'webgi';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import CustomMaterialConfigPlugin from './custommaterialconfig';
let app;
const initWedRingMainApp = function(){
    app = createApp({props:[]},{properties:[]});
    app.component('headercmp',{
        props:['onlybanner'],
        data(){
            return{};
        },
        created(){
        },
        mounted(){
        },
        methods:{},
        template:`
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo" onclick="location.href='/Jewellery/index.html'">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">Collection</span></a>
                    </li>
                    <li class="slider-li">
                            <a class="sliderA" href="#"><span class="navSpan">About</span></a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Account</span>
                    </a>
                    </li>
                    <li class="slider-li">
                    <a class="sliderA" href="#">
                        <span>Cart</span>
                        <div class="cart-total">0</div>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menuNavBar" v-if="!onlybanner">
            <nav class="nav">
                <ul class="slider-ul">
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">All jewellery</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Gold</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span class="navSpan">Diamond</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Earrings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Wedding Rings</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>Rivaah</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>MIA</span></a>
                    </li>
                    <li class="slider-li-menu slider-li">
                        <a class="sliderA-menu sliderA" href="#"><span>More</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    `});

    app.component('footercmp',{
        props:[],
        data(){
            return{};
        },
        created(){
        },
        mounted(){
        },
        methods:{},
        template:`
        <footer class="footerBlock">
        <div  class="footerContainer">
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Useful Links</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Delivery Information</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >International Shipping</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Payment Options</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" >Track your Order</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" >Returns</a></li>
            <li><a class="gtm-footer-link" href="#" title="Find a Store" >Find a Store</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Information</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Careers</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >Blog</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Offers & Contest Details</a></li>
            <li><a class="gtm-footer-link" href="#" title="Track your Order" >Help & FAQs</a></li>
            <li><a class="gtm-footer-link" href="#" title="Returns" >About Tanishq</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Contact Us</h2>
            <ul id="collapsible-links" class="menu-footer content">
            <li><a class="gtm-footer-link" href="#" title="Delivery Information" >Write to Us</a></li>
            <li><a class="gtm-footer-link" href="#" title="International Shipping" >1800-266-0123</a></li>
            <li><a class="gtm-footer-link" href="#" title="Payment Options" >Chat with Us</a></li>
            </ul>
        </div>
        <div style="margin-left:4em;width:20em"><h2 class="footerTitle">Download</h2>
            <div>
            <a class="gtm-footer-link" href="#">
                <img class="app-download appstore-img" src="./images/appstore.png" alt="appstore">
            </a>
            <a class="gtm-footer-link" href="#">
                <img class="app-download" src="./images/playstore.png" alt="sdf">
            </a>
            </div>
        </div>
        </div>
        <div>
            <p style="margin-left:2em; font-size:large; color:red">**This is a demo website for training purpose only. It has no connection with or have intention to replicate the original Tanishq website.</p>
        </div>
        </footer>
   `});

    app.component('ringModelSelector',{
        props:['ringData'],
        data(){
            return{};
        },
        created(){

        },
        mounted(){
            const ringSelectorContainer= document.getElementById('ringSelectorContainer');
            if(this.ringData.length < 5){
                ringSelectorContainer.style.justifyContent = "center";
            }
            ringSelectorContainer.addEventListener('wheel',function(e) {
                const race = 50;
                if (e.deltaY > 0){
                    if(screen.width<=500)
                        ringSelectorContainer.scrollTop += race;
                    else
                        ringSelectorContainer.scrollLeft += race;
                }else{
                    if(screen.width<=500)
                        ringSelectorContainer.scrollTop -= race;
                    else
                        ringSelectorContainer.scrollLeft -= race;
                }
                e.preventDefault();
            });
        },
        methods:{
            openModel(id){
                this.$emit('openBaseModel',id);
            }
        },
        template:`
            <div style="background: #535353;opacity: 0.2;height: 100%;width: 100%;position: absolute;filter: blur(1px);z-index:120"></div>
            <div id="ringSelectorDiv">
                <div id="ringSelectorBlock">
                    <div id="ringSelectorContainer">
                        <div class="ringCatalogContainer" v-for="ring in ringData" @click="openModel(ring.id)">
                            <img class="ringSelectorCatalogImage" :src="'./images/'+ring.imgSrc">
                        </div>
                    </div>
                </div>
                <div id="selectorTitle">Select Base Model</div>
            </div>
        `
    });

    app.component('editorscene',{
        props:['editMode'],
        data(){
            return{
                bigCanvas:true,
                isLoading: false,
                isLoaded: false,
                loadPercentage:0,
                nightMode:false,
                turnTable: true,
                ringCatalogs:[],
                showBaseModelSelectMenu: false,
                selectedModel: null,
                selectedMetal: null,
                selectedGem: null,
                selectedSize: null,
            };
        },
        created(){
            if(screen.width<=500){
                this.bigCanvas = false;
            }
            document.addEventListener('removethreeinstance',()=>{
            });
            this.ringCatalogs = baseRingModelData;
            if(this.nightMode){
                document.documentElement.className = 'night';
            }else{
                document.documentElement.className = 'day';
            }
            document.addEventListener('materialchangeevent',(e)=>{
                switch(e.detail.variation.toLowerCase()){
                    case 'metal' : this.selectedMetal = e.detail.matuid;
                                    for(const variation of document.getElementsByClassName('variationImage')){
                                        if(variation.id.startsWith(e.detail.variation)){
                                            variation.classList.remove("variationImageActive");
                                        }
                                    }
                                    const metal = document.getElementById(this.selectedMetal);
                                    metal.classList.add("variationImageActive");
                                    break;
                    case 'gem' : this.selectedGem = e.detail.matuid;
                                    for(const variation of document.getElementsByClassName('variationImage')){
                                        if(variation.id.startsWith(e.detail.variation)){
                                            variation.classList.remove("variationImageActive");
                                        }
                                    }
                                    const gem = document.getElementById(this.selectedGem);
                                    gem.classList.add("variationImageActive");
                                    break;
                }

            });
        },
        mounted(){
            setTimeout(()=>{this.openBaseModelSelectorMenu()},300);
        },
        unmounted(){
            if(this.viewer!=null){
                this.viewer.renderer.refreshPipeline();
                this.viewer.scene.disposeSceneModels()
                this.viewer.dispose();
            }
        },
        watch:{
            loadPercentage: function(val){
                const loader = document.getElementById('loader');
                if(loader !=null){
                    loader.style.width = this.loadPercentage + '%';
                }
                if(val===100){
                    this.isLoading = false;
                    this.isLoaded = true;
                }
            },
        },
        methods:{
            selectSize(size){
                this.selectedSize = size;
            },
            openBaseModelSelectorMenu(){
                this.showBaseModelSelectMenu = true;
            },
            openBaseModelForEdit(id){
                if(this.viewer!=null){
                    this.viewer.renderer.refreshPipeline();
                    this.viewer.scene.disposeSceneModels()
                    this.viewer.dispose();
                }
                const selectedModel = this.ringCatalogs.filter((o)=> (o.id === id))[0];
                if(selectedModel!=null){
                    this.isLoading = true;
                    this.selectedModel = selectedModel;
                    this.selectedSize = selectedModel.sizes[0];
                    this.showBaseModelSelectMenu = false;
                    this.loadPercentage = 10;
                    setTimeout(()=>{this.initWebGI();},10);
                }else{
                    alert("Model not found");
                }
            },
            async initWebGI(){
                this.loadPercentage = 15;
                this.viewer = new WEBGI.ViewerApp({
                    canvas: document.getElementById('editorSceneBlock'),
                    isAntialiased: true,
                    useRgbm: true
                  }) ;
                const manager = new WEBGI.AssetManagerPlugin();
                await this.viewer.addPlugin(manager);
                this.viewer.renderer.displayCanvasScaling = Math.min(window.devicePixelRatio, 2);
               /* await this.viewer.addPlugin(WEBGI.TonemapPlugin);
                const pp =await this.viewer.addPlugin(WEBGI.ProgressivePlugin);;
                await this.viewer.addPlugin(WEBGI.SSRPlugin);
                const diamondPlugin = await this.viewer.addPlugin(WEBGI.DiamondPlugin);
                await this.viewer.addPlugin(WEBGI.SSAOPlugin);
                const ta = await this.viewer.addPlugin(WEBGI.TemporalAAPlugin);
                await this.viewer.addPlugin(WEBGI.GroundPlugin);
                const bloom = await this.viewer.addPlugin(WEBGI.BloomPlugin);
                const matConfig = await this.viewer.addPlugin(WEBGI.MaterialConfiguratorPlugin);*/

                await WEBGI.addBasePlugins(this.viewer);
                const matPlugin = await this.viewer.addPlugin(CustomMaterialConfigPlugin);
                const camViews = this.viewer.getPlugin(WEBGI.CameraViewPlugin);
                this.viewer.renderer.refreshPipeline();
                // pp.enabled = true;
                // ta.enabled = true;
                //To clickbackground
                this.viewer.getPlugin(WEBGI.TonemapPlugin).config.clipBackground = true;
                const options = {autoScale: false}
                const assets = await manager.addFromPath("./objects/"+ this.selectedModel.objSrc, options);
                this.loadPercentage = 80;
                this.viewer.scene.environment = await manager.importer.importSingle({path:'./images/gem_2.hdr'});
                this.loadPercentage = 90;
                const diamondPlugin = this.viewer.getPlugin(WEBGI.DiamondPlugin);
                // diamondPlugin.envMap = await manager.importer.importSingle({path:'./images/aircraft_workshop_01_1k.hdr'});
                diamondPlugin.envMap = await manager.importer.importSingle({path:'./images/gem_2.hdr'});
                // diamondPlugin.envMapIntensity = 1.5;
                // this.viewer.scene.envMapIntensity=1.5;
                this.controls = this.viewer.scene.activeCamera.controls;
                this.controls.autoRotate = this.turnTable;
                this.controls.autoRotateSpeed = 0.8;
                if(!this.bigCanvas){
                    this.controls.zoomOut(1);
                    this.controls.zoomOut(1);
                }
                this.loadPercentage = 100;
            },
            toggleSceneMode(){
                this.nightMode = !this.nightMode;
                const bg =document.getElementById('customizeEditorContainer');
                const close = document.getElementById('closeEditorDiv');
                if(this.nightMode){
                    document.documentElement.className = 'night';
                }else{
                    document.documentElement.className = 'day';
                }
            },
            toggleTurnTable(){
                this.turnTable = !this.turnTable;
                
                if(this.turnTable){
                    this.controls.autoRotate = true;
                    this.controls.autoRotateSpeed = 1;
                }else{
                    this.controls.autoRotate = false;
                }
            },
            closeEditor(){
                this.$emit('closeEditorEvent');
            },
        },
        template:`
            <headercmp :onlybanner="true"></headercmp>
            <div id="editorLoader" v-if="isLoading">
                <div id="loader"></div>
            </div>
            <ringModelSelector v-if="showBaseModelSelectMenu" :ringData=ringCatalogs @openBaseModel="(id)=>openBaseModelForEdit(id)"></ringModelSelector>
            <div id="bigCanvas" v-if="bigCanvas">
                <canvas id="editorSceneBlock" height="100%" width="100%"></canvas>
                <div v-if="isLoaded" id="sceneBackgroundControlDiv">
                    <img v-if="nightMode" class="sceneOptionButtons" src="./images/moon.svg" @click="toggleSceneMode()">
                    <img v-if="!nightMode" class="sceneOptionButtons" src="./images/daymode.svg" @click="toggleSceneMode()">
                    <svg v-if="turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                        <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                        <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                    </svg>
                    <svg v-if="!turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                        <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                        <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                        <path d="M20 2 L2 20"/>
                    </svg>
                </div>
                <div :style="{'width':isLoaded ? '30vw' : '0' }" id="mconfiguratorBlock">
                </div>
                <div :style="{'width':isLoaded ? '30vw' : '0' }" id="mconfiguratorContainer">
                    <div id="modeTitleBlock" v-if="isLoaded">
                        <span class="modelTitle">{{selectedModel.name}}</span>
                        <div id="ringSettings" @click="openBaseModelSelectorMenu()" title="Change Base Model"><img style="height:100%;width:100%" src="./images/setting.svg"></div>
                    </div>
                        <div class="priceEstimate" v-if="isLoaded" title="Proceed to preview for final price estimate">&#8377;{{selectedModel.basePrice}} <span>onwards</span>
                        <div class="subDesc">Price may vary depending on the metal, gem, the final design selected. Click preview to see the final price breakup</div>
                    </div>
                    <div id="mconfigurator"></div>
                    <div class="infoBlocks" v-if="isLoaded">
                        <div class="variationTitle">Size</div>
                        <div id="sizeChart">
                            <div class="sizeOption" :class="selectedSize == size? 'sizeActive' : ''" v-for="size in selectedModel.sizes" @click="selectSize(size)">{{size}}</div>
                        </div>
                        <div class="subDesc" style="font-size:1.25em;margin-top:2em;font-family: serif;">Weight will increase as per the Size. Check Sizing Comparison</div>
                    </div>
                    <div class="infoBlocks" v-if="isLoaded">
                        <div class="variationTitle">Description</div>
                        <div id="descBlock">
                            <span class="descText">{{selectedModel.description}}</span>
                        </div>
                    </div>
                    <div id="finalizeBlock">
                        <div id="finalizeButtonContainer">
                            <button id="backFinalize" @click="closeEditor()">Cancel</button>
                            <button id="proceedFinalize"><span>Preview </span></button>
                        </div>
                    </div>
                </div>
                <div id="closeEditorDiv" @click="closeEditor()" title="Close Customizer">x</div>
            </div>
            <div id="smallCanvas" v-else>
                <div style="position:relative">
                    <canvas id="editorSceneBlock" height="70%" width="80%"></canvas>
                    <div id="mconfigurator"></div>
                </div>
                <div v-if="isLoaded" id="sceneBackgroundControlDiv">
                    <img v-if="nightMode" class="sceneOptionButtons" src="./images/moon.svg" @click="toggleSceneMode()">
                    <img v-if="!nightMode" class="sceneOptionButtons" src="./images/daymode.svg" @click="toggleSceneMode()">
                    <svg v-if="turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                        <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                        <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                    </svg>
                    <svg v-if="!turnTable" class="sceneOptionButtons"  @click="toggleTurnTable()" viewBox="0 0 24 24" fill="none" :stroke="nightMode ? '#ffffff' : '#4d0316'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.70001 9.26001L12 12.33L17.26 9.28001"/><path d="M12 17.7701V12.3201"/>
                        <path d="M10.76 6.28998L7.56 8.06998C6.84 8.46998 6.23999 9.47998 6.23999 10.31V13.7C6.23999 14.53 6.83 15.54 7.56 15.94L10.76 17.72C11.44 18.1 12.56 18.1 13.25 17.72L16.45 15.94C17.17 15.54 17.77 14.53 17.77 13.7V10.3C17.77 9.46998 17.18 8.45998 16.45 8.05998L13.25 6.27998C12.56 5.89998 11.44 5.89998 10.76 6.28998Z"/>
                        <path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"/><path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75"/>
                        <path d="M20 2 L2 20"/>
                    </svg>
                </div>
                <div :style="{'display':isLoaded ? 'block' : 'none' }" id="mconfiguratorContainer">
                    <div id="modeTitleBlock" v-if="isLoaded">
                        <span class="modelTitle">{{selectedModel.name}}</span>
                        <div id="ringSettings" @click="openBaseModelSelectorMenu()" title="Change Base Model"><img style="height:100%;width:100%" src="./images/setting.svg"></div>
                    </div>
                        <div class="priceEstimate" v-if="isLoaded" title="Proceed to preview for final price estimate">&#8377;{{selectedModel.basePrice}} <span>onwards</span>
                        <div class="subDesc">**Price may vary depending on the metal, gem, the final design selected. Click preview to see the final price breakup</div>
                    </div>
                    
                    <div class="infoBlocks" v-if="isLoaded">
                        <div class="variationTitle">Size</div>
                        <div id="sizeChart">
                            <div class="sizeOption" :class="selectedSize == size? 'sizeActive' : ''" v-for="size in selectedModel.sizes" @click="selectSize(size)">{{size}}</div>
                        </div>
                        <div class="subDesc" style="font-size:1.2em;margin-top:1em;font-family: serif;">**Weight will increase as per the Size. Check Sizing Comparison</div>
                    </div>
                    <div class="infoBlocks" v-if="isLoaded">
                        <div class="variationTitle">Description</div>
                        <div id="descBlock">
                            <span class="descText">{{selectedModel.description}}</span>
                        </div>
                    </div>
                    <div id="finalizeBlock">
                        <div id="finalizeButtonContainer">
                            <button id="backFinalize" @click="closeEditor()">Cancel</button>
                            <button id="proceedFinalize"><span>Preview </span></button>
                        </div>
                    </div>
                </div>
                <div id="closeEditorDiv" @click="closeEditor()" title="Close Customizer">x</div>
            </div>
    `});

    app.component('wedapp',{
        props:[],
        data(){
            return{
                weddrings: [],
                weddringColSize: 4,
                customizeMode: false,
            };
        },
        created(){
            this.weddrings = weddrings;
            if(screen.width <= 500){
                this.weddringColSize = 2;
            }
        },
        mounted(){
            if(screen.width <= 500){
                this.weddringColSize = 2;
            }
        },
        methods:{
            getWeddringRowNum(){
                return Math.ceil(this.weddrings.length/this.weddringColSize);
            },
            getWeddringIndex(row,col){
                return (row-1)*this.weddringColSize + (col);
            },
            isCellAvailable(row,col){
                if(this.getWeddringIndex(row,col) > this.weddrings.length)
                    return false;
                return true;
            },
            openCategory(cat){
            },
            startCustomizing(){
                this.customizeMode = true;
                const editorContainer = document.getElementById('customizeEditorContainer');
                if(editorContainer!=null){
                    if(screen.width <= 500){
                        editorContainer.style.top= '7.5rem';
                        editorContainer.style.left= '0';
                        editorContainer.style.height = 'calc(100vh - 7.5rem)';
                    }else{
                        editorContainer.style.top= '5rem';
                        editorContainer.style.left= '0';
                        editorContainer.style.height = 'calc(100vh - 5rem)';
                    }
                    editorContainer.style.width = '100vw';
                    editorContainer.style.opacity = '1';
                    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                }else{
                    console.log("editor dom not available");
                }
            },
            closeCustomizEditor(){
                document.dispatchEvent(new Event('removethreeinstance'));
                this.customizeMode = false;
                const editorContainer = document.getElementById('customizeEditorContainer');
                if(editorContainer!=null){
                    document.getElementsByTagName('body')[0].style.removeProperty("overflow");
                    editorContainer.style.top= '40vh';
                    editorContainer.style.left= '40vw';
                    editorContainer.style.height = '20vh';
                    editorContainer.style.width = '20vw';
                    editorContainer.style.opacity = '0';
                }else{
                    console.log("editor dom not available");
                }
            }
        },
        template:`
        <headercmp></headercmp>
        <div id="customizeEditorContainer">
            <editorscene :editMode="customizeMode" v-if="customizeMode" @closeEditorEvent="closeCustomizEditor()"></editorscene>
        </div>
        <div id="weddingRingAdArea">
            <div class="weddingRingAreaHeadBlock">
            <h1 id="weddHead">Your loved ones are <span id="weddHeadUnique">Unique</span></h1>
            <h3 id="weddSubHead">so should be their, Rings.</h3>
            <p id="weddsub">Customize your uniqe ring with realistic graphics and pure beauty of the collection.</p>
            <div id="customizeButton" @click="startCustomizing()">
                <span style="font-size: larger;padding-left: 1em;">Start now</span>
                <div id="customizeButtonCircle"><img style="height:1.2em;width:1.2em" src="./images/edit.svg"/></div>
            </div>
            </div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Wedding Rings</h4></div>
            <div class="categoryHeadSub"><p>Browse through our vast collection to find the perfect one as yours!</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
            <table class="catagoryTable" style="width: 95%">
                <tr v-for="row in Number(getWeddringRowNum())" style="padding-bottom:1em">
                    <td class="categoryGrid" v-for="col in Number(weddringColSize)" style="padding-bottom: 1.5em;">
                        <div style="border: 1px solid rgb(43,24,25,0.7);width: 92%;cursor: default;" class="categoryItemBlock" v-if="isCellAvailable(row,col)" @click="openCategory(weddrings[getWeddringIndex(row,col)-1])">
                            <div class="categoryImgContainer"><img style="width:100%; cursor: pointer;" :src="'./images/'+ weddrings[getWeddringIndex(row,col)-1].imgSrc"></div>
                            <div class="categoryTitleContainer" style="padding-left:1em;color: #222;border-top: 1px solid rgb(43,24,25,0.7);margin-bottom:1rem">
                                <h4 style="max-width:90%; overflow:hidden;margin-bottom:0;font-weight:bold;font-size:0.9rem">{{weddrings[getWeddringIndex(row,col)-1].name}}</h4>
                                <span class="p-price">&#8377; {{weddrings[getWeddringIndex(row,col)-1].price}}</span>
                                <span class="p-gender">{{weddrings[getWeddringIndex(row,col)-1].gender}} | {{weddrings[getWeddringIndex(row,col)-1].category}}</span>
                                <div class="exploreButtonBox">Explore</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="loadMoreButtonDiv">
            <div style="width:10em" class="exploreButtonBox">Load More</div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Connect With Us</h4></div>
            <div class="categoryHeadSub"><p>We are always available to guide you at your convenience.</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <footercmp></footercmp>
        `
    });
    return app;
}

export {initWedRingMainApp};
