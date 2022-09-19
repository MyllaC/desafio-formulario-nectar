<template>
    <!--Gets the slot icon and create the final svg with it-->
    <svg xmlns="http://www.w3.org/2000/svg"
         :id="id"
         :viewBox="viewBox"
         role="presentation"
         :width="localWidth"
         :height="localHeight"
         :fill="color"
         :class="styles"
         >
        <slot/>
    </svg>
</template>

<script>


export default {
    name: "IconBase",
    props: {
        //Set a fill color to the icon
        color: {
            type: String,
            default: 'currentColor'
        },
        //Defines the size (width and height) to the icon
        size: {
            type: Number,
            default: 18
        },
        //Define the svg viewbox, used only with logos and images with non-standard size (different width and height) not required in icons
        viewBox: {
            type: String,
            default: '0 0 24 24'
        },
        //Apply extra css styles to the svg
        styles: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: null
        },
        width: {
            type: Number,
            default: null
        },
        id: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            localHeight:  0,
            localWidth: 0,
        }
    },
    beforeMount() {
        this.localHeight = this.height ? this.height : this.size ? this.size : 18;
        this.localWidth = this.width ? this.width : this.size ? this.size : 18;
    },
  /*
    methods: {
        emitClick() {
            this.$emit('click')
        }
    },


   */
}

</script>
