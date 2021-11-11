import Vue from 'vue';
Vue.mixin({
    methods: {
        toBase64(file){
            if(file?.size){
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
            }
            return "";
        },
    }
})
