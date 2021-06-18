<template>
    <div id="greeting_box">{{ greeting }}、お元気ですか？</div>
</template>

<script>

    module.exports = {
        data() {
            return {
                greeting: ''
            }
        },
        mounted() {

            const dt = new Date();
            const hours = dt.getHours();

            if(hours <= 4 || hours >= 18) {

                this.greeting = 'hello';

            } else if(hours >= 12) {

                this.greeting = 'good night';

            } else {

                this.greeting = 'good morning';

            }

        }
    }

</script>

<style scoped>

    #greeting_box {

        background-color: #ffeeee;

    }

</style>