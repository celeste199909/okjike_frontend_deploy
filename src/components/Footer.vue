<template>
    <div id="footer">
        <div>用户协议 | 隐私政策</div>
        <div>桂ICP备xxxxxxxxx号</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@keyframes slidein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#footer{
    color: rgb(153, 153, 153);;
    height: 200px;
    /* background-color: white; */
    margin: 10px 10px 10px 0;
    padding: 20px;
    border-radius: 5px;
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
    animation: slidein 2s ;

}
@media screen and (max-width: 768px){
  #footer{
    display: none;
  }
}
</style>