import {
  Color,
    MaterialConfiguratorBasePlugin,
    imageBitmapToBase64, makeColorSvgCircle
  } from 'webgi';

const matChangeEvent = new CustomEvent('materialchangeevent',{detail: {
  variation: '',
  matuid: '',
}})
class CustomMaterialConfigPlugin extends MaterialConfiguratorBasePlugin {
    static PluginType = "MaterialConfiguratorPlugin";
    
    propagateMatChange = function(variation, matuid){
      matChangeEvent.detail.variation = variation.title;
      matChangeEvent.detail.matuid = matuid;
      document.dispatchEvent(matChangeEvent);
    }

    makeDiamondSvg = function(c) {
      const color1 = c.lerp(new Color("#000"),0.1).getHexString();
      const color4 = c.getHexString();
      const color3 = c.lerp(new Color("#FFF"),0.1).getHexString();
      const color2 = c.lerp(new Color("#FFF"),0.2).getHexString();
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23000000'%3E%3Cg stroke-width='0'%3E%3C/g%3E%3Cg stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpolygon style='fill:%23"+color1+";' points='255.999,450.013 0,191.905 97.783,61.992 414.217,61.992 512,191.905 '%3E%3C/polygon%3E%3Cpolygon style='fill:%23"+color1+";' points='511.999,191.909 255.999,450.013 389.005,191.909 '%3E%3C/polygon%3E%3C/g%3E%3Cg%3E%3Cpolygon style='fill:%23"+color2+";' points='255.999,191.909 255.999,450.013 389.005,191.909 '%3E%3C/polygon%3E%3Cpolygon style='fill:%23"+color2+";' points='97.783,61.987 122.994,191.909 0,191.909 '%3E%3C/polygon%3E%3C/g%3E%3Cpolygon style='fill:%23"+color3+";' points='122.994,191.909 255.999,191.909 255.999,61.987 '%3E%3C/polygon%3E%3Cg%3E%3Cpolygon style='fill:%23"+color4+";' points='414.216,61.987 511.999,191.909 389.005,191.909 '%3E%3C/polygon%3E%3Cpolygon style='fill:%23"+color4+";' points='122.994,191.909 255.999,450.013 255.999,191.909 '%3E%3C/polygon%3E%3Cpolygon style='fill:%23"+color4+";' points='255.999,61.987 122.994,191.909 97.783,61.987 '%3E%3C/polygon%3E%3C/g%3E%3Cpolygon style='fill:%23"+color3+";' points='255.999,61.987 389.005,191.909 414.216,61.987 '%3E%3C/polygon%3E%3C/g%3E%3C/svg%3E";
    }
    // this function is automatically called when an object is loaded with some material variations
    async _refreshUi() {
      if (!(await super._refreshUi())) return false; // check if any data is changed.
      const configuratorDiv = document.getElementById("mconfigurator");
  
      configuratorDiv.innerHTML = "";
      if(screen.width>500){
        for (const variation of this.variations) {
          const container = document.createElement("div");
          container.classList.add("variations");
          container.innerHTML = "<span class=\"variationTitle\"> "+ variation.title;
          configuratorDiv.appendChild(container);
          const varTile = document.createElement("div");
          varTile.classList.add("variationTile");
          container.appendChild(varTile);
          variation.materials.map((material) => {
            // material is the variation that can be applied to an object
            let image;
            if (!variation.preview.startsWith("generate:")) {
              const pp = material[variation.preview] || "#ff00ff";
              image = pp.image || pp;
              image = pp.image ? imageBitmapToBase64(pp.image, 100) : undefined
              if (!image) image = makeColorSvgCircle(pp)
            } else {
              // Generate a small snapshot of the material preview based on some shape (optional)
              const matColor = material.color;
              if(material.isDiamondMaterial){
                image = this.makeDiamondSvg(matColor);
              }else{
                image = makeColorSvgCircle(matColor.getHexString());
              }
              
              // image = this._previewGenerator.generate(
              //   material,
              //   variation.preview.split(":")[1]
              // );
            }
            // callback to change the material variations
            const onClick = () => {
              this.propagateMatChange(variation, variation.title+material.uuid);
              this.applyVariation(variation, material.uuid);
            };
            // Generate a UI from this data.
            // console.log({
            //   uid: material.uuid,
            //   color: material.color,
            //   material: material,
            //   image,
            //   onClick
            // });
            const selectorDiv = document.createElement("div");
            selectorDiv.classList.add("variationSelector");
            selectorDiv.innerHTML = '<img class="variationImage" id="'+variation.title+material.uuid+'" src="' + image + '" title="'+ material.name + '"/>';
            selectorDiv.onclick = onClick;
            varTile.append(selectorDiv);
          });
          this.propagateMatChange(variation, variation.title+variation.materials[0].uuid);
          this.applyVariation(variation, variation.materials[0].uuid);
        }
      }else{
        for (const variation of this.variations) {
          const container = document.createElement("div");
          container.classList.add("variations");
          // container.innerHTML = "<span class=\"variationTitle\"> "+ variation.title;
          configuratorDiv.appendChild(container);
          const varTile = document.createElement("div");
          varTile.classList.add("variationTile");
          container.appendChild(varTile);
          variation.materials.map((material) => {
            // material is the variation that can be applied to an object
            let image;
            if (!variation.preview.startsWith("generate:")) {
              const pp = material[variation.preview] || "#ff00ff";
              image = pp.image || pp;
              image = pp.image ? imageBitmapToBase64(pp.image, 100) : undefined
              if (!image) image = makeColorSvgCircle(pp)
            } else {
              // Generate a small snapshot of the material preview based on some shape (optional)
              const matColor = material.color;
              if(material.isDiamondMaterial){
                image = this.makeDiamondSvg(matColor);
              }else{
                image = makeColorSvgCircle(matColor.getHexString());
              }
              
              // image = this._previewGenerator.generate(
              //   material,
              //   variation.preview.split(":")[1]
              // );
            }
            // callback to change the material variations
            const onClick = () => {
              this.propagateMatChange(variation, variation.title+material.uuid);
              this.applyVariation(variation, material.uuid);
            };
            // Generate a UI from this data.
            // console.log({
            //   uid: material.uuid,
            //   color: material.color,
            //   material: material,
            //   image,
            //   onClick
            // });
            const selectorDiv = document.createElement("div");
            selectorDiv.classList.add("variationSelector");
            selectorDiv.innerHTML = '<img class="variationImage" id="'+variation.title+material.uuid+'" src="' + image + '" title="'+ material.name + '"/>';
            selectorDiv.onclick = onClick;
            varTile.append(selectorDiv);
          });
          this.propagateMatChange(variation, variation.title+variation.materials[0].uuid);
          this.applyVariation(variation, variation.materials[0].uuid);
        }

      }

      return true;
    }
  }

  export default CustomMaterialConfigPlugin;
  