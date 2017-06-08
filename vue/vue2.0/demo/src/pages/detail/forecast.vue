<template>
<div class="sales-board">
    .sales-board
</div>
</template>

<script>
    // import VCounter from '../../components/base/counter'
    // import VMulChooser from '../../components/base/multiplyChooser'
    export default {
        components: {
            // VCounter,
            // VMulChooser
        },
        data() {
            return {
                versionList: [{
                    label: '纸质报告',
                    value: 0
                }, {
                    label: 'pdf',
                    value: 1
                }, {
                    label: '页面报告',
                    value: 2
                }, {
                    label: '邮件',
                    value: 3
                }]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>