import { createApp } from 'vue/dist/vue.esm-bundler.js'
import { Slider } from './slider';
import {categories, collection} from './productdata';
let app;
const initMainApp = function(){
    app = createApp({props:[]},{properties:[]});
    app.component('headercmp',{
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
        <div class="headerPanel" :style="{'opacity': showPropertyMode ? '0.5':'1'}">
            <figure class="logo" onclick="location.href='#'">
                <img src="./images/tanishqlogo.svg">
            </figure>
            <div class="searchbox"><span class="searchplaceholder">Search for Gold Jewellery, Diamond Jewellery and more...</span></div>
            <nav id="navright" class="nav">
                <ul class="slider-ul">
                    <li class="slider-li">
                    <a class="sliderA is-active" href="/Jewellery/index.html"><span class="navSpan">Home</span></a>
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
        <div class="menuNavBar">
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
        <div class="footerContainer">
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

    app.component('app',{
        props:[],
        data(){
            return{
                categories: [],
                categoryColSize: 5,
                collections: [],
                collectionColSize: 3,
            };
        },
        created(){
            this.categories = categories;
            this.collections = collection;
            if(screen.width <= 500){
                this.categoryColSize = 3;
                this.collectionColSize = 1;
                this.categories = this.categories.splice(0,this.categories.length-1);
            }
        },
        mounted(){
            this.slider = new Slider();
        },
        methods:{
            nextSlide(){
                this.slider.nextSlide();
            },
            previousSlide(){
                this.slider.previousSlide();
            },
            getCategoryRowNum(){
                return Math.ceil(this.categories.length/this.categoryColSize);
            },
            getCategoryIndex(row,col){
                return (row-1)*this.categoryColSize + (col);
            },
            isCellAvailable(row,col){
                if(this.getCategoryIndex(row,col) > this.categories.length)
                    return false;
                return true;
            },
            getCollectionRowNum(){
                return Math.ceil(this.collections.length/this.collectionColSize);
            },
            getCollectionIndex(row,col){
                return ((row-1)*this.collectionColSize + (col));
            },
            isCollectionCellAvailable(row,col){
                if(this.getCollectionIndex(row,col) > this.collections.length)
                    return false;
                return true;
            },
            openCategory(cat){
                location.href = "/Jewellery/weddingrings.html";
                /*switch(cat.name){
                    case 'Wedding Rings': location.href = "/Jewellery/weddingrings.html";
                        break;
                }*/
            },
        },
        template:`
        <headercmp></headercmp>
        <div class="slider js-slider">
            <div class="slider__inner js-slider__inner"></div>
            <div id="sliderControl">
                <div class="sliderControlButton" @click="previousSlide()"><img src="./images/leftarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.25rem;">
                </div>
                <div class="sliderControlButton" style="right:2em;" @click="nextSlide()"><img src="./images/rightarrow.svg" 
                    style="object-contain:contain;height:1.5em;width:1.5em;margin-left: 0.5em;">
                </div>
            </div>
            <div id="sliderExploreButton">
            </div>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Shop By Category</h4></div>
            <div class="categoryHeadSub"><p>Browse through your favorite categories. We've got them all!</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
            <table class="catagoryTable">
                <tr v-for="row in Number(getCategoryRowNum())" style="padding-bottom:1em">
                    <td class="categoryGrid" v-for="col in Number(categoryColSize)">
                        <div class="categoryItemBlock" v-if="isCellAvailable(row,col)" @click="openCategory(categories[getCategoryIndex(row,col)-1])">
                            <div class="categoryImgContainer"><img style="width:100%" :src="'./images/'+ categories[getCategoryIndex(row,col)-1].imgSrc"></div>
                            <div class="categoryTitleContainer">
                                <h4 class="categoryTitleText" style="text-align:center">{{categories[getCategoryIndex(row,col)-1].name}}</h4>
                                <span class="exploreButton">Explore <span class="hide">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> ></span>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="categoryHeadBlock">
            <div class="categoryHead"><h4>Shop By Collections</h4></div>
            <div class="categoryHeadSub"><p>Whatever the occasion, we've got a beautiful piece of jewellery for you.</p></div>
            <img src="./images/Line-Design.svg" style="margin-top: -20px;"/>
        </div>
        <div class="categoryBlock">
        <table class="catagoryTable">
            <tr v-for="row in Number(getCollectionRowNum())" style="padding-bottom:1em">
                <td class="categoryGrid" v-for="col in Number(collectionColSize)">
                    <div class="categoryItemBlock" style="width:95%" v-if="isCollectionCellAvailable(row,col)">
                        <div class="categoryImgContainer"><img style="width:100%" :src="'./images/'+ collections[this.getCollectionIndex(row,col)-1].imgSrc"></div>
                        <div class="categoryTitleContainer" style="flex-direction: row;justify-content: flex-start; margin-bottom:0">
                            <h3 class="collectionTitle">{{collections[this.getCollectionIndex(row,col)-1].name}}</h3>
                            <span class="exploreButton" style="float:right;justify-content: center; align-items: center;display:flex;">
                                Explore &nbsp;<span class="hide">&nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;</span> ></span>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
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

export {initMainApp};