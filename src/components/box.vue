<template>
  <div
  class=" flex flex-col w-auto  m-4  h-[68px] rounded-[15px] bg-noir "
  style="box-shadow: 0px 4px 4px 0 rgba(0,0,0,0.25);"
>
    <p class="text-center text-3xl mt-2 text-white font-bold">
      {{nbr}}
     </p>
     <p class="text-Beige-150 font-bold text-xs text-center">
    {{texte}}
    </p>
</div>

</template>

<script>
export default {
  name: 'BoxVue',
  props:{
    nbr: 
    {type: Number},
  texte: 
    {type: String}
  }
}
</script>