import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { baseRingModelData, weddrings } from './productdata';
import * as WEBGI from 'webgi';
import CustomMaterialConfigPlugin from './custommaterialconfig';

let app;
const initCustomizerMainApp = function(){
    app = createApp({props:[]},{properties:[]});
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
            <div style="background-image: var(--bg-image);opacity: 1;height: 100%;width: 100%;position: absolute;filter: blur(1px);z-index:120"></div>
            <div class="customizerIntroHead">
                <div>Customize your unique style with next gen 3D immersive experience that combines realistic graphics and performance to create the pure beauty of the collection.</div>
            </div>
            <div class="customizerIntroPanel">
                <div style="font-size:1.5em;margin-bottom:10px">Your loved ones are <span style="color:white">Unique</span></div>
                <div>So should be their Jewellery</div>
            </div>
            <div id="ringSelectorDivCustomizer">
                <div id="ringSelectorBlock">
                    <div id="ringSelectorContainer">
                        <div class="ringCatalogContainer" v-for="ring in ringData" @click="openModel(ring.id)">
                            <img class="ringSelectorCatalogImage" :src="'./images/'+ring.imgSrc">
                        </div>
                    </div>
                </div>
                <div id="selectorTitle" style="background-color: #6161617c">Select Base Model</div>
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
                    canvas: document.getElementById('editorSceneBlockCustomizer'),
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
            disposeViewer(){
                if(this.viewer!=null){
                    this.viewer.renderer.refreshPipeline();
                    this.viewer.scene.disposeSceneModels()
                    this.viewer.dispose();
                }
            },
            closeEditor(){
                this.openBaseModelSelectorMenu();
            },
        },
        template:`
            <div id="editorLoader" v-if="isLoading">
                <div id="loader"></div>
            </div>
            <ringModelSelector v-if="showBaseModelSelectMenu" :ringData=ringCatalogs @openBaseModel="(id)=>openBaseModelForEdit(id)"></ringModelSelector>
            <div id="bigCanvas" class="customizerAppBackground" v-if="bigCanvas">
                <canvas id="editorSceneBlockCustomizer" height="100%" width="100%"></canvas>
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
            </div>
            <div id="smallCanvas" class="customizerAppBackground" v-else>
                <div style="position:relative">
                    <canvas id="editorSceneBlockCustomizer" height="70%" width="80%"></canvas>
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
            </div>
    `});
    return app;
}

export {initCustomizerMainApp};