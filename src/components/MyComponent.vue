<template>
    <div>
        <p>{{value}}</p>
        <p>{{newvalue}}</p>
        <button v-on:click="click()">click</button>
    </div>
</template>
<script>
export default {
    name:"MyComonent",
    props: {
        value: String
    },
    data(){
        return {
            newvalue: this.value
        }
    },
    methods:{
        click: function(){
            this.newvalue += 1;
            console.log(this.newvalue)
            this.$emit('getData',this.newvalue)
        }
    }
}
</script>
